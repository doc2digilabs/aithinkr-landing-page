import { Brain, Code, Users, Zap } from "lucide-react";

const benefits = [
  {
    title: "Work on Cutting-Edge Research",
    description:
      "We are a research-driven company and we are passionate about pushing the boundaries of generative AI. You will have the opportunity to work on the most challenging problems in the field and publish your work at top conferences.",
    icon: Brain,
    color: "text-blue-500",
  },
  {
    title: "Build Products that Matter",
    description:
      "We are not just a research lab. We are a product-driven company and we are passionate about building products that will be used by millions of people. You will have the opportunity to work on products that will make a real impact on the world.",
    icon: Zap,
    color: "text-cyan-500",
  },
  {
    title: "Collaborate with a Talented Team",
    description:
      "We are a team of talented and passionate people who are dedicated to making a difference. You will have the opportunity to work with some of the best minds in the field and learn from them.",
    icon: Users,
    color: "text-indigo-500",
  },
  {
    title: "Grow Your Career",
    description:
      "We are committed to helping you grow your career. We offer a competitive salary, comprehensive benefits, and a supportive work environment. We will help you achieve your career goals.",
    icon: Code,
    color: "text-purple-500",
  },
];

const WhyJoinUs = () => {
  return (
    <section className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Why Join Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of researchers, engineers, and designers passionate
            about building the next generation of generative AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card rounded-xl p-6 shadow-tech hover:shadow-ai transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg bg-background ${benefit.color}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 font-display">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
