import { ScrollReveal } from "./ScrollReveal";

export function ProblemSection() {
  return (
    <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4">The Reality</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-10">The problem isn't your team. It's your process.</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ScrollReveal delay={0.12}>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
                Your intake team answers the phone. They log the inquiry. They mean to follow up. Then three more calls come in, someone calls out sick, and by Thursday that lead from Monday is cold. You'll never know if they went to a competitor or just gave up.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                Meanwhile, admissions manually updates spreadsheets, your CRM runs six weeks behind, and no one can tell you how many inquiries came in last month or what your inquiry-to-admit rate actually is. Revenue walks out the door while you fly blind.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.24}>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
                This isn't a training problem. It's a system problem. Your team is working hard inside a process that leaks by design.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="p-6 rounded-xl border-2 border-primary/20 bg-primary/[0.04]">
                <p className="text-lg font-semibold text-foreground" style={{ maxWidth: "none" }}>
                  You're not short on demand. You're losing patients in the gap between interest and action.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
