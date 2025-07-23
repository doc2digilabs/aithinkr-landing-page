import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Get Started with AiThinkr Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Build, deploy, and scale your generative AI applications with our
            powerful and easy-to-use platform.
          </p>
          <Button variant="hero" size="xl" className="font-semibold">
            <ArrowRight className="w-5 h-5" />
            Get Started for Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
