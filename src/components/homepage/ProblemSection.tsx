import { ScrollReveal } from "./ScrollReveal";
import { PhoneOff, Clock, FileSpreadsheet, EyeOff, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const painPoints = [
  {
    icon: PhoneOff,
    text: "Patient inquiries go cold because follow-up gets buried under daily chaos.",
  },
  {
    icon: Clock,
    text: "Your team means to call back—but three more calls come in and that Monday inquiry is lost by Thursday.",
  },
  {
    icon: Users,
    text: "Someone calls out sick and there's no system to catch the gap. Patients go to competitors.",
  },
  {
    icon: FileSpreadsheet,
    text: "Admissions manually updates spreadsheets. Your CRM runs six weeks behind.",
  },
  {
    icon: EyeOff,
    text: "No one can tell you how many inquiries came in last month or what your inquiry-to-admission rate actually is.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4">The Reality</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-4">The problem isn't your team. It's your process.</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl">
            This isn't a training problem. It's a system problem. Your team is working hard inside a process that leaks by design.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Bullet points with icons */}
          <div className="space-y-4">
            {painPoints.map((point, i) => (
              <ScrollReveal key={i} delay={0.12 + 0.06 * i}>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border shadow-sm">
                  <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <point.icon className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{point.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right: Callout + CTA */}
          <div>
            <ScrollReveal delay={0.3}>
              <div className="p-8 rounded-xl border-2 border-primary/20 bg-primary/[0.04] mb-6">
                <p className="text-lg font-semibold text-foreground leading-snug mb-3" style={{ maxWidth: "none" }}>
                  You're not short on demand. You're losing patients in the gap between interest and action.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Revenue walks out the door while your team flies blind—no visibility into where patients drop off or why.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.36}>
              <div className="text-center md:text-left">
                <Button variant="hero" size="lg">
                  See How Much You're Losing
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
