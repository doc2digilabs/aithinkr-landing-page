import React, { useState, useRef } from 'react';
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
import { log } from 'console';

const AIDocumentExtractionPage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [activeFile, setActiveFile] = useState<File | null>(null);
  
  // State for the extraction process
  const [extractedData, setExtractedData] = useState<any | null>(null);
  const [extractionError, setExtractionError] = useState<string | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);

  const isMobile = useIsMobile();

  const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState(false);
  const [isRightPanelCollapsed, setIsRightPanelCollapsed] = useState(false);
  
  const leftPanelRef = useRef<React.ElementRef<typeof ResizablePanel>>(null);
  const rightPanelRef = useRef<React.ElementRef<typeof ResizablePanel>>(null);

  const handleFileSelect = (file: File | null) => {
    if (file) {
      // Prevent adding the same file multiple times
      if (!uploadedFiles.some(f => f.name === file.name && f.size === file.size)) {
        setUploadedFiles(prevFiles => [...prevFiles, file]);
      }
      setActiveFile(file);
      setExtractedData(null);
      setExtractionError(null);
    }
  };

  const handleRemoveFile = (fileToRemove: File) => {
    setUploadedFiles(prevFiles => prevFiles.filter(f => f !== fileToRemove));
    if (activeFile === fileToRemove) {
      setActiveFile(null);
      setExtractedData(null);
      setExtractionError(null);
    }
  };

  const handleExtract = async () => {
    if (!activeFile) return;

    setIsExtracting(true);
    setExtractionError(null);
    setExtractedData(null);

    try {
      // Step 1: Upload the file
      console.log("Step 1: Uploading file to Supabase Storage...");
      const fileName = `${Date.now()}_${activeFile.name}`;
      const storageBucketNamePath = `uploads/${fileName}`;
      const storageBucketName = `aithinkr-upload`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(storageBucketName)
        .upload(storageBucketNamePath, activeFile, { cacheControl: '3600', upsert: true });

      if (uploadError) {
        console.error("UPLOAD FAILED:", uploadError);
        throw new Error(`Failed to upload file: ${uploadError.message}`);
      }
      
      console.log("Step 1 complete. File uploaded successfully.", uploadData);

     // Step 2: Invoke the extraction function
      console.log("Step 2: Invoking Supabase Edge Function 'extract-document'...");
      const { data: extractionData, error: extractionError } = await supabase.functions.invoke('gemini-prompt', {
        body: { filePath: uploadData.path },
      });

      if (extractionError) {
        console.error("EXTRACTION FAILED:", extractionError);
        throw new Error(`Extraction function failed: ${extractionError.message}`);
      }

      console.log("Step 2 complete. Extraction successful.", extractionData);
      // Need to remove ```json from the response
      setExtractedData(extractionData);
      // if (typeof extractionData === 'string') {
      //   const cleanedData = extractionData.replace(/```json/g, '').replace(/```/g, '');
      //   try {
      //     setExtractedData(JSON.parse(cleanedData).text);
      //   } catch (parseError) {
      //     console.error("Failed to parse extraction data:", parseError);
      //     setExtractionError(parseError.message)
      //    // throw new Error(`Failed to parse extraction data: ${parseError.message}`);

      //   }
      // } else {
      //   const cleanedData = extractionData.replace(/```json/g, '').replace(/```/g, '');
      //   setExtractedData(JSON.parse(cleanedData).text);
      // }
    } catch (error: any) {
      console.error("An error occurred in the handleExtract process:", error);
      const errorMessage = error.message || 'An unknown error occurred.';
      setExtractionError(errorMessage);
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

  if (isMobile) {
    // Mobile view needs to be simplified as it doesn't have panels
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-4 space-y-4">
          <FilePanel 
            onFileSelect={handleFileSelect}
            uploadedFiles={uploadedFiles}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
            removeFile={handleRemoveFile}
            isCollapsed={false}
            onToggleCollapse={() => {}}
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
              uploadedFiles={uploadedFiles}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
              removeFile={handleRemoveFile}
              isCollapsed={isLeftPanelCollapsed}
              onToggleCollapse={onToggleLeftPanel}
            />
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          <ResizablePanel defaultSize={45}>
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
      <CopyrightNotice />
    </div>
  );
};

export default AIDocumentExtractionPage;