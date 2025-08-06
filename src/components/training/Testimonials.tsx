import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "ML Engineer at Google",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9a61c5a?w=100&h=100&fit=crop&crop=face",
    content: "The AI Engineer Bootcamp completely transformed my career. I went from a frontend developer to an ML Engineer at Google in just 4 months. The curriculum is incredibly practical and the instructors are world-class.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "AI Product Manager at Meta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "This bootcamp gave me the technical depth I needed to lead AI initiatives at Meta. The hands-on projects and MLOps training were game-changers. I now confidently bridge the gap between technical and business teams.",
    rating: 5,
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
            Trusted by Aspiring AI Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our hands-on training has launched careers at top tech companies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-600 mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                />
                <div>
                  <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
                  <div className="text-md text-primary font-medium">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials