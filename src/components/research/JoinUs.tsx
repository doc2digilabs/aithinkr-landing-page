import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const JoinUs = () => {
  return (
    <section className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Join Our Research Team
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We are always looking for talented researchers and engineers to join
            our team. If you are passionate about pushing the boundaries of AI,
            we would love to hear from you.
          </p>
          <Button variant="hero" size="xl" className="font-semibold">
            <ArrowRight className="w-5 h-5" />
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
