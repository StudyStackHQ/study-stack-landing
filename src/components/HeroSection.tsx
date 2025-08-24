import { Button } from "@/components/ui/button";
import { Music, Rocket, Zap, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 gradient-hero rounded-full opacity-20 floating-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 gradient-success rounded-lg opacity-30 floating-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 gradient-creative rounded-full opacity-25 floating-animation" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 gradient-energy rounded-lg opacity-20 floating-animation" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Background image with enhanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/5 to-background/20" />
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl">
        {/* Main headline with musical note icons */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <Music className="inline w-12 h-12 md:w-16 md:h-16 text-accent mr-2" />
          <span className="text-gradient-hero">
            My StudyStack Brings All the A's to The Yard
          </span>
          <Music className="inline w-12 h-12 md:w-16 md:h-16 text-accent ml-2" />
        </h1>
        
        {/* Subheadline */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6 text-accent">
          The Social Learning Platform Where Students Turn Knowledge Into Income
        </h2>
        
        {/* Hero description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
          Document your study sessions, search your notes with AI, host group study sessions online, and sell your best content. Make friends and get A's together.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-xl font-semibold pulse-glow hover:scale-105 transition-bounce shadow-elegant"
          >
            Join the Waitlist - Get Early Access
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-5 text-xl font-semibold magnetic-hover transition-bounce glass-card"
          >
            Book a Demo
          </Button>
        </div>
        
        {/* Trust indicators with enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm">
          <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full glass-card hover:scale-105 transition-bounce">
            <Rocket className="w-5 h-5 text-secondary animate-pulse" />
            <span className="font-semibold">500+ Students on waitlist</span>
          </div>
          <div className="flex items-center gap-2 bg-warning/10 px-4 py-2 rounded-full glass-card hover:scale-105 transition-bounce">
            <Zap className="w-5 h-5 text-warning" />
            <span className="font-semibold">&lt;2 seconds AI response time</span>
          </div>
          <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full glass-card hover:scale-105 transition-bounce">
            <GraduationCap className="w-5 h-5 text-accent" />
            <span className="font-semibold">10+ Universities in beta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;