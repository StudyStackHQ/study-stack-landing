import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="text-2xl font-bold text-gradient-hero">StudyStack</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              The social learning platform where students turn knowledge into income. 
              Coming Fall 2025 with AI-powered features, live streaming, and more.
            </p>
            <div className="flex gap-4">
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-bounce"
              >
                Join Waitlist
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                Book Demo
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Navigation</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2025 StudyStack. All rights reserved. Coming Fall 2025 - Where Students Will Learn, Earn, and Succeed Together.
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary hover:scale-105 transition-all"
          >
            Back to Top ↑
          </Button>
        </div>

        {/* Launch notification */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 rounded-full border border-primary/20">
            <span className="animate-pulse">🚀</span>
            <span className="font-semibold text-primary">Launching Fall 2025</span>
            <span className="animate-pulse">🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;