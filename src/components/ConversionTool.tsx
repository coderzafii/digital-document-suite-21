
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getAcceptedFormats, performConversion } from '@/utils/fileConversion';
import ConversionSteps from './conversion/ConversionSteps';
import ConversionProgress from './conversion/ConversionProgress';
import ConversionDownload from './conversion/ConversionDownload';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: any;
  fromFormat: string;
  toFormat: string;
  gradient: string;
}

interface ConversionToolProps {
  tool: Tool;
  onBack: () => void;
}

const ConversionTool = ({ tool, onBack }: ConversionToolProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [conversionComplete, setConversionComplete] = useState(false);
  const [convertedFileUrl, setConvertedFileUrl] = useState<string | null>(null);
  const [convertedFileName, setConvertedFileName] = useState<string>('');
  const [conversionError, setConversionError] = useState<string | null>(null);
  const { toast } = useToast();

  const simulateConversion = async () => {
    if (!selectedFile) return;

    setIsConverting(true);
    setConversionProgress(0);
    setConversionError(null);

    try {
      // Progress simulation
      for (let i = 0; i <= 50; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setConversionProgress(i);
      }

      // Perform actual conversion
      const { blob, fileName } = await performConversion(selectedFile, tool.id, tool.toFormat);
      
      // Create download URL
      const url = URL.createObjectURL(blob);
      setConvertedFileUrl(url);
      setConvertedFileName(fileName);

      // Complete progress
      for (let i = 60; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setConversionProgress(i);
      }

      setConversionComplete(true);
      toast({
        title: "Conversion completed!",
        description: `Your ${tool.fromFormat} file has been converted to ${tool.toFormat}`,
      });
    } catch (error) {
      console.error('Conversion error:', error);
      setConversionError("Conversion failed. Please try again.");
      toast({
        title: "Conversion failed",
        description: "There was an error converting your file. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (convertedFileUrl && convertedFileName) {
      const link = document.createElement('a');
      link.href = convertedFileUrl;
      link.download = convertedFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download started",
        description: "Your converted file is being downloaded",
      });
    }
  };

  const resetConversion = () => {
    setSelectedFile(null);
    setIsConverting(false);
    setConversionProgress(0);
    setConversionComplete(false);
    setConversionError(null);
    if (convertedFileUrl) {
      URL.revokeObjectURL(convertedFileUrl);
      setConvertedFileUrl(null);
    }
    setConvertedFileName('');
  };

  const IconComponent = tool.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mr-4 hover:bg-white/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Button>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Tool Header */}
          <div className="text-center mb-8">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center mx-auto mb-4`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{tool.title}</h1>
            <p className="text-lg text-gray-600">{tool.description}</p>
          </div>

          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center">
                Convert {tool.fromFormat} to {tool.toFormat}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ConversionSteps
                selectedFile={selectedFile}
                onFileSelect={setSelectedFile}
                acceptedFormats={getAcceptedFormats(tool.fromFormat)}
                fromFormat={tool.fromFormat}
                toFormat={tool.toFormat}
                onConvert={simulateConversion}
                isConverting={isConverting}
              />

              <ConversionProgress
                isConverting={isConverting}
                progress={conversionProgress}
              />

              <ConversionDownload
                isComplete={conversionComplete}
                toFormat={tool.toFormat}
                onDownload={handleDownload}
                onReset={resetConversion}
              />

              {/* Error State */}
              {conversionError && (
                <div className="flex items-center justify-center p-4 bg-red-50 rounded-lg border border-red-200">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                  <span className="text-red-800">{conversionError}</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConversionTool;
