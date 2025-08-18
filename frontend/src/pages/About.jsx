import { Code, Globe, Star, Award, Heart, Coffee } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-[#FFFFFF] via-[#F3F4F6]/20 to-[#FFFFFF] relative overflow-hidden font-inter">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#2563EB]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-soft"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#F97316]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-8 mb-20 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Badge className="px-4 py-2 text-sm font-medium border-[#2563EB]/20 bg-[#2563EB]/5 text-[#2563EB] flex items-center justify-center gap-2">
              <Star className="w-4 h-4" />
              About the Project
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#111827]">
            About
            <span className="block bg-gradient-to-r from-[#2563EB] via-[#F97316] to-[#2563EB] bg-clip-text text-transparent mt-2">
              UserFlow Pro
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
            🚀 A production-ready user management system built with modern web
            technologies and security standards. Showcasing the web development.
          </p>
        </div>

        {/* Project Overview */}
        <section
          className="mb-20 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <Card className="group bg-gradient-to-br from-[#FFFFFF]/90 to-[#F3F4F6]/50 backdrop-blur-sm border border-[#E5E7EB]/50 shadow-2xl hover:shadow-3xl hover:shadow-[#2563EB]/10 transition-all duration-500 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2563EB]/10 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#F97316]/10 to-transparent rounded-tr-3xl"></div>

            <CardHeader className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#2563EB]/80 rounded-2xl flex items-center justify-center shadow-lg shadow-[#2563EB]/30">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl group-hover:text-[#2563EB] transition-colors duration-300">
                  Project Overview
                </CardTitle>
              </div>
              <CardDescription className="text-base md:text-lg text-[#6B7280]">
                Built to demonstrate advanced full-stack development
                capabilities with modern best practices
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10">
              <p className="text-[#6B7280] leading-relaxed">
                🎯 <strong className="text-[#111827]">UserFlow Pro</strong> is a
                comprehensive user management application that showcases modern
                web development practices. Originally designed as a MERN stack
                application.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                ✨ The application implements full CRUD operations with advanced
                features like real-time search, sophisticated filtering options,
                drag & drop image upload capabilities, and responsive design
                principles.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E5E7EB]/50">
                <div className="text-center group">
                  <div className="text-2xl font-bold text-[#2563EB] group-hover:scale-110 transition-transform duration-300">
                    100%
                  </div>
                  <div className="text-xs text-[#6B7280]">Type Safe</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-[#10B981] group-hover:scale-110 transition-transform duration-300">
                    A+
                  </div>
                  <div className="text-xs text-[#6B7280]">Performance</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-[#F97316] group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-xs text-[#6B7280]">Available</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-[#F59E0B] group-hover:scale-110 transition-transform duration-300">
                    ∞
                  </div>
                  <div className="text-xs text-[#6B7280]">Scalable</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section
          className="animate-fade-in font-inter"
          style={{ animationDelay: "1s" }}
        >
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-[#10B981]/20 bg-[#10B981]/5 flex items-center justify-center"
              >
                <Heart className="w-4 h-4 mr-2 text-[#10B981]" />
                Get in Touch
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Questions about the project? Want to collaborate? We'd love to
              hear from you!
            </p>
          </div>

          {/* Card */}
          <Card className="group bg-gradient-to-br from-[#FFFFFF]/90 to-[#F3F4F6]/50 backdrop-blur-sm border-[#E5E7EB]/50 shadow-2xl hover:shadow-3xl hover:shadow-[#10B981]/10 transition-all duration-500 max-w-3xl mx-auto relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#10B981]/10 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#F97316]/10 to-transparent rounded-tr-3xl"></div>

            {/* Header */}
            <CardHeader className="text-center relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#10B981]/80 rounded-3xl flex items-center justify-center shadow-lg shadow-[#10B981]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl group-hover:text-[#10B981] transition-colors duration-300">
                Contact Information
              </CardTitle>
              <CardDescription className="text-base md:text-lg text-[#6B7280]">
                Ready to discuss web development, collaboration, or just say
                hello?
              </CardDescription>
            </CardHeader>

            {/* Content */}
            <CardContent className="text-center space-y-8 relative z-10">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Email */}
                <div className="group/contact space-y-2 p-4 rounded-xl hover:bg-[#F3F4F6]/30 transition-all duration-300">
                  <div className="w-8 h-8 bg-[#2563EB]/20 rounded-full flex items-center justify-center mx-auto group-hover/contact:scale-110 transition-transform duration-300">
                    <span className="text-[#2563EB] font-bold">@</span>
                  </div>
                  <p className="text-[#6B7280]">
                    <strong className="text-[#111827]">Email</strong>
                    {/* <br />
                    demo@userflowpro.com */}
                  </p>
                </div>

                {/* GitHub */}
                <div className="group/contact space-y-2 p-4 rounded-xl hover:bg-[#F3F4F6]/30 transition-all duration-300">
                  <div className="w-8 h-8 bg-[#F97316]/20 rounded-full flex items-center justify-center mx-auto group-hover/contact:scale-110 transition-transform duration-300">
                    <Code className="w-4 h-4 text-[#F97316]" />
                  </div>
                  <p className="text-[#6B7280]">
                    <strong className="text-[#111827]">GitHub</strong>
                    {/* <br />
                    github.com/github.com */}
                  </p>
                </div>

                {/* Docs */}
                <div className="group/contact space-y-2 p-4 rounded-xl hover:bg-[#F3F4F6]/30 transition-all duration-300">
                  <div className="w-8 h-8 bg-[#10B981]/20 rounded-full flex items-center justify-center mx-auto group-hover/contact:scale-110 transition-transform duration-300">
                    <Globe className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <p className="text-[#6B7280]">
                    <strong className="text-[#111827]">Documentation</strong>
                    {/* <br />
                    Documentation */}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-8 border-t border-[#E5E7EB]/50 space-y-4">
                <p className="text-[#6B7280] flex items-center justify-center space-x-2">
                  <span>Built with</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>using React, JavaScript, and modern web standards</span>
                </p>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    className="group border-[#2563EB]/30 hover:border-[#2563EB] hover:bg-[#2563EB]/5 hover:scale-105 transition-all duration-300"
                  >
                    <Star className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                    Star on GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
