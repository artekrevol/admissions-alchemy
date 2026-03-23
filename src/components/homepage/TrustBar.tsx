import { ScrollReveal } from "./ScrollReveal";
import { Shield, Award, Star, TrendingUp } from "lucide-react";

const certifications = [
  { icon: Shield, label: "HIPAA Compliant", detail: "Solutions Provider" },
  { icon: Shield, label: "ISO 27001", detail: "Certified" },
  { icon: Award, label: "Forbes", detail: "Best Startup Employers '24–'26" },
  { icon: TrendingUp, label: "Inc. 5000", detail: "#769 · 829% Growth" },
  { icon: Star, label: "Clutch", detail: "#1 Web Dev Company Globally" },
  { icon: Award, label: "HL7 FHIR", detail: "Certified Integration" },
];

export function TrustBar() {
  return (
    <section className="section-padding py-8 md:py-12 border-b border-border/50" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
      <div className="container-wide">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6 text-center">
            Backed by an engineering team with a track record of excellence
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.label} delay={0.05 * i}>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-background border border-border/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <cert.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground leading-tight">{cert.label}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{cert.detail}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
