import { GraduationCap, Briefcase, Code, TrendingUp } from "lucide-react"

const profiles = [
  {
    title: "CS Students & Grads",
    description: "Launch your career by specializing in the most in-demand field of technology.",
    icon: GraduationCap,
  },
  {
    title: "Software Developers",
    description: "Transition from traditional software engineering to a high-growth AI-focused role.",
    icon: Code,
  },
  {
    title: "Product Managers",
    description: "Gain the technical literacy to lead AI product development and strategy.",
    icon: Briefcase,
  },
  {
    title: "Tech Entrepreneurs",
    description: "Learn to build and integrate AI-powered features into your startup or business.",
    icon: TrendingUp,
  }
]

const WhoShouldJoin = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
            Is This Program For You?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our program is designed for ambitious individuals who want to be at the forefront of the AI revolution. If you fit one of these profiles, you're in the right place.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/80"
              >
                <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold font-display mb-2 text-gray-900">
                  {profile.title}
                </h3>
                
                <p className="text-muted-foreground text-base">
                  {profile.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhoShouldJoin