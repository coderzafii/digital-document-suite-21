import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, File, Image, RefreshCw, Download, Upload, Split, Minimize2, Edit, Lock, Unlock } from "lucide-react";
import { useState } from "react";
import FileUpload from "@/components/FileUpload";
import ConversionTool from "@/components/ConversionTool";
import Header from "@/components/Header";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const tools = [{
    id: "pdf-to-word",
    title: "PDF to Word",
    description: "Convert PDF documents to editable Word files",
    icon: FileText,
    fromFormat: "PDF",
    toFormat: "DOCX",
    gradient: "from-blue-500 to-purple-600"
  }, {
    id: "word-to-pdf",
    title: "Word to PDF",
    description: "Convert Word documents to PDF format",
    icon: File,
    fromFormat: "DOCX",
    toFormat: "PDF",
    gradient: "from-purple-500 to-pink-600"
  }, {
    id: "jpg-to-pdf",
    title: "JPG to PDF",
    description: "Convert JPG images to PDF documents",
    icon: Image,
    fromFormat: "JPG",
    toFormat: "PDF",
    gradient: "from-green-500 to-teal-600"
  }, {
    id: "png-to-pdf",
    title: "PNG to PDF",
    description: "Convert PNG images to PDF documents",
    icon: Image,
    fromFormat: "PNG",
    toFormat: "PDF",
    gradient: "from-teal-500 to-cyan-600"
  }, {
    id: "pdf-to-jpg",
    title: "PDF to JPG",
    description: "Convert PDF pages to JPG images",
    icon: RefreshCw,
    fromFormat: "PDF",
    toFormat: "JPG",
    gradient: "from-orange-500 to-red-600"
  }, {
    id: "pdf-to-png",
    title: "PDF to PNG",
    description: "Convert PDF pages to PNG images",
    icon: RefreshCw,
    fromFormat: "PDF",
    toFormat: "PNG",
    gradient: "from-red-500 to-rose-600"
  }, {
    id: "split-pdf",
    title: "Split PDF",
    description: "Separate PDF pages into individual files",
    icon: Split,
    fromFormat: "PDF",
    toFormat: "PDF",
    gradient: "from-indigo-500 to-blue-600"
  }, {
    id: "compress-pdf",
    title: "Compress PDF",
    description: "Reduce PDF file size while maintaining quality",
    icon: Minimize2,
    fromFormat: "PDF",
    toFormat: "PDF",
    gradient: "from-emerald-500 to-green-600"
  }, {
    id: "edit-pdf",
    title: "Edit PDF",
    description: "Add text, images, and annotations to PDF",
    icon: Edit,
    fromFormat: "PDF",
    toFormat: "PDF",
    gradient: "from-violet-500 to-purple-600"
  }, {
    id: "protect-pdf",
    title: "Protect PDF",
    description: "Add password protection to your PDF files",
    icon: Lock,
    fromFormat: "PDF",
    toFormat: "PDF",
    gradient: "from-amber-500 to-orange-600"
  }, {
    id: "unlock-pdf",
    title: "Unlock PDF",
    description: "Remove password protection from PDF files",
    icon: Unlock,
    fromFormat: "PDF",
    toFormat: "PDF",
    gradient: "from-rose-500 to-pink-600"
  }, {
    id: "compress-image",
    title: "Compress Image",
    description: "Reduce image file size without losing quality",
    icon: Minimize2,
    fromFormat: "JPG/PNG",
    toFormat: "JPG/PNG",
    gradient: "from-cyan-500 to-blue-600"
  }, {
    id: "jpeg-to-png",
    title: "JPEG to PNG",
    description: "Convert JPEG images to PNG format",
    icon: Image,
    fromFormat: "JPEG",
    toFormat: "PNG",
    gradient: "from-lime-500 to-green-600"
  }, {
    id: "png-to-jpg",
    title: "PNG to JPG",
    description: "Convert PNG images to JPG format",
    icon: Image,
    fromFormat: "PNG",
    toFormat: "JPG",
    gradient: "from-sky-500 to-cyan-600"
  }, {
    id: "html-to-pdf",
    title: "HTML to PDF",
    description: "Convert HTML web pages to PDF documents",
    icon: FileText,
    fromFormat: "HTML",
    toFormat: "PDF",
    gradient: "from-fuchsia-500 to-purple-600"
  }, {
    id: "excel-to-pdf",
    title: "Excel to PDF",
    description: "Convert Excel spreadsheets to PDF format",
    icon: File,
    fromFormat: "XLSX",
    toFormat: "PDF",
    gradient: "from-emerald-500 to-teal-600"
  }, {
    id: "pdf-to-excel",
    title: "PDF to Excel",
    description: "Extract data from PDF to Excel spreadsheet",
    icon: File,
    fromFormat: "PDF",
    toFormat: "XLSX",
    gradient: "from-blue-500 to-indigo-600"
  }, {
    id: "merge-pdf",
    title: "Merge PDF",
    description: "Combine multiple PDF files into one document",
    icon: FileText,
    fromFormat: "PDF",
    toFormat: "PDF",
    gradient: "from-orange-500 to-amber-600"
  }, {
    id: "rotate-pdf",
    title: "Rotate PDF",
    description: "Rotate PDF pages to correct orientation",
    icon: RefreshCw,
    fromFormat: "PDF",
    toFormat: "PDF",
    gradient: "from-pink-500 to-rose-600"
  }, {
    id: "pdf-to-text",
    title: "PDF to Text",
    description: "Extract text content from PDF documents",
    icon: FileText,
    fromFormat: "PDF",
    toFormat: "TXT",
    gradient: "from-slate-500 to-gray-600"
  }];

  if (selectedTool) {
    const tool = tools.find(t => t.id === selectedTool);
    return <>
        <Header />
        <ConversionTool tool={tool!} onBack={() => setSelectedTool(null)} />
        <Footer />
      </>;
  }

  return <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 font-bold text-5xl text-center">Free Online Tools to Manage Your Files Forever</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Access powerful online tools to manage your files with ease. Merge, compress, convert, and edit PDFs, images, and text — all in one place. No signups. No limits. Always 100% free.</p>
          </div>

          {/* Tools Grid - 5 per row on PC, 2 per row on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {tools.map(tool => {
            const IconComponent = tool.icon;
            return <Card key={tool.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg bg-white/80 backdrop-blur-sm" onClick={() => setSelectedTool(tool.id)}>
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {tool.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                        {tool.fromFormat}
                      </span>
                      <RefreshCw className="w-4 h-4" />
                      <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                        {tool.toFormat}
                      </span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                      Convert Now
                    </Button>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Features Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Millions Trust Our Free Online File Tools?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Upload</h3>
                <p className="text-gray-600">Upload your documents quickly with drag & drop or click-to-browse. Works for PDFs, images, and text files.</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast File Conversion</h3>
                <p className="text-gray-600">Convert PDF, image, or document files in seconds — high speed with accurate results every time.</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant & Secure Downloads</h3>
                <p className="text-gray-600">Download your converted files instantly. No delays, no signups, and always secure.</p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Ready for More?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Sign up today to unlock premium features, faster processing, batch conversions, and exclusive tools. 
                Get started with additional incentives and take your file management to the next level!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg text-lg">
                  Sign Up Now - It's Free!
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg text-lg">
                  Learn More About Premium
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                ✨ No credit card required • Cancel anytime • 30-day money-back guarantee
              </p>
            </div>
          </div>

          {/* How It Works Section */}
          <HowItWorksSection />
        </div>
      </div>
      <Footer />
    </>;
};

export default Index;
