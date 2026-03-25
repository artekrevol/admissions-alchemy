import { ScrollReveal } from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneOff, MailX, CalendarX, UserX, DatabaseZap } from "lucide-react";

const stages = [
  {
    icon: PhoneOff,
    stage: "Inquiry → First Contact",
    body: "38% of patient inquiries never get a callback within 24 hours. Of those, 67% will never be reached. You paid for that referral. It's gone.",
    pct: 100,
    lost: 38,
  },
  {
    icon: MailX,
    stage: "First Contact → Follow-Up",
    body: "You made contact. Now what? Without structured patient outreach over the next 5–7 days, admission rates drop by half.",
    pct: 62,
    lost: 31,
  },
  {
    icon: CalendarX,
    stage: "Follow-Up → Scheduled Appointment",
    body: "Even when someone says \"I'm interested,\" the gap between interest and booking is where patients are lost. Coordinators juggling 40 tasks can't keep up.",
    pct: 31,
    lost: 8,
  },
  {
    icon: UserX,
    stage: "Scheduled → Show Rate",
    body: "They're on the calendar. Then they no-show. No reminder sequence. No confirmation loop. Empty chair = missed admission.",
    pct: 23,
    lost: 5,
  },
  {
    icon: DatabaseZap,
    stage: "Discharged → Reactivation",
    body: "Thousands of past patients and dormant inquiries sit in your system. Most will never hear from you again. Reactivation campaigns convert at 15–20%.",
    pct: 18,
    lost: 0,
  },
];

function FunnelBar({ pct, lost, delay }: { pct: number; lost: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative h-10 rounded-lg bg-muted overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 bg-primary rounded-lg flex items-center justify-end pr-3"
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : {}}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity: 0.2 + (pct / 100) * 0.8 }}
      >
        <span className="text-xs font-bold text-primary-foreground tabular-nums">{pct}%</span>
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
          <p className="label-text mb-4">Revenue Leakage</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-4">Where You're Losing 40% of Your Patients (and Revenue)</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground mb-14 max-w-xl">
            The problem isn't patient volume. It's what happens after the inquiry comes in.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.stage} delay={0.06}>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 items-start p-4 rounded-xl bg-background border border-border/60 shadow-sm">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <stage.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{stage.stage}</p>
                  </div>
                  <FunnelBar pct={stage.pct} lost={stage.lost} delay={0.1 * i} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stage.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-14 p-6 rounded-xl border-2 border-accent/20 bg-accent/[0.04]">
            <p className="text-lg font-semibold text-foreground text-center" style={{ maxWidth: "none" }}>
              Every stage leaks. The cumulative loss is why revenue feels unpredictable even when patient volume stays stable.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
