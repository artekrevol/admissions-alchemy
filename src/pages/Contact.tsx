import { Navbar } from "@/components/homepage/Navbar";
import { Footer } from "@/components/homepage/Footer";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Us — Request a Pipeline Audit | PatientFlow"
        description="Get in touch with PatientFlow. Request a Pipeline Audit and discover where your clinic is losing revenue between inquiry and intake."
        path="/contact"
      />
      <Navbar />

      <section className="section-padding pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Left: Info */}
            <div>
              <ScrollReveal>
                <p className="label-text mb-4">Get In Touch</p>
              </ScrollReveal>
              <ScrollReveal delay={0.06}>
                <h1 className="max-w-lg mb-6" style={{ textWrap: "balance" as any }}>
                  Request a Pipeline Audit
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-muted-foreground text-lg max-w-md mb-10 leading-relaxed">
                  We'll map your intake process, identify where patients are dropping off, and show you what a system-driven workflow would look like.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "hello@patientflow.com", href: "mailto:hello@patientflow.com" },
                    { icon: Phone, label: "Phone", value: "(555) 123-4567", href: "tel:+15551234567" },
                    { icon: MapPin, label: "Office", value: "Houston, TX", href: undefined },
                    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: undefined },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/[0.08] flex items-center justify-center shrink-0">
                        <item.icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-foreground font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.22}>
                <div className="mt-10 p-6 rounded-xl border-2 border-primary/20 bg-primary/[0.04]">
                  <p className="text-sm font-semibold text-foreground mb-2">What happens next?</p>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-primary shrink-0">1.</span>
                      We'll review your submission and schedule a 30-minute discovery call.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-primary shrink-0">2.</span>
                      We'll map your current intake process and identify leakage points.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-primary shrink-0">3.</span>
                      You'll receive a Revenue Leakage Report with actionable recommendations.
                    </li>
                  </ol>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <ScrollReveal delay={0.12}>
              <div className="bg-background rounded-2xl border border-border shadow-lg p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <ArrowRight className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Thank you!</h3>
                    <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                      We've received your request. Our team will reach out within 24 hours to schedule your Pipeline Audit.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Tell us about your clinic</h3>
                    <p className="text-sm text-muted-foreground mb-6">All fields are required unless marked optional.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                        <input required type="text" className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Jane" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                        <input required type="text" className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Smith" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Work Email</label>
                      <input required type="email" className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="jane@clinic.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                      <input required type="tel" className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="(555) 000-0000" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Clinic / Organization Name</label>
                      <input required type="text" className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Sunrise Recovery Center" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Monthly Patient Inquiries <span className="text-muted-foreground font-normal">(optional)</span></label>
                      <select className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="">Select range</option>
                        <option>Under 50</option>
                        <option>50–100</option>
                        <option>100–250</option>
                        <option>250–500</option>
                        <option>500+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">What's your biggest challenge? <span className="text-muted-foreground font-normal">(optional)</span></label>
                      <textarea rows={3} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="E.g., slow follow-ups, no-shows, no visibility into our pipeline..." />
                    </div>

                    <Button variant="hero" size="xl" type="submit" className="w-full">
                      Request a Pipeline Audit
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      No spam. No obligation. We respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
