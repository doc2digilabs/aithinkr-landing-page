import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from '@/components/ui/badge';
import { Download, Copy, Share2, ChevronsRight, MessageSquare, Code, Loader2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { ChatPanelContent } from './ChatPanel';

interface ResultPanelProps {
  data: any | null;
  error: string | null;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onExtract: () => void;
  isExtracting: boolean;
  activeFile: File | null;
}

const ResultPanel: React.FC<ResultPanelProps> = ({
  data,
  error,
  isCollapsed,
  onToggleCollapse,
  onExtract,
  isExtracting,
  activeFile,
}) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('text');
  const [isCopied, setIsCopied] = useState(false);
  const [isChatting, setIsChatting] = useState(false);

  // Attempt to parse the data if it's a string, otherwise use it as is.
  let parsedData: any;
  let rawTextData: string;

  if (typeof data === 'string') {
    rawTextData = data;
    try {
      // Clean up potential markdown code fences
      const cleanedData = data.replace(/^```json\s*|```\s*$/g, '');
      parsedData = JSON.parse(cleanedData);
    } catch (e) {
      // Not a JSON string, so it's just plain text.
      parsedData = rawTextData;
    }
  } else {
    // Data is already an object (or null)
    parsedData = data;
    rawTextData = data ? JSON.stringify(data, null, 2) : '';
  }

  const jsonData = parsedData && typeof parsedData === 'object' ? JSON.stringify(parsedData, null, 2) : '';
  const markdownData = jsonData ? '## Extracted Data\n\n```json\n' + jsonData + '\n```\n' : '';

  const handleCopy = () => {
    let contentToCopy = '';
    switch (activeTab) {
      case 'json':
        contentToCopy = jsonData;
        break;
      case 'markdown':
        contentToCopy = markdownData;
        break;
      case 'text':
      default:
        contentToCopy = rawTextData;
        break;
    }

    if (contentToCopy) {
      navigator.clipboard.writeText(contentToCopy).then(() => {
        toast({ title: 'Copied to clipboard!' });
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Revert icon after 2 seconds
      }).catch(err => {
        toast({ title: 'Failed to copy', description: err.message, variant: 'destructive' });
      });
    }
  };

  const handleDownload = () => {
    let content = '';
    let fileExtension = 'txt';
    let mimeType = 'text/plain';

    switch (activeTab) {
      case 'json':
        content = jsonData;
        fileExtension = 'json';
        mimeType = 'application/json';
        break;
      case 'markdown':
        content = markdownData;
        fileExtension = 'md';
        mimeType = 'text/markdown';
        break;
      case 'text':
      default:
        content = rawTextData;
        break;
    }

    if (content) {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `extracted-data.${fileExtension}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast({ title: 'Download started!' });
    } else {
      toast({ title: 'No content to download.', variant: 'destructive' });
    }
  };

  const handleShare = async () => {
    let contentToShare = '';
    switch (activeTab) {
      case 'json':
        contentToShare = jsonData;
        break;
      case 'markdown':
        contentToShare = markdownData;
        break;
      case 'text':
      default:
        contentToShare = rawTextData;
        break;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Extracted Data',
          text: contentToShare,
        });
        toast({ title: 'Shared successfully!' });
      } catch (error) {
        toast({ title: 'Share failed', description: (error as Error).message, variant: 'destructive' });
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      handleCopy();
      toast({ title: 'Share not supported', description: 'Content copied to clipboard instead.' });
    }
  };

  if (isChatting) {
    return <ChatPanelContent onBack={() => setIsChatting(false)} documentContext={parsedData} />;
  }

  return (
    <div className={cn("h-full flex flex-col p-2 bg-white", isCollapsed && "items-center")}>
      <div className={cn("w-full h-full flex flex-col", isCollapsed && "hidden")}>
        <div className="flex items-center justify-between mb-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="sm"
              onClick={onExtract}
              disabled={!activeFile || isExtracting}
            >
              {isExtracting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : ("Text Extract")}
            </Button>
            <Button variant="outline" onClick={() => setIsChatting(true)} disabled={!data} size="sm">Chat</Button>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
            <Button onClick={onToggleCollapse} variant="ghost" size="icon">
              <ChevronsRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="text" className="flex-grow flex flex-col overflow-hidden">
          <TabsList className="flex-shrink-0">
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="markdown" disabled={!jsonData}>Markdown</TabsTrigger>
            <TabsTrigger value="json" disabled={!jsonData}>JSON</TabsTrigger>
          </TabsList>
          <div className="flex items-center justify-end flex-shrink-0 -mt-9">
              <Button variant="ghost" size="icon" onClick={handleDownload}>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleCopy}>
                {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
          </div>
          <div className="flex-grow mt-2 overflow-y-auto">
            <TabsContent value="text">
              <Card className="shadow-inner border">
                <CardContent className="p-4 text-sm">
                  <pre className="preserve-whitespace">{rawTextData || "Results will appear here..."}</pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="markdown">
              <Card className="shadow-inner border">
                <CardContent className="p-4 text-sm">
                  <pre className="whitespace-pre-wrap">{markdownData || "Results will appear here..."}</pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="json">
              <Card className="shadow-inner border">
                <CardContent className="p-4 text-sm">
                  <pre className="whitespace-pre-wrap">{jsonData || "Results will appear here..."}</pre>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>

        {error && <div className="text-red-500 text-sm mt-2 flex-shrink-0">{error}</div>}
      </div>

      <div className={cn("h-full flex flex-col items-center", !isCollapsed && "hidden")}>
         <Button onClick={onToggleCollapse} variant="ghost" size="icon">
            <ChevronsRight className="h-5 w-5 rotate-180" />
          </Button>
        <TooltipProvider delayDuration={0}>
          <div className="flex flex-col gap-4 mt-4">
            <Tooltip>
              <TooltipTrigger asChild><Button variant="outline" size="icon"><MessageSquare className="h-4 w-4"/></Button></TooltipTrigger>
              <TooltipContent side="left">Markdown</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild><Button variant="outline" size="icon"><Code className="h-4 w-4"/></Button></TooltipTrigger>
              <TooltipContent side="left">JSON</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ResultPanel;
