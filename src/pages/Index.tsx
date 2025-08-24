import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowStudyStackWorks from "@/components/HowItWorks";
import FeatureHighlights from "@/components/FeatureHighlights";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustSecurity from "@/components/TrustSecurity";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowStudyStackWorks />
      <FeatureHighlights />
      <Testimonials />
      <FAQ />
      <TrustSecurity />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
