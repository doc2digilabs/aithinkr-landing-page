import { Brain, Code, Users, Zap } from "lucide-react";

const researchAreas = [
  {
    title: "Language Models",
    description:
      "We are working on developing the next generation of large language models that are more powerful, efficient, and safe.",
    icon: Brain,
    color: "text-blue-500",
  },
  {
    title: "Multimodal AI",
    description:
      "We are building AI models that can understand and generate not just text, but also images, audio, and video.",
    icon: Code,
    color: "text-cyan-500",
  },
  {
    title: "AI for Science",
    description:
      "We are using AI to accelerate scientific discovery in areas such as drug discovery, materials science, and climate change.",
    icon: Zap,
    color: "text-indigo-500",
  },
  {
    title: "AI Safety",
    description:
      "We are committed to developing AI that is safe, ethical, and beneficial to society. We are working on a range of technical and policy challenges to ensure that AI is developed and used responsibly.",
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
