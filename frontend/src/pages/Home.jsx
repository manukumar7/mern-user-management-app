import CTASection from "@/component/sections/CTASection";
import Features from "@/component/sections/Features";
import HeroSection from "@/component/sections/HeroSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <CTASection />
    </div>
  );
};

export default Home;
