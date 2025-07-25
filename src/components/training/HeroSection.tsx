import { Button } from "@/components/ui/button"
import { Calendar, Download, Sparkles, Users } from "lucide-react"
import heroImage from "@/assets/ai-hero-bg.jpg"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <section className="relative py-24 lg:py-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-card rounded-full px-4 py-2 mb-8 shadow-tech">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Next Batch Starts September 2025</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            AI Engineer Bootcamp
            <span className="block text-primary">2025</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-tech">
            Master AI & Machine Learning in 8 weeks. Build GPT applications, computer vision models, 
            and MLOps pipelines that matter in today's AI-driven world.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Weeks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            {/* <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Job Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Alumni</div>
            </div> */}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button variant="hero" size="xl" className="font-semibold shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                <Users className="w-5 h-5 mr-2" />
                Apply Now
              </Button>
            </Link>
            <div className="flex gap-4">
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
              <Button variant="ghost" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Join Info Session
              </Button>
            </div>
          </div>
          
          {/* Trust Indicators */}
          {/* <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Trusted by engineers at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-semibold">Google</span>
              <span className="text-lg font-semibold">Microsoft</span>
              <span className="text-lg font-semibold">OpenAI</span>
              <span className="text-lg font-semibold">Meta</span>
              <span className="text-lg font-semibold">Tesla</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default HeroSection