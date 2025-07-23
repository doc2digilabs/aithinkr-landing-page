import { 
  Brain, Code, Database, Cloud, 
  Cpu, Layers, Zap, GitBranch 
} from "lucide-react"

const technologies = [
  {
    category: "AI/ML Frameworks",
    icon: Brain,
    tools: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"],
    color: "text-blue-500"
  },
  {
    category: "Programming Languages",
    icon: Code,
    tools: ["Python", "JavaScript", "SQL", "R"],
    color: "text-green-500"
  },
  {
    category: "AI APIs & Services",
    icon: Zap,
    tools: ["OpenAI API", "LangChain", "Anthropic", "Cohere"],
    color: "text-purple-500"
  },
  {
    category: "Data & Databases",
    icon: Database,
    tools: ["PostgreSQL", "MongoDB", "Pinecone", "Weaviate"],
    color: "text-cyan-500"
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    tools: ["AWS", "Google Cloud", "Azure", "Hugging Face Spaces"],
    color: "text-orange-500"
  },
  {
    category: "Computer Vision",
    icon: Layers,
    tools: ["OpenCV", "YOLO", "Roboflow", "Detectron2"],
    color: "text-pink-500"
  },
  {
    category: "MLOps Tools",
    icon: GitBranch,
    tools: ["MLflow", "Docker", "Kubernetes", "GitHub Actions"],
    color: "text-indigo-500"
  },
  {
    category: "Development Tools",
    icon: Cpu,
    tools: ["Jupyter", "VS Code", "Git", "Streamlit"],
    color: "text-teal-500"
  }
]

const ToolsTechnologies = () => {
  return (
    <section className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Tools & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the industry-standard tools used by top AI companies worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div 
                key={index}
                className="bg-gradient-card rounded-xl p-6 shadow-tech hover:shadow-ai transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-background ${tech.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="ml-3 font-semibold text-sm font-display">
                    {tech.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex}
                      className="text-xs font-medium text-center py-2 px-3 bg-background rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-card rounded-lg p-4 shadow-tech">
            <Cpu className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="font-semibold">Industry Standard</div>
              <div className="text-sm text-muted-foreground">Learn the exact tools used by AI engineers at top companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolsTechnologies