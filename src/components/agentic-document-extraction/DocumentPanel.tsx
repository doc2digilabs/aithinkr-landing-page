import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DocumentPanelProps {
  file: File | null;
}

const DocumentPanel: React.FC<DocumentPanelProps> = ({ file }) => {
  const fileURL = file ? URL.createObjectURL(file) : null;

  return (
    <div className="h-full flex flex-col p-2">
      <div className="flex justify-end items-center mb-2 flex-shrink-0">
        <div className="flex items-center border rounded-md p-1">
          
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm mx-2">1 / 1</span>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Card className="flex-grow shadow-inner border overflow-hidden">
        <CardContent className="p-2 h-full">
          {fileURL ? (
            file.type === 'application/pdf' ? (
              <iframe src={fileURL} className="w-full h-full" title="Document Preview" />
            ) : (
              <div className="w-full h-full overflow-auto">
                <img src={fileURL} alt="Document Preview" className="w-full h-auto rounded-sm" />
              </div>
            )
          ) : (
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
