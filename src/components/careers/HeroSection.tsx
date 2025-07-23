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
            Join Us in Building the Future of AI
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-tech">
            We are a team of researchers, engineers, and designers passionate
            about building the next generation of generative AI. If you are
            excited about solving challenging problems and making an impact, we
            would love to hear from you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="font-semibold">
              <ArrowRight className="w-5 h-5" />
              View Open Positions
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            <div className="bg-gradient-card p-6 rounded-lg shadow-tech">
              <BrainCircuit className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Cutting-Edge Research</h3>
              <p className="text-muted-foreground">
                Work on the most challenging problems in generative AI and
                publish your work at top conferences.
              </p>
            </div>
            <div className="bg-gradient-card p-6 rounded-lg shadow-tech">
              <Code className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">World-Class Engineering</h3>
              <p className="text-muted-foreground">
                Build scalable and reliable AI systems that will be used by
                millions of people.
              </p>
            </div>
            <div className="bg-gradient-card p-6 rounded-lg shadow-tech">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaborative Culture</h3>
              <p className="text-muted-foreground">
                Join a team of talented and passionate people who are dedicated
                to making a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
