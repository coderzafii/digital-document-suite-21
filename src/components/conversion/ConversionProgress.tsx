
import { RefreshCw } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ConversionProgressProps {
  isConverting: boolean;
  progress: number;
}

const ConversionProgress = ({ isConverting, progress }: ConversionProgressProps) => {
  if (!isConverting) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
        Convert your file
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2 text-blue-600">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span>Converting your file...</span>
        </div>
        <Progress value={progress} className="w-full" />
        <p className="text-center text-sm text-gray-500">
          {progress}% complete
        </p>
      </div>
    </div>
  );
};

export default ConversionProgress;
