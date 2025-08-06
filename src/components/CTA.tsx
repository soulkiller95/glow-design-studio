import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Check } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-accent/30 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-secondary/30 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/20 glass-effect border mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-accent" />
              <span className="text-sm font-medium text-white">Ready to get started?</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Start building your 
              <span className="text-gradient-hero"> dream website</span>
              <br />
              today
            </h2>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join thousands of creators who are already building stunning landing pages 
              that convert visitors into customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Benefits */}
            <div className="space-y-4">
              {[
                "No credit card required",
                "14-day free trial",
                "Cancel anytime",
                "50+ premium templates",
                "24/7 customer support"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Right side - CTA Buttons */}
            <div className="text-center lg:text-left">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 glow-soft hover-lift w-full">
                  Start Building Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass-effect hover-lift border-white/20 text-white hover:bg-white/10 w-full">
                  View Live Demo
                </Button>
              </div>
              
              <p className="text-sm text-white/60 mt-4">
                Trusted by 50,000+ creators worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;