
import Header from "@/components/careers/Header";
import HeroSection from "@/components/careers/HeroSection";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import OpenPositions from "@/components/careers/OpenPositions";
import OurCulture from "@/components/careers/OurCulture";
import Footer from "@/components/careers/Footer";

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyJoinUs />
        <OpenPositions />
        <OurCulture />
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
