import { Button } from "@/components/ui/button";
import { Music, Rocket, Zap, GraduationCap } from "lucide-react";
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
          The Social Learning Platform Where Monetize Their Academic Success
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
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-xl font-semibold hover:scale-105 transition-smooth"
          >
            Book a Demo
          </Button>
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