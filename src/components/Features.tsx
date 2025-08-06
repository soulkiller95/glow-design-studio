import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Palette, 
  Smartphone, 
  Zap, 
  BarChart3, 
  Layers, 
  Code, 
  Globe, 
  Shield,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Drag & Drop Builder",
    description: "Intuitive visual editor with pre-built components. Create professional pages without any coding skills."
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Every template is fully responsive and looks perfect on all devices, from desktop to mobile."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with instant loading times. Your pages will load in under 2 seconds."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Built-in analytics to track conversions, visitor behavior, and optimize your pages for better results."
  },
  {
    icon: Layers,
    title: "100+ Templates",
    description: "Choose from our curated collection of high-converting templates for every industry and use case."
  },
  {
    icon: Code,
    title: "Custom Code",
    description: "Add custom HTML, CSS, and JavaScript when you need advanced functionality or integrations."
  },
  {
    icon: Globe,
    title: "Custom Domains",
    description: "Connect your own domain or use our free hosting. SSL certificates included for security."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance. Your data and your customers' data is protected."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Everything you need to 
            <span className="text-gradient-primary"> succeed</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our landing page builder comes packed with features that help you create, 
            optimize, and scale your online presence effortlessly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift glass-effect border-0 bg-card/60 backdrop-blur-sm group"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;