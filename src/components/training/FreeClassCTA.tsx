import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FreeClassCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
                Start Your AI Journey, For Free.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our free introductory class and get a hands-on look at how AI is shaping the future. No commitment, just pure learning.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Understand the fundamentals of AI and Machine Learning.</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Build your first AI model in a hands-on workshop.</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-lg text-gray-700">Get a personalized career path recommendation from our experts.</span>
                </li>
              </ul>
              <Link to="/register">
                <Button size="lg" className="w-full md:w-auto text-lg py-4 px-8">
                  Register for Free Class
                </Button>
              </Link>
            </div>
            <div className="hidden md:block h-full">
              <img
                src="/placeholder.svg"
                alt="AI Training class"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeClassCTA;
