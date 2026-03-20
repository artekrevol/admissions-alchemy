import { motion } from "framer-motion";

const partners = [
  "Regional Health Systems",
  "Addiction Treatment Centers",
  "Behavioral Health Networks",
  "Multi-Location Clinics",
  "Outpatient Providers",
  "Residential Treatment Facilities",
];

export function TrustBar() {
  return (
    <section className="section-padding py-8 md:py-10 border-b border-border/50 overflow-hidden">
      <div className="container-wide">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6">
          Trusted by healthcare operators nationwide
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...partners, ...partners].map((name, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <div className="w-2 h-2 rounded-full bg-primary/20" />
              <span className="text-sm font-medium text-muted-foreground/70 tracking-wide">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
