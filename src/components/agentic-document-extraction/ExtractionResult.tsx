import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ExtractionResultProps {
  data: any | null;
  error: string | null;
}

const ExtractionResult: React.FC<ExtractionResultProps> = ({ data, error }) => {
  const [editableData, setEditableData] = useState('');

  useEffect(() => {
    if (data) {
      setEditableData(JSON.stringify(data, null, 2));
    }
  }, [data]);

  const getConfidenceBadge = (score: number) => {
    if (score > 0.9) {
      return <Badge className="bg-green-500 hover:bg-green-600">High</Badge>;
    } else if (score > 0.7) {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">Medium</Badge>;
    } else {
      return <Badge variant="destructive">Low</Badge>;
    }
  };

  const handleSave = () => {
    // Here you would typically save the corrected data
    console.log('Corrected data saved:', JSON.parse(editableData));
  };

  return (
    <Card className="shadow-lg h-full">
      <CardHeader className="p-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm">Extracted Information</CardTitle>
          </div>
          {data && data.confidenceScore && data.confidenceScore <= 0.9 && (
             <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="text-xs h-7">Review</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>Review and Correct</DialogTitle>
                  <DialogDescription>
                    The confidence score is low. Please review the extracted data and make any necessary corrections.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="json-data">Extracted JSON</Label>
                    <Textarea
                      id="json-data"
                      value={editableData}
                      onChange={(e) => setEditableData(e.target.value)}
                      rows={15}
                      className="font-mono text-xs"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" onClick={handleSave}>Save changes</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-2">
        {error ? (
          <Alert variant="destructive" className="p-2 text-xs">
            <AlertTitle className="text-sm">Extraction Failed</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : data ? (
          <div>
            {data.confidenceScore && (
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-xs">Confidence Score:</span>
                {getConfidenceBadge(data.confidenceScore)}
              </div>
            )}
            <pre className="bg-gray-100 rounded-md p-2 text-xs overflow-auto h-[65vh]">
              {editableData}
            </pre>
          </div>
        ) : (
          <div className="bg-gray-100 rounded-lg p-4 min-h-[400px] flex items-center justify-center">
            <p className="text-gray-500">Waiting for document...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExtractionResult;