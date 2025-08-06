import { Zap } from "lucide-react";

const integrations = [
  "Google",
  "Azure",
  "AWS",
  "Salesforce",
  "Stripe",
  "Trello",
  "Asana",
  "Jira",
  "OpenAI",
  "Hugging Face",
  "Antropic",
  "Mistral AI",
  "NVIDIA",
  "Amazon Web Services",
  "Azure",
];

const Integrations = () => {
  return (
    <section className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Integrations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect AiThinkr to your favorite tools and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gradient-card rounded-xl shadow-tech border border-border"
              >
                <span className="text-lg font-semibold">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
