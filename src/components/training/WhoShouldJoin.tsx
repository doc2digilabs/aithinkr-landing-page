import { GraduationCap, Briefcase, Code, TrendingUp } from "lucide-react"

const profiles = [
  {
    title: "Computer Science Students",
    description: "Final year students and recent graduates looking to specialize in AI and land high-paying tech jobs",
    icon: GraduationCap,
    benefits: [
      "Career-focused curriculum",
      "Industry mentorship",
      "Job placement assistance",
      "Portfolio development"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Software Developers",
    description: "Experienced developers wanting to transition into AI/ML roles and stay ahead of the technology curve",
    icon: Code,
    benefits: [
      "Leverage existing skills",
      "Fast-track AI learning",
      "Practical implementation",
      "Career advancement"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Working Professionals",
    description: "Professionals in analytics, product, or consulting roles seeking to add AI capabilities to their skillset",
    icon: Briefcase,
    benefits: [
      "Weekend-friendly schedule",
      "Real-world applications",
      "Industry connections",
      "Flexible learning path"
    ],
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Entrepreneurs & Founders",
    description: "Startup founders and business leaders who want to understand and implement AI in their ventures",
    icon: TrendingUp,
    benefits: [
      "Strategic AI understanding",
      "Technical implementation",
      "Cost-effective solutions",
      "Competitive advantage"
    ],
    gradient: "from-orange-500 to-red-500"
  }
]

const WhoShouldJoin = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Who Should Join?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our bootcamp is designed for ambitious individuals ready to master AI and accelerate their careers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon
            return (
              <div 
                key={index}
                className="group relative bg-gradient-card rounded-xl p-8 shadow-tech hover:shadow-ai transition-all duration-300 hover:-translate-y-2 border border-border overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${profile.gradient} opacity-10 rounded-full blur-xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${profile.gradient} text-white mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 font-display">
                    {profile.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {profile.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground mb-3">What you'll gain:</h4>
                    {profile.benefits.map((benefit, benefitIndex) => (
                      <div 
                        key={benefitIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-primary/5 rounded-lg p-4 border border-primary/20">
            <GraduationCap className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="font-semibold">No Prerequisites Required</div>
              <div className="text-sm text-muted-foreground">Basic programming knowledge is helpful but not mandatory</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoShouldJoin