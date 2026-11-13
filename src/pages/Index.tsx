import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HomeOverviewSection from "@/components/HomeOverviewSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        // Small delay to ensure all components are rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustSection />
      <HomeOverviewSection />
      <ProcessSection />
      <WhyUsSection />
      <WhoWeHelpSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
