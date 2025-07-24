
import WhatYoullLearn from "@/components/training/WhatYoullLearn"
import ProjectShowcase from "@/components/training/ProjectShowcase"
import ToolsTechnologies from "@/components/training/ToolsTechnologies"
import WhoShouldJoin from "@/components/training/WhoShouldJoin"
import CareerOutcomes from "@/components/training/CareerOutcomes"
import Testimonials from "@/components/training/Testimonials"
import PricingSection from "@/components/training/PricingSection"
import Footer from "@/components/layout/Footer";
import Header from "@/components/training/Header"
import HeroSection from "@/components/training/HeroSection"

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatYoullLearn />
        <ProjectShowcase />
        <ToolsTechnologies />
        <WhoShouldJoin />
        <CareerOutcomes />
        <Testimonials />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default TrainingPage;