import React, { useState, useRef } from 'react';
import Header from "@/components/products/Header";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Image as ImageIcon, MessageSquare } from 'lucide-react';
import FilePanel from './FilePanel';
import DocumentPanel from './DocumentPanel';
import ResultPanel from './ResultPanel';
import { useIsMobile } from '@/hooks/use-mobile';

const AIDocumentExtractionPage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [activeFile, setActiveFile] = useState<File | null>(null);
  const [extractedData, setExtractedData] = useState<any | null>(null);
  const [extractionError, setExtractionError] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState(false);
  const [isRightPanelCollapsed, setIsRightPanelCollapsed] = useState(false);
  
  const leftPanelRef = useRef<React.ElementRef<typeof ResizablePanel>>(null);
  const rightPanelRef = useRef<React.ElementRef<typeof ResizablePanel>>(null);

  const handleExtractionComplete = (data: any) => {
    setExtractedData(data);
    setExtractionError(null);
  };

  const handleExtractionError = (error: string) => {
    setExtractionError(error);
    setExtractedData(null);
  };

  const handleFileSelect = (file: File | null) => {
    if (file) {
      setUploadedFiles(prevFiles => [...prevFiles, file]);
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

  const onToggleLeftPanel = () => {
    const panel = leftPanelRef.current;
    if (panel) {
      panel.isCollapsed() ? panel.expand() : panel.collapse();
    }
  };

  const onToggleRightPanel = () => {
    const panel = rightPanelRef.current;
    if (panel) {
      panel.isCollapsed() ? panel.expand() : panel.collapse();
    }
  };

  const CopyrightNotice = () => (
    <footer className="text-center py-4 text-xs text-muted-foreground">
      &copy; {new Date().getFullYear()} AIThinkr. All Rights Reserved.
    </footer>
  );

  if (isMobile) {
    // Mobile view with page scroll
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-4 space-y-4">
          <FilePanel 
            onFileSelect={handleFileSelect}
            onExtractionComplete={handleExtractionComplete}
            onExtractionError={handleExtractionError}
            uploadedFiles={uploadedFiles}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
            removeFile={handleRemoveFile}
            isCollapsed={false}
            onToggleCollapse={() => {}}
          />
          {activeFile && <DocumentPanel file={activeFile} />}
          {extractedData && <ResultPanel data={extractedData} error={extractionError} isCollapsed={false} onToggleCollapse={() => {}} />}
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
            className={isLeftPanelCollapsed ? "min-w-[48px] transition-all duration-300 ease-in-out" : ""}
          >
            <FilePanel 
              onFileSelect={handleFileSelect}
              onExtractionComplete={handleExtractionComplete}
              onExtractionError={handleExtractionError}
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
            className={isRightPanelCollapsed ? "min-w-[48px] transition-all duration-300 ease-in-out" : ""}
          >
            <ResultPanel 
              data={extractedData} 
              error={extractionError} 
              isCollapsed={isRightPanelCollapsed}
              onToggleCollapse={onToggleRightPanel}
            />
          </ResizablePanel>

        </ResizablePanelGroup>
      </main>
      <CopyrightNotice />
    </div>
  );
};

export default AIDocumentExtractionPage;
