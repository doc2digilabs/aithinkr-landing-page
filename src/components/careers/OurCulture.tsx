import { Users, Brain, Zap } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";
import researchImage from "@/assets/ai-hero-bg.jpg";
import impactImage from "@/assets/features-icons.jpg";

const culture = [
  {
    title: "Collaboration",
    description:
      "We believe that the best ideas come from collaboration. We work together in a supportive and inclusive environment where everyone's voice is heard.",
    icon: Users,
    image: teamImage,
  },
  {
    title: "Innovation",
    description:
      "We are passionate about innovation and we are always looking for new and better ways to do things. We encourage our team to experiment and take risks.",
    icon: Brain,
    image: researchImage,
  },
  {
    title: "Impact",
    description:
      "We are driven by our desire to make a positive impact on the world. We are building products that will solve real-world problems and improve people's lives.",
    icon: Zap,
    image: impactImage,
  },
];

const OurCulture = () => {
  return (
    <section className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our Culture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate and talented individuals who are
            dedicated to making a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {culture.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-xl p-8 shadow-tech hover:shadow-ai transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-background text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold ml-4 font-display">
                  {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCulture;
