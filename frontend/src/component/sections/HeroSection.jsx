import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Users, ArrowRight, Star, Sparkles } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF] to-[#2563EB0D]">
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2563EB1A] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-[#F973161A] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#10B9810D] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-soft"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-3xl space-y-8 animate-fade-in">
        <Badge className="w-fit px-4 py-2 text-sm font-medium border-[#2563EB33] bg-[#2563EB0D] hover:bg-[#2563EB1A] transition-all duration-300">
          <Sparkles className="w-4 h-4 mr-2 text-[#2563EB]" />
          Production Ready
        </Badge>

        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight">
            <span className="block">Advanced</span>
            <span className="block bg-gradient-to-r from-[#2563EB] via-[#F97316] to-[#2563EB] bg-clip-text text-transparent">
              User Management
            </span>
            <span className="block">System</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
            🚀 CRUD with filtering, drag & drop image upload, responsive design.
            Built for scale and security.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-gradient-to-r from-[#2563EB] to-[#2563EBCC] text-white shadow-xl hover:scale-105">
            <Link to="/users" className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-[#2563EB4D] hover:border-[#2563EB] hover:bg-[#2563EB0D]"
          >
            <Link to="/about" className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>Learn More</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
