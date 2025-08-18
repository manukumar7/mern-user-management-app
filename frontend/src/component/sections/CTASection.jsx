import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  User,
  Database,
  Sparkles,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden font-inter">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 via-[#FFFFFF] to-[#F97316]/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center space-y-8 max-w-4xl mx-auto animate-fade-in">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium border-[#2563EB]/20 bg-[#2563EB]/5"
          >
            <Sparkles className="w-4 h-4 mr-2 text-[#2563EB]" />
            Get Started Today
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold text-[#111827]">
            Ready to Experience
            <span className="block bg-gradient-to-r from-[#2563EB] via-[#F97316] to-[#2563EB] bg-clip-text text-transparent mt-2">
              UserFlow User Management?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
            🚀 Explore the comprehensive user management system and discover all
            the powerful features designed for modern web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]/80 hover:from-[#1D4ED8] hover:to-[#1E40AF]/70 text-[#FFFFFF] shadow-2xl shadow-[#2563EB]/40 hover:shadow-3xl hover:shadow-[#2563EB]/50 hover:scale-105 transition-all duration-500 font-semibold px-8 py-4 text-lg"
            >
              <Link to="/users" className="flex items-center space-x-3">
                <Users className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Start Managing Users</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="group border-[#2563EB]/30 hover:border-[#2563EB] hover:bg-[#2563EB]/5 hover:scale-105 transition-all duration-300 font-medium px-8 py-4 text-lg"
            >
              <Link to="/about" className="flex items-center space-x-2">
                <Database className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>View Documentation</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#E5E7EB]/50">
            <div className="flex items-center justify-center space-x-3 group">
              <div className="w-8 h-8 bg-[#10B981]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
              </div>
              <span className="text-[#6B7280] font-medium">
                Production Ready
              </span>
            </div>

            <div className="flex items-center justify-center space-x-3 group">
              <div className="w-8 h-8 bg-[#2563EB]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="w-5 h-5 text-[#2563EB]" />
              </div>
              <span className="text-[#6B7280] font-medium">
                User Management
              </span>
            </div>

            <div className="flex items-center justify-center space-x-3 group">
              <div className="w-8 h-8 bg-[#F97316]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-5 h-5 text-[#F97316]" />
              </div>
              <span className="text-[#6B7280] font-medium">
                High Performance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
