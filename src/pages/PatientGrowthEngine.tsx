import { Navbar } from "@/components/homepage/Navbar";
import { Footer } from "@/components/homepage/Footer";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { PageLink } from "@/components/homepage/PageLink";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneOff, Clock, Shuffle, DatabaseZap, EyeOff, CheckCircle2, Zap, MessageSquare, RotateCcw, BarChart3, Users } from "lucide-react";

const breakdowns = [
  { icon: PhoneOff, title: "Capture fails", content: "After-hours calls, weekends, busy periods—if no one answers, the lead is gone." },
  { icon: Clock, title: "Response is too slow", content: "A 5-minute response converts 10x better than a 1-hour response. Most clinics respond in hours—or days." },
  { icon: Shuffle, title: "Follow-up is inconsistent", content: "No standard. No system. Some leads get two calls. Others get five. Most get forgotten." },
  { icon: DatabaseZap, title: "Dormant leads are ignored", content: "Thousands of past inquiries sit untouched while you pay for new ones." },
  { icon: EyeOff, title: "No visibility", content: "You don't know what's converting, what's stuck, or what's lost." },
];

const systemDetails = [
  { icon: Zap, title: "Every inquiry is captured instantly", content: "Calls, forms, texts—everything is logged the moment it happens." },
  { icon: Clock, title: "Response happens within minutes", content: "Leads are contacted while they're still deciding—not hours later." },
  { icon: MessageSquare, title: "Follow-up runs automatically", content: "Calls, texts, emails continue until there's a response—or the lead is confirmed dead." },
  { icon: RotateCcw, title: "Dormant leads are reactivated continuously", content: "Your existing database becomes a revenue channel." },
  { icon: BarChart3, title: "You see everything in real time", content: "Inquiries, contact rates, bookings, drop-offs—no guessing." },
  { icon: Users, title: "Your team focuses on conversations, not chasing", content: "They speak to engaged leads instead of dialing dead ones." },
];

const outcomes = [
  "Every inquiry gets contacted within minutes",
  "Inquiry-to-booking conversion increases 40–60%",
  "No more missed nights, weekends, or overflow",
  "Dormant leads turn into active revenue",
  "Your pipeline becomes predictable",
];

const PatientGrowthEngine = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="section-padding pt-32 md:pt-40 pb-20 md:pb-28 lg:pb-36 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container-narrow relative">
          <ScrollReveal>
            <p className="label-text mb-6">Patient Growth Engine</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="max-w-3xl mb-8" style={{ textWrap: "balance" as any }}>
              You're Losing Half Your Inquiries Before First Contact
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              Most clinics convert 20–30% of inquiries into appointments.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              The rest disappear into missed calls, delayed callbacks, and inconsistent follow-up.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              The Patient Growth Engine ensures every inquiry is captured, contacted, and worked until they book—or don't.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Built for operators who are done watching revenue slip through gaps.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <Button variant="hero" size="xl">
              Identify Where You're Losing Revenue
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* STORY */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">The Reality</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-10">What's Happening Right Now</h2>
          </ScrollReveal>
          <div className="space-y-5">
            {[
              "2pm Wednesday. Someone calls your clinic. Scared. Ready.",
              "Your front desk is on another call. Voicemail.",
              "You plan to call back. But more calls come in. A patient shows up late. Insurance runs long.",
              "By the time you reach them—they've already booked somewhere else.",
              "You never knew they existed.",
            ].map((line, i) => (
              <ScrollReveal key={i} delay={0.08 + 0.06 * i}>
                <p className={`text-base md:text-lg leading-relaxed ${i === 4 ? "text-foreground font-semibold mt-8" : "text-foreground/80"}`}>
                  {line}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STAT */}
      <section className="section-padding section-y-tight bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl font-serif text-primary-foreground mb-4" style={{ textWrap: "balance" as any }}>
              Most clinics lose 40–60% of inquiries before first contact.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Not because the team doesn't care. Because the system can't respond fast enough.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* BREAKDOWN */}
      <section className="section-padding section-y">
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">The Breakdown</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-12">Where It Breaks</h2>
          </ScrollReveal>

          <div className="space-y-5">
            {breakdowns.map((item, i) => (
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

      {/* LOSS */}
      <section className="section-padding section-y-tight" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <div className="p-8 rounded-xl border-2 border-highlight/20 bg-highlight/[0.04] text-center">
              <p className="text-lg md:text-xl font-semibold text-foreground mb-3" style={{ maxWidth: "none" }}>
                You're paying to generate demand—and losing 50–70% before it turns into revenue.
              </p>
              <p className="text-base text-muted-foreground" style={{ maxWidth: "none" }}>
                Not a staffing problem. A system problem.
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
              <p className="text-primary-foreground/70 text-lg">You can hire more coordinators.</p>
              <p className="text-primary-foreground/70 text-lg">You can push harder.</p>
              <p className="text-primary-foreground/70 text-lg">You can improve scripts.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-primary-foreground font-semibold text-xl mb-10">Nothing changes.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <div className="max-w-lg mx-auto space-y-1 mb-10">
              <p className="text-primary-foreground/70 text-lg">Leads still slip.</p>
              <p className="text-primary-foreground/70 text-lg">Follow-ups still lag.</p>
              <p className="text-primary-foreground/70 text-lg">Intake still breaks under pressure.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-primary-foreground/80 text-lg font-medium max-w-xl mx-auto">
              Because the process is manual and reactive.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SYSTEM INTRO */}
      <section className="section-padding section-y-tight" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">The System</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-6">How The System Fixes It</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-muted-foreground max-w-2xl mb-3">
              The Patient Growth Engine sits between inquiry and admission.
            </p>
            <p className="text-muted-foreground max-w-2xl">
              It ensures every lead is captured, contacted, and moved forward—without relying on your team to remember or chase.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SYSTEM DETAILS */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {systemDetails.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.06 * i}>
                <div className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary stroke-[1.5]" />
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
            {outcomes.map((item, i) => (
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
              <PageLink href="/no-shows" label="No-Show Prevention" description="Reduce no-shows by fixing the gap between booking and appointment." />
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <PageLink href="/dormant-leads" label="Dormant Lead Reactivation" description="Recover revenue sitting untouched in your database." />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding section-y bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mx-auto max-w-2xl mb-6" style={{ textWrap: "balance" as any }}>
              See Where This Is Breaking In Your System
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-3">
              You don't need more leads.
            </p>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-3">
              You need a system that converts the ones you already have.
            </p>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
              We'll show you exactly where inquiries are being lost—and how to fix it.
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

export default PatientGrowthEngine;
