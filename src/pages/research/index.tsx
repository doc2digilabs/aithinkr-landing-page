
import Header from "@/components/research/Header";
import HeroSection from "@/components/research/HeroSection";
import ResearchAreas from "@/components/research/ResearchAreas";
import Publications from "@/components/research/Publications";
import JoinUs from "@/components/research/JoinUs";
import Footer from "@/components/layout/Footer";

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ResearchAreas />
        <Publications />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
};

export default ResearchPage;
