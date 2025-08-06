import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AIDocExtractionImage from "@/assets/ai-doc-extraction.png"; // Assuming you have an image here
import AILearningImage from "@/assets/ai-learning.jpg"; // Assuming you have an image here

const Features = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
            Explore Our Flagship Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI-powered solutions can revolutionize your workflows, from intelligent document processing to adaptive, personalized learning experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* AI Document Extraction Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200/80 flex flex-col">
            <div className="h-64">
              <img
                src={AIDocExtractionImage}
                alt="AI Document Extraction illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold font-display mb-4 text-gray-900">
                Agentic Document Extraction
              </h3>
              <p className="text-muted-foreground mb-6 text-base leading-relaxed flex-grow">
                Go beyond simple OCR. Our AI agents understand, structure, and
                extract data from any document, just like a human would.
                Transform invoices, reports, and forms into ready-to-use data
                in seconds.
              </p>
              <Link to="/products/agentic-document-extraction">
                <Button size="lg" className="group w-full md:w-auto">
                  Try It Now
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* AI-Driven Personalized LMS Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200/80 flex flex-col">
            <div className="h-64">
              <img
                src={AILearningImage}
                alt="AI-Driven Personalized Learning illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold font-display mb-4 text-gray-900">
                AI-Driven Personalized LMS
              </h3>
              <p className="text-muted-foreground mb-6 text-base leading-relaxed flex-grow">
                Move beyond one-size-fits-all training. Our LMS uses AI to create unique learning paths for every user, adapting to their pace and style. Boost engagement and knowledge retention with a truly personalized education.
              </p>
              <Link to="/training">
                <Button size="lg" className="group w-full md:w-auto">
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
