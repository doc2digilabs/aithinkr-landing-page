import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-24 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-2xl">Our Work</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Transforming Ideas into Reality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of our latest projects and see how we're making AI accessible 
            and impactful across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden group hover:shadow-floating transition-all duration-500 hover:-translate-y-3 animate-fade-in-up border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <div className="h-48 bg-gradient-to-br from-primary/30 to-primary-glow/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-mesh opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary-glow/20 rounded-lg group-hover:rotate-12 transition-transform duration-300"></div>
            </div>
            <CardHeader className="group-hover:bg-primary/5 transition-colors duration-300">
              <CardTitle className="group-hover:text-primary transition-colors duration-300">AI Research Assistant</CardTitle>
              <CardDescription className="leading-relaxed group-hover:text-foreground transition-colors duration-300">
                An intelligent platform that helps researchers discover, analyze, 
                and synthesize information from vast academic databases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">Research</Badge>
                <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">NLP</Badge>
                <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">Education</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden group hover:shadow-floating transition-all duration-500 hover:-translate-y-3 animate-fade-in-up delay-75 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <div className="h-48 bg-gradient-to-br from-primary-glow/30 to-accent/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-floating opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4 w-6 h-6 bg-accent/30 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-primary-glow/30 rounded-xl group-hover:-rotate-12 transition-transform duration-300"></div>
            </div>
            <CardHeader className="group-hover:bg-primary/5 transition-colors duration-300">
              <CardTitle className="group-hover:text-primary transition-colors duration-300">Smart Learning Platform</CardTitle>
              <CardDescription className="leading-relaxed group-hover:text-foreground transition-colors duration-300">
                Personalized learning experiences powered by AI that adapt to 
                individual learning styles and pace.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">Education</Badge>
                <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">Personalization</Badge>
                <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">Students</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden group hover:shadow-floating transition-all duration-500 hover:-translate-y-3 animate-fade-in-up delay-150 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <div className="h-48 bg-gradient-to-br from-accent/30 to-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 w-7 h-7 bg-primary/25 rounded-lg group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300"></div>
              <div className="absolute bottom-4 left-4 w-9 h-9 bg-accent/25 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <CardHeader className="group-hover:bg-primary/5 transition-colors duration-300">
              <CardTitle className="group-hover:text-primary transition-colors duration-300">Business Intelligence Tool</CardTitle>
              <CardDescription className="leading-relaxed group-hover:text-foreground transition-colors duration-300">
                Advanced analytics and insights platform that helps organizations 
                make data-driven decisions with AI assistance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">Business</Badge>
                <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">Analytics</Badge>
                <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">Enterprise</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
