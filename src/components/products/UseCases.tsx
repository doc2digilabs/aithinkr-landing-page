import { Bot, FileText, Code } from "lucide-react";
import chatbotImage from "@/assets/team-collaboration.jpg";
import contentImage from "@/assets/ai-hero-bg.jpg";
import codeImage from "@/assets/features-icons.jpg";

const useCases = [
  {
    title: "Chatbot Development",
    description:
      "Create intelligent chatbots that can handle customer queries, provide support, and enhance user engagement. Our AI-powered chatbots learn from interactions to improve over time.",
    icon: Bot,
    image: chatbotImage,
  },
  {
    title: "Content Generation",
    description:
      "Generate high-quality content in seconds. From blog posts to marketing copy, our AI can create engaging and relevant text tailored to your audience.",
    icon: FileText,
    image: contentImage,
  },
  {
    title: " Automate workflows",
    description:
      " Streamline your business processes with AI automation. Reduce manual tasks, improve efficiency, and focus on what matters most.",
    icon: Code,
    image: codeImage,
  },
];

const UseCases = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Use Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how AiThinkr can transform your business with our versatile AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((item, index) => (
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

export default UseCases;
