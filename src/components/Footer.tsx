
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mt-20">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Free Tools Forever Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">FREE TOOLS FOREVER</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Tools</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Desktop App</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Developers</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">API Access</a></li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SOLUTIONS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Business</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Education</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Government</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Legal & Privacy</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 px-6 py-3 border-2 border-blue-300 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors cursor-not-allowed opacity-60"
            disabled
          >
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">▶</span>
            </div>
            <div className="text-left">
              <div className="text-xs text-blue-100">GET IT ON</div>
              <div className="text-sm font-semibold text-white">Coming Soon</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2 px-6 py-3 border-2 border-blue-300 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors cursor-not-allowed opacity-60"
            disabled
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">🍎</span>
            </div>
            <div className="text-left">
              <div className="text-xs text-blue-100">Download on the</div>
              <div className="text-sm font-semibold text-white">Coming Soon</div>
            </div>
          </Button>
        </div>

        <Separator className="mb-6 bg-blue-400/30" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <select className="bg-white/10 backdrop-blur-sm border border-blue-300 rounded px-3 py-1 text-sm text-white">
              <option className="text-gray-800">🌐 English</option>
            </select>
          </div>
          
          <div className="text-center text-sm text-blue-100">
            © Free Tools Forever 2025 ® - Your File Management Solution
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-white text-sm">✕</span>
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-white text-sm">f</span>
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-white text-sm">in</span>
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-white text-sm">📷</span>
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-white text-sm">🎵</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
