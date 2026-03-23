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
    <section className="section-padding py-16 md:py-24">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4">What Happens After You Book</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-12">
            No surprises. Here's exactly what the diagnostic call looks like.
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.1 * i}>
              <div className="flex gap-5 items-start p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Step {step.number}</span>
                    <h3 className="font-sans font-semibold text-lg text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
