import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, File, Image, RefreshCw, Download, Upload } from "lucide-react";
import { useState } from "react";
import FileUpload from "@/components/FileUpload";
import ConversionTool from "@/components/ConversionTool";
import Header from "@/components/Header";
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
  }];
  if (selectedTool) {
    const tool = tools.find(t => t.id === selectedTool);
    return <>
        <Header />
        <ConversionTool tool={tool!} onBack={() => setSelectedTool(null)} />
      </>;
  }
  return <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 font-bold text-5xl text-center">All Your File Tools. Forever Free</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Convert, edit, and transform your documents with our powerful online tools. 
              Fast, secure, and completely free.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Tools?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Upload</h3>
                <p className="text-gray-600">Simply drag and drop your files or click to browse</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Conversion</h3>
                <p className="text-gray-600">Convert your files in seconds with high quality results</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Download</h3>
                <p className="text-gray-600">Download your converted files immediately</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default Index;