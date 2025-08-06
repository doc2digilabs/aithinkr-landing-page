
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';

const curriculumData = {
  "AI curriculum": "12-week AI Engineering Training Curriculum",
  "training-curriculam": [
    {
      week: "Orientation Class - Free Class",
      title: "Foundations of AI Engineering",
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
    },
    {
      week: "Weeks 1",
      title: "Development enviroment setup + Python Refresher for AI",
      topics: [
        "Setting up your AI development environment",
        "Introduction to Jupyter Notebooks",
        "Version control with Git and GitHub",
        "NumPy, Pandas, and plotting with Matplotlib/Seaborn,scikit-learn,tensorflow",
        "Required Python libraries for AI",
        "Mini Project: Build a simple data analysis app using Python libraries",
      ],
    },
    {
      week: "Weeks 2",
      title: "Core Machine Learning & Deployment Basics",
      topics: [
        "Supervised vs Unsupervised Learning",
        "Linear regression,",
        "Model Evaluation Metrics (Accuracy, F1, ROC AUC, etc.)",
        "Hyperparameter optimization",
        "Neural Networks Fundamentals,Backpropagation and Activation Function",
        "Mini Project: Build and deploy a Salary Predictor Model",
      ],
    },
    {
      week: "Weeks 3 ",
      title: "Large Language Models & Generative AI",
      topics: [
        "What Are Word and Sentence Embeddings?",
        "What is Similarity Between Sentences?",
        "What Is Attention in Language Models?",
        "What Are Transformer Models and How Do They Work?",
        "Mini Project: Finding similarity with aviation customer query dataset"
      ],
    },
    {
      week: "Weeks 4 ",
      title: "Prompt Engineering, Retrieval-Augmented Generation (RAG) & Fine-tuning",
      topics: [
        "How LLMs like GPT, Claude, Gemini work",
        "Prompt Engineering (zero-shot, few-shot, chain-of-thought, Meta Prompting)",
        "RAG basics and Fine Tuning (e.g., using HuggingFace, LangChain)",
        "Mini Project: Build a personal chatbot using OpenAI API + LangChain + streamlit",
      ],
    },
    {
      week: "Weeks 5 ",
      title: "Function Calling, Tool Use & Agentic AI",
      topics: [
        " what is function calling and tool use in LLMs?",
        "Building function calling workflows with OpenAI API",
        "Integrating APIs and tools (e.g., web scraping, databases)",
        "Mini Project: Build an AI assistant that automates a task using function calling",
      ],
    },
    {
      week: "Weeks 5 ",
      title: "Agentic System - Workflows & Agent",
      topics: [
        "What are AI Agents, Tools, and Workflows?",
        "When (and when not) to use agents?",
        "Understanding Workflow: prompt Chaining,Routing,Parallelization, Orchestrator-workers,Evaluator-optimizer",
        "Learn Prompt Engineering for your Tools",
        "When and how to use frameworks like LangGraph, Google ADK",
        "Mini project: Build a customer query routing system"
      ],
    },
    {
      week: "Weeks 6 ",
      title: "Multi-Agent Systems and Guardrails",
      topics: [
        "What are Autonomous Agents?",
        "Building Autonomous Agents with ADK",
        "Integrating APIs and tools (e.g., web scraping, databases)",
        "Mini Project: Build an autonomous agent that automates a task using ADK",
      ],
    },
    {
      week: "Weeks 7 ",
      title: "Agentic AI - Multi-Agent Systems",
      topics: [
        "What are Multi-Agent Systems?",
        "Building Multi-Agent Systems with ADK",
        "Integrating APIs and tools (e.g., web scraping, databases)",
        "Mini Project: Build a multi-agent system that automates a task using ADK",
      ],
    },
    {
      week: "Week 8 ",
      title: "Agentic AI - Multi-Agent Systems",
      topics: [
        "What are Multi-Agent Systems?",
        "Building Multi-Agent Systems with ADK",
        "Integrating APIs and tools (e.g., web scraping, databases)",
        "Mini Project: Build a multi-agent system that automates a task using ADK",
      ],
    },
    {
      week: "Week 9 ",
      title: "MLOps + AI System Design",
      topics: [
        "What is MLOps and why it's critical",
        "Model lifecycle, versioning, CI/CD (DVC, MLflow, etc.)",
        "System Design for AI applications",
        "Mini Project: MLOps pipeline for a deployed model"
      ],
    },
    {
      week: "Week 10 ",
      title: "Applied AI Engineering Projects",
      topics: [
        "LLM-powered document Q&A bot",
        "CV-based medical diagnosis support system",
        "Fintech AI recommendation engine",
        "AI-powered customer support chatbot",
        "Real-world practices: logging, monitoring, scalability",
        "Mini Project: Voice-to-command personal assistant"
      ],
    },
    {
      week: "Week 11 ",
      title: "Demo Day",
      topics: [
        "LLM-powered document Q&A bot",
        "CV-based medical diagnosis support system",
        "AI-powered customer support chatbot",
        "Real-world practices: logging, monitoring, scalability",
        "Mini Project: Voice-to-command personal assistant"
      ],
    },
    {
      week: "Week 12 ",
      title: "Career Preparation + Interview Prep",
      topics: [
        "Resume writing for AI engineers",
        "Mock interview (coding, ML concepts, system design)",
        "GitHub + Portfolio project setup",
        "Final Demo Day Presentation",
      ],
    }
  ]
};

const DownloadCurriculum: React.FC = () => {
  const handleDownload = () => {
    const input = document.getElementById('curriculum-content');
    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const ratio = canvasWidth / canvasHeight;
        const width = pdfWidth;
        const height = width / ratio;

        let position = 0;
        let heightLeft = height;

        pdf.addImage(imgData, 'PNG', 0, position, width, height);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
          position = heightLeft - height;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, width, height);
          heightLeft -= pdfHeight;
        }

        pdf.save('AI-Engineering-Curriculum.pdf');
      });
    }
  };

  const curriculum = curriculumData['training-curriculam'];
  const itemsPerColumn = Math.ceil(curriculum.length / 3);
  const columns = Array.from({ length: 3 }, (_, colIndex) => {
    const start = colIndex * itemsPerColumn;
    const end = start + itemsPerColumn;
    return curriculum.slice(start, end);
  });

  const borderColors = [
    "border-blue-500",
    "border-green-500",
    "border-purple-500",
    "border-yellow-500",
    "border-pink-500",
    "border-indigo-500",
    "border-red-500",
    "border-teal-500",
  ];

  return (
    <div>
      <div id="curriculum-content" className="p-8 bg-white text-gray-800 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Aithinkr</h1>
          <p className="text-xl text-gray-600">12-week AI Engineering Training Curriculum</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {column.map((week, weekIndex) => {
                const colorIndex = (colIndex * itemsPerColumn + weekIndex) % borderColors.length;
                const borderColor = borderColors[colorIndex];
                return (
                  <div key={weekIndex} className={`p-4 border-l-4 ${borderColor} bg-gray-50 rounded-r-lg h-96 overflow-y-auto`}>
                    <h2 className="text-lg font-semibold text-gray-800">{week.week}</h2>
                    <h3 className="text-md font-medium text-gray-700 mb-2">{week.title}</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {week.topics.map((topic, i) => (
                        <li key={i} className="mb-1">{topic}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center my-8">
        <Button onClick={handleDownload}>Download Curriculum</Button>
      </div>
    </div>
  );
};

export default DownloadCurriculum;
