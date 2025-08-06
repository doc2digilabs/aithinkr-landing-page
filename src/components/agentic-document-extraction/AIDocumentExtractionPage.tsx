import React, { useState, useRef, useEffect } from 'react';
import Header from "@/components/products/Header";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import FilePanel from './FilePanel';
import DocumentPanel from './DocumentPanel';
import ResultPanel from './ResultPanel';
import { useIsMobile } from '@/hooks/use-mobile';
import { supabase } from '@/lib/supabaseClient';
import { FileObject } from '@supabase/storage-js';
import { useAuth } from '@/hooks/useAuth';
import { ConfirmationDialog } from './ConfirmationDialog'; // Import the dialog

// Define a type that can be either a local File or a remote Supabase FileObject
type AppFile = File | FileObject;

const AIDocumentExtractionPage: React.FC = () => {
  const { user } = useAuth();
  const [localFiles, setLocalFiles] = useState<File[]>([]);
  const [supabaseFiles, setSupabaseFiles] = useState<FileObject[]>([]);
  const [activeFile, setActiveFile] = useState<AppFile | null>(null);
  
  const [extractedData, setExtractedData] = useState<any | null>(null);
  const [extractionError, setExtractionError] = useState<string | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);

  const isMobile = useIsMobile();

  const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState(false);
  const [isRightPanelCollapsed, setIsRightPanelCollapsed] = useState(false);
  
  const leftPanelRef = useRef<React.ElementRef<typeof ResizablePanel>>(null);
  const rightPanelRef = useRef<React.ElementRef<typeof ResizablePanel>>(null);

  const [fileToDelete, setFileToDelete] = useState<AppFile | null>(null);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const storageBucketName = 'aithinkr-upload';

  useEffect(() => {
    if (!user) return;

    const fetchFiles = async () => {
      const userFolderPath = `uploads/${user.id}`;
      const { data, error } = await supabase.storage.from(storageBucketName).list(userFolderPath, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' },
      });
      if (error) {
        if (error.message.includes('not found')) {
          setSupabaseFiles([]);
        } else {
          setExtractionError(`Failed to fetch files: ${error.message}`);
        }
      } else if (data) {
        const filesWithFullPath = data.map(file => ({...file, name: `${userFolderPath}/${file.name}`}))
        setSupabaseFiles(filesWithFullPath);
      }
    };
    fetchFiles();
  }, [user]);

  const handleUploadAndSelect = async (file: File) => {
    if (!user) {
      setExtractionError("You must be logged in to upload files.");
      return;
    }
    setActiveFile(file);
    setExtractedData(null);
    setExtractionError(null);
    try {
      const fileName = `uploads/${user.id}/${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(storageBucketName)
        .upload(fileName, file, { cacheControl: '3600', upsert: false });
      if (uploadError) throw new Error(`Failed to upload file: ${uploadError.message}`);
      const { data, error } = await supabase.storage.from(storageBucketName).list(`uploads/${user.id}`, { search: fileName.replace(`uploads/${user.id}/`, '') });
      if (error || !data || data.length === 0) throw new Error('Could not retrieve uploaded file from storage.');
      const newSupabaseFile = {...data[0], name: `uploads/${user.id}/${data[0].name}`};
      setSupabaseFiles(prev => [newSupabaseFile, ...prev]);
      setActiveFile(newSupabaseFile);
      setLocalFiles(prev => prev.filter(f => f.name !== file.name));
    } catch (error: any) {
      setExtractionError(error.message || 'An unknown error occurred during upload.');
      setActiveFile(null);
    }
  };

  const handleFileSelect = (file: AppFile | null) => {
    if (file) {
      setActiveFile(file);
      setExtractedData(null);
      setExtractionError(null);
    }
  };

  const handleDeleteRequest = (file: AppFile) => {
    setFileToDelete(file);
    setIsConfirmDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!fileToDelete) return;

    const fileName = fileToDelete instanceof File ? fileToDelete.name : fileToDelete.name;
    
    if (fileToDelete instanceof File) {
      setLocalFiles(prevFiles => prevFiles.filter(f => f !== fileToDelete));
    } else {
      setSupabaseFiles(prevFiles => prevFiles.filter(f => f.id !== fileToDelete.id));
      const { error } = await supabase.storage.from(storageBucketName).remove([fileName]);
      if (error) {
        setExtractionError(`Failed to delete file: ${error.message}`);
        // TODO: Add file back to list on error
      }
    }
    
    // Clear active file if it was the one deleted
    if (activeFile && ('name' in activeFile && 'size' in activeFile) && ('name' in fileToDelete && 'size' in fileToDelete) && activeFile.name === fileToDelete.name && activeFile.size === fileToDelete.size) {
      setActiveFile(null);
      setExtractedData(null);
      setExtractionError(null);
    } else if (activeFile && !('size' in activeFile) && !('size' in fileToDelete) && activeFile.id === fileToDelete.id) {
      setActiveFile(null);
      setExtractedData(null);
      setExtractionError(null);
    }

    setIsConfirmDialogOpen(false);
    setFileToDelete(null);
  };

  const handleExtract = async () => {
    if (!activeFile || activeFile instanceof File) {
      setExtractionError("Please select an uploaded file to extract.");
      return;
    }
    if (!user) {
      setExtractionError("You must be logged in to extract documents.");
      return;
    }
    setIsExtracting(true);
    setExtractionError(null);
    setExtractedData(null);
    try {
      const filePath = activeFile.name;

      // Check for cached result first
      const { data: cachedData, error: cacheError } = await supabase
        .from('document_extractions')
        .select('extracted_text')
        .eq('user_id', user.id)
        .eq('document_reference', filePath)
        .single();

      if (cachedData) {
        setExtractedData(JSON.parse(cachedData.extracted_text));
        return;
      }

      const { data: extractionData, error: extractionError } = await supabase.functions.invoke('gemini-prompt', {
        body: { filePath: filePath },
      });
      if (extractionError) throw new Error(`Extraction function failed: ${extractionError.message}`);
      
      // Save the new result to the cache
      if (extractionData) {
        await supabase
          .from('document_extractions')
          .insert({
            user_id: user.id,
            document_reference: filePath,
            extracted_text: JSON.stringify(extractionData),
          });
      }

      setExtractedData(extractionData);
    } catch (error: any) {
      setExtractionError(error.message || 'An unknown error occurred.');
    } finally {
      setIsExtracting(false);
    }
  };

  const onToggleLeftPanel = () => {
    const panel = leftPanelRef.current;
    if (panel) panel.isCollapsed() ? panel.expand() : panel.collapse();
  };

  const onToggleRightPanel = () => {
    const panel = rightPanelRef.current;
    if (panel) panel.isCollapsed() ? panel.expand() : panel.collapse();
  };

  const CopyrightNotice = () => (
    <footer className="text-center py-4 text-xs text-muted-foreground">
      &copy; {new Date().getFullYear()} AIThinkr. All Rights Reserved.
    </footer>
  );

  const combinedFiles = [...localFiles, ...supabaseFiles];

  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-4 space-y-4">
          <FilePanel 
            onFileSelect={handleFileSelect}
            onFileUpload={handleUploadAndSelect}
            uploadedFiles={combinedFiles}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
            removeFile={handleDeleteRequest}
            isCollapsed={false}
            onToggleCollapse={() => {}}
            disabled={!user}
          />
          {activeFile && <DocumentPanel file={activeFile} />}
          <ResultPanel 
            data={extractedData} 
            error={extractionError} 
            isCollapsed={false} 
            onToggleCollapse={() => {}}
            onExtract={handleExtract}
            isExtracting={isExtracting}
            activeFile={activeFile}
          />
        </main>
        <CopyrightNotice />
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <ResizablePanelGroup 
          direction="horizontal" 
          className="w-full h-full rounded-lg border"
        >
          <ResizablePanel 
            ref={leftPanelRef}
            defaultSize={20} 
            minSize={15} 
            maxSize={25}
            collapsible
            collapsedSize={3}
            onCollapse={() => setIsLeftPanelCollapsed(true)}
            onExpand={() => setIsLeftPanelCollapsed(false)}
            className={isLeftPanelCollapsed ? "min-w-[48px]" : ""}
          >
            <FilePanel 
              onFileSelect={handleFileSelect}
              onFileUpload={handleUploadAndSelect}
              uploadedFiles={combinedFiles}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
              removeFile={handleDeleteRequest}
              isCollapsed={isLeftPanelCollapsed}
              onToggleCollapse={onToggleLeftPanel}
              disabled={!user}
            />
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          <ResizablePanel>
            <DocumentPanel file={activeFile} />
          </ResizablePanel>
          
          <ResizableHandle withHandle />

          <ResizablePanel 
            ref={rightPanelRef}
            defaultSize={35}
            collapsible
            collapsedSize={3}
            onCollapse={() => setIsRightPanelCollapsed(true)}
            onExpand={() => setIsRightPanelCollapsed(false)}
            className={isRightPanelCollapsed ? "min-w-[48px]" : ""}
          >
            <ResultPanel 
              data={extractedData} 
              error={extractionError} 
              isCollapsed={isRightPanelCollapsed}
              onToggleCollapse={onToggleRightPanel}
              onExtract={handleExtract}
              isExtracting={isExtracting}
              activeFile={activeFile}
            />
          </ResizablePanel>

        </ResizablePanelGroup>
      </main>
      <ConfirmationDialog
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Are you sure?"
        description="This action cannot be undone. This will permanently delete the file from storage."
      />
      <CopyrightNotice />
    </div>
  );
};

export default AIDocumentExtractionPage;
