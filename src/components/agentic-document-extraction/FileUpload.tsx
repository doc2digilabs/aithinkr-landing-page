import React, { useCallback, ReactNode } from 'react';
import { useDropzone, DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';

interface FileUploadRenderProps {
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
  open: () => void;
}

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  children: (props: FileUploadRenderProps) => ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onFileSelect,
  children 
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

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

  return (
    <>
      {children({ 
        getRootProps, 
        getInputProps, 
        open, 
      })}
    </>
  );
};

export default FileUpload;
