
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FileUpload from '../FileUpload';

interface ConversionStepsProps {
  selectedFile: File | null;
  onFileSelect: (file: File) => void;
  acceptedFormats: string[];
  fromFormat: string;
  toFormat: string;
  onConvert: () => void;
  isConverting: boolean;
}

const ConversionSteps = ({
  selectedFile,
  onFileSelect,
  acceptedFormats,
  fromFormat,
  toFormat,
  onConvert,
  isConverting
}: ConversionStepsProps) => {
  return (
    <div className="space-y-6">
      {/* Step 1: File Upload */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
          Select your {fromFormat} file
        </h3>
        <FileUpload
          acceptedFormats={acceptedFormats}
          onFileSelect={onFileSelect}
          maxSize={50}
        />
      </div>

      {/* Step 2: Convert */}
      {selectedFile && !isConverting && (
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
            Convert your file
          </h3>
          <Button
            onClick={onConvert}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
            size="lg"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Convert to {toFormat}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ConversionSteps;
