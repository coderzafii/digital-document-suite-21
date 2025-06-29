
import { Upload, Settings, Download } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How Our Free Online Tools Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No learning curve. Just three simple steps to get your file work done instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
              Step 1: Upload Your File
            </h3>
            <p className="text-gray-600">
              Drag & drop or browse your PDF, image, or document file — quick and secure.
            </p>
          </div>

          <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
              Step 2: Choose Your Action
            </h3>
            <p className="text-gray-600">
              Select the tool you need — merge, convert, compress, extract, or generate.
            </p>
          </div>

          <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
              Step 3: Download Instantly
            </h3>
            <p className="text-gray-600">
              Your file is processed in seconds. Download it instantly — no login, no wait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
