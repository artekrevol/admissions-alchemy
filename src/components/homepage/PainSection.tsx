import { ScrollReveal } from "./ScrollReveal";
import { PhoneOff, Clock, Users, CalendarX, Eye, DollarSign } from "lucide-react";

const painPoints = [
  { icon: PhoneOff, title: "Inquiries come in but don't convert", desc: "Leads call, fill out forms, visit your site — and then disappear." },
  { icon: Clock, title: "Follow-ups are slow or inconsistent", desc: "Your team is doing their best, but responses take hours or days." },
  { icon: Users, title: "Staff is overwhelmed", desc: "Front desk handles intake, scheduling, billing, AND follow-up." },
  { icon: CalendarX, title: "No-show rates are climbing", desc: "Patients book but never arrive. Revenue vanishes." },
  { icon: Eye, title: "No visibility into the pipeline", desc: "You can't see where patients drop off or why." },
  { icon: DollarSign, title: "Revenue is leaking — but from where?", desc: "You know you're leaving money on the table. You just can't find the hole." },
];

export function PainSection() {
  return (
    <section id="problem" className="section-padding section-y-tight" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
      <div className="container-wide">
        <ScrollReveal>
          <p className="label-text mb-4">Sound Familiar?</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="max-w-2xl mb-4">The symptoms are everywhere. The root cause is hidden.</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground mb-14 max-w-xl">
            Most healthcare operators know something is broken. They just can't pinpoint exactly where patients — and revenue — are falling through the cracks.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={0.06 * i}>
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <point.icon className="w-8 h-8 text-highlight mb-4 stroke-[1.5]" />
                <h3 className="text-lg font-sans font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
