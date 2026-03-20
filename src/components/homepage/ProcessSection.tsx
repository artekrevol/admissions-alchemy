import { ScrollReveal } from "./ScrollReveal";
import { Search, Wrench, BarChart3 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnose",
    desc: "We map your intake process and identify exactly where patients are dropping off.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Deploy",
    desc: "We install and integrate the system into your existing workflow—no disruption.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Optimize",
    desc: "We continuously improve performance so conversion increases over time.",
  },
];

function TimelineConnector({ delay }: { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="hidden md:flex justify-center py-2">
      <motion.div
        className="w-px bg-primary/20"
        initial={{ height: 0 }}
        animate={inView ? { height: 48 } : {}}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
      <div className="container-wide">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="label-text mb-4">How It Works</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="mx-auto max-w-xl">Three steps. No new software to learn.</h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.12 * i}>
              <Link to="/how-it-works" className="block group">
                <div className="relative bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  {/* Step number badge */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <step.icon className="w-6 h-6 text-primary stroke-[1.5]" />
                  </div>
                  <span className="absolute top-6 right-6 text-5xl font-serif text-primary/[0.06] select-none">
                    {step.number}
                  </span>
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
