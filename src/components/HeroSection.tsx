import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl">
        {/* Main headline with musical note emojis */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-4xl md:text-5xl">🎵</span>{" "}
          <span className="text-gradient-hero">
            My StudyStack Brings All the A's to The Yard
          </span>{" "}
          <span className="text-4xl md:text-5xl">🎵</span>
        </h1>
        
        {/* Subheadline */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6 text-accent">
          The Social Learning Platform Where Students Turn Knowledge Into Income
        </h2>
        
        {/* Hero description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
          Upload your study materials, build a following, and get paid for your expertise. 
          StudyStack combines AI-powered document search with social features and live streaming 
          to create the ultimate student marketplace.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold hover-glow transition-smooth"
          >
            Join the Waitlist - Get Early Access
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold transition-smooth"
          >
            Book a Demo
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-secondary">🚀</span>
            <span>500+ Students on waitlist</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-warning">⚡</span>
            <span>&lt;2 seconds AI response time</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">🎓</span>
            <span>10+ Universities in beta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;