import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { FileObject } from '@supabase/storage-js';
import { supabase } from '@/lib/supabaseClient';

type AppFile = File | FileObject;

interface DocumentPanelProps {
  file: AppFile | null;
}

const DocumentPanel: React.FC<DocumentPanelProps> = ({ file }) => {
  const [fileURL, setFileURL] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFile = async () => {
      if (!file) {
        setFileURL(null);
        return;
      }

      setIsLoading(true);
      setError(null);
      setFileURL(null);

      try {
        if (file instanceof File) {
          // It's a local file, create a URL
          const url = URL.createObjectURL(file);
          setFileURL(url);
        } else {
          // It's a Supabase file, get a temporary signed URL
          const { data, error } = await supabase.storage
            .from('aithinkr-upload')
            .createSignedUrl(file.name, 60); // URL is valid for 60 seconds

          if (error) throw error;
          setFileURL(data.signedUrl);
        }
      } catch (err: any) {
        setError(`Failed to load file preview: ${err.message}`);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadFile();

    // Cleanup function to revoke object URL
    return () => {
      if (fileURL && file instanceof File) {
        URL.revokeObjectURL(fileURL);
      }
    };
  }, [file]);

  const getFileType = () => {
    if (!file) return '';
    if (file instanceof File) {
      return file.type;
    }
    // Infer from name for Supabase files
    if (file.name.toLowerCase().endsWith('.pdf')) return 'application/pdf';
    if (['.png', '.jpg', '.jpeg', '.gif'].some(ext => file.name.toLowerCase().endsWith(ext))) return 'image';
    return '';
  }

  const fileType = getFileType();

  return (
    <div className="h-full flex flex-col p-2">
      <div className="flex justify-end items-center mb-2 flex-shrink-0">
        <div className="flex items-center border rounded-md p-1">
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0" disabled>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm mx-2">1 / 1</span>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0" disabled>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Card className="flex-grow shadow-inner border overflow-hidden">
        <CardContent className="p-2 h-full">
          {isLoading && (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-md">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          )}
          {error && (
            <div className="w-full h-full flex items-center justify-center bg-red-50 rounded-md">
              <p className="text-red-600 text-sm p-4">{error}</p>
            </div>
          )}
          {!isLoading && !error && fileURL && (
            fileType === 'application/pdf' ? (
              <iframe src={fileURL} className="w-full h-full" title="Document Preview" />
            ) : (
              <div className="w-full h-full overflow-auto">
                <img src={fileURL} alt="Document Preview" className="w-full h-auto rounded-sm" />
              </div>
            )
          )}
          {!isLoading && !error && !fileURL && (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-md">
              <p className="text-muted-foreground">Document preview will appear here</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentPanel;
