import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CareersSection = () => {
  return (
    <section id="careers" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-xl">Join Our Team</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Shape the Future of AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a passionate team of innovators, researchers, and builders who are 
            dedicated to making AI accessible and beneficial for everyone.
          </p>
        </div>

        
        <div className="text-center mt-12">
          <Link to="/careers">
            <Button variant="outline">
              Explore Careers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
