import { Navbar } from "@/components/homepage/Navbar";
import { Footer } from "@/components/homepage/Footer";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { PageLink } from "@/components/homepage/PageLink";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, VolumeX, Repeat, ShieldOff, Brain, Timer, Unlink, AlertTriangle, XCircle, CheckCircle2 } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { OpportunityCalculator } from "@/components/calculator/OpportunityCalculator";

const whyBlocks = [
  { icon: Clock, title: "You book at peak emotion—but deliver later", content: "Patients call in crisis. You schedule them 10–14 days out. By then, urgency fades. Doubt replaces action." },
  { icon: VolumeX, title: "The gap is silent", content: "After booking, there's nothing. No reinforcement. No relationship. Just time for second thoughts." },
  { icon: Repeat, title: "Rescheduling is friction-heavy", content: "They hesitate the night before. Rescheduling requires effort. Calling feels harder than disappearing." },
  { icon: ShieldOff, title: "There's no perceived cost", content: "To them, missing costs nothing. It's just a calendar slot—not a commitment." },
  { icon: Brain, title: "Real objections go unaddressed", content: "Fear. Shame. Cost. Uncertainty. Your reminders don't handle these. They just notify people who've already checked out." },
];

const breakdownBlocks = [
  { icon: Timer, title: "Wrong timing", content: "By 48 hours out, urgency is gone. The reminder doesn't motivate—it triggers doubt." },
  { icon: Unlink, title: "No relationship between booking and showing", content: "You confirm once, then disappear. When the reminder hits, it's from a system—not someone they trust." },
  { icon: AlertTriangle, title: "No risk detection", content: "Someone ignores your message. You don't know if they're coming until it's too late." },
  { icon: XCircle, title: "No recovery system", content: "They cancel. Say they'll reschedule. They don't. The lead dies." },
];

const systemBullets = [
  "Commitment is built continuously",
  "Risk is detected early",
  "Rescheduling becomes frictionless",
  "Objections are surfaced and handled",
  "Schedules stay full",
];

const NoShows = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="No-Show Prevention — Fill Every Chair"
        description="20-30% of appointments disappear. Learn why reminders don't work and what actually reduces no-shows in healthcare clinics."
        path="/no-shows"
      />
      <Navbar />
      {/* HERO */}
      <section className="section-padding pt-32 md:pt-40 pb-20 md:pb-28 lg:pb-36 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container-narrow relative">
          <ScrollReveal>
            <p className="label-text mb-6">No-Show Prevention</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="max-w-3xl mb-8" style={{ textWrap: "balance" as any }}>
              Every Empty Chair Is Revenue You'll Never Recover
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-foreground font-semibold text-lg md:text-xl max-w-2xl mb-4">
              15 no-shows this week = $12,000 gone.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
              Not delayed. Lost.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              Your clinicians sit idle. Your schedule has gaps. Your team scrambles to fill tomorrow.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              You've sent reminders. You've made confirmation calls. Still, 20–30% of appointments disappear.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              This isn't a patient problem.{" "}
              <span className="text-foreground font-medium">It's a system failure.</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">Root Causes</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-12">Why No-Shows Actually Happen</h2>
          </ScrollReveal>
          <div className="space-y-5">
            {whyBlocks.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.06 * i}>
                <div className="bg-background rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-highlight stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* REMINDERS */}
      <section className="section-padding section-y-tight bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mx-auto max-w-2xl mb-8" style={{ textWrap: "balance" as any }}>
              Why Reminders Don't Fix It
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-3">
              This isn't a memory issue. It's a commitment issue.
            </p>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-3">
              A reminder doesn't create commitment—it tests it.
            </p>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              And when that test fails, you have no recovery path.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* BREAKDOWN */}
      <section className="section-padding section-y">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {breakdownBlocks.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.06 * i}>
                <div className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-highlight stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-base text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INEVITABILITY */}
      <section className="section-padding section-y bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mx-auto max-w-2xl mb-10" style={{ textWrap: "balance" as any }}>
              This Doesn't Fix Itself
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="max-w-lg mx-auto space-y-1 mb-10">
              <p className="text-primary-foreground/70 text-lg">You can send more reminders.</p>
              <p className="text-primary-foreground/70 text-lg">You can call more often.</p>
              <p className="text-primary-foreground/70 text-lg">You can push your team harder.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-primary-foreground font-semibold text-xl mb-10">Nothing changes.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <div className="max-w-lg mx-auto space-y-1 mb-10">
              <p className="text-primary-foreground/70 text-lg">No-shows still happen.</p>
              <p className="text-primary-foreground/70 text-lg">Schedules still break.</p>
              <p className="text-primary-foreground/70 text-lg">Revenue still disappears.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-primary-foreground/80 text-lg font-medium max-w-xl mx-auto">
              Because the gap between booking and showing is unmanaged.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">The Fix</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-12">What Actually Reduces No-Shows</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {systemBullets.map((item, i) => (
              <ScrollReveal key={item} delay={0.08 * i}>
                <div className="flex items-start gap-4 p-5 rounded-lg bg-background border border-border shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium text-base">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="section-padding py-12 md:py-16">
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-6">Related</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal delay={0.06}>
              <PageLink href="/dormant-leads" label="Dormant Lead Reactivation" description="Recover revenue sitting untouched in your database." />
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <PageLink href="/case-study" label="Case Study: $840K Recovered" description="No-show rate dropped from 41% to 18%." />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding section-y bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mx-auto max-w-2xl mb-6" style={{ textWrap: "balance" as any }}>
              See Where No-Shows Are Coming From
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-3">
              You don't have a scheduling problem.
            </p>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-3">
              You have a gap between booking and commitment.
            </p>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
              We'll show you exactly where that gap is—and how to fix it.
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

export default NoShows;
