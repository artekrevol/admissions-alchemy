import { ScrollReveal } from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    stage: "Inquiry → First Contact",
    body: "38% of inquiries never get a callback within 24 hours. Of those, 67% will never be reached. You paid for that lead. It's gone.",
    pct: 100,
    lost: 38,
  },
  {
    stage: "First Contact → Follow-Up",
    body: "You made contact. Now what? Without structured follow-up over the next 5–7 days, conversion drops by half. Most intake teams do one follow-up, maybe two, then move on.",
    pct: 62,
    lost: 31,
  },
  {
    stage: "Follow-Up → Scheduled Appointment",
    body: "Even when someone says \"I'm interested,\" the gap between interest and booking is where deals die. If your coordinator is juggling 40 other tasks, scheduling gets delayed. Delay kills momentum.",
    pct: 31,
    lost: 8,
  },
  {
    stage: "Scheduled → Show Rate",
    body: "They're on the calendar. Then they no-show. No reminder sequence. No confirmation loop. The appointment evaporates. Empty chair = lost revenue.",
    pct: 23,
    lost: 5,
  },
  {
    stage: "Discharged → Reactivation",
    body: "Thousands of past patients and dormant inquiries sit in your system. Most will never hear from you again. Reactivation campaigns convert at 15–20%. You're leaving money on the table.",
    pct: 18,
    lost: 0,
  },
];

function FunnelBar({ pct, lost, delay }: { pct: number; lost: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative h-12 rounded-lg bg-muted overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 bg-primary rounded-lg flex items-center justify-end pr-3"
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : {}}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity: 0.2 + (pct / 100) * 0.8 }}
      >
        <span className="text-sm font-bold text-primary-foreground tabular-nums">{pct}%</span>
      </motion.div>
      {lost > 0 && (
        <motion.div
          className="absolute inset-y-0 right-0 bg-accent/10 rounded-r-lg flex items-center justify-center"
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width: `${lost}%`, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-bold text-accent tabular-nums">−{lost}%</span>
        </motion.div>
      )}
    </div>
  );
}

export function LeakageSection() {
  return (
    <section className="section-padding section-y">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4">Where Revenue Disappears</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-4">Where revenue actually disappears</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground mb-16 max-w-xl">
            The problem isn't volume. It's what happens after the inquiry comes in. Here's where revenue disappears:
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.stage} delay={0.06}>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-start">
                {/* Funnel bar */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">{stage.stage}</p>
                  <FunnelBar pct={stage.pct} lost={stage.lost} delay={0.1 * i} />
                </div>
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{stage.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-14 p-6 rounded-lg border-2 border-highlight/20 bg-highlight/[0.04]">
            <p className="text-lg font-semibold text-foreground text-center" style={{ maxWidth: "none" }}>
              Every stage leaks. The cumulative loss is why revenue feels unpredictable even when inquiry volume stays stable.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
