import { Navbar } from "@/components/homepage/Navbar";
import { Footer } from "@/components/homepage/Footer";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { PageLink } from "@/components/homepage/PageLink";
import { StatCard } from "@/components/homepage/StatCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, UserX, CalendarX, DatabaseZap, EyeOff } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const leaks = [
  {
    icon: Clock,
    title: "Too Slow",
    paragraphs: [
      "A lead comes in late afternoon. You call back the next day. They've already booked elsewhere.",
      "Your team is juggling intake, verification, screening, and admin. Speed loses.",
    ],
    callouts: [
      "After one hour, your chance of reaching a lead drops 60%.",
      "At 40 inquiries/month and $12K LTV, a 10% drop in conversion = $48K/month lost.",
    ],
  },
  {
    icon: UserX,
    title: "Intake Kills Momentum",
    paragraphs: [
      "A family calls. You require multiple calls, forms, and delays before discussing availability. They leave.",
      "Your process is built for compliance, not conversion. Every step adds friction.",
    ],
    callouts: [
      "If 60 inquiries come in and 40% drop mid-intake:",
      "24 lost admits = $288K/month gone.",
    ],
  },
  {
    icon: CalendarX,
    title: "No-Shows",
    paragraphs: [
      "They book. Then they don't show. Your schedule has gaps. Revenue disappears.",
      "No structured follow-up between booking and arrival.",
    ],
    callouts: [
      "At 30 bookings/month and 20% no-show rate:",
      "6 lost admits = $72K/month lost.",
    ],
  },
  {
    icon: DatabaseZap,
    title: "Ignored Leads",
    paragraphs: [
      "Thousands of past inquiries sit untouched while you pay for new leads.",
      "No reactivation system. No ownership.",
    ],
    callouts: [
      "2,000 leads × 4% reactivation = 80 admits",
      "= $960K sitting in your database.",
    ],
  },
  {
    icon: EyeOff,
    title: "No Visibility",
    paragraphs: [
      "You don't know how many leads are active, where they're stuck, or what's converting.",
      "Data lives in spreadsheets, inboxes, and memory.",
    ],
    callouts: [
      "You can't fix what you can't see.",
    ],
  },
];

const systemBullets = [
  "Leads are contacted within minutes",
  "Follow-up runs automatically for days",
  "Intake moves without friction",
  "No-shows are prevented",
  "Dormant leads convert into revenue",
  "Your pipeline becomes visible in real time",
];

const RevenueLeakage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Revenue Leakage — Where Patients Drop Off"
        description="Discover the 5 stages where healthcare clinics lose patients between inquiry and admission, and how a systematic approach recovers lost revenue."
        path="/revenue-leakage"
      />
      <Navbar />

      {/* HERO */}
      <section className="section-padding pt-32 md:pt-40 pb-20 md:pb-28 lg:pb-36 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container-narrow relative">
          <ScrollReveal>
            <p className="label-text mb-6">Revenue Leakage</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="max-w-3xl mb-8" style={{ textWrap: "balance" as any }}>
              You're Losing Patients You Already Paid For—Every Day
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              Inquiries come in. Your team responds. But between first contact and admission, patients drop off—not because you can't help, but because your system can't keep up.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              This isn't a demand problem. It's what happens after the inquiry.
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

      {/* KEY STATS */}
      <section className="section-padding py-12 md:py-16">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="$48K" label="Lost monthly from slow response" delay={0} />
            <StatCard value="$288K" label="Lost monthly from intake friction" delay={0.06} />
            <StatCard value="$72K" label="Lost monthly from no-shows" delay={0.12} />
            <StatCard value="$960K" label="Sitting unused in your database" delay={0.18} />
          </div>
        </div>
      </section>

      {/* LEAKS INTRO */}
      <section className="section-padding section-y-tight" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">The Breakdown</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl">Where Revenue Disappears</h2>
          </ScrollReveal>
        </div>
      </section>

      {/* LEAK CARDS */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow space-y-10">
          {leaks.map((leak, i) => (
            <ScrollReveal key={leak.title} delay={0.06}>
              <div className="bg-background rounded-xl p-8 md:p-10 border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <leak.icon className="w-6 h-6 text-primary stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-1">
                      Leak {i + 1}
                    </p>
                    <h3 className="font-sans font-semibold text-xl text-foreground">{leak.title}</h3>
                  </div>
                </div>

                {leak.paragraphs.map((p) => (
                  <p key={p} className="text-foreground/80 text-base leading-relaxed mb-4">{p}</p>
                ))}

                <div className="mt-6 p-5 rounded-lg bg-highlight/[0.05] border border-highlight/15">
                  {leak.callouts.map((c) => (
                    <p key={c} className="text-sm font-semibold text-foreground leading-relaxed">{c}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
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
              <p className="text-primary-foreground/70 text-lg">You can hire more staff.</p>
              <p className="text-primary-foreground/70 text-lg">You can push harder.</p>
              <p className="text-primary-foreground/70 text-lg">You can tighten scripts.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-primary-foreground font-semibold text-xl mb-10">Nothing changes.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <div className="max-w-lg mx-auto space-y-1 mb-10">
              <p className="text-primary-foreground/70 text-lg">Leads still slip.</p>
              <p className="text-primary-foreground/70 text-lg">Follow-ups still lag.</p>
              <p className="text-primary-foreground/70 text-lg">Intake still slows.</p>
              <p className="text-primary-foreground/70 text-lg">No-shows still happen.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-primary-foreground/80 text-lg font-medium max-w-xl mx-auto">
              Your intake process is manual, fragmented, and reactive.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">The Shift</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-12">What Changes When This Runs As A System</h2>
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
            <p className="label-text mb-6">Explore Further</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal delay={0.06}>
              <PageLink href="/patient-growth-engine" label="Patient Growth Engine" description="See how the system captures and converts every inquiry." />
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <PageLink href="/case-study" label="Case Study: $840K Recovered" description="Real results from fixing intake — not marketing." />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding section-y bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mx-auto max-w-2xl mb-6" style={{ textWrap: "balance" as any }}>
              See Where You're Losing Revenue
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
              We'll map your intake process and show you exactly where patients drop—and how to fix it.
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

export default RevenueLeakage;
