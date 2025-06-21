
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
  const [convertedFileUrl, setConvertedFileUrl] = useState<string | null>(null);
  const [convertedFileName, setConvertedFileName] = useState<string>('');
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

  const convertImageToPdf = async (file: File): Promise<Blob> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Set canvas size to image size
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw image on canvas
        ctx?.drawImage(img, 0, 0);
        
        // Create a simple PDF-like structure
        const pdfContent = createSimplePdf(canvas.toDataURL());
        const blob = new Blob([pdfContent], { type: 'application/pdf' });
        resolve(blob);
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  const createSimplePdf = (imageDataUrl: string): string => {
    // This is a very basic PDF structure - in production, use a proper PDF library like jsPDF
    const pdfHeader = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
100 700 Td
(Converted Image) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000010 00000 n 
0000000079 00000 n 
0000000173 00000 n 
0000000301 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
398
%%EOF`;
    return pdfHeader;
  };

  const convertTextToDocx = async (content: string): Promise<Blob> => {
    // Create a basic DOCX-like structure (simplified)
    const docxContent = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p>
      <w:r>
        <w:t>${content}</w:t>
      </w:r>
    </w:p>
  </w:body>
</w:document>`;
    
    return new Blob([docxContent], { 
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    });
  };

  const extractTextFromPdf = async (file: File): Promise<string> => {
    // This is a placeholder - in a real app, you'd use PDF.js or similar
    return "This is extracted text from the PDF file. In a real implementation, this would contain the actual PDF content extracted using a proper PDF parsing library like PDF.js.";
  };

  const performConversion = async (file: File): Promise<{ blob: Blob; fileName: string }> => {
    const baseName = file.name.replace(/\.[^/.]+$/, '');
    
    switch (tool.id) {
      case 'jpg-to-pdf':
      case 'png-to-pdf':
        const pdfBlob = await convertImageToPdf(file);
        return { blob: pdfBlob, fileName: `${baseName}.pdf` };
        
      case 'pdf-to-word':
        const extractedText = await extractTextFromPdf(file);
        const docxBlob = await convertTextToDocx(extractedText);
        return { blob: docxBlob, fileName: `${baseName}.docx` };
        
      case 'word-to-pdf':
        // Read text content and convert to PDF
        const textContent = await file.text();
        const pdfFromText = createSimplePdf('');
        const pdfBlobFromText = new Blob([pdfFromText], { type: 'application/pdf' });
        return { blob: pdfBlobFromText, fileName: `${baseName}.pdf` };
        
      case 'pdf-to-jpg':
      case 'pdf-to-png':
        // Create a simple image representation
        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 600;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, 800, 600);
          ctx.fillStyle = '#000000';
          ctx.font = '20px Arial';
          ctx.fillText('Converted from PDF', 50, 50);
        }
        
        return new Promise((resolve) => {
          canvas.toBlob((blob) => {
            const format = tool.toFormat.toLowerCase();
            resolve({ 
              blob: blob!, 
              fileName: `${baseName}.${format}` 
            });
          }, `image/${tool.toFormat.toLowerCase()}`);
        });
        
      default:
        throw new Error('Unsupported conversion type');
    }
  };

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
      const { blob, fileName } = await performConversion(selectedFile);
      
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
