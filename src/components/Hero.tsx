import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/20 glass-effect border">
              <Sparkles className="w-4 h-4 mr-2 text-accent" />
              <span className="text-sm font-medium">Build stunning pages in minutes</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Create 
              <span className="text-gradient-hero"> Beautiful</span>
              <br />
              Landing Pages
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              The most intuitive drag-and-drop landing page builder. No coding required. 
              Launch high-converting pages that your audience will love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 glow-soft hover-lift">
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass-effect hover-lift">
                <Zap className="mr-2 w-5 h-5" />
                View Templates
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-accent border-2 border-background"></div>
                </div>
                <span>Trusted by 50,000+ creators</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-soft hover-scale">
              <img 
                src={heroImage} 
                alt="Landing page builder interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-card rounded-xl p-4 shadow-lg animate-float glass-effect">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Live Preview</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg animate-float glass-effect" style={{ animationDelay: '3s' }}>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Auto-Optimize</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;