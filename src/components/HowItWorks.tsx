import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Users, Video, Star, BarChart3, Bot, HelpCircle, Search, Crown, Tv, Lock, Flame, Target, UserPlus, Gamepad2, Upload, GraduationCap } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const HowStudyStackWorks = () => {
  const creatorJourney = [
    {
      step: "1",
      title: "Document & Upload",
      description: "Turn your study materials into income streams",
      icon: Upload,
      details: "Add your notes, guides, and materials with pricing"
    },
    {
      step: "2", 
      title: "AI-Powered Search",
      description: "Students find your content instantly",
      icon: Search,
      details: "Our AI makes your materials discoverable and searchable"
    },
    {
      step: "3",
      title: "Build Community",
      description: "Host live study sessions and grow your following",
      icon: Video,
      details: "Stream study sessions, earn tips, engage with students"
    },
    {
      step: "4",
      title: "Multiple Revenue Streams", 
      description: "Get paid through subscriptions, sales, and tips",
      icon: DollarSign,
      details: "One-time sales, monthly subscriptions, live donations"
    }
  ];

  const studentJourney = [
    {
      step: "1",
      title: "Search & Discover",
      description: "Find exactly what you need with AI-powered search",
      icon: Search,
      details: "Search inside documents, filter by subject and university"
    },
    {
      step: "2",
      title: "Ask Questions", 
      description: "Get instant answers from any document with citations",
      icon: HelpCircle,
      details: "AI reads your materials and answers questions instantly"
    },
    {
      step: "3",
      title: "Join Study Groups",
      description: "Connect with top creators and study communities",
      icon: Users,
      details: "Follow creators, join live sessions, make study friends"
    },
    {
      step: "4",
      title: "Ace Your Exams",
      description: "Access premium content and expert help",
      icon: GraduationCap,
      details: "Get the best materials and succeed together"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 bg-section border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How <span className="text-gradient-hero">StudyStack</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're creating content or studying, here's how StudyStack transforms your academic journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* For Creators */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient-success">
                For Content Creators
              </h3>
              <p className="text-muted-foreground">"From Study Notes to Side Hustle"</p>
            </div>
            
            <div className="space-y-6">
              {creatorJourney.map((step, index) => (
                <Card key={index} className="hover-lift border border-border/30 shadow-sm bg-white">
                  <CardContent className="flex items-start gap-4 p-6">
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
                      <p className="text-secondary font-medium mb-1">{step.description}</p>
                      <p className="text-muted-foreground text-sm">{step.details}</p>
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
              <p className="text-muted-foreground">"AI-Powered Study Success"</p>
            </div>
            
            <div className="space-y-6">
              {studentJourney.map((step, index) => (
                <Card key={index} className="hover-lift border border-border/30 shadow-sm bg-white">
                  <CardContent className="flex items-start gap-4 p-6">
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
                      <p className="text-primary font-medium mb-1">{step.description}</p>
                      <p className="text-muted-foreground text-sm">{step.details}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Substack tagline */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto border border-gray-100 hover:border-gray-200 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-creative">
              "Substack for Students"
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-muted-foreground">
              <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                <Search className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">AI-powered search</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                <Users className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Study communities</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                <Video className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Live study sessions</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                <DollarSign className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Creator monetization</span>
              </div>
            </div>
            
            {/* Added earnings preview */}
            <div className="mt-8 flex justify-center items-center gap-2 text-sm text-secondary font-semibold">
              <DollarSign className="w-4 h-4" />
              <span>Top creators earning </span>
              <AnimatedCounter end={2000} prefix="$" suffix="/month" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowStudyStackWorks;