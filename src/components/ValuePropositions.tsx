import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ValuePropositions = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-hero">
            Why Students Love StudyStack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're sharing knowledge or seeking it, StudyStack has everything you need to succeed academically and financially.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Content Creators */}
          <Card className="hover-lift border-2 border-secondary/20 shadow-card">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 gradient-success rounded-full flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                For Content Creators
              </CardTitle>
              <CardDescription className="text-lg font-semibold text-secondary">
                "From Study Notes to Side Hustle"
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-secondary text-xl">💸</span>
                  <span>Turn your hard work into income streams</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary text-xl">👥</span>
                  <span>Build a following around your academic expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-warning text-xl">🎥</span>
                  <span>Host live study sessions with donations and tips</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl">⭐</span>
                  <span>Set subscription tiers for premium content access</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">📊</span>
                  <span>Get detailed analytics on your content performance</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* For Content Consumers */}
          <Card className="hover-lift border-2 border-primary/20 shadow-card">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center">
                <span className="text-3xl">🤖</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                For Content Consumers
              </CardTitle>
              <CardDescription className="text-lg font-semibold text-primary">
                "AI-Powered Study Success"
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">❓</span>
                  <span>Ask questions and get instant answers from any document</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">🔍</span>
                  <span>Search inside PDFs with advanced filtering</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent text-xl">👑</span>
                  <span>Follow top performers in your field</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-warning text-xl">📺</span>
                  <span>Join live study sessions and interactive streams</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary text-xl">🔒</span>
                  <span>Access exclusive content from verified creators</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Netflix tagline */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto border border-accent/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-creative">
              "The Netflix of Study Materials"
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <span className="text-accent">🔥</span>
                <span>Trending content</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-primary">🎯</span>
                <span>Personalized recommendations</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-secondary">👫</span>
                <span>Study groups</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-warning">🎮</span>
                <span>Twitch for education</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;