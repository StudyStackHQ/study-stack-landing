import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TrustSecurity = () => {
  const trustFeatures = [
    {
      icon: "🎓",
      title: "Academic Integrity",
      description: "Plagiarism detection on all uploads, user verification system, community reporting and moderation, respect for copyright and fair use.",
      color: "border-accent/20"
    },
    {
      icon: "🔒",
      title: "Payment Security", 
      description: "Stripe-powered secure payments, PCI compliance guaranteed, encrypted data transmission, fraud protection included.",
      color: "border-secondary/20"
    },
    {
      icon: "🛡️",
      title: "Privacy Protection",
      description: "GDPR and CCPA compliant, no selling of student data, granular privacy controls, optional anonymous browsing.",
      color: "border-primary/20"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
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
            <Card key={index} className={`hover-lift shadow-card border-2 ${feature.color} text-center h-full`}>
              <CardHeader className="pb-4">
                <div className="text-5xl mb-4">{feature.icon}</div>
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
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gradient-creative">Why Students Trust StudyStack</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">✅</div>
                <div className="font-semibold text-primary">Student-First</div>
                <div className="text-sm text-muted-foreground">Built by students, for students</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🔐</div>
                <div className="font-semibold text-secondary">Secure by Design</div>
                <div className="text-sm text-muted-foreground">Enterprise-grade security</div>
              </div>
              <div>
                <div className="text-3xl mb-2">📋</div>
                <div className="font-semibold text-accent">Fully Compliant</div>
                <div className="text-sm text-muted-foreground">GDPR, CCPA, and more</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🤝</div>
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