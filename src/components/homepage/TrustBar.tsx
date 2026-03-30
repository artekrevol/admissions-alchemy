import { ScrollReveal } from "./ScrollReveal";
import logoForbes from "@/assets/logo-forbes.png";
import logoInc5000 from "@/assets/logo-inc5000.png";
import logoClutch from "@/assets/logo-clutch.png";
import logoTimmy from "@/assets/logo-timmy.png";

const certifications = [
  { logo: logoForbes, label: "Forbes", detail: "Best Startup Employers '24–'26" },
  { logo: logoInc5000, label: "Inc. 5000", detail: "#769 · 829% Growth" },
  { logo: logoClutch, label: "Clutch", detail: "#1 Web Dev Company Globally" },
  { logo: logoTimmy, label: "Timmy Award", detail: "Best Tech Startup, Dallas" },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.label} delay={0.05 * i}>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-background border border-border/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <img src={cert.logo} alt={cert.label} loading="lazy" className="h-10 w-auto object-contain mb-3" />
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
