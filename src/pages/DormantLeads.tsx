import { Navbar } from "@/components/homepage/Navbar";
import { Footer } from "@/components/homepage/Footer";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { PageLink } from "@/components/homepage/PageLink";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, UserX, Megaphone, ShieldAlert, PauseCircle, Clock, HeartPulse, History, CheckCircle2 } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { OpportunityCalculator } from "@/components/calculator/OpportunityCalculator";

const whyBlocks = [
  { icon: Users, title: "Your team is buried", content: "New inquiries take priority. Old leads never get touched." },
  { icon: UserX, title: "No ownership", content: "No system. No timing. No structure." },
  { icon: Megaphone, title: "Outreach feels wrong", content: "Generic messages get ignored. Sales pushes feel forced." },
  { icon: ShieldAlert, title: "Fear of being pushy", content: "You assume they don't want to hear from you." },
];

const segments = [
  { icon: Clock, title: "Stalled Inquiries", content: "They called. Then disappeared. Timing or process broke." },
  { icon: HeartPulse, title: "Self-Discharged Patients", content: "They left early. Most know they need to come back." },
  { icon: PauseCircle, title: "Insurance-Paused Patients", content: "Authorization issues stopped them. High-probability returns." },
  { icon: History, title: "Past Patients", content: "Discharged months ago. Many will need care again." },
];

const systemBullets = [
  "Segment everything",
  "Match message to intent",
  "Run structured outreach",
  "Track what converts",
  "Continuously improve",
];

const outcomesBullets = [
  "Dormant leads become active revenue",
  "Lower cost per admission",
  "Higher intent patients",
  "Clear visibility into what works",
  "System that compounds over time",
];

const DormantLeads = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Dormant Lead Reactivation — Recover Lost Revenue"
        description="Most clinics have 500-5,000 dormant contacts worth up to $972K. Learn how to systematically reactivate them into revenue."
        path="/dormant-leads"
      />
      <Navbar />
      {/* HERO */}
      <section className="section-padding pt-32 md:pt-40 pb-20 md:pb-28 lg:pb-36 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container-narrow relative">
          <ScrollReveal>
            <p className="label-text mb-6">Dormant Lead Reactivation</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="max-w-3xl mb-8" style={{ textWrap: "balance" as any }}>
              You're Sitting on Revenue You Already Paid For
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              Your CRM is full of people who already said yes.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              They called. Started intake. Got delayed. Left early.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              Then life happened.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              Most clinics have 500–5,000 dormant contacts.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Almost none are being worked.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MATH - visual stat cards */}
      <section className="section-padding section-y-tight bg-primary text-primary-foreground">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="text-primary-foreground mb-10">The Math Is Simple</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-primary-foreground/[0.08] backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10 text-center">
                <p className="text-2xl md:text-3xl font-serif text-primary-foreground mb-1">1,200</p>
                <p className="text-xs text-primary-foreground/60">dormant contacts</p>
              </div>
              <div className="bg-primary-foreground/[0.08] backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10 text-center">
                <p className="text-2xl md:text-3xl font-serif text-primary-foreground mb-1">180</p>
                <p className="text-xs text-primary-foreground/60">15% reachable</p>
              </div>
              <div className="bg-primary-foreground/[0.08] backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10 text-center">
                <p className="text-2xl md:text-3xl font-serif text-primary-foreground mb-1">54</p>
                <p className="text-xs text-primary-foreground/60">30% convert</p>
              </div>
              <div className="bg-primary-foreground/[0.08] backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10 text-center">
                <p className="text-2xl md:text-3xl font-serif text-primary-foreground mb-1">$18K</p>
                <p className="text-xs text-primary-foreground/60">average value</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-primary-foreground font-semibold text-xl mb-2">$972,000 in recoverable revenue.</p>
            <p className="text-primary-foreground/70 text-lg mb-6">Even at half: $486K.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="text-primary-foreground/70 text-lg mb-1">This isn't new lead gen.</p>
              <p className="text-primary-foreground/80 text-lg font-medium">This is revenue you already paid to acquire.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">The Blockers</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-12">Why It Never Happens</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyBlocks.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.06 * i}>
                <div className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-highlight stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-base text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* REALITY */}
      <section className="section-padding section-y-tight">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="p-8 rounded-xl border-2 border-primary/20 bg-primary/[0.04] text-center">
              <p className="text-lg md:text-xl font-semibold text-foreground mb-3" style={{ maxWidth: "none" }}>
                Most of these people still need help.
              </p>
              <p className="text-base text-muted-foreground" style={{ maxWidth: "none" }}>
                They didn't say no.{" "}
                The timing, process, or friction got in the way.
              </p>
            </div>
          </ScrollReveal>
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
              <p className="text-primary-foreground/70 text-lg">You can ask your team to follow up.</p>
              <p className="text-primary-foreground/70 text-lg">You can remind them weekly.</p>
              <p className="text-primary-foreground/70 text-lg">You can add it to a checklist.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-primary-foreground font-semibold text-xl mb-10">Nothing changes.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <div className="max-w-lg mx-auto space-y-1 mb-10">
              <p className="text-primary-foreground/70 text-lg">Dormant leads stay dormant.</p>
              <p className="text-primary-foreground/70 text-lg">New leads replace them.</p>
              <p className="text-primary-foreground/70 text-lg">You keep paying to acquire what you already have.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">Your Database</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-12">Who's Actually in Your Database</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {segments.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.06 * i}>
                <div className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-base text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">The System</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-12">What A System Does</h2>
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

      {/* OUTCOMES */}
      <section className="section-padding section-y">
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">Results</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-12">What Changes</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {outcomesBullets.map((item, i) => (
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
      <section className="section-padding py-12 md:py-16" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-6">Related</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal delay={0.06}>
              <PageLink href="/case-study" label="Case Study: 83 Leads Reactivated" description="19 admitted within 60 days from dormant database." />
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <PageLink href="/sprint" label="3-Week Sprint" description="Get a working revenue system installed in 3 weeks." />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <OpportunityCalculator highlightCard="dormant" initialInputs={{ dormantLeads: 1200 }} />

      {/* FINAL CTA */}
      <section className="section-padding section-y bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mx-auto max-w-2xl mb-6" style={{ textWrap: "balance" as any }}>
              See What's Sitting In Your Database
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-3">
              You don't need more leads.
            </p>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-3">
              You need to recover the ones you already have.
            </p>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
              We'll show you exactly how much revenue is sitting in your system—and how to unlock it.
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

export default DormantLeads;
