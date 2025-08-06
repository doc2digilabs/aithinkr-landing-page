import { Brain, Database, Rocket, TrendingUp, IndianRupee , MapPin } from "lucide-react"

const roles = [
  {
    title: "AI/ML Engineer",
    description: "Design and implement machine learning algorithms and AI systems for real-world applications",
    salary: "12L - 20L",
    icon: Brain,
    skills: ["Deep Learning", "Python", "TensorFlow", "Model Deployment"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "LLM Developer",
    description: "Build applications using Large Language Models and develop custom AI-powered solutions",
    salary: "8L - 16L", 
    icon: Rocket,
    skills: ["LangChain", "OpenAI API", "Vector DBs", "Prompt Engineering"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "MLOps Engineer",
    description: "Build and maintain ML infrastructure, CI/CD pipelines, and production ML systems",
    salary: "10L - 15L",
    icon: Database,
    skills: ["Docker", "Kubernetes", "MLflow", "Cloud Platforms"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "AI Product Manager",
    description: "Lead AI product development and strategy, bridging technical and business requirements",
    salary: "40L - 60L",
    icon: TrendingUp,
    skills: ["AI Strategy", "Product Management", "Technical Writing", "Analytics"],
    gradient: "from-orange-500 to-red-500"
  }
]

const CareerOutcomes = () => {
  return (
    <section className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Career Outcomes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our graduates land high-impact AI roles at leading companies worldwide
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {roles.map((role, index) => {
            const IconComponent = role.icon
            return (
              <div 
                key={index}
                className="group relative bg-gradient-card rounded-xl p-8 shadow-tech hover:shadow-ai transition-all duration-300 hover:-translate-y-2 border border-border overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${role.gradient} opacity-10 rounded-full blur-xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${role.gradient} text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-green-600 font-semibold">
                        <IndianRupee  className="w-4 h-4 mr-1" />
                        {role.salary}
                      </div>
                      <div className="text-xs text-muted-foreground">Annual Salary</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 font-display">
                    {role.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {role.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium bg-background rounded-full border border-border text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* <div>
                    <h4 className="font-semibold text-sm mb-3">Hiring Companies:</h4>
                    <div className="flex flex-wrap gap-3">
                      {role.companies.map((company, companyIndex) => (
                        <span 
                          key={companyIndex}
                          className="text-sm text-muted-foreground font-medium"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Success Stats */}
        {/* <div className="bg-gradient-card rounded-xl p-8 shadow-tech border border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$145k</div>
              <div className="text-sm text-muted-foreground">Average Starting Salary</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6 weeks</div>
              <div className="text-sm text-muted-foreground">Average Time to Job</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Alumni Network</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default CareerOutcomes