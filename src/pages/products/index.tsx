
import Header from "@/components/products/Header";
import HeroSection from "@/components/products/HeroSection";
import Features from "@/components/products/Features";
import UseCases from "@/components/products/UseCases";
import Integrations from "@/components/products/Integrations";
import CTA from "@/components/products/CTA";
import Footer from "@/components/layout/Footer";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <UseCases />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
