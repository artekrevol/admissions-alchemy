import { ScrollReveal } from "./ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const caseStudies = [
  {
    title: "Kinekt",
    subtitle: "AI-Enhanced Patient Feedback",
    headline: "Reduced patient response times by 40% using AI.",
    stats: [
      { value: "150%", label: "engagement increase" },
      { value: "40%", label: "response time reduction" },
      { value: "85%", label: "automated collection" },
    ],
    quote: "Kinekt simplified how patients schedule and communicate with us. We're now more responsive, and patient satisfaction is higher.",
    quoteAuthor: "Laura Bennett, Healthcare Provider",
    sourceUrl: "https://www.tekrevol.com/case-studies/kinekt/",
  },
  {
    title: "MiloCare+",
    subtitle: "Health Records Management",
    headline: "Eliminated 95% of data errors with enterprise-grade security.",
    stats: [
      { value: "97%", label: "data accuracy improvement" },
      { value: "95%", label: "error reduction" },
      { value: "60%", label: "faster data entry" },
    ],
    sourceUrl: "https://www.tekrevol.com/case-studies/milocare/",
  },
  {
    title: "Libido Health",
    subtitle: "HIPAA-Compliant Wellness",
    headline: "Scaled to 20,000+ active users in 3 months.",
    stats: [
      { value: "150%", label: "user engagement increase" },
      { value: "35%", label: "session no-show reduction" },
      { value: "20K+", label: "active users in 3 months" },
    ],
  },
  {
    title: "Nurse Practitioner",
    subtitle: "On-Demand Care",
    headline: "Increased booking efficiency by 45% for on-demand healthcare.",
    stats: [
      { value: "35%", label: "wait time reduction" },
      { value: "45%", label: "booking efficiency gain" },
      { value: "50%", label: "appointment speed increase" },
    ],
  },
];

function CaseStudyCard({ study }: { study: (typeof caseStudies)[0] }) {
  return (
    <div className="rounded-xl border border-border bg-background p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="mb-5">
        <p className="text-sm font-semibold text-foreground">{study.title}</p>
        <p className="text-xs text-muted-foreground">{study.subtitle}</p>
      </div>
      <p className="text-sm font-medium text-foreground mb-5 leading-snug">{study.headline}</p>
      
      <div className="space-y-3 mb-5">
        {study.stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline justify-between gap-3">
            <span className="font-serif text-xl md:text-2xl text-primary leading-none">{stat.value}</span>
            <span className="text-xs text-muted-foreground text-right">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Spacer to push bottom content down for equal card heights */}
      <div className="mt-auto">
        {study.quote && (
          <blockquote className="border-l-2 border-primary/20 pl-4 mb-4">
            <p className="text-xs text-muted-foreground italic leading-relaxed" style={{ maxWidth: "none" }}>
              "{study.quote}"
            </p>
            <cite className="text-xs font-medium text-foreground not-italic mt-1 block">
              — {study.quoteAuthor}
            </cite>
          </blockquote>
        )}

        {study.sourceUrl && (
          <a
            href={study.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors"
          >
            View full case study <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}

export function ProofCarousel() {
  return (
    <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
      <div className="container-wide">
        <div className="mb-10">
          <ScrollReveal>
            <p className="label-text mb-4">Proven in Healthcare</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="max-w-lg">Real clients. Real metrics. Real outcomes.</h2>
              <Link
                to="/case-study"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                Read the full case study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={0.08 * i}>
              <CaseStudyCard study={study} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
