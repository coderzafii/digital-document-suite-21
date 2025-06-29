
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Free Tools Forever Section */}
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">FREE TOOLS FOREVER</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Tools</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Desktop App</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Developers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">API Access</a></li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">SOLUTIONS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Business</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Legal</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Government</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Legal & Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors cursor-not-allowed opacity-60"
            disabled
          >
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">▶</span>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500">GET IT ON</div>
              <div className="text-sm font-semibold text-gray-700">Coming Soon</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors cursor-not-allowed opacity-60"
            disabled
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">🍎</span>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500">Download on the</div>
              <div className="text-sm font-semibold text-gray-700">Coming Soon</div>
            </div>
          </Button>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <select className="bg-transparent border border-gray-300 rounded px-3 py-1 text-sm text-gray-600">
              <option>🌐 English</option>
            </select>
          </div>
          
          <div className="text-center text-sm text-gray-600">
            © Free Tools Forever 2025 ® - Your File Management Solution
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <span className="text-gray-600 text-sm">✕</span>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <span className="text-gray-600 text-sm">f</span>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <span className="text-gray-600 text-sm">in</span>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <span className="text-gray-600 text-sm">📷</span>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <span className="text-gray-600 text-sm">🎵</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
