import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Lock, Shield, CheckCircle, KeyRound, FileText, Handshake } from "lucide-react";

const TrustSecurity = () => {
  const trustFeatures = [
    {
      icon: GraduationCap,
      title: "Academic Integrity",
      description: "Plagiarism detection on all uploads, user verification system, community reporting and moderation, respect for copyright and fair use.",
      color: "border-accent/20"
    },
    {
      icon: Lock,
      title: "Payment Security", 
      description: "Stripe-powered secure payments, PCI compliance guaranteed, encrypted data transmission, fraud protection included.",
      color: "border-secondary/20"
    },
    {
      icon: Shield,
      title: "Privacy Protection",
      description: "GDPR and CCPA compliant, no selling of student data, granular privacy controls, optional anonymous browsing.",
      color: "border-primary/20"
    }
  ];

  return (
    <section className="py-12 bg-section border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built on <span className="text-gradient-hero">Trust & Security</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy, security, and academic integrity are our top priorities. StudyStack is designed with students' best interests at heart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="hover-lift border border-border/30 shadow-sm text-center h-full bg-card">
              <CardHeader className="pb-4">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 border border-border/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gradient-creative">Why Students Trust StudyStack</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <div className="font-semibold text-primary">Student-First</div>
                <div className="text-sm text-muted-foreground">Built by students, for students</div>
              </div>
              <div>
                <KeyRound className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <div className="font-semibold text-secondary">Secure by Design</div>
                <div className="text-sm text-muted-foreground">Enterprise-grade security</div>
              </div>
              <div>
                <FileText className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <div className="font-semibold text-accent">Fully Compliant</div>
                <div className="text-sm text-muted-foreground">GDPR, CCPA, and more</div>
              </div>
              <div>
                <Handshake className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <div className="font-semibold text-warning">Fair & Transparent</div>
                <div className="text-sm text-muted-foreground">No hidden fees or surprises</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;