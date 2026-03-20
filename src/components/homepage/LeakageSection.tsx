import { ScrollReveal } from "./ScrollReveal";

const stages = [
  { label: "Inquiry", pct: "100%", lost: null, color: "bg-primary" },
  { label: "First Contact", pct: "64%", lost: "36% never get a timely response", color: "bg-primary/80" },
  { label: "Appointment Set", pct: "41%", lost: "23% drop off during scheduling", color: "bg-primary/60" },
  { label: "Show Up", pct: "29%", lost: "12% no-show on appointment day", color: "bg-primary/45" },
  { label: "Admitted", pct: "22%", lost: "7% lost post-visit", color: "bg-primary/30" },
];

export function LeakageSection() {
  return (
    <section className="section-padding section-y">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4">Where Revenue Disappears</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-4">For every 100 inquiries, most clinics admit fewer than 25.</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground mb-16 max-w-xl">
            The revenue isn't lost in one place. It leaks at every stage of the patient journey — silently, consistently, and expensively.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.label} delay={0.08 * i}>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-28 md:w-36 shrink-0 text-right">
                  <p className="text-sm font-medium text-foreground">{stage.label}</p>
                </div>
                <div className="flex-1 relative h-12 md:h-14 rounded-lg bg-muted overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 ${stage.color} rounded-lg flex items-center justify-end pr-4 transition-all duration-700`}
                    style={{ width: stage.pct }}
                  >
                    <span className="text-sm font-bold text-primary-foreground">{stage.pct}</span>
                  </div>
                </div>
                <div className="hidden md:block w-56 shrink-0">
                  {stage.lost && (
                    <p className="text-sm text-highlight font-medium">{stage.lost}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 p-6 rounded-lg border-2 border-highlight/20 bg-highlight/[0.04]">
            <p className="text-lg font-semibold text-foreground text-center">
              That's <span className="text-highlight">78% of potential revenue</span> lost before a patient ever walks through your door.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
