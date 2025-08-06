import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Get Started with AiThinkr Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the future of AI-powered applications. Sign up now and start building your first project with our easy-to-use platform.
          </p>
           <Link to="/auth">
                          <Button size="lg" className="group">
                            Sign Up Now
                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </Button>
           </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
