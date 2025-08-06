import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, File as FileIcon, X, ChevronsLeft, Database } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import FileUpload from './FileUpload';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FileObject } from '@supabase/storage-js';

type AppFile = File | FileObject;

interface FilePanelProps {
  onFileSelect: (file: AppFile | null) => void;
  onFileUpload: (file: File) => void;
  uploadedFiles: AppFile[];
  activeFile: AppFile | null;
  setActiveFile: (file: AppFile | null) => void;
  removeFile: (file: AppFile) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  disabled?: boolean;
}

const YourFilesList = ({ 
  files, 
  activeFile,
  setActiveFile,
  removeFile,
  isCollapsed
}: { 
  files: AppFile[], 
  activeFile: AppFile | null,
  setActiveFile: (file: AppFile) => void,
  removeFile: (file: AppFile) => void,
  isCollapsed: boolean
}) => {
  const getFileName = (file: AppFile) => (file instanceof File ? file.name : file.name.split('/').pop()) || 'unknown';
  
  const isFileActive = (file: AppFile) => {
    if (!activeFile) return false;
    if (file instanceof File && activeFile instanceof File) {
      return file.name === activeFile.name && file.size === activeFile.size;
    }
    if (!(file instanceof File) && !(activeFile instanceof File)) {
      return file.id === activeFile.id;
    }
    return false;
  };

  return (
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
                  isFileActive(file) ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                  isCollapsed && "justify-center"
                )}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  {file instanceof File ? <FileIcon className="h-5 w-5 flex-shrink-0" /> : <Database className="h-5 w-5 flex-shrink-0" />}
                  {!isCollapsed && <span className="truncate">{getFileName(file)}</span>}
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
            {isCollapsed && <TooltipContent side="right">{getFileName(file)}</TooltipContent>}
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};


const FilePanel: React.FC<FilePanelProps> = ({ 
  onFileSelect,
  onFileUpload,
  uploadedFiles,
  activeFile,
  setActiveFile,
  removeFile,
  isCollapsed,
  onToggleCollapse,
  disabled = false
}) => {
  return (
    <FileUpload onFileSelect={onFileUpload} disabled={disabled}>
      {({ open, getRootProps, getInputProps }) => (
        <div {...getRootProps({onClick: e => e.preventDefault()})} className={cn("h-full flex flex-col p-2 bg-white border-r", isCollapsed && "items-center", disabled && "opacity-50 cursor-not-allowed")}>
          <input {...getInputProps()} disabled={disabled} />
          
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
                  <Button className={cn("w-full mt-3", isCollapsed && "w-auto")} onClick={open} size={isCollapsed ? "icon" : "default"} disabled={disabled}>
                    <Upload className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                    {!isCollapsed && "Upload"}
                  </Button>
                </TooltipTrigger>
                {isCollapsed && <TooltipContent side="right">Upload File</TooltipContent>}
              </Tooltip>
            </TooltipProvider>

            {!isCollapsed && <p className="text-xs text-muted-foreground text-center mt-1">{disabled ? "Please log in to upload" : "JPG, PNG, PDF"}</p>}

            <Accordion type="single" collapsible defaultValue={'item-1'} className={cn("w-full mt-4", isCollapsed && "hidden")}>
              <AccordionItem value="item-1">
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