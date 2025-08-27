import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqSections = [
    {
      title: "About the Waitlist",
      questions: [
        {
          question: "When will StudyStack launch?",
          answer: "We're launching in Fall 2025! Waitlist members get priority access and exclusive beta features."
        },
        {
          question: "What do I get for joining the waitlist?",
          answer: "Early access, demo invitations, founder updates, and the chance to shape the platform before launch."
        },
        {
          question: "Can I see the platform before it launches?",
          answer: "Yes! We offer personalized demos. Book one to see StudyStack in action and ask questions."
        }
      ]
    },
    {
      title: "For Future Students",
      questions: [
        {
          question: "How much will it cost to access materials?",
          answer: "StudyStack repository and smart search subscription starts at $5/month. Content creators can charge $1-100/month for access to their study notes, live study sessions, and mentoring."
        },
        {
          question: "How will the AI work?",
          answer: "Our AI will provide answers with source citations from your documents. It's being trained specifically for academic content."
        },
        {
          question: "Will there be refunds?",
          answer: "Yes, we'll offer a 7-day satisfaction guarantee on all purchases at launch."
        }
      ]
    },
    {
      title: "For Future Creators",
      questions: [
        {
          question: "How much could I earn?",
          answer: "Based on our beta testing, we project top creators could earn $500-2000/month depending on content quality and audience."
        },
        {
          question: "When would I get paid?",
          answer: "Payouts will happen weekly via Stripe with a $25 minimum payout threshold."
        },
        {
          question: "What content should I prepare?",
          answer: "High-demand subjects like STEM, business, and test prep perform best. Start organizing your best materials now!"
        }
      ]
    },
    {
      title: "Technical Questions",
      questions: [
        {
          question: "What file formats will be supported?",
          answer: "PDF, DOCX, PPT, and images at launch. We're constantly adding new formats based on user feedback."
        },
        {
          question: "How will you protect my content?",
          answer: "We'll use watermarking and DRM to prevent unauthorized sharing while allowing legitimate educational use."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-12 bg-muted/80 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient-creative">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Here's everything you need to know about StudyStack.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-card rounded-2xl border border-border/30 overflow-hidden">
              <div className="bg-section px-6 py-4 border-b border-border/30">
                <h3 className="text-xl font-bold text-primary">{section.title}</h3>
              </div>
              
              <Accordion type="single" collapsible className="px-6 py-2">
                {section.questions.map((item, questionIndex) => (
                  <AccordionItem 
                    key={questionIndex} 
                    value={`${sectionIndex}-${questionIndex}`}
                    className="border-border/30"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary transition-smooth">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;