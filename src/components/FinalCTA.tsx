import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, DollarSign, Phone, Gift, TrendingUp, Bot, BarChart3, Search, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "First to Experience",
      description: "Get access to StudyStack before the general public and help shape the platform."
    },
    {
      icon: DollarSign,
      title: "Founder's Pricing",
      description: "Lock in discounted rates for life as one of our founding members."
    },
    {
      icon: Phone,
      title: "Direct Access",
      description: "Join exclusive Q&A sessions with the founding team and influence product development."
    },
    {
      icon: Gift,
      title: "Bonus Features",
      description: "Early members get additional storage, priority AI processing, and exclusive creator tools."
    },
    {
      icon: TrendingUp,
      title: "Head Start",
      description: "Build your following and upload content before the competition arrives."
    }
  ];

  const demoHighlights = [
    {
      icon: Bot,
      title: "See AI in Action",
      description: "Watch as our AI answers complex questions from real study materials with precise citations."
    },
    {
      icon: BarChart3,
      title: "Creator Dashboard Preview",
      description: "Explore the analytics and monetization tools that will help you succeed."
    },
    {
      icon: Search,
      title: "Search Demonstration",
      description: "Experience the power of searching inside document content, not just titles."
    },
    {
      icon: MessageCircle,
      title: "Live Q&A",
      description: "Ask our team anything about features, pricing, timeline, or technical details."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join <span className="text-gradient-hero">StudyStack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
            Join our exclusive waitlist and get priority access when we launch. Plus, book a personalized demo to see StudyStack in action.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-xl font-semibold hover:scale-105 transition-smooth"
            >
              Join Waitlist - Get Early Access
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-4 text-xl font-semibold transition-smooth"
            >
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Benefits and Demo highlights */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
          {/* Waitlist Benefits */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gradient-success">
              Early Access Perks
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-lift border border-border/30 shadow-sm bg-white">
                  <CardContent className="flex items-start gap-4 p-4">
                    <benefit.icon className="w-5 h-5 flex-shrink-0 text-muted-foreground mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Demo Highlights */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gradient-hero">
              Demo Highlights
            </h3>
            <div className="space-y-4">
              {demoHighlights.map((highlight, index) => (
                <Card key={index} className="hover-lift border border-border/30 shadow-sm bg-white">
                  <CardContent className="flex items-start gap-4 p-4">
                    <highlight.icon className="w-5 h-5 flex-shrink-0 text-muted-foreground mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{highlight.title}</h4>
                      <p className="text-muted-foreground text-sm">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA section */}
        <div className="bg-section rounded-3xl p-8 md:p-12 text-center border border-border/30">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Transform How Students <span className="text-gradient-creative">Learn and Earn</span>?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you're here to create or consume amazing study content, be part of the StudyStack community from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 font-semibold transition-bounce"
            >
              Join Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-semibold transition-bounce"
            >
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground italic">
            Coming Fall 2025 - Where Students Will Learn, Earn, and Succeed Together
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;