import { Button } from "@/components/ui/button";
import { Check, Download } from "lucide-react";

const learningObjectives = [
  "Mastering Large Language Models (LLMs) and Prompt Engineering",
  "Building and deploying RAG (Retrieval-Augmented Generation) Systems",
  "Fine-tuning open-source models for specific tasks",
  "Developing with AI APIs like OpenAI, Anthropic, and Google AI",
  "Implementing robust MLOps pipelines for production environments",
  "Creating AI-powered applications with LangChain and Vector Databases",
  "Mastering computer vision techniques for real-world problems",
  "Understanding the ethical considerations and best practices in AI",
];

const WhatYouWillLearn = () => {
  const scrollToCurriculum = () => {
    const curriculumSection = document.getElementById("curriculum");
    if (curriculumSection) {
      curriculumSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-800">
              What You Will Learn
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our curriculum is designed to give you a comprehensive, hands-on understanding of the entire AI engineering stack. You'll go from fundamentals to advanced topics, equipping you with the skills to build and deploy real-world AI solutions.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {learningObjectives.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-md text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Button size="lg" onClick={scrollToCurriculum} >
              <Download className="mr-2 h-5 w-5" />
                   See Full Curriculum
            </Button>
          </div>
          <div className="hidden md:block rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Student learning AI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
