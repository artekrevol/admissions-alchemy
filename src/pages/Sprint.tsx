import { Navbar } from "@/components/homepage/Navbar";
import { Footer } from "@/components/homepage/Footer";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle, Zap, Settings, Rocket } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const valueBullets = [
  "Lead qualification and routing (live)",
  "Follow-up that runs automatically (live)",
  "Pipeline visibility across every stage (live)",
  "Documentation your team can operate",
];

const icpBullets = [
  "Clinic or treatment center doing $3M+",
  "Intake team overloaded",
  "Follow-up inconsistent",
  "Leads sitting unused",
  "Conversion unclear",
  "Hiring hasn't fixed it",
];

const notIcpBullets = [
  "Teams under $1M revenue",
  "Operators satisfied with conversion",
  "Anyone looking for a demo",
  "Anyone exploring options",
];

const problemBullets = [
  "Multiple lead sources",
  "Manual follow-up tracking",
  "Insurance handled manually",
  "No-show recovery inconsistent",
  "Old leads untouched",
];

const week1Bullets = [
  "Analyze 90 days of data",
  "Map intake flow",
  "Interview staff",
  "Identify automation opportunities",
  "Design system",
];

const week2Bullets = [
  "Build routing logic",
  "Set up follow-up",
  "Integrate systems",
  "Build dashboard",
  "Test system",
];

const week3Bullets = [
  "Deploy system",
  "Train team",
  "Monitor performance",
  "Fix issues",
];

const outcomeBullets = [
  "Working revenue system",
  "Improved response and follow-up",
  "Full pipeline visibility",
  "Operational process",
];

const afterBullets = [
  "Weekly optimization",
  "Conversion improvement",
  "Expansion into other systems",
];

const Sprint = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="section-padding pt-32 md:pt-40 pb-20 md:pb-28 lg:pb-36 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container-narrow relative">
          <ScrollReveal>
            <p className="label-text mb-6">3-Week Sprint</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="max-w-3xl mb-8" style={{ textWrap: "balance" as any }}>
              Build a Working Revenue System in 3 Weeks
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              Not a report. Not a roadmap.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              A live intake-to-admission system running inside your operation.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              Connected to your data. Integrated with your stack. Converting leads the day it goes live.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* VALUE */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="max-w-2xl mb-10">You get</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {valueBullets.map((item, i) => (
              <ScrollReveal key={item} delay={0.06 * i}>
                <div className="flex items-start gap-4 p-5 rounded-lg bg-background border border-border shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium text-base">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="section-padding section-y-tight">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="p-8 md:p-10 rounded-xl border border-border bg-card">
              <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed mb-4">
                This is for operators who don't have 6 months to experiment.
              </p>
              <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed">
                You fix revenue now. Then decide what to scale.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ICP + NOT ICP */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="max-w-2xl mb-10">Who This Is For</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.06}>
              <div className="space-y-3">
                {icpBullets.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-base">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div>
                <h3 className="font-sans font-semibold text-lg text-foreground mb-4">This is NOT for</h3>
                <div className="space-y-3">
                  {notIcpBullets.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-padding section-y">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="max-w-2xl mb-6">The Problem</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-foreground text-lg font-medium mb-8">
              Your intake process is manual and fragmented.
            </p>
          </ScrollReveal>
          <div className="space-y-3 mb-12">
            {problemBullets.map((item, i) => (
              <ScrollReveal key={item} delay={0.06 * (i + 1)}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-foreground text-base">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="section-padding section-y-tight bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <p className="text-primary-foreground text-xl md:text-2xl font-semibold mb-4">40–60% of inquiries never convert.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-primary-foreground/80 text-lg mb-2">$50K–$200K/year sits unused.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-primary-foreground/80 text-lg mb-2">High-intent leads go to competitors.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-primary-foreground/80 text-lg">No visibility into performance.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* TRANSITION */}
      <section className="section-padding section-y-tight">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <p className="text-foreground text-xl md:text-2xl font-medium mb-4">You don't need another tool.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-foreground text-xl md:text-2xl font-medium">You need the system built and running.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="max-w-2xl mb-14">What Happens</h2>
          </ScrollReveal>

          {/* Week 1 */}
          <ScrollReveal delay={0.06}>
            <div className="bg-background rounded-xl p-8 md:p-10 border border-border shadow-sm mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-primary stroke-[1.5]" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground">Week 1: Diagnose + Design</h3>
              </div>
              <div className="space-y-2 mb-6">
                {week1Bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-foreground/80 text-base">{b}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-lg bg-highlight/[0.05] border border-highlight/15">
                <p className="text-sm font-semibold text-foreground">Output:</p>
                <p className="text-sm text-foreground/80">System blueprint + ROI projection</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Week 2 */}
          <ScrollReveal delay={0.06}>
            <div className="bg-background rounded-xl p-8 md:p-10 border border-border shadow-sm mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Settings className="w-6 h-6 text-primary stroke-[1.5]" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground">Week 2: Build + Integrate</h3>
              </div>
              <div className="space-y-2 mb-6">
                {week2Bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-foreground/80 text-base">{b}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-lg bg-highlight/[0.05] border border-highlight/15">
                <p className="text-sm font-semibold text-foreground">Output:</p>
                <p className="text-sm text-foreground/80">System running in parallel</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Week 3 */}
          <ScrollReveal delay={0.06}>
            <div className="bg-background rounded-xl p-8 md:p-10 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Rocket className="w-6 h-6 text-primary stroke-[1.5]" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground">Week 3: Deploy + Operate</h3>
              </div>
              <div className="space-y-2 mb-6">
                {week3Bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-foreground/80 text-base">{b}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-lg bg-highlight/[0.05] border border-highlight/15">
                <p className="text-sm font-semibold text-foreground">Output:</p>
                <p className="text-sm text-foreground/80">Live system processing leads</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="max-w-2xl mb-10">What You Walk Away With</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {outcomeBullets.map((item, i) => (
              <ScrollReveal key={item} delay={0.06 * i}>
                <div className="flex items-start gap-4 p-5 rounded-lg bg-background border border-border shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium text-base">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER */}
      <section className="section-padding section-y">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="max-w-2xl mb-10">What Happens After</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {afterBullets.map((item, i) => (
              <ScrollReveal key={item} delay={0.06 * i}>
                <div className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium text-base">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-y bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mx-auto max-w-2xl mb-6" style={{ textWrap: "balance" as any }}>
              Start the Sprint
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
              If your intake system is costing you revenue, we'll show you exactly how much—and how fast it can be fixed.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <Button variant="hero" size="xl" className="bg-accent-foreground text-primary hover:bg-accent-foreground/90">
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

export default Sprint;
