import { ScrollReveal } from "./ScrollReveal";
import { CheckCircle2 } from "lucide-react";

const results = [
  {
    title: "Inquiry-to-admit conversion increases 30–50% in 90 days",
    desc: "Every inquiry gets contacted. Every warm lead gets followed up. Nothing falls through.",
    metric: "30–50%",
    metricLabel: "conversion lift",
  },
  {
    title: "No-show rates drop 40%",
    desc: "Automated reminders via text, email, and call mean patients show up. Empty chairs get filled.",
    metric: "40%",
    metricLabel: "fewer no-shows",
  },
  {
    title: "Your intake team handles 2–3x volume without hiring",
    desc: "The system handles repetitive work—logging, follow-up, reminders, reactivation—so your team focuses on high-value conversations.",
    metric: "2–3x",
    metricLabel: "capacity increase",
  },
  {
    title: "You see your pipeline in real time",
    desc: "Every inquiry. Every stage. Every outcome. No guessing. No spreadsheets. Just clarity.",
    metric: "100%",
    metricLabel: "visibility",
  },
  {
    title: "Dormant leads turn into revenue",
    desc: "A 15% reactivation rate on 2,000 cold leads is 300 additional admissions sitting in your system right now.",
    metric: "15%",
    metricLabel: "reactivation rate",
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

        <div className="space-y-5">
          {results.map((r, i) => (
            <ScrollReveal key={r.title} delay={0.08 * i}>
              <div className="rounded-xl p-6 md:p-8 bg-background border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-5">
                <div className="md:w-24 shrink-0 text-center md:text-left">
                  <p className="font-serif text-2xl md:text-3xl text-primary leading-none">{r.metric}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.metricLabel}</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-border shrink-0" />
                <div className="flex-1">
                  <h3 className="font-sans font-semibold text-lg text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
