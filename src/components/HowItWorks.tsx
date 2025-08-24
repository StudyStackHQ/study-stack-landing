import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Users, Video, DollarSign, TrendingUp, Search, HelpCircle, Star, Tv, GraduationCap } from "lucide-react";

const HowItWorks = () => {
  const creatorSteps = [
    {
      step: "1",
      title: "Upload & Price",
      description: "Add your study materials and set prices",
      icon: Upload,
      color: "text-primary"
    },
    {
      step: "2", 
      title: "Build Following",
      description: "Share quality content and engage with students",
      icon: Users,
      color: "text-accent"
    },
    {
      step: "3",
      title: "Go Live",
      description: "Host study sessions and earn tips in real-time",
      icon: Video,
      color: "text-warning"
    },
    {
      step: "4",
      title: "Earn Money",
      description: "Get paid through multiple revenue streams",
      icon: DollarSign,
      color: "text-secondary"
    },
    {
      step: "5",
      title: "Scale Up",
      description: "Use analytics to optimize and grow your content",
      icon: TrendingUp,
      color: "text-primary"
    }
  ];

  const studentSteps = [
    {
      step: "1",
      title: "Search & Discover",
      description: "Find exactly what you need with AI-powered search",
      icon: Search,
      color: "text-primary"
    },
    {
      step: "2",
      title: "Ask Questions", 
      description: "Get instant answers from any document",
      icon: HelpCircle,
      color: "text-accent"
    },
    {
      step: "3",
      title: "Follow Creators",
      description: "Stay updated with your favorite study influencers",
      icon: Star,
      color: "text-warning"
    },
    {
      step: "4",
      title: "Join Sessions",
      description: "Participate in live study streams",
      icon: Tv,
      color: "text-secondary"
    },
    {
      step: "5",
      title: "Ace Your Exams",
      description: "Access the best materials and expert help",
      icon: GraduationCap,
      color: "text-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
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
                <Card key={index} className="hover-lift border border-border/30 shadow-sm bg-white">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <step.icon className="w-4 h-4 text-muted-foreground" />
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
                <Card key={index} className="hover-lift border border-border/30 shadow-sm bg-white">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <step.icon className="w-4 h-4 text-muted-foreground" />
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