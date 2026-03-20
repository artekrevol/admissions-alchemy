import { Navbar } from "@/components/homepage/Navbar";
import { Footer } from "@/components/homepage/Footer";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { PageLink } from "@/components/homepage/PageLink";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, RefreshCw, Target, CalendarX, DatabaseZap, ShieldCheck } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { AnimatedCounter } from "@/components/homepage/AnimatedCounter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const situationBullets = [
  { value: "180", label: "inquiries/month" },
  { value: "22%", label: "conversion rate" },
  { value: "41%", label: "no-show rate" },
  { value: "2,400", label: "dormant leads" },
];

const problemBullets = [
  "6–8 touchpoints per admission",
  "Constant phone tag",
  "Manual tracking in spreadsheets",
  "Inconsistent follow-up",
];

const constraintBullets = [
  "scheduling",
  "reminders",
  "insurance follow-up",
  "data entry",
];

const fixBlocks = [
  { icon: Zap, title: "Every inquiry captured and routed instantly", content: "Program + insurance-based routing. No delays." },
  { icon: RefreshCw, title: "Follow-up became automatic and consistent", content: "Every lead worked until they responded or dropped." },
  { icon: Target, title: "High-intent leads were prioritized", content: "Callbacks, form starts, and engagement triggered escalation." },
  { icon: CalendarX, title: "No-shows triggered re-engagement automatically", content: "Missed appointments didn't die—they re-entered the system." },
  { icon: DatabaseZap, title: "Dormant leads activated at scale", content: "45-day reactivation campaign across 2,400 contacts. Coordinators only engaged when leads responded." },
  { icon: ShieldCheck, title: "Insurance verification moved upstream", content: "Handled before assessment, not after." },
];

const resultsBefore = [
  { label: "Conversion", before: "22%", after: "34%" },
  { label: "No-show rate", before: "41%", after: "18%" },
  { label: "Time to admit", before: "11 days", after: "6 days" },
  { label: "Dormant reactivated", before: "0", after: "83" },
];

const resultsBullets = [
  "Conversion increased from 22% to 34%",
  "22 additional admissions per month",
  "$840K in recovered annual revenue",
  "No-show rate dropped from 41% to 18%",
  "83 dormant leads reactivated",
  "19 admitted within 60 days",
  "Coordinator output doubled",
  "Time to admit reduced from 11 days to 6 days",
  "Full pipeline visibility",
];

const CaseStudy = () => {
  const compareRef = useRef<HTMLDivElement>(null);
  const compareInView = useInView(compareRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Case Study — $840K Recovered by Fixing Intake"
        description="How a 3-location addiction treatment provider recovered $840K in annual revenue by fixing their intake system — not their marketing."
        path="/case-study"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "$840K Recovered by Fixing Intake — Not Marketing",
          description: "Case study: Regional addiction treatment provider recovers $840K by systematizing intake.",
          publisher: { "@type": "Organization", name: "PatientFlow" },
        }}
      />
      <Navbar />

      {/* HERO */}
      <section className="section-padding pt-32 md:pt-40 pb-20 md:pb-28 lg:pb-36 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-narrow relative">
          <ScrollReveal>
            <p className="label-text mb-6">Case Study</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="max-w-3xl mb-8" style={{ textWrap: "balance" as any }}>
              $840K Recovered by Fixing Intake — Not Marketing
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              Regional addiction treatment provider. Three locations. 60-bed capacity.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              Demand wasn't the problem.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              Conversion was.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SITUATION */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">Before</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-10">The Situation</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {situationBullets.map((item, i) => (
              <ScrollReveal key={item.label} delay={0.06 * i}>
                <div className="bg-background rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center">
                  <p className="font-serif text-2xl md:text-3xl text-primary leading-none mb-2">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg mb-2 leading-relaxed">Strong reputation. Steady lead flow.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">But beds weren't filling.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="max-w-2xl mb-6">What Was Breaking</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">The intake team was overloaded.</p>
          </ScrollReveal>
          <div className="space-y-3 mb-10">
            {problemBullets.map((item, i) => (
              <ScrollReveal key={item} delay={0.06 * i}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-foreground font-medium text-base">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">High-intent prospects went cold within 48 hours.</p>
            <p className="text-muted-foreground text-lg mb-1 leading-relaxed">No prioritization.</p>
            <p className="text-muted-foreground text-lg mb-1 leading-relaxed">No system.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">No visibility.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CONSTRAINT */}
      <section className="section-padding section-y-tight">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="max-w-2xl mb-6">The Real Constraint</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Coordinators spent 60% of their time on admin:
            </p>
            <div className="space-y-1 mb-8 ml-1">
              {constraintBullets.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-muted-foreground text-base">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">Not closing admissions.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="mt-10 p-8 rounded-xl border-2 border-primary/20 bg-primary/[0.04]">
              <p className="text-foreground text-base mb-4 leading-relaxed" style={{ maxWidth: "none" }}>
                The dormant leads weren't ignored—they were unmanageable.
              </p>
              <p className="text-foreground text-base mb-4 leading-relaxed" style={{ maxWidth: "none" }}>
                2,400 contacts vs. 180 new inquiries/month.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed" style={{ maxWidth: "none" }}>
                No human system can handle that.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FIX */}
      <section className="section-padding section-y bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-primary-foreground/[0.02] blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-narrow relative">
          <ScrollReveal>
            <h2 className="text-primary-foreground mb-6">The Fix</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-primary-foreground/80 text-lg mb-12 leading-relaxed">
              We removed manual work from intake and replaced it with a system.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {fixBlocks.map((block, i) => (
              <ScrollReveal key={block.title} delay={0.06 * i}>
                <div className="bg-primary-foreground/[0.08] backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 h-full hover:bg-primary-foreground/[0.12] transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <block.icon className="w-5 h-5 text-primary-foreground stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-base text-primary-foreground mb-2">{block.title}</h3>
                      <p className="text-sm text-primary-foreground/70 leading-relaxed">{block.content}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="section-padding section-y-tight" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
        <div className="container-narrow text-center">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div>
                <p className="stat-number text-4xl md:text-5xl">3 weeks</p>
                <p className="text-muted-foreground text-sm mt-2">Implementation</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-border" />
              <div>
                <p className="stat-number text-4xl md:text-5xl">2 sessions</p>
                <p className="text-muted-foreground text-sm mt-2">Training</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BEFORE/AFTER VISUAL COMPARISON */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">After</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-12">The Results</h2>
          </ScrollReveal>

          {/* Visual before/after comparison table */}
          <div ref={compareRef} className="rounded-xl overflow-hidden border border-border shadow-sm mb-10">
            <div className="grid grid-cols-3">
              <div className="p-4 bg-muted/50 border-b border-border" />
              <div className="p-4 bg-accent/[0.06] border-b border-border text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">Before</p>
              </div>
              <div className="p-4 bg-primary/[0.06] border-b border-border text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">After</p>
              </div>
            </div>
            {resultsBefore.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -10 }}
                animate={compareInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-3 border-b border-border last:border-b-0"
              >
                <div className="p-4 bg-background flex items-center">
                  <span className="text-sm font-medium text-foreground">{row.label}</span>
                </div>
                <div className="p-4 bg-accent/[0.03] flex items-center justify-center">
                  <span className="text-sm text-foreground/50 line-through">{row.before}</span>
                </div>
                <div className="p-4 bg-primary/[0.03] flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{row.after}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full results list */}
          <div className="space-y-3">
            {resultsBullets.map((item, i) => (
              <ScrollReveal key={item} delay={0.05 * i}>
                <div className="flex items-start gap-4 p-5 rounded-lg bg-background border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium text-base">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="section-padding section-y-tight">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <p className="text-foreground text-lg md:text-xl font-medium mb-3" style={{ maxWidth: "none" }}>
              This wasn't a lead problem.
            </p>
            <p className="text-foreground text-lg md:text-xl font-medium mb-6" style={{ maxWidth: "none" }}>
              It was a system problem.
            </p>
            <p className="text-foreground text-xl md:text-2xl font-semibold" style={{ maxWidth: "none", fontFamily: "'DM Serif Display', Georgia, serif", color: "hsl(var(--text-display))" }}>
              Fix the system — revenue follows.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTERNAL LINK */}
      <section className="section-padding py-12 md:py-16">
        <div className="container-narrow">
          <ScrollReveal>
            <PageLink href="/sprint" label="Start the 3-Week Sprint" description="Get a working revenue system installed — not a report, not a roadmap." />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-y bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-primary-foreground/[0.03] blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-narrow text-center relative">
          <ScrollReveal>
            <h2 className="text-primary-foreground mx-auto max-w-2xl mb-6" style={{ textWrap: "balance" as any }}>
              See What This Looks Like In Your Intake Process
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
              We'll map your workflow, show where conversion breaks, and walk you through what changes when a system runs it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <Button variant="hero" size="xl" className="bg-accent-foreground text-primary hover:bg-accent-foreground/90 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              Identify Where You're Losing Revenue
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <StickyCtaBar />
    </div>
  );
};

export default CaseStudy;
