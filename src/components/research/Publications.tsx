import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const publications = [
  {
    title: "Generative Pre-trained Transformer 4",
    authors: "OpenAI",
    conference: "NeurIPS 2023",
  },
  {
    title: "Mastering the Game of Go with Deep Neural Networks and Tree Search",
    authors: "DeepMind",
    conference: "Nature 2016",
  },
  {
    title: "Attention Is All You Need",
    authors: "Google",
    conference: "NeurIPS 2017",
  },
];

const Publications = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We publish our work at top conferences and journals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-xl shadow-tech border border-border">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 border-b border-border"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1 font-display">
                    {publication.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {publication.authors} &middot; {publication.conference}
                  </p>
                </div>
                <Button variant="outline">
                  Read Paper <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
