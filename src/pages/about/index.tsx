
import Header from "@/components/about/Header";
import HeroSection from "@/components/about/HeroSection";
import OurMission from "@/components/about/OurMission";
import OurTeam from "@/components/about/OurTeam";
import OurValues from "@/components/about/OurValues";
import Footer from "@/components/about/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <OurMission />
        <OurValues />
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
