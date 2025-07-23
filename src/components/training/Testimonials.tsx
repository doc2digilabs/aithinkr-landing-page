import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "ML Engineer at Google",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9a61c5a?w=100&h=100&fit=crop&crop=face",
    content: "The AI Engineer Bootcamp completely transformed my career. I went from a frontend developer to an ML Engineer at Google in just 4 months after graduation. The curriculum is incredibly practical and the instructors are world-class.",
    rating: 5,
    previousRole: "Frontend Developer",
    salaryIncrease: "+180%"
  },
  {
    name: "Marcus Rodriguez",
    role: "AI Product Manager at Meta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "This bootcamp gave me the technical depth I needed to lead AI initiatives at Meta. The hands-on projects and MLOps training were game-changers. I now confidently bridge the gap between technical and business teams.",
    rating: 5,
    previousRole: "Product Manager",
    salaryIncrease: "+85%"
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our graduates who've transformed their careers with AI
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-gradient-card rounded-xl p-8 shadow-tech hover:shadow-ai transition-all duration-300 border border-border"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">Previously: {testimonial.previousRole}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-semibold text-green-600">{testimonial.salaryIncrease}</div>
                  <div className="text-xs text-muted-foreground">Salary Increase</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-primary/5 rounded-lg p-4 border border-primary/20">
            <Star className="w-8 h-8 text-primary fill-current" />
            <div className="text-left">
              <div className="font-semibold">4.9/5 Average Rating</div>
              <div className="text-sm text-muted-foreground">Based on 200+ graduate reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials