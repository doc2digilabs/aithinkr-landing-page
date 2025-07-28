import React, { useCallback, useState, ReactNode } from 'react';
import { useDropzone, DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';
import { supabase } from '@/lib/supabaseClient';

interface FileUploadRenderProps {
  file: File | null;
  uploading: boolean;
  isDone: boolean;
  error: string | null;
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
  open: () => void;
  removeFile: () => void;
  handleUploadAndExtract: () => void;
}

interface FileUploadProps {
  onExtractionComplete: (data: any) => void;
  onExtractionError: (error: string) => void;
  onFileSelect: (file: File | null) => void;
  children: (props: FileUploadRenderProps) => ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onExtractionComplete, 
  onExtractionError, 
  onFileSelect,
  children 
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDone, setIsDone] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      onFileSelect(selectedFile);
      setError(null);
      setIsDone(false);
      onExtractionComplete(null);
    }
  }, [onExtractionComplete, onFileSelect]);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    multiple: false,
    noClick: true,
    noKeyboard: true,
  });

  const removeFile = () => {
    setFile(null);
    onFileSelect(null);
    onExtractionComplete(null);
    setIsDone(false);
  };

  const handleUploadAndExtract = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);
    setIsDone(false);
    onExtractionError('');

    try {
      const fileName = `${Date.now()}_${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('document_extractions')
        .upload(fileName, file, { cacheControl: '3600', upsert: false });

      if (uploadError) throw uploadError;

      const { data: extractionData, error: extractionError } = await supabase.functions.invoke('extract-document', {
        body: { filePath: uploadData.path },
      });

      if (extractionError) throw extractionError;

      onExtractionComplete(extractionData);
      setIsDone(true);

    } catch (error: any) {
      const errorMessage = error.message || 'An unknown error occurred.';
      setError(errorMessage);
      onExtractionError(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      {children({ 
        file, 
        uploading, 
        isDone, 
        error, 
        getRootProps, 
        getInputProps, 
        open, 
        removeFile, 
        handleUploadAndExtract 
      })}
    </>
  );
};

export default FileUpload;