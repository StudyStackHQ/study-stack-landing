import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <img 
              src="/lovable-uploads/534f5b56-b49e-4b6e-a4fa-404a77d79ff0.png" 
              alt="StudyStack Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xs font-medium text-muted-foreground self-end -mt-1">
              Learn & Earn
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-105"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-105"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-105"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-105"
            >
              FAQ
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Book Demo
            </Button>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-bounce"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;