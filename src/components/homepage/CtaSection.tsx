import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="section-padding section-y bg-primary text-primary-foreground">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <h2 className="text-primary-foreground mx-auto max-w-2xl mb-6" style={{ textWrap: "balance" as any }}>
            See exactly where your clinic is losing revenue—and what to fix first.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
            We'll map your intake process, identify where patients are dropping off, and show you what a system-driven workflow would look like.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <Button variant="hero" size="xl" className="bg-accent-foreground text-primary hover:bg-accent-foreground/90">
            Book Your Revenue System Diagnostic
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
