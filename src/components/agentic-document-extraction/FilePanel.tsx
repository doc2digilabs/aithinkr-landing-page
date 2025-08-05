import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, File as FileIcon, X, ChevronsLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import FileUpload from './FileUpload';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FilePanelProps {
  onFileSelect: (file: File | null) => void;
  uploadedFiles: File[];
  activeFile: File | null;
  setActiveFile: (file: File | null) => void;
  removeFile: (file: File) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const ExampleFilesList = ({ isCollapsed }: { isCollapsed: boolean }) => (
  <div className="space-y-1 text-sm">
    <div className="p-2 rounded-md hover:bg-muted cursor-pointer flex items-center gap-2">
      <FileIcon className="h-5 w-5" />
      {!isCollapsed && <span>Invoice-Example.pdf</span>}
    </div>
  </div>
);

const YourFilesList = ({ 
  files, 
  activeFile,
  setActiveFile,
  removeFile,
  isCollapsed
}: { 
  files: File[], 
  activeFile: File | null,
  setActiveFile: (file: File) => void,
  removeFile: (file: File) => void,
  isCollapsed: boolean
}) => (
  <div className="text-sm text-muted-foreground p-1 space-y-1">
    {files.length === 0 && !isCollapsed && "Your files will appear here."}
    {files.map((file, index) => (
      <TooltipProvider key={index} delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div 
              onClick={() => setActiveFile(file)}
              className={cn(
                "flex items-center justify-between text-sm p-2 rounded-md cursor-pointer",
                activeFile === file ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                isCollapsed && "justify-center"
              )}
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <FileIcon className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span className="truncate">{file.name}</span>}
              </div>
              {!isCollapsed && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={(e) => { e.stopPropagation(); removeFile(file); }} 
                  className="h-6 w-6 hover:bg-destructive/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </TooltipTrigger>
          {isCollapsed && <TooltipContent side="right">{file.name}</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    ))}
  </div>
);


const FilePanel: React.FC<FilePanelProps> = ({ 
  onFileSelect, 
  uploadedFiles,
  activeFile,
  setActiveFile,
  removeFile,
  isCollapsed,
  onToggleCollapse
}) => {
  return (
    <FileUpload onFileSelect={onFileSelect}>
      {({ open, getRootProps, getInputProps }) => (
        <div {...getRootProps()} className={cn("h-full flex flex-col p-2 bg-white border-r", isCollapsed && "items-center")}>
          <input {...getInputProps()} />
          
          <div className={cn("w-full", isCollapsed ? "flex flex-col items-center" : "")}>
            <div className={cn("flex items-center w-full", isCollapsed ? "justify-center" : "justify-between")}>
              {!isCollapsed && <h2 className="text-lg font-semibold">Files</h2>}
              <Button onClick={onToggleCollapse} variant="ghost" size="icon">
                <ChevronsLeft className={cn("h-5 w-5", isCollapsed && "rotate-180")} />
              </Button>
            </div>
            
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className={cn("w-full mt-3", isCollapsed && "w-auto")} onClick={open} size={isCollapsed ? "icon" : "default"}>
                    <Upload className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                    {!isCollapsed && "Upload"}
                  </Button>
                </TooltipTrigger>
                {isCollapsed && <TooltipContent side="right">Upload File</TooltipContent>}
              </Tooltip>
            </TooltipProvider>

            {!isCollapsed && <p className="text-xs text-muted-foreground text-center mt-1">JPG, PNG, PDF</p>}

            <Accordion type="multiple" defaultValue={['item-1', 'item-2']} className={cn("w-full mt-4", isCollapsed && "hidden")}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm">Example Files</AccordionTrigger>
                <AccordionContent>
                  <ExampleFilesList isCollapsed={isCollapsed} />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm">Your Files</AccordionTrigger>
                <AccordionContent>
                  <YourFilesList 
                    files={uploadedFiles} 
                    activeFile={activeFile}
                    setActiveFile={setActiveFile}
                    removeFile={removeFile}
                    isCollapsed={isCollapsed}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      )}
    </FileUpload>
  );
};

export default FilePanel;