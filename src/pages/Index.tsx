import HeroSection from "@/components/HeroSection";
import ValuePropositions from "@/components/ValuePropositions";
import FeatureHighlights from "@/components/FeatureHighlights";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustSecurity from "@/components/TrustSecurity";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValuePropositions />
      <FeatureHighlights />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <TrustSecurity />
      <FinalCTA />
    </main>
  );
};

export default Index;
