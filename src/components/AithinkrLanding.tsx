import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Users, Lightbulb, Target, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-aithinkr.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import featuresImage from "@/assets/features-icons.jpg";
import { Link } from "react-router-dom";
import { NavigationBar } from "@/components/layout/NavigationBar";
  

const AithinkrLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />

      {/* Hero Section */}
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
                <Badge variant="secondary" className="w-fit animate-bounce-gentle shadow-lifted">
                  🚀 Now in Beta
                </Badge>
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
                <Button size="lg" className="text-lg px-8 group hover:shadow-floating transition-all duration-300 hover:-translate-y-1">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 hover:shadow-lifted transition-all duration-300 hover:-translate-y-1">
                  Watch Demo
                </Button>
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

      {/* About Section */}
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

      {/* Features/Departments Section */}
      <section id="features" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-xl">Our Departments</Badge>
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
          </div>
        </div>
      </section>

      {/* Project Showcase */}
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

      {/* Careers Section */}
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
                  <span>Product Internship</span>
                </CardTitle>
                <CardDescription>
                  Build product for our AI platform suite.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap mb-4">
                  <Badge variant="outline">Full-time</Badge>
                  <Badge variant="outline">Hybrid</Badge>
                  <Badge variant="outline">Junior-level</Badge>
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
              Contact us
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
                <span className="font-bold text-lg">AiThinkr</span>
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
                  <span>+91 9007915334</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kolkata, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 AiThinkr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AithinkrLanding;
