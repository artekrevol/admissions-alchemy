import { ScrollReveal } from "./ScrollReveal";
import { ClipboardCheck, MapPin, Presentation } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    number: "1",
    title: "We review your current intake data",
    desc: "We pull your inquiry volume, response times, follow-up sequences, and show rates to establish a baseline.",
  },
  {
    icon: MapPin,
    number: "2",
    title: "We map where patients are dropping off",
    desc: "Using your data, we identify the exact stages where revenue is leaking—first contact, follow-up, scheduling, or no-shows.",
  },
  {
    icon: Presentation,
    number: "3",
    title: "We present a custom deployment plan",
    desc: "You'll see the specific interventions, projected recovery, and a timeline to implement—no obligation, no pressure.",
  },
];

export function AfterYouBook() {
  return (
    <section className="section-padding section-y-tight" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4">What Happens After You Book</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-12">
            No surprises. Here's exactly what the diagnostic call looks like.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.1 * i}>
              <div className="p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">Step {step.number}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
