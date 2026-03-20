import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="section-padding pt-32 md:pt-40 pb-20 md:pb-28 lg:pb-36 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="container-narrow relative">
        <ScrollReveal>
          <p className="label-text mb-6">For Healthcare Operators</p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h1 className="max-w-3xl mb-8" style={{ textWrap: "balance" as any }}>
            Your clinic is getting inquiries.{" "}
            <span className="text-primary">Why aren't they converting?</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            We install and operate a patient conversion system that turns missed inquiries 
            into booked appointments — without adding staff or buying another platform.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              Book a Diagnostic Call
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="hero-outline" size="xl">
              See How It Works
            </Button>
          </div>
        </ScrollReveal>

        {/* Trust strip */}
        <ScrollReveal delay={0.35}>
          <div className="mt-16 pt-10 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { stat: "38%", desc: "avg increase in patient admissions" },
                { stat: "62%", desc: "reduction in no-show rates" },
                { stat: "< 90 days", desc: "to see measurable results" },
              ].map((item) => (
                <div key={item.stat}>
                  <p className="stat-number mb-2">{item.stat}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
