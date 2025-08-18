import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f9fafb] border-t border-gray-200 mt-auto animate-fade-in font-inter">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side */}
          <div className="flex items-center space-x-2 text-sm text-[#1f2937]">
            <span>© 2025 UserFlow Pro. Built with</span>
            <Heart className="w-4 h-4 text-[#ef4444] fill-current" />
            <span>Manu Kumar Pal</span>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6 text-sm text-[#1f2937]">
            <a href="#" className="hover:text-[#4f46e5] transition-smooth">
              Privacy
            </a>
            <a href="#" className="hover:text-[#4f46e5] transition-smooth">
              Terms
            </a>
            <a href="#" className="hover:text-[#4f46e5] transition-smooth">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
