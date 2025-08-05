import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const positions = [
  // {
  //   title: "Research Scientist, Generative AI",
  //   location: "San Francisco, CA",
  //   department: "Research",
  // },
  // {
  //   title: "Machine Learning Engineer, NLP",
  //   location: "New York, NY",
  //   department: "Engineering",
  // },
  // {
  //   title: "Software Engineer, AI Infrastructure",
  //   location: "Remote",
  //   department: "Engineering",
  // },
  // {
  //   title: "Product Manager, AI Products",
  //   location: "San Francisco, CA",
  //   department: "Product",
  // },
];

const OpenPositions = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Open Positions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are always looking for talented people to join our team. If you
            are passionate about AI and want to make an impact, we would love
            to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-xl shadow-tech border border-border">
            {positions.map((position, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 border-b border-border"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1 font-display">
                    {position.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {position.location} &middot; {position.department}
                  </p>
                </div>
                <Button variant="outline">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
