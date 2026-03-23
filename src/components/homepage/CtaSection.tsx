import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="section-padding section-y bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle animated gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-primary-foreground/[0.03] blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container-narrow text-center relative">
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
          <Button
            size="xl"
            className="bg-background text-primary hover:bg-background/90 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-base font-semibold"
          >
            Book Your Revenue System Diagnostic
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
