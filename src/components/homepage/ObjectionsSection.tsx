import { ScrollReveal } from "./ScrollReveal";
import { MinusCircle } from "lucide-react";

const objections = [
  "You don't need to replace your EHR or CRM",
  "You don't need to train your team on a complex new system",
  "You don't need to hire additional staff",
  "You don't need to change your entire workflow",
];

export function ObjectionsSection() {
  return (
    <section className="section-padding section-y-tight">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4">No Barriers</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-12">What this doesn't require</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {objections.map((item, i) => (
            <ScrollReveal key={item} delay={0.08 * i}>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <MinusCircle className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-foreground font-medium text-base">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="p-6 rounded-xl border-2 border-primary/20 bg-primary/[0.04]">
            <p className="text-lg font-semibold text-foreground text-center" style={{ maxWidth: "none" }}>
              This works on top of what you already have.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
