import { AnimatedCounter } from "./AnimatedCounter";
import { ScrollReveal } from "./ScrollReveal";
import { useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 840, prefix: "$", suffix: "K+", label: "Revenue recovered" },
  { value: 34, suffix: "%", label: "Conversion achieved" },
  { value: 40, suffix: "%", label: "No-show reduction" },
  { value: 3, suffix: " weeks", label: "To deploy" },
];

export function ImpactStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="section-padding py-14 md:py-20"
      style={{ backgroundColor: "hsl(var(--surface-cool))" }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={0.1 * i}>
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary leading-none mb-2">
                  {inView ? (
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                      duration={1.6}
                    />
                  ) : (
                    `${stat.prefix || ""}${stat.value}${stat.suffix || ""}`
                  )}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
