import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="section-padding section-y bg-primary text-primary-foreground">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <h2 className="text-primary-foreground mx-auto max-w-2xl mb-6" style={{ textWrap: "balance" as any }}>
            Stop losing patients to a broken process.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
            Book a free diagnostic call. We'll map your patient journey, identify 
            the leaks, and show you exactly how the system would work in your clinic.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <Button variant="hero" size="xl" className="bg-accent-foreground text-primary hover:bg-accent-foreground/90">
            Book Your Free Diagnostic Call
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </ScrollReveal>
        <ScrollReveal delay={0.22}>
          <p className="text-primary-foreground/50 text-sm mt-6">
            No contracts. No software demos. Just a clear diagnosis.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
