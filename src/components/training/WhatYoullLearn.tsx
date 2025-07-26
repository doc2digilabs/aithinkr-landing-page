import { Brain, Code, Database, Zap } from "lucide-react"

const modules = [
  {
    week: "Orientation Class - Free Class",
    title: "Foundations of AI Engineering",
    icon: Brain,
    topics: [
      "Why AI engineering is the most in-demand tech skill of this decade?",
      "What does an AI engineer actually do in the industry?",
      "What tools & domains you’ll learn and master in 75 days?",
      "Key principles for finding new use case",
      "Building trusted AI applications in the enterprise",
      "Understanding tools and Agents",
      "Understanding securiry and compliance needed for Enterprise AI applications",
      "Best practices : Enterprise AI application Evaluation strategy",
      "Overview Deployment of AI applications - MLOps, Build pipelines",
      "Demo Day vision: Final AI mini-project you’ll build",
      "How to make this course your job-winning portfolio?",      
    ],
    color: "text-blue-500"
  },
  {
    week: "Weeks 1", 
    title: "Development enviroment setup + Python Refresher for AI",
    icon: Code,
    topics: [
      "Setting up your AI development environment",
      "Introduction to Jupyter Notebooks",
      "Version control with Git and GitHub",      
      "NumPy, Pandas, and plotting with Matplotlib/Seaborn,scikit-learn,tensorflow",
      "Required Python libraries for AI",
      "Mini Project: Build a simple data analysis app using Python libraries",
      
    ],
    color: "text-cyan-500"
  },
  {
    week: "Weeks 2",
    title: "Core Machine Learning & Deployment Basics",
    icon: Zap,
    topics: [
      "Supervised vs Unsupervised Learning",
      "Linear regression,",
      "Model Evaluation Metrics (Accuracy, F1, ROC AUC, etc.)",
      "Hyperparameter optimization",
      "Neural Networks Fundamentals,Backpropagation and Activation Function",
      "Mini Project: Build and deploy a Salary Predictor Model",      
    ],
    color: "text-indigo-500"
  },
  {
    week: "Weeks 3 ",
    title: "Large Language Models & Generative AI",
    icon: Database,
    topics: [
      "What Are Word and Sentence Embeddings?",      
      "What is Similarity Between Sentences?",
      "What Is Attention in Language Models?",
      "What Are Transformer Models and How Do They Work?",
      "Mini Project: Finding similarity with aviation customer query dataset"
     ],
    color: "text-purple-500"
  },
  {
    week: "Weeks 4 ",
    title: "Prompt Engineering, Retrieval-Augmented Generation (RAG) & Fine-tuning",
    icon: Database,
    topics: [
      "How LLMs like GPT, Claude, Gemini work",      
      "Prompt Engineering (zero-shot, few-shot, chain-of-thought, Meta Prompting)",
      "RAG basics and Fine Tuning (e.g., using HuggingFace, LangChain)",
      "Mini Project: Build a personal chatbot using OpenAI API + LangChain + streamlit",
     ],
    color: "text-purple-500"
  },
  ,
  {
    week: "Weeks 5 ",
    title: "Function Calling, Tool Use & Agentic AI",
    icon: Database,
    topics: [
      " what is function calling and tool use in LLMs?",
      "Building function calling workflows with OpenAI API",
      "Integrating APIs and tools (e.g., web scraping, databases)",
      "Mini Project: Build an AI assistant that automates a task using function calling",
     ],
    color: "text-purple-500"
  },
  {
    week: "Weeks 5 ",
    title: "Agentic System - Workflows & Agent",
    icon: Database,
    topics: [
      "What are AI Agents, Tools, and Workflows?",
      "When (and when not) to use agents?",
      "Understanding Workflow: prompt Chaining,Routing,Parallelization, Orchestrator-workers,Evaluator-optimizer",
      "Learn Prompt Engineering for your Tools",
      "When and how to use frameworks like LangGraph, Google ADK",
      "Mini project: Build a customer query routing system"
      
     ],
    color: "text-purple-500"
  },
  {
    week: "Weeks 6 ",
    title: "Multi-Agent Systems and Guardrails",
    icon: Database,
    topics: [
      "What are Autonomous Agents?",
      "Building Autonomous Agents with ADK",
      "Integrating APIs and tools (e.g., web scraping, databases)",
      "Mini Project: Build an autonomous agent that automates a task using ADK",
     ],
    color: "text-purple-500"
  },
  {
    week: "Weeks 7 ",
    title: "Agentic AI - Multi-Agent Systems",
    icon: Database,
    topics: [
      "What are Multi-Agent Systems?",
      "Building Multi-Agent Systems with ADK",
      "Integrating APIs and tools (e.g., web scraping, databases)",
      "Mini Project: Build a multi-agent system that automates a task using ADK",
     ],
    color: "text-purple-500"
  },
  {
    week: "Week 8 ",
    title: "Agentic AI - Multi-Agent Systems",
    icon: Database,
    topics: [
      "What are Multi-Agent Systems?",
      "Building Multi-Agent Systems with ADK",
      "Integrating APIs and tools (e.g., web scraping, databases)",
      "Mini Project: Build a multi-agent system that automates a task using ADK",
     ],
    color: "text-purple-500"
  },
  {
    week: "Week 9 ",
    title: "MLOps + AI System Design",
    icon: Database,
    topics: [
      "What is MLOps and why it's critical",
      "Model lifecycle, versioning, CI/CD (DVC, MLflow, etc.)",
      "System Design for AI applications",
      "Mini Project: MLOps pipeline for a deployed model"
     ],
    color: "text-purple-500"
  },
  {
    week: "Week 10 ",
    title: "Applied AI Engineering Projects",
    icon: Database,
    topics: [
      "LLM-powered document Q&A bot",
      "CV-based medical diagnosis support system",
      "Fintech AI recommendation engine",
      "AI-powered customer support chatbot",
      "Real-world practices: logging, monitoring, scalability",
      "Mini Project: Voice-to-command personal assistant"
     ],
    color: "text-purple-500"
  },
  {
    week: "Week 11 ",
    title: "Demo Day",
    icon: Database,
    topics: [
      "LLM-powered document Q&A bot",
      "CV-based medical diagnosis support system",      
      "AI-powered customer support chatbot",
      "Real-world practices: logging, monitoring, scalability",
      "Mini Project: Voice-to-command personal assistant"
     ],
    color: "text-purple-500"
  },
  {
    week: "Week 12 ",
    title: "Career Preparation + Interview Prep",
    icon: Database,
    topics: [
      "Resume writing for AI engineers",
      "Mock interview (coding, ML concepts, system design)",      
      "GitHub + Portfolio project setup",
      "Final Demo Day Presentation",      
     ],
    color: "text-purple-500"
  }
]

const WhatYoullLearn = () => {
  return (
    <section className="py-8 bg-gradient-tech">
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
              <div className="text-sm text-muted-foreground">Build 10+ real projects throughout the courses</div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default WhatYoullLearn