import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Code, Users } from "lucide-react";
import heroImage from "@/assets/ai-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-24 lg:py-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            About AiThinkr
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-tech">
            We are a team of researchers, engineers, and designers passionate
            about building the next generation of generative AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
