import { ScrollReveal } from "./ScrollReveal";
import { Search, Wrench, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnose",
    desc: "We map your intake process and identify exactly where patients are dropping off.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Deploy",
    desc: "We install and integrate the system into your existing workflow—no disruption.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Optimize",
    desc: "We continuously improve performance so conversion increases over time.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
      <div className="container-wide">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="label-text mb-4">How It Works</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="mx-auto max-w-xl">Three steps. No new software to learn.</h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.1 * i}>
              <div className="relative">
                <span className="text-7xl font-serif text-primary/[0.08] absolute -top-4 -left-2 select-none">
                  {step.number}
                </span>
                <div className="relative pt-8">
                  <step.icon className="w-8 h-8 text-primary mb-4 stroke-[1.5]" />
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
