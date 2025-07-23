import { Brain, Code, Database, Zap } from "lucide-react"

const modules = [
  {
    week: "Weeks 1-2",
    title: "AI Fundamentals & Python",
    icon: Brain,
    topics: [
      "Machine Learning Basics",
      "Python for AI/ML",
      "NumPy & Pandas",
      "Data Preprocessing",
      "Statistics & Linear Algebra"
    ],
    color: "text-blue-500"
  },
  {
    week: "Weeks 3-4", 
    title: "Deep Learning & NLP",
    icon: Code,
    topics: [
      "Neural Networks",
      "PyTorch & TensorFlow",
      "Natural Language Processing",
      "Transformer Models",
      "GPT & BERT Implementation"
    ],
    color: "text-cyan-500"
  },
  {
    week: "Weeks 5-6",
    title: "LangChain & AI Apps",
    icon: Zap,
    topics: [
      "OpenAI API Integration",
      "LangChain Framework",
      "Vector Databases",
      "RAG Applications",
      "Chatbot Development"
    ],
    color: "text-indigo-500"
  },
  {
    week: "Weeks 7-8",
    title: "MLOps & Production",
    icon: Database,
    topics: [
      "Model Deployment",
      "Docker & Kubernetes",
      "CI/CD for ML",
      "Monitoring & Scaling",
      "Cloud Platforms (AWS/GCP)"
    ],
    color: "text-purple-500"
  }
]

const WhatYoullLearn = () => {
  return (
    <section className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What You'll Learn
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive 8-week curriculum takes you from AI basics to production-ready applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon
            return (
              <div 
                key={index}
                className="bg-gradient-card rounded-xl p-6 shadow-tech hover:shadow-ai transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-background ${module.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="ml-3 text-sm font-medium text-primary">
                    {module.week}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 font-display">
                  {module.title}
                </h3>
                
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li 
                      key={topicIndex}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-card rounded-lg p-4 shadow-tech">
            <Brain className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="font-semibold">Hands-on Learning</div>
              <div className="text-sm text-muted-foreground">Build 12+ real projects throughout the bootcamp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatYoullLearn