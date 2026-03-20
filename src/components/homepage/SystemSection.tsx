import { ScrollReveal } from "./ScrollReveal";
import { CheckCircle2 } from "lucide-react";

const systemItems = [
  "They are contacted immediately via text, call, or email",
  "Follow-up sequences run automatically over the next 5–7 days",
  "Scheduling is handled in real-time",
  "Reminders reduce no-shows before they happen",
  "Dormant leads are continuously reactivated in the background",
];

export function SystemSection() {
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

        <ScrollReveal delay={0.18}>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground mb-5">When a lead comes in:</p>
        </ScrollReveal>

        <div className="space-y-4 mb-10">
          {systemItems.map((item, i) => (
            <ScrollReveal key={item} delay={0.2 + 0.06 * i}>
              <div className="flex items-start gap-3">
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
