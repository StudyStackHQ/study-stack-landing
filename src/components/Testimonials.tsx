import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Stethoscope, Wrench, Briefcase, Calculator, Building2, Rocket, FlaskConical, Zap, GraduationCap, Star, Target, Heart } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const Testimonials = () => {
  const testimonials = [
    {
      text: "I got early access to StudyStack and it's incredible! The AI feature answered my calculus questions better than my textbook. Can't wait for the full launch!",
      author: "Sarah M.",
      role: "Pre-Med Student (Beta Tester)",
      icon: Stethoscope,
      rating: 5
    },
    {
      text: "The demo blew my mind. Being able to ask questions directly to my lecture notes is exactly what I've been looking for. Signed up for the waitlist immediately.",
      author: "Marcus L.",
      role: "Engineering Student", 
      icon: Wrench,
      rating: 5
    },
    {
      text: "As a beta tester, I can see this is going to revolutionize how students share and learn from each other. The quality of materials is already amazing.",
      author: "Priya K.",
      role: "Business Major (Beta Tester)",
      icon: Briefcase,
      rating: 5
    },
    {
      text: "My 10-year-old daughter and her study group use StudyStack with my supervision. They share their science project notes and math worksheets, and they've actually earned $15 this month! It's teaching her about entrepreneurship while improving her studies. The platform is safe and educational.",
      author: "Jennifer L.",
      role: "Parent of Elementary Student",
      icon: Heart,
      rating: 5
    },
    {
      text: "I have over 200 study guides ready to upload the moment StudyStack launches. The demo showed me exactly how I can turn my notes into income.",
      author: "Alex R.",
      role: "Math Tutor",
      icon: Calculator,  
      rating: 5
    },
    {
      text: "Been waiting for a platform like this! My MCAT prep materials are going to help so many students, and I love that I can earn money helping others succeed.",
      author: "David C.",
      role: "Medical Student",
      icon: Building2,
      rating: 5
    }
  ];

  const stats = [
    { label: "Students on waitlist", value: "500+", icon: Rocket },
    { label: "Beta testers providing feedback", value: "50+", icon: FlaskConical },
    { label: "Target AI response time", value: "<2 seconds", icon: Zap },
    { label: "Universities represented in beta", value: "10+", icon: GraduationCap }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Students Are <span className="text-gradient-success">Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what beta testers and early adopters think about StudyStack.
          </p>
        </div>

        {/* Testimonials Grid with enhanced styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift shadow-card h-full group border-2 border-border/30 hover:border-primary/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-5 transition-all duration-500" />
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <testimonial.icon className="w-8 h-8 text-accent" />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.author}</h4>
                      <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </div>
                {/* Star rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground italic leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gradient-hero">
            Platform Stats
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-semibold">
              <Target className="w-4 h-4 animate-pulse" />
              <span>Launching Fall 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;