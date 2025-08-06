
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const curriculumData = {
  "AI curriculum": "12-week AI Engineering Training Curriculum",
  "training-curriculam": [    
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

const CurriculumAccordion: React.FC = () => {
  const handleDownload = () => {
    const scrollToCurriculum = () => {
      const curriculumSection = document.getElementById("curriculum");
      if (curriculumSection) {
        curriculumSection.scrollIntoView({ behavior: "smooth" });
      }
    };
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

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            12-Week AI Engineering Curriculum
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A comprehensive, hands-on curriculum designed to make you a job-ready AI Engineer.
          </p>
        </div>

        <div id="curriculum-content">
          <Accordion type="single" collapsible className="w-full">
            {curriculumData['training-curriculam'].map((week, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-xl font-semibold text-blue-700 hover:text-blue-900">
                  {week.week}: {week.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-gray-700 pl-4">
                    {week.topics.map((topic, i) => (
                      <li key={i} className="mb-2">{topic}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-8">
          <Button onClick={handleDownload}>Download Full Curriculum (PDF)</Button>
        </div>
      </div>
    </div>
  );
};

export default CurriculumAccordion;
