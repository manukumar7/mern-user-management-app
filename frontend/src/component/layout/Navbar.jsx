import { Link, useLocation } from "react-router-dom";
import { Users, Home, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/users", label: "User Management", icon: Users },
    { path: "/about", label: "About", icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#f9fafb] backdrop-blur-sm border-b border-[#E5E7EB] shadow-md animate-fade-in font-inter">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Users className="w-5 h-5 text-[#FFFFFF]" />
            </div>
            <span className="font-semibold text-lg text-[#1f2937] hover:text-[#2563EB] transition-colors">
              UserFlow Pro
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className={`transition-all duration-300 hover:scale-105 hover:shadow-md ${
                    isActive
                      ? "bg-[#2563EB] text-[#FFFFFF] hover:bg-[#1D4ED8]"
                      : "text-[#1f2937] hover:text-[#2563EB]"
                  }`}
                >
                  <Link to={item.path} className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-[#1f2937]">
              <Users className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
