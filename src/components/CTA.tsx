import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-accent/30 animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-primary-glow/30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-secondary/30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/20 glass-effect border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-accent" />
            <span className="text-sm font-medium">Ready to get started?</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-foreground">
            Start building your 
            <span className="text-accent"> dream</span> landing page
          </h2>
          
          <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Join over 50,000 creators who use our platform to build high-converting 
            landing pages. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-card text-foreground hover:bg-card/90 glow-soft hover-scale"
            >
              Start Building Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 glass-effect"
            >
              Book a Demo
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="w-5 h-5 text-accent mr-3" />
              <span className="text-primary-foreground/90">No credit card required</span>
            </div>
            <div className="flex items-center justify-center md:justify-center">
              <CheckCircle className="w-5 h-5 text-accent mr-3" />
              <span className="text-primary-foreground/90">14-day free trial</span>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <CheckCircle className="w-5 h-5 text-accent mr-3" />
              <span className="text-primary-foreground/90">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;