import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-xl">Our Company</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Four Pillars of Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our specialized departments work in harmony to deliver comprehensive AI solutions 
            that drive real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center group hover:shadow-floating transition-all duration-500 hover:-translate-y-2 hover:rotate-1 animate-fade-in-up border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <Brain className="h-6 w-6 text-primary group-hover:animate-bounce-gentle" />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Research</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
              Pioneering the future of AI with cutting-edge research and development.
              </CardDescription>
              <div className="mt-4">
                <Link
                  to="/research"
                  className="inline-block px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors duration-200"
                >
                  Explore Research
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-floating transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 animate-fade-in-up delay-75 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <Target className="h-6 w-6 text-primary group-hover:animate-bounce-gentle" />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Product Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                Transforming research into practical, user-friendly products that 
                solve real-world problems.
              </CardDescription>
              <div className="mt-4">
                <Link
                  to="/products"
                  className="inline-block px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors duration-200"
                >
                  Explore Products
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-floating transition-all duration-500 hover:-translate-y-2 hover:rotate-1 animate-fade-in-up delay-150 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <Lightbulb className="h-6 w-6 text-primary group-hover:animate-bounce-gentle" />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Training</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                Comprehensive education programs to help individuals and organizations 
                harness the power of AI.
              </CardDescription>
              <div className="mt-4">
                <Link
                  to="/training"
                  className="inline-block px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors duration-200"
                >
                  Explore Training
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-floating transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 animate-fade-in-up delay-225 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <Users className="h-6 w-6 text-primary group-hover:animate-bounce-gentle" />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Customer Relations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                Dedicated support and partnership development to ensure success 
                for every client and user.
              </CardDescription>
              <div className="mt-4">
                <Link
                  to="/support"
                  className="inline-block px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors duration-200"
                >
                  Explore Support
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center group hover:shadow-floating transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 animate-fade-in-up delay-225 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <Users className="h-6 w-6 text-primary group-hover:animate-bounce-gentle" />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Enterprise Consulting Services</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                Tailored AI solutions and strategic guidance for businesses looking to 
                integrate AI into their operations effectively.
              </CardDescription>
              <div className="mt-4">
                <Link
                  to="/consulting"
                  className="inline-block px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors duration-200"
                >
                  Explore Consulting Services
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
