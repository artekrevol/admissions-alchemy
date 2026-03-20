import { ScrollReveal } from "./ScrollReveal";

export function ReframeSection() {
  return (
    <section className="section-padding section-y-tight bg-primary text-primary-foreground">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground/60 mb-6">The Real Issue</p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="text-primary-foreground mx-auto max-w-3xl mb-6" style={{ textWrap: "balance" as any }}>
            This isn't a people problem. It's a system problem.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="text-primary-foreground/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Your team isn't underperforming. They're under-supported. Without a 
            structured system for converting inquiries into patients, even the best 
            staff will drop the ball. Not because they don't care — because the 
            workflow doesn't exist.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
