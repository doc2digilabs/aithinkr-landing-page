import { Brain, Code, Users, Zap } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description:
      "We are passionate about innovation and we are always looking for new and better ways to do things. We encourage our team to experiment and take risks.",
    icon: Brain,
    color: "text-blue-500",
  },
  {
    title: "Collaboration",
    description:
      "We believe that the best ideas come from collaboration. We work together in a supportive and inclusive environment where everyone's voice is heard.",
    icon: Users,
    color: "text-cyan-500",
  },
  {
    title: "Impact",
    description:
      "We are driven by our desire to make a positive impact on the world. We are building products that will solve real-world problems and improve people's lives.",
    icon: Zap,
    color: "text-indigo-500",
  },
  {
    title: "Integrity",
    description:
      "We are committed to the highest standards of integrity. We are honest, transparent, and accountable for our actions.",
    icon: Code,
    color: "text-purple-500",
  },
];

const OurValues = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our values guide everything we do, from our research to our products
            to our culture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card rounded-xl p-6 shadow-tech hover:shadow-ai transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg bg-background ${value.color}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 font-display">
                  {value.title}
                </h3>

                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
