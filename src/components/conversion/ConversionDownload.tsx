
import { CheckCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConversionDownloadProps {
  isComplete: boolean;
  toFormat: string;
  onDownload: () => void;
  onReset: () => void;
}

const ConversionDownload = ({ isComplete, toFormat, onDownload, onReset }: ConversionDownloadProps) => {
  if (!isComplete) return null;

  return (
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
          onClick={onDownload}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3"
          size="lg"
        >
          <Download className="w-5 h-5 mr-2" />
          Download {toFormat} file
        </Button>
        <Button
          onClick={onReset}
          variant="outline"
          className="w-full"
        >
          Convert another file
        </Button>
      </div>
    </div>
  );
};

export default ConversionDownload;
