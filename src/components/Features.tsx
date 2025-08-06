import { 
  Palette, 
  Smartphone, 
  Zap, 
  BarChart3, 
  Layers, 
  Code,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Drag & Drop Builder",
    description: "Intuitive visual editor with pre-built components. Create professional pages without coding.",
    color: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Every template is fully responsive and looks perfect on all devices.",
    color: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with instant loading times. Your pages load in under 2 seconds.",
    color: "bg-yellow-100 dark:bg-yellow-900/30",
    iconColor: "text-yellow-600 dark:text-yellow-400"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Built-in analytics to track conversions and optimize your pages for better results.",
    color: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    icon: Layers,
    title: "100+ Templates",
    description: "Choose from our curated collection of high-converting templates for every industry.",
    color: "bg-pink-100 dark:bg-pink-900/30",
    iconColor: "text-pink-600 dark:text-pink-400"
  },
  {
    icon: Code,
    title: "Custom Code",
    description: "Add custom HTML, CSS, and JavaScript when you need advanced functionality.",
    color: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className={`w-20 h-20 rounded-full ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;