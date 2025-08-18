import { Users, Shield, Zap, Database, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "User Management",
    description:
      "Complete CRUD operations with advanced filtering, search, and pagination capabilities.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description:
      "Built with security best practices, input validation, and error handling for production use.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Optimized with lazy loading, debounced search, and skeleton loaders for smooth UX.",
  },
  {
    icon: Database,
    title: "Scalable Architecture",
    description:
      "Modern tech stack with React, JavaScript, Tailwind CSS, Expressjs and MongoDB backend.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F3F4F6]/20 to-[#FFFFFF] relative overflow-hidden font-inter">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563EB' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative max-w-7xl">
        {/* Heading */}
        <div className="text-center space-y-6 mb-20 animate-fade-in">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium border-[#2563EB]/20 bg-[#2563EB]/5 flex items-center justify-center mx-auto"
          >
            <Star className="w-4 h-4 mr-2 text-[#2563EB]" />
            Feature Rich
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827]">
            Powerful Features
            <span className="block text-2xl md:text-4xl bg-gradient-to-r from-[#2563EB] to-[#F97316] bg-clip-text text-transparent mt-2">
              Built for Modern Web
            </span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Everything you need for modern user management with security,
            performance optimizations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group bg-[#FFFFFF]/50 backdrop-blur-sm border-[#E5E7EB]/50 shadow-xl hover:shadow-2xl hover:shadow-[#2563EB]/10 hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-[#F97316]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#2563EB]/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#2563EB] transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-[#6B7280] leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#F97316]/10 rounded-full group-hover:bg-[#F97316]/20 transition-colors duration-300"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
