import { ScrollReveal } from "./ScrollReveal";

const results = [
  {
    title: "Inquiry-to-admit conversion increases 30–50% in 90 days",
    desc: "Every inquiry gets contacted. Every warm lead gets followed up. Nothing falls through.",
  },
  {
    title: "No-show rates drop 40%",
    desc: "Automated reminders via text, email, and call mean patients show up. Empty chairs get filled.",
  },
  {
    title: "Your intake team handles 2–3x volume without hiring",
    desc: "The system handles repetitive work—logging, follow-up, reminders, reactivation—so your team focuses on high-value conversations.",
  },
  {
    title: "You see your pipeline in real time",
    desc: "Every inquiry. Every stage. Every outcome. No guessing. No spreadsheets. Just clarity.",
  },
  {
    title: "Dormant leads turn into revenue",
    desc: "A 15% reactivation rate on 2,000 cold leads is 300 additional admissions sitting in your system right now.",
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="section-padding section-y">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4">Proven Outcomes</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-14">What changes when your intake actually works as a system</h2>
        </ScrollReveal>

        <div className="space-y-6">
          {results.map((r, i) => (
            <ScrollReveal key={r.title} delay={0.08 * i}>
              <div className="rounded-xl p-6 md:p-8 bg-background border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-sans font-semibold text-lg text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
