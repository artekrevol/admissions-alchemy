import { ScrollReveal } from "./ScrollReveal";
import { CheckCircle2 } from "lucide-react";

const beforeItems = [
  "Inquiries sit unanswered for hours",
  "Follow-up depends on who's at the desk",
  "No system for tracking patient pipeline",
  "No-shows are accepted as normal",
  "Revenue leaks go undetected",
];

const afterItems = [
  "Every inquiry gets a response within minutes",
  "Structured follow-up runs automatically",
  "Full visibility from inquiry to admission",
  "No-shows drop with confirmation sequences",
  "Revenue captured at every stage",
];

export function SolutionSection() {
  return (
    <section id="system" className="section-padding section-y">
      <div className="container-wide">
        <ScrollReveal>
          <p className="label-text mb-4">The Transformation</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-14">What changes when the system is installed</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal direction="left">
            <div className="rounded-xl p-8 md:p-10 bg-muted/50 border border-border h-full">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-6">Before</p>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-highlight/60 mt-2 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-xl p-8 md:p-10 bg-primary/[0.04] border-2 border-primary/20 h-full">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-6">After</p>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
