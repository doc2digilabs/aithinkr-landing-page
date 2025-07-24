import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-aithinkr.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-24 lg:py-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-mesh rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-floating rounded-full blur-3xl opacity-30 animate-spin-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-background"></div>
      </div>
      
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              {/* <Badge variant="secondary" className="w-fit animate-bounce-gentle shadow-lifted">
                🚀 Now in Beta
              </Badge> */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
                Think Smarter,{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-glow-pulse">
                  Innovate Faster
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                Empowering students, professionals, and organizations with AI-driven solutions 
                that enhance thinking, accelerate research, and transform ideas into reality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 group hover:shadow-floating transition-all duration-300 hover:-translate-y-1">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2 group">
                
                <span className="group-hover:text-foreground transition-colors duration-200"></span>
              </div>
              <div className="hover:text-foreground transition-colors duration-200 cursor-default"></div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary-glow/30 rounded-2xl transform rotate-3 animate-float"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl transform -rotate-2 animate-pulse"></div>
            <img 
              src={heroImage} 
              alt="AI Innovation" 
              className="relative rounded-2xl shadow-floating w-full h-auto hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
