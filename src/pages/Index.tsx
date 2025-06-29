import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, File, Image, RefreshCw, Download, Upload, Split, Minimize2, Edit, Lock, Unlock, Sparkles, Zap, Star } from "lucide-react";
import { useState } from "react";
import FileUpload from "@/components/FileUpload";
import ConversionTool from "@/components/ConversionTool";
import Header from "@/components/Header";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  
  const tools = [
    {
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
    }
  ];

  if (selectedTool) {
    const tool = tools.find(t => t.id === selectedTool);
    return (
      <>
        <Header />
        <ConversionTool tool={tool!} onBack={() => setSelectedTool(null)} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-fade-in">
              <Sparkles className="w-4 h-4" />
              100% Free Forever • No Limits • No Sign-up Required
            </div>
            
            <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 font-bold text-6xl lg:text-7xl text-center leading-tight animate-fade-in">
              Free Online Tools to Manage Your Files Forever
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Access powerful online tools to manage your files with ease. Merge, compress, convert, and edit PDFs, images, and text — all in one place. 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">No signups. No limits. Always 100% free.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Zap className="w-5 h-5 mr-2" />
                Get Started - It's Free!
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-700 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-lg">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto mb-20">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card 
                  key={tool.id} 
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:bg-white/95 rounded-2xl overflow-hidden animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedTool(tool.id)}
                >
                  <CardHeader className="pb-4 relative">
                    <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <IconComponent className="w-9 h-9 text-white relative z-10" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {tool.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-xl font-semibold text-gray-700 shadow-sm">
                        {tool.fromFormat}
                      </span>
                      <RefreshCw className="w-4 h-4 text-blue-500" />
                      <span className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-xl font-semibold text-gray-700 shadow-sm">
                        {tool.toFormat}
                      </span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-xl py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Convert Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Features Section */}
          <div className="mt-32 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-semibold shadow-lg mb-8">
              <Star className="w-4 h-4" />
              Trusted by 10M+ Users Worldwide
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12 leading-tight">
              Why Millions Trust Our Free Online File Tools?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Easy Upload</h3>
                <p className="text-gray-600 leading-relaxed">Upload your documents quickly with drag & drop or click-to-browse. Works for PDFs, images, and text files.</p>
              </div>
              
              <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Fast File Conversion</h3>
                <p className="text-gray-600 leading-relaxed">Convert PDF, image, or document files in seconds — high speed with accurate results every time.</p>
              </div>
              
              <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Instant & Secure Downloads</h3>
                <p className="text-gray-600 leading-relaxed">Download your converted files instantly. No delays, no signups, and always secure.</p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-32">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Limited Time Offer
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Ready for More?</h2>
                <p className="text-xl lg:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                  Sign up today to unlock premium features, faster processing, batch conversions, and exclusive tools. 
                  Get started with additional incentives and take your file management to the next level!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button className="font-bold px-10 py-4 rounded-xl text-lg bg-white text-blue-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <Zap className="w-5 h-5 mr-2" />
                    Sign Up Now - It's Free!
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white font-bold px-10 py-4 rounded-xl text-lg bg-white/10 hover:bg-white/20 shadow-xl transition-all duration-300">
                    Learn More About Premium
                  </Button>
                </div>
                
                <p className="text-sm text-blue-200 mt-6 font-medium">
                  ✨ No credit card required • Cancel anytime • 30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <HowItWorksSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
