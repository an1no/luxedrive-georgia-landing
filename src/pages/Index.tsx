import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { SEOTopicSkill } from "@/components/SEOTopicSkill";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <ReviewsSection />
      <Footer />
      <SEOTopicSkill />
    </div>
  );
};

export default Index;
