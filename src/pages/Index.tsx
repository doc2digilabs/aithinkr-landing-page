import { NavigationBar } from "@/components/layout/NavigationBar";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import CareersSection from "@/components/home/CareersSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ShowcaseSection />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;