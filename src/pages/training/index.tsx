
import FreeClassCTA from "@/components/training/FreeClassCTA";
import ProjectShowcase from "@/components/training/ProjectShowcase"
import ToolsTechnologies from "@/components/training/ToolsTechnologies"
import WhoShouldJoin from "@/components/training/WhoShouldJoin"
import CareerOutcomes from "@/components/training/CareerOutcomes"
import Testimonials from "@/components/training/Testimonials"
import PricingSection from "@/components/training/PricingSection"
import Footer from "@/components/layout/Footer";
import Header from "@/components/training/Header"
import HeroSection from "@/components/training/HeroSection"
import WhatYouWillLearn from "@/components/training/WhatYouWillLearn";
import CurriculumAccordion from "@/components/training/CurriculumAccordion";

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FreeClassCTA />
        <Testimonials />
        <WhatYouWillLearn />
        <div id="curriculum">
          <CurriculumAccordion />
        </div>
        <ProjectShowcase />
        <ToolsTechnologies />
        <WhoShouldJoin />
        <CareerOutcomes />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default TrainingPage;