import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Video, Search, DollarSign, Smartphone, Zap, Trophy } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Intelligence",
      subtitle: "Your Documents, Supercharged",
      description: "Don't just store your notes—make them interactive. Our AI reads your PDFs and answers questions instantly, with citations to exact page locations. It's like having a personal tutor for every document.",
      gradient: "gradient-hero"
    },
    {
      icon: Video,
      title: "Live Study Streaming",
      subtitle: "Twitch Meets Academia",
      description: "Host live study sessions, share your screen, and earn money through tips and donations. Students can follow their favorite creators and get notified when they go live.",
      gradient: "gradient-energy"
    },
    {
      icon: Search,
      title: "Smart Search That Actually Works",
      subtitle: "Find Exactly What You Need",
      description: "Search inside document content, not just titles. Filter by university, subject, document type, and rating. Our Elasticsearch engine makes finding the right materials effortless.",
      gradient: "gradient-creative"
    },
    {
      icon: DollarSign,
      title: "Multiple Revenue Streams",
      subtitle: "Get Paid for Your Hard Work",
      description: "One-time sales, monthly subscriptions, live tips, and premium features. Top creators could earn $500-2000/month depending on content quality and audience.",
      gradient: "gradient-success"
    }
  ];

  return (
    <section className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful Features That <span className="text-gradient-hero">Actually Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            StudyStack isn't just another file sharing platform. We've built the tools students actually need to learn better and earn more.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift border border-border/30 shadow-card overflow-hidden group bg-card">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 mb-4 bg-section rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">
                  "{feature.subtitle}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <Card className="text-center p-6 hover-lift border border-border/30 shadow-card bg-card">
            <Smartphone className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
            <h4 className="font-bold text-lg mb-2">Social Learning Network</h4>
            <p className="text-sm text-muted-foreground">Follow creators, build reputation, get featured in trending sections</p>
          </Card>
          
          <Card className="text-center p-6 hover-lift border border-border/30 shadow-card bg-card">
            <Zap className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
            <h4 className="font-bold text-lg mb-2">Lightning Fast</h4>
            <p className="text-sm text-muted-foreground">AI answers in under 2 seconds. Search results instantly as you type</p>
          </Card>
          
          <Card className="text-center p-6 hover-lift border border-border/30 shadow-card bg-card">
            <Trophy className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
            <h4 className="font-bold text-lg mb-2">Quality Guaranteed</h4>
            <p className="text-sm text-muted-foreground">All content reviewed and rated by community for accuracy and helpfulness</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;