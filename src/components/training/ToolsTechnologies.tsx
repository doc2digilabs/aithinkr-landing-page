import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const technologies = [
  // { name: "PyTorch", logo: "/logos/pytorch.svg", description: "A popular open-source machine learning library." },
  // { name: "TensorFlow", logo: "/logos/tensorflow.svg", description: "An end-to-end open-source platform for machine learning." },
  // { name: "Scikit-learn", logo: "/logos/scikit-learn.svg", description: "A machine learning library for Python." },
  // { name: "Hugging Face", logo: "/logos/hugging-face.svg", description: "A community and data science platform for AI." },
  // { name: "Python", logo: "/logos/python.svg", description: "A high-level, general-purpose programming language." },
  // { name: "JavaScript", logo: "/logos/javascript.svg", description: "A programming language that conforms to the ECMAScript specification." },
  // { name: "SQL", logo: "/logos/sql.svg", description: "A domain-specific language used in programming and designed for managing data held in a relational database management system." },
  // { name: "OpenAI API", logo: "/logos/openai.svg", description: "An API for accessing new AI models developed by OpenAI." },
  // { name: "LangChain", logo: "/logos/langchain.svg", description: "A framework for developing applications powered by language models." },
  // { name: "PostgreSQL", logo: "/logos/postgresql.svg", description: "A free and open-source relational database management system." },
  // { name: "MongoDB", logo: "/logos/mongodb.svg", description: "A source-available cross-platform document-oriented database program." },
  // { name: "Pinecone", logo: "/logos/pinecone.svg", description: "A vector database for machine learning applications." },
  // { name: "AWS", logo: "/logos/aws.svg", description: "A subsidiary of Amazon providing on-demand cloud computing platforms and APIs." },
  // { name: "Google Cloud", logo: "/logos/google-cloud.svg", description: "A suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products." },
  // { name: "Azure", logo: "/logos/azure.svg", description: "A cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers." },
  // { name: "OpenCV", logo: "/logos/opencv.svg", description: "A library of programming functions mainly aimed at real-time computer vision." },
  // { name: "YOLO", logo: "/logos/yolo.svg", description: "A real-time object detection system." },
  // { name: "MLflow", logo: "/logos/mlflow.svg", description: "An open source platform to manage the ML lifecycle, including experimentation, reproducibility, deployment, and a central model registry." },
  // { name: "Docker", logo: "/logos/docker.svg", description: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers." },
  // { name: "Kubernetes", logo: "/logos/kubernetes.svg", description: "An open-source container-orchestration system for automating computer application deployment, scaling, and management." },
];

const ToolsTechnologies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
            Master the Tools of the Trade
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            You'll gain hands-on experience with the same industry-standard technologies used by leading AI companies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech, index) => (
            <TooltipProvider key={index} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-gray-100 rounded-lg p-4 transition-all duration-300 hover:bg-gray-200 hover:shadow-md hover:-translate-y-1">
                    <img src={tech.logo} alt={tech.name} className="h-12 w-12" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">{tech.name}</p>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsTechnologies