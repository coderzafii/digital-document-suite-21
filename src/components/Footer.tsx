
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Twitter, Facebook, Linkedin, Instagram, Music, Globe, Mail, Phone, MapPin, ArrowRight, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 mt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-cyan-400 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

      <div className="container mx-auto px-6 py-16 max-w-7xl relative z-10">
        {/* Header Section with Stats */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-semibold">Trusted by Millions Worldwide</span>
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Join the Revolution
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience the future of file management with our cutting-edge tools
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50M+</div>
              <div className="text-blue-200">Files Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">180+</div>
              <div className="text-blue-200">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Free Tools Forever</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Empowering millions with professional-grade file management tools. 
              Secure, fast, and completely free forever.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@freetoolsforever.com</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              TOOLS
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Merge PDF
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Split PDF
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Compress PDF
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Convert Files
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                All Tools
              </a></li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
              SOLUTIONS
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Business
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Education
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Healthcare
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Legal
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Government
              </a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-pink-400 to-red-400 rounded-full"></div>
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                About Us
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Blog
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Careers
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Privacy
              </a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                Terms
              </a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-blue-100 mb-6">Get the latest features and updates delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <select className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option className="text-gray-800" value="en">🌐 English</option>
              <option className="text-gray-800" value="es">🌐 Español</option>
              <option className="text-gray-800" value="fr">🌐 Français</option>
            </select>
          </div>
          
          <div className="text-center text-sm text-blue-100">
            © 2025 Free Tools Forever. All rights reserved. Made with ❤️ for everyone.
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 group">
              <Twitter className="w-5 h-5 text-white group-hover:text-blue-400" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 group">
              <Facebook className="w-5 h-5 text-white group-hover:text-blue-500" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 group">
              <Linkedin className="w-5 h-5 text-white group-hover:text-blue-600" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 group">
              <Instagram className="w-5 h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 group">
              <Music className="w-5 h-5 text-white group-hover:text-green-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
