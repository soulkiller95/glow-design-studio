import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechStartup",
    content: "This landing page builder transformed our marketing campaigns. We increased conversions by 300% in just two months!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b2617e82?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "Michael Rodriguez",
    role: "Freelance Designer",
    company: "Creative Studio",
    content: "As a designer, I love how much control I have over every element. The templates are beautiful and the customization is endless.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "Emma Thompson",
    role: "E-commerce Owner",
    company: "Fashion Brand",
    content: "Built my entire product launch page in under an hour. The analytics helped me optimize and we hit our sales goals early!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "David Park",
    role: "Agency Owner",
    company: "Digital Agency",
    content: "Our team can now deliver landing pages 5x faster to clients. The collaboration features and client approval process is seamless.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "Lisa Johnson",
    role: "SaaS Founder",
    company: "ProductFlow",
    content: "The A/B testing features helped us optimize our signup flow. We saw a 150% increase in trial signups within weeks.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "Alex Kumar",
    role: "Content Creator",
    company: "YouTube Channel",
    content: "Perfect for promoting my courses and digital products. The integration with payment processors made everything so simple.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Loved by 
            <span className="text-gradient-primary"> creators</span> worldwide
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of marketers, designers, and entrepreneurs who trust our platform 
            to build high-converting landing pages.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-lift bg-card/80 border-0 glow-soft backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-lg leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;