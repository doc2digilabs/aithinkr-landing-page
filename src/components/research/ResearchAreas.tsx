import { Brain, Code, Users, Zap } from "lucide-react";

const researchAreas = [
  {
    title: "Document Digitization",
    description:
      "We are developing advanced AI models for document digitization, enabling efficient data extraction and processing from various document formats.",
    icon: Brain,
    color: "text-blue-500",
  },
  {
    title: "Multimodal AI for regional languages",
    description:
      "We are developing multimodal AI models that can understand and generate content in regional languages, enhancing accessibility and usability.",
    icon: Code,
    color: "text-cyan-500",
  },
  {
    title: "Fine Tuning and Customization using LoRA, QLoRA and PEFT",
    description:
      "We are exploring advanced techniques like LoRA, QLoRA, and PEFT for fine-tuning and customizing large language models to improve performance on specific tasks.",
    icon: Zap,
    color: "text-green-500",
  },
  {
    title: "distilation, quantization and pruning of large language models",
    description:
      "We are researching methods to distill, quantize, and prune large language models to make them more efficient and accessible for various applications.",
    icon: Brain,
    color: "text-yellow-500",
  },
   {
    title: "AI for Education",
    description:
      "We are developing AI solutions to enhance the learning experience, including personalized learning, intelligent tutoring systems, and educational content generation.",
    icon: Zap,
    color: "text-indigo-500",
  },
  {
    title: "AI Healthcare",
    description:
      " We are developing AI solutions to improve healthcare outcomes, including diagnostics, patient care, and healthcare administration.",
    icon: Users,
    color: "text-purple-500",
  },
];

const ResearchAreas = () => {
  return (
    <section className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Research Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are working on a wide range of research areas to advance the
            state of the art in generative AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card rounded-xl p-6 shadow-tech hover:shadow-ai transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg bg-background ${area.color}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 font-display">
                  {area.title}
                </h3>

                <p className="text-muted-foreground">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
