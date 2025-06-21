
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import FileUpload from './FileUpload';

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
  const [conversionError, setConversionError] = useState<string | null>(null);
  const { toast } = useToast();

  const getAcceptedFormats = () => {
    switch (tool.fromFormat.toLowerCase()) {
      case 'pdf':
        return ['pdf'];
      case 'docx':
        return ['docx', 'doc'];
      case 'jpg':
        return ['jpg', 'jpeg'];
      case 'png':
        return ['png'];
      default:
        return ['pdf', 'docx', 'doc', 'jpg', 'jpeg', 'png'];
    }
  };

  const simulateConversion = async () => {
    if (!selectedFile) return;

    setIsConverting(true);
    setConversionProgress(0);
    setConversionError(null);

    try {
      // Simulate conversion progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setConversionProgress(i);
      }

      setConversionComplete(true);
      toast({
        title: "Conversion completed!",
        description: `Your ${tool.fromFormat} file has been converted to ${tool.toFormat}`,
      });
    } catch (error) {
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
    // In a real application, this would download the converted file
    const link = document.createElement('a');
    link.href = '#';
    link.download = `converted_${selectedFile?.name?.replace(/\.[^/.]+$/, '')}.${tool.toFormat.toLowerCase()}`;
    link.click();
    
    toast({
      title: "Download started",
      description: "Your converted file is being downloaded",
    });
  };

  const resetConversion = () => {
    setSelectedFile(null);
    setIsConverting(false);
    setConversionProgress(0);
    setConversionComplete(false);
    setConversionError(null);
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
              {/* Step 1: File Upload */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                  Select your {tool.fromFormat} file
                </h3>
                <FileUpload
                  acceptedFormats={getAcceptedFormats()}
                  onFileSelect={setSelectedFile}
                  maxSize={50}
                />
              </div>

              {/* Step 2: Convert */}
              {selectedFile && !conversionComplete && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                    Convert your file
                  </h3>
                  
                  {!isConverting ? (
                    <Button
                      onClick={simulateConversion}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                      size="lg"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Convert to {tool.toFormat}
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-2 text-blue-600">
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Converting your file...</span>
                      </div>
                      <Progress value={conversionProgress} className="w-full" />
                      <p className="text-center text-sm text-gray-500">
                        {conversionProgress}% complete
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Download */}
              {conversionComplete && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3">
                      <CheckCircle className="w-4 h-4" />
                    </span>
                    Download your converted file
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg border border-green-200">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                      <span className="text-green-800 font-medium">
                        Conversion completed successfully!
                      </span>
                    </div>
                    <Button
                      onClick={handleDownload}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3"
                      size="lg"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download {tool.toFormat} file
                    </Button>
                    <Button
                      onClick={resetConversion}
                      variant="outline"
                      className="w-full"
                    >
                      Convert another file
                    </Button>
                  </div>
                </div>
              )}

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
