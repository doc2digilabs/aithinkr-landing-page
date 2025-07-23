import { Bot, Eye, FileText, GitBranch } from "lucide-react"

const projects = [
  {
    title: "GPT-Powered Chatbot",
    description: "Build an intelligent chatbot using OpenAI's GPT API with custom knowledge base and conversation memory.",
    icon: Bot,
    tech: ["OpenAI API", "LangChain", "Streamlit", "Vector DB"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Document OCR System", 
    description: "Create an OCR application that extracts and processes text from images and PDFs with high accuracy.",
    icon: FileText,
    tech: ["Tesseract", "OpenCV", "PyTorch", "FastAPI"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Computer Vision Model",
    description: "Develop object detection and image classification models for real-world applications.",
    icon: Eye,
    tech: ["YOLOv8", "TensorFlow", "OpenCV", "Roboflow"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "MLOps Pipeline",
    description: "Build end-to-end ML pipeline with automated training, testing, and deployment on cloud platforms.",
    icon: GitBranch,
    tech: ["MLflow", "Docker", "Kubernetes", "AWS/GCP"],
    gradient: "from-orange-500 to-red-500"
  }
]

const ProjectShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Build Real AI Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn by building production-ready AI applications that you can showcase in your portfolio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div 
                key={index}
                className="group relative bg-gradient-card rounded-xl p-8 shadow-tech hover:shadow-ai transition-all duration-300 hover:-translate-y-2 border border-border overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${project.gradient} text-white mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 font-display">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-background rounded-full border border-border text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-primary/5 rounded-lg p-4 border border-primary/20">
            <GitBranch className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="font-semibold">Portfolio Ready</div>
              <div className="text-sm text-muted-foreground">All projects include GitHub repos and deployment guides</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase