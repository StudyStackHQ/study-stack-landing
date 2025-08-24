import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Users, Video, Star, BarChart3, Bot, HelpCircle, Search, Crown, Tv, Lock, Flame, Target, UserPlus, Gamepad2 } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const ValuePropositions = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-hero slide-up">
            Why Students Love StudyStack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
            Whether you're sharing knowledge or seeking it, StudyStack has everything you need to succeed academically and financially.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Content Creators */}
          <Card className="hover-lift border border-border/30 shadow-sm group overflow-hidden bg-white">
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <DollarSign className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                For Content Creators
              </CardTitle>
              <CardDescription className="text-lg font-semibold text-secondary">
                "From Study Notes to Side Hustle"
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-muted-foreground mt-1" />
                  <span>Turn your hard work into income streams</span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-muted-foreground mt-1" />
                  <span>Build a following around your academic expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-muted-foreground mt-1" />
                  <span>Host live study sessions with donations and tips</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-muted-foreground mt-1" />
                  <span>Set subscription tiers for premium content access</span>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-muted-foreground mt-1" />
                  <span>Get detailed analytics on your content performance</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* For Content Consumers */}
          <Card className="hover-lift border border-border/30 shadow-sm group overflow-hidden bg-white">
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                For Content Consumers
              </CardTitle>
              <CardDescription className="text-lg font-semibold text-primary">
                "AI-Powered Study Success"
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-muted-foreground mt-1" />
                  <span>Ask questions and get instant answers from any document</span>
                </div>
                <div className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-muted-foreground mt-1" />
                  <span>Search inside PDFs with advanced filtering</span>
                </div>
                <div className="flex items-start gap-3">
                  <Crown className="w-5 h-5 text-muted-foreground mt-1" />
                  <span>Follow top performers in your field</span>
                </div>
                <div className="flex items-start gap-3">
                  <Tv className="w-5 h-5 text-muted-foreground mt-1" />
                  <span>Join live study sessions and interactive streams</span>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-muted-foreground mt-1" />
                  <span>Access exclusive content from verified creators</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Netflix tagline with simplified styling */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-100 hover:border-gray-200 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-creative">
              "The Netflix of Study Materials"
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-muted-foreground">
              <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                <Flame className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Trending content</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                <Target className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">AI recommendations</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                <UserPlus className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Study groups</span>
              </div>
              <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                <Gamepad2 className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Twitch for education</span>
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

export default ValuePropositions;