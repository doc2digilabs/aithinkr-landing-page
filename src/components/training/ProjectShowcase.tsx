import { Bot, Eye, FileText, GitBranch } from "lucide-react"

const projects = [
  {
    title: "GPT-Powered Chatbot",
    description: "Build an intelligent chatbot using OpenAI's GPT API with a custom knowledge base and conversation memory.",
    image: "/placeholder.svg",
    tech: ["OpenAI API", "LangChain", "Streamlit", "Vector DB"],
  },
  {
    title: "Document OCR System", 
    description: "Create an OCR application that extracts and processes text from images and PDFs with high accuracy.",
    image: "/placeholder.svg",
    tech: ["Tesseract", "OpenCV", "PyTorch", "FastAPI"],
  },
  {
    title: "Computer Vision Model",
    description: "Develop object detection and image classification models for real-world applications.",
    image: "/placeholder.svg",
    tech: ["YOLOv8", "TensorFlow", "OpenCV", "Roboflow"],
  },
  {
    title: "MLOps Pipeline",
    description: "Build an end-to-end ML pipeline with automated training, testing, and deployment on cloud platforms.",
    image: "/placeholder.svg",
    tech: ["MLflow", "Docker", "Kubernetes", "AWS/GCP"],
  }
]

const ProjectShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
            Build Real-World AI Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our curriculum is built around hands-on projects that you can showcase in your portfolio, proving your skills to employers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-display mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-base flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase