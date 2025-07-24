import { Badge } from "@/components/ui/badge";
import teamImage from "@/assets/team-collaboration.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 animate-scale-in hover:shadow-lifted transition-all duration-300 text-xl">
            Our Mission
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 animate-fade-in-up">
            Bridging Human Intelligence with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            At AiThinkr, we believe that the future lies in the seamless collaboration between 
            human creativity and artificial intelligence. Our platform democratizes access to 
            advanced AI tools, making them accessible to everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4 group">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 ">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where AI amplifies human potential, enabling breakthrough 
                discoveries, innovative solutions, and meaningful progress across all fields 
                of human endeavor.
              </p>
            </div>
            
            <div className="space-y-6 group">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                Why Choose AiThinkr?
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center space-x-3 group hover:text-foreground transition-all duration-300 hover:translate-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/50"></div>
                  <span>Cutting-edge AI research and development</span>
                </li>
                <li className="flex items-center space-x-3 group hover:text-foreground transition-all duration-300 hover:translate-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/50"></div>
                  <span>User-friendly tools for all skill levels</span>
                </li>
                <li className="flex items-center space-x-3 group hover:text-foreground transition-all duration-300 hover:translate-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/50"></div>
                  <span>Collaborative ecosystem for innovation</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl blur-lg animate-pulse"></div>
            <img 
              src={teamImage} 
              alt="Team Collaboration" 
              className="relative rounded-xl shadow-floating w-full h-auto hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
