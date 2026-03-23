import { AnimatedCounter } from "./AnimatedCounter";
import { ScrollReveal } from "./ScrollReveal";
import { useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Healthcare Apps Delivered", prefix: "" },
  { value: 100, suffix: "%", label: "HIPAA Compliance Record", prefix: "" },
  { value: 500, suffix: "+", label: "Global Engineers & Specialists", prefix: "" },
  { value: 829, suffix: "%", label: "Growth Rate (Inc. 5000)", prefix: "" },
];

export function ByTheNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="section-padding section-y-tight"
      style={{ backgroundColor: "hsl(var(--surface-warm))" }}
    >
      <div className="container-wide">
        <ScrollReveal>
          <p className="label-text mb-4 text-center">By the Numbers</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="text-center mx-auto max-w-xl mb-12">
            Enterprise-grade engineering behind every system
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={0.08 * i}>
              <div className="text-center p-5 md:p-6 rounded-xl bg-background border border-border/60 shadow-sm">
                <p className="font-serif text-3xl md:text-4xl text-primary leading-none mb-2">
                  {inView ? (
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={1.6}
                    />
                  ) : (
                    `${stat.prefix}${stat.value}${stat.suffix}`
                  )}
                </p>
                <p className="text-xs text-muted-foreground font-medium leading-tight">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
