import { Brain, Code, Users, Zap } from "lucide-react";

const features = [
  {
    title: "Powerful AI Models",
    description:
      "Access a wide range of state-of-the-art generative AI models, including language, image, and audio models.",
    icon: Brain,
    color: "text-blue-500",
  },
  {
    title: "Easy-to-Use API",
    description:
      "Integrate our AI models into your applications with our simple and powerful API. Get started in minutes.",
    icon: Code,
    color: "text-cyan-500",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Our platform is built on a scalable infrastructure that can handle millions of requests per second. Scale your applications with ease.",
    icon: Zap,
    color: "text-indigo-500",
  },
  {
    title: "Developer-Friendly Tools",
    description:
      "We provide a suite of developer-friendly tools to help you build, deploy, and manage your generative AI applications.",
    icon: Users,
    color: "text-purple-500",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build and scale your generative AI
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card rounded-xl p-6 shadow-tech hover:shadow-ai transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg bg-background ${feature.color}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 font-display">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
