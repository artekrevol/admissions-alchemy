import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const proofCards = [
  {
    title: "Regional Addiction Treatment Provider",
    stats: [
      { value: "$840K", label: "annual revenue recovered" },
      { value: "34%", label: "conversion rate achieved" },
      { value: "83", label: "dormant leads reactivated" },
    ],
  },
  {
    title: "Multi-Location Behavioral Health",
    stats: [
      { value: "41% → 18%", label: "no-show rate reduction" },
      { value: "2x", label: "coordinator output" },
      { value: "6 days", label: "time to admit (from 11)" },
    ],
  },
  {
    title: "Outpatient Treatment Center",
    stats: [
      { value: "22% → 34%", label: "conversion improvement" },
      { value: "+22", label: "additional admits/month" },
      { value: "3 weeks", label: "implementation time" },
    ],
  },
  {
    title: "Residential Treatment Facility",
    stats: [
      { value: "19", label: "admits from dormant leads" },
      { value: "$960K", label: "database value unlocked" },
      { value: "15%", label: "reactivation rate" },
    ],
  },
];

function ProofCard({ card }: { card: (typeof proofCards)[0] }) {
  return (
    <div className="w-[320px] md:w-[380px] shrink-0 rounded-xl border border-border bg-background p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-5">
        {card.title}
      </p>
      <div className="space-y-4">
        {card.stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline justify-between gap-3">
            <span className="font-serif text-xl md:text-2xl text-primary leading-none">{stat.value}</span>
            <span className="text-xs text-muted-foreground text-right">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProofCarousel() {
  return (
    <section className="section-padding section-y overflow-hidden">
      <div className="container-narrow mb-10">
        <ScrollReveal>
          <p className="label-text mb-4">Proven Results</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="max-w-lg">Results that speak for themselves</h2>
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

      {/* Scrolling carousel */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 px-6 md:px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...proofCards, ...proofCards].map((card, i) => (
            <ProofCard key={i} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
