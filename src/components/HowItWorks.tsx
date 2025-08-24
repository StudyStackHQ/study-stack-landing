import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  const creatorSteps = [
    {
      step: "1",
      title: "Upload & Price",
      description: "Add your study materials and set prices",
      icon: "📤",
      color: "text-primary"
    },
    {
      step: "2", 
      title: "Build Following",
      description: "Share quality content and engage with students",
      icon: "👥",
      color: "text-accent"
    },
    {
      step: "3",
      title: "Go Live",
      description: "Host study sessions and earn tips in real-time",
      icon: "🎥",
      color: "text-warning"
    },
    {
      step: "4",
      title: "Earn Money",
      description: "Get paid through multiple revenue streams",
      icon: "💰",
      color: "text-secondary"
    },
    {
      step: "5",
      title: "Scale Up",
      description: "Use analytics to optimize and grow your content",
      icon: "📈",
      color: "text-primary"
    }
  ];

  const studentSteps = [
    {
      step: "1",
      title: "Search & Discover",
      description: "Find exactly what you need with AI-powered search",
      icon: "🔍",
      color: "text-primary"
    },
    {
      step: "2",
      title: "Ask Questions", 
      description: "Get instant answers from any document",
      icon: "❓",
      color: "text-accent"
    },
    {
      step: "3",
      title: "Follow Creators",
      description: "Stay updated with your favorite study influencers",
      icon: "⭐",
      color: "text-warning"
    },
    {
      step: "4",
      title: "Join Sessions",
      description: "Participate in live study streams",
      icon: "📺",
      color: "text-secondary"
    },
    {
      step: "5",
      title: "Ace Your Exams",
      description: "Access the best materials and expert help",
      icon: "🎓",
      color: "text-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-muted/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How <span className="text-gradient-hero">StudyStack</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're creating content or consuming it, getting started is simple and rewarding.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* For Creators */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient-success">
                For Creators
              </h3>
              <p className="text-muted-foreground">Turn your expertise into income</p>
            </div>
            
            <div className="space-y-6">
              {creatorSteps.map((step, index) => (
                <Card key={index} className="hover-lift shadow-card border-l-4 border-l-secondary">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full gradient-success flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{step.icon}</span>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* For Students */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient-hero">
                For Students  
              </h3>
              <p className="text-muted-foreground">Learn smarter, not harder</p>
            </div>
            
            <div className="space-y-6">
              {studentSteps.map((step, index) => (
                <Card key={index} className="hover-lift shadow-card border-l-4 border-l-primary">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{step.icon}</span>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;