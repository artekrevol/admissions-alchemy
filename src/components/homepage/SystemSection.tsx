import { ScrollReveal } from "./ScrollReveal";
import { CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const systemItems = [
  "They are contacted immediately via text, call, or email",
  "Follow-up sequences run automatically over the next 5–7 days",
  "Scheduling is handled in real-time",
  "Reminders reduce no-shows before they happen",
  "Dormant leads are continuously reactivated in the background",
];

const beforeItems = [
  { label: "Response time", value: "Hours–days" },
  { label: "Follow-up", value: "Manual, inconsistent" },
  { label: "No-shows", value: "Unmanaged" },
  { label: "Dormant leads", value: "Ignored" },
  { label: "Visibility", value: "Spreadsheets" },
];

const afterItems = [
  { label: "Response time", value: "< 5 minutes" },
  { label: "Follow-up", value: "Automated, 5–7 days" },
  { label: "No-shows", value: "Prevented" },
  { label: "Dormant leads", value: "Reactivated" },
  { label: "Visibility", value: "Real-time pipeline" },
];

export function SystemSection() {
  const compareRef = useRef<HTMLDivElement>(null);
  const inView = useInView(compareRef, { once: true, amount: 0.3 });

  return (
    <section id="system" className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4">The System</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-6">This isn't another tool. It's a system that runs your intake.</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            We install a patient conversion system that sits on top of your existing workflow and handles the entire process from first inquiry to scheduled appointment.
          </p>
        </ScrollReveal>

        {/* Before vs After comparison */}
        <div ref={compareRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-accent/20 bg-accent/[0.03] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-5">Without System</p>
            <div className="space-y-3">
              {beforeItems.map(item => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-medium text-foreground/60">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border-2 border-primary/30 bg-primary/[0.04] p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-5">With System</p>
            <div className="space-y-3">
              {afterItems.map(item => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-semibold text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <ScrollReveal delay={0.18}>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground mb-5">When a lead comes in:</p>
        </ScrollReveal>

        <div className="space-y-4 mb-10">
          {systemItems.map((item, i) => (
            <ScrollReveal key={item} delay={0.2 + 0.06 * i}>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.55}>
          <div className="rounded-xl p-6 md:p-8 bg-background border border-border shadow-sm">
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Everything integrates with your existing EHR and CRM. HIPAA-compliant. No system replacement.
            </p>
            <p className="text-foreground font-semibold text-base">
              Your team doesn't change how they work—they just stop chasing leads and start closing them.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
