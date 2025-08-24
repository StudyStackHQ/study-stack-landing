import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FinalCTA = () => {
  const benefits = [
    {
      icon: "🚀",
      title: "First to Experience",
      description: "Get access to StudyStack before the general public and help shape the platform."
    },
    {
      icon: "💰",
      title: "Founder's Pricing",
      description: "Lock in discounted rates for life as one of our founding members."
    },
    {
      icon: "📞",
      title: "Direct Access",
      description: "Join exclusive Q&A sessions with the founding team and influence product development."
    },
    {
      icon: "🎁",
      title: "Bonus Features",
      description: "Early members get additional storage, priority AI processing, and exclusive creator tools."
    },
    {
      icon: "📈",
      title: "Head Start",
      description: "Build your following and upload content before the competition arrives."
    }
  ];

  const demoHighlights = [
    {
      icon: "🤖",
      title: "See AI in Action",
      description: "Watch as our AI answers complex questions from real study materials with precise citations."
    },
    {
      icon: "📊",
      title: "Creator Dashboard Preview",
      description: "Explore the analytics and monetization tools that will help you succeed."
    },
    {
      icon: "🔍",
      title: "Search Demonstration",
      description: "Experience the power of searching inside document content, not just titles."
    },
    {
      icon: "💬",
      title: "Live Q&A",
      description: "Ask our team anything about features, pricing, timeline, or technical details."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Be Among the First to Experience the <span className="text-gradient-hero">Future of Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
            Join our exclusive waitlist and get priority access when we launch. Plus, book a personalized demo to see StudyStack in action.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-xl font-semibold hover-glow transition-smooth"
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
                <Card key={index} className="hover-lift shadow-card border-l-4 border-l-secondary">
                  <CardContent className="flex items-start gap-4 p-4">
                    <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
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
                <Card key={index} className="hover-lift shadow-card border-l-4 border-l-primary">
                  <CardContent className="flex items-start gap-4 p-4">
                    <span className="text-2xl flex-shrink-0">{highlight.icon}</span>
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
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20 shadow-elegant">
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