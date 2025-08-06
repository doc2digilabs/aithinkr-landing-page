import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AIDocExtractionImage from "@/assets/ai-doc-extraction.png"; // Assuming you have an image here

const Features = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
            Explore Our Flagship Product
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock the power of AI to automate your document processing workflows.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200/80">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 order-2 md:order-1">
              <h3 className="text-2xl font-bold font-display mb-4 text-gray-900">
                Agentic Document Extraction
              </h3>
              <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                Go beyond simple OCR. Our AI agents understand, structure, and
                extract data from any document, just like a human would.
                Transform invoices, reports, and forms into ready-to-use data
                in seconds.
              </p>
              <Link to="/products/agentic-document-extraction">
                <Button size="lg" className="group">
                  Try It Now
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 h-64 md:h-full">
              <img
                src={AIDocExtractionImage}
                alt="AI Document Extraction illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
