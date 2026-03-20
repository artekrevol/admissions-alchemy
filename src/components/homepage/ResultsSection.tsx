import { ScrollReveal } from "./ScrollReveal";

const results = [
  { metric: "38%", label: "Increase in patient admissions", context: "Average across clinic partners in the first 6 months" },
  { metric: "62%", label: "Reduction in no-shows", context: "Through automated confirmation and pre-visit sequences" },
  { metric: "4.2×", label: "ROI within the first year", context: "Revenue recovered vs. investment in the system" },
  { metric: "< 5 min", label: "Average inquiry response time", context: "Down from 4+ hours in most clinics" },
];

export function ResultsSection() {
  return (
    <section id="results" className="section-padding section-y">
      <div className="container-wide">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="label-text mb-4">Proven Outcomes</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="mx-auto max-w-xl">The numbers clinics see after installation</h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r, i) => (
            <ScrollReveal key={r.label} delay={0.08 * i}>
              <div className="text-center p-8 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="stat-number mb-3">{r.metric}</p>
                <p className="font-semibold text-foreground mb-2 text-sm">{r.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.context}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
