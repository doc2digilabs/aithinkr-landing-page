import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from '@/components/ui/badge';
import { Download, Copy, Share2, ChevronsRight, MessageSquare, Code, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

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
  activeFile
}) => {
  const jsonData = data ? JSON.stringify(data, null, 2) : '';
  const markdownData = data ? '## Extracted Data\n\n```json\n' + jsonData + '\n```' : '';

  return (
    <div className={cn("h-full flex flex-col p-2 bg-white", isCollapsed && "items-center")}>
      <div className={cn("w-full h-full flex flex-col", isCollapsed && "hidden")}>
        <div className="flex items-center justify-between mb-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Parse</Button>
            <Button
              variant="default"
              size="sm"
              onClick={onExtract}
              disabled={!activeFile || isExtracting}
            >
              {isExtracting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Badge className="mr-2 !bg-blue-500 text-white">New</Badge>
              )}
              Extract
            </Button>
            <Button variant="outline" size="sm">Chat</Button>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button onClick={onToggleCollapse} variant="ghost" size="icon">
              <ChevronsRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="markdown" className="flex-grow flex flex-col overflow-hidden">
          <TabsList className="flex-shrink-0">
            <TabsTrigger value="markdown">Markdown</TabsTrigger>
            <TabsTrigger value="json">JSON</TabsTrigger>
          </TabsList>
          <div className="flex items-center justify-end flex-shrink-0 -mt-9">
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
          </div>
          <div className="flex-grow mt-2 overflow-y-auto">
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