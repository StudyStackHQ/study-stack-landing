import { Button } from "@/components/ui/button";
import { Music, Rocket, Zap, GraduationCap, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import AudioPlayer from "@/components/AudioPlayer";
import heroImage from "@/assets/hero-image.jpg";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 studystack-bg">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10" />
      
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl">
        {/* Main headline with high contrast */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-primary">
          My StudyStack Brings All the A's to The Yard
        </h1>
        
        {/* Subheadline */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-sans font-semibold mb-6 text-primary">
          The Social Learning Platform Where Students Monetize Their Academic Success
        </h2>
        
        {/* Hero description */}
        <p className="text-lg md:text-xl text-primary/80 mb-10 max-w-4xl mx-auto leading-relaxed font-sans">
          Document your study sessions, search your notes with AI, host group study sessions online, and sell your best content. Make friends and get A's together.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary-button hover:bg-primary-button/90 text-primary-foreground px-10 py-6 text-xl font-semibold shadow-strong hover:scale-105 transition-smooth"
          >
            Join the Waitlist - Get Early Access
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-xl font-semibold hover:scale-105 transition-smooth"
              >
                View Pitch Deck
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl max-h-[95vh] sm:max-h-[90vh] p-4 sm:p-6 my-4 sm:my-8">
              {/* Mobile Close Button */}
              <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground md:hidden">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </DialogClose>
              
              <div className="space-y-4 sm:space-y-6 pt-8 md:pt-0">
                {/* Audio Player */}
                <AudioPlayer 
                  src="/pitch-deck-audio.mp3"
                  title="StudyStack Pitch Deck"
                  className="w-full"
                />
                
                {/* Pitch Deck Slides */}
                <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] border rounded-lg overflow-hidden">
                  <iframe
                    src="https://studystack-pitch-z23rn1o.gamma.site/"
                    className="w-full h-full"
                    title="StudyStack Pitch Deck Slides"
                    allow="fullscreen"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Clean trust indicators */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-primary/70 font-sans">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-primary-accent" />
            <span className="font-medium">500+ Students on waitlist</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary-accent" />
            <span className="font-medium">&lt;2 seconds AI response time</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary-accent" />
            <span className="font-medium">10+ Universities in beta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;