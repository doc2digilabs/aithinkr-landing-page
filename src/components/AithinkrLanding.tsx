import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Users, Lightbulb, Target, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-aithinkr.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import featuresImage from "@/assets/features-icons.jpg";

const AithinkrLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Brain className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block">Aithinkr</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-primary">About</a>
              <a href="#features" className="transition-colors hover:text-primary">Features</a>
              <a href="#showcase" className="transition-colors hover:text-primary">Projects</a>
              <a href="#careers" className="transition-colors hover:text-primary">Careers</a>
            </nav>
            <Button size="sm" className="ml-4">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-background"></div>
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🚀 Now in Beta
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Think Smarter,{" "}
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    Innovate Faster
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Empowering students, professionals, and organizations with AI-driven solutions 
                  that enhance thinking, accelerate research, and transform ideas into reality.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"></div>
                    <div className="w-8 h-8 rounded-full bg-primary-glow/20 border-2 border-background"></div>
                    <div className="w-8 h-8 rounded-full bg-accent border-2 border-background"></div>
                  </div>
                  <span>10k+ users</span>
                </div>
                <div>⭐ 4.9/5 rating</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl transform rotate-3"></div>
              <img 
                src={heroImage} 
                alt="AI Innovation" 
                className="relative rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-subtle">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Mission</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Bridging Human Intelligence with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Aithinkr, we believe that the future lies in the seamless collaboration between 
              human creativity and artificial intelligence. Our platform democratizes access to 
              advanced AI tools, making them accessible to everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To create a world where AI amplifies human potential, enabling breakthrough 
                  discoveries, innovative solutions, and meaningful progress across all fields 
                  of human endeavor.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Why Choose Aithinkr?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Cutting-edge AI research and development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>User-friendly tools for all skill levels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Collaborative ecosystem for innovation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Team Collaboration" 
                className="rounded-xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features/Departments Section */}
      <section id="features" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Departments</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Four Pillars of Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our specialized departments work in harmony to deliver comprehensive AI solutions 
              that drive real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Research</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Pioneering AI research that pushes the boundaries of what's possible. 
                  From machine learning to neural networks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Product Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Transforming research into practical, user-friendly products that 
                  solve real-world problems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Comprehensive education programs to help individuals and organizations 
                  harness the power of AI.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Customer Relations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Dedicated support and partnership development to ensure success 
                  for every client and user.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section id="showcase" className="py-24 bg-gradient-subtle">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Work</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Transforming Ideas into Reality
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore some of our latest projects and see how we're making AI accessible 
              and impactful across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary-glow/20"></div>
              <CardHeader>
                <CardTitle>AI Research Assistant</CardTitle>
                <CardDescription>
                  An intelligent platform that helps researchers discover, analyze, 
                  and synthesize information from vast academic databases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">Research</Badge>
                  <Badge variant="outline" className="text-xs">NLP</Badge>
                  <Badge variant="outline" className="text-xs">Education</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-glow/20 to-accent/20"></div>
              <CardHeader>
                <CardTitle>Smart Learning Platform</CardTitle>
                <CardDescription>
                  Personalized learning experiences powered by AI that adapt to 
                  individual learning styles and pace.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">Education</Badge>
                  <Badge variant="outline" className="text-xs">Personalization</Badge>
                  <Badge variant="outline" className="text-xs">Students</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20"></div>
              <CardHeader>
                <CardTitle>Business Intelligence Tool</CardTitle>
                <CardDescription>
                  Advanced analytics and insights platform that helps organizations 
                  make data-driven decisions with AI assistance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">Business</Badge>
                  <Badge variant="outline" className="text-xs">Analytics</Badge>
                  <Badge variant="outline" className="text-xs">Enterprise</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Join Our Team</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Shape the Future of AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a passionate team of innovators, researchers, and builders who are 
              dedicated to making AI accessible and beneficial for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>AI Research Scientist</span>
                </CardTitle>
                <CardDescription>
                  Lead cutting-edge research in machine learning and AI. PhD preferred.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap mb-4">
                  <Badge variant="outline">Full-time</Badge>
                  <Badge variant="outline">Remote</Badge>
                  <Badge variant="outline">Senior</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Product Manager</span>
                </CardTitle>
                <CardDescription>
                  Drive product strategy and development for our AI platform suite.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap mb-4">
                  <Badge variant="outline">Full-time</Badge>
                  <Badge variant="outline">Hybrid</Badge>
                  <Badge variant="outline">Mid-level</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? We're always looking for talented individuals.
            </p>
            <Button variant="outline">
              View All Openings
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t">
        <div className="container py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Aithinkr</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Empowering minds with AI to think smarter and innovate faster.
              </p>
              <div className="flex space-x-4">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@aithinkr.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Aithinkr. All rights reserved. Built with React and deployed on Netlify.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AithinkrLanding;