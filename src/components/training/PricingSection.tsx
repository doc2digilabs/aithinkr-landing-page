import { Button } from "@/components/ui/button"
import { Check, Calendar, Users, Clock, CreditCard } from "lucide-react"

const PricingSection = () => {
  const features = [
    "8 weeks of intensive training",
    "12+ hands-on AI projects",
    "1-on-1 mentorship sessions",
    "Career placement assistance",
    "Lifetime access to course materials",
    "Industry networking events", 
    "Certificate of completion",
    "Money-back guarantee"
  ]
  
  return (
    <section className="py-20 bg-gradient-tech">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Investment in Your Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your career with our comprehensive AI Engineer Bootcamp
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-ai border border-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-hero opacity-10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Early Bird Special</span>
                </div>
                
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-muted-foreground line-through">Rs.25,000</span>
                  <span className="text-5xl md:text-6xl font-bold text-foreground">Rs.15,000</span>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  One-time payment • No hidden fees • 30-day money-back guarantee
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button variant="hero" size="xl" className="font-semibold">
                    <CreditCard className="w-5 h-5" />
                    Enroll Now - Save Rs.10,000
                  </Button>
                  <Button variant="outline" size="xl">
                    <Calendar className="w-5 h-5" />
                    Schedule a Call
                  </Button>
                </div>
              </div>
              
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Student Discount Section */}
          <div className="mt-8 bg-gradient-to-r from-primary to-primary-glow p-8 rounded-2xl shadow-lg text-center text-primary-foreground">
            <h3 className="text-3xl font-bold mb-2">Are you a Student?</h3>
            <p className="text-lg mb-4">We offer a 50% discount for students. Contact us to learn more.</p>
            <Button variant="secondary" size="lg">
              Get Student Discount
            </Button>
          </div>

          {/* Batch Information */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-card rounded-xl p-6 shadow-tech border border-border text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Next Batch Starts</h3>
              <p className="text-2xl font-bold text-primary">September 1st, 2025</p>
              <p className="text-sm text-muted-foreground mt-1">Limited to 35 students</p>
            </div>
            
            <div className="bg-gradient-card rounded-xl p-6 shadow-tech border border-border text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Schedule</h3>
              <p className="text-lg font-bold">Weekends</p>
              <p className="text-sm text-muted-foreground mt-1">Sat & Sun, 10 AM - 4 PM PST</p>
            </div>
            
            <div className="bg-gradient-card rounded-xl p-6 shadow-tech border border-border text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Class Size</h3>
              <p className="text-lg font-bold">Max 30 Students</p>
              <p className="text-sm text-muted-foreground mt-1">Personalized attention guaranteed</p>
            </div>
          </div>
          
          {/* Payment Options */}
          {/* <div className="mt-8 bg-gradient-card rounded-xl p-6 shadow-tech border border-border">
            <h3 className="font-semibold mb-4 text-center">Flexible Payment Options</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-primary mb-2">Pay in Full</h4>
                <p className="text-2xl font-bold mb-1">$2,999</p>
                <p className="text-sm text-muted-foreground">Save $500 with full payment</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-primary mb-2">3-Month Plan</h4>
                <p className="text-2xl font-bold mb-1">$1,166<span className="text-sm">/mo</span></p>
                <p className="text-sm text-muted-foreground">0% interest • No credit check</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default PricingSection