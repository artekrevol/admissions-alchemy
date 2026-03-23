import { Navbar } from "@/components/homepage/Navbar";
import { Footer } from "@/components/homepage/Footer";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  X,
  Minus,
  Clock,
  Users,
  Bot,
  BarChart3,
  PhoneCall,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

/* ── comparison data ── */

type Rating = "yes" | "partial" | "no";

interface ComparisonRow {
  category: string;
  feature: string;
  manual: { rating: Rating; note: string };
  crm: { rating: Rating; note: string };
  pf: { rating: Rating; note: string };
}

const rows: ComparisonRow[] = [
  {
    category: "Speed to Lead",
    feature: "Sub-60-second inquiry response",
    manual: { rating: "no", note: "Hours or next business day" },
    crm: { rating: "partial", note: "Auto-email only; no live voice" },
    pf: { rating: "yes", note: "AI voice answers in <60 seconds" },
  },
  {
    category: "Speed to Lead",
    feature: "After-hours & weekend coverage",
    manual: { rating: "no", note: "Voicemail; callbacks Monday" },
    crm: { rating: "partial", note: "Chatbot with limited triage" },
    pf: { rating: "yes", note: "24/7 AI voice + live escalation" },
  },
  {
    category: "Follow-Up",
    feature: "Persistent multi-touch follow-up",
    manual: { rating: "no", note: "1–2 attempts, then forgotten" },
    crm: { rating: "partial", note: "Drip emails; low open rates" },
    pf: { rating: "yes", note: "Call, text, email until conversion or disqualification" },
  },
  {
    category: "Follow-Up",
    feature: "Dormant lead reactivation",
    manual: { rating: "no", note: "Leads sit in spreadsheets" },
    crm: { rating: "no", note: "No outbound re-engagement" },
    pf: { rating: "yes", note: "Automated campaigns to aged leads" },
  },
  {
    category: "No-Show Prevention",
    feature: "Multi-channel appointment reminders",
    manual: { rating: "partial", note: "One courtesy call" },
    crm: { rating: "partial", note: "SMS/email reminders only" },
    pf: { rating: "yes", note: "SMS + voice + email cadence with reschedule options" },
  },
  {
    category: "No-Show Prevention",
    feature: "Waitlist backfill for cancellations",
    manual: { rating: "no", note: "Slot goes unfilled" },
    crm: { rating: "no", note: "Not a standard feature" },
    pf: { rating: "yes", note: "Instant waitlist offer to fill gaps" },
  },
  {
    category: "Visibility",
    feature: "Real-time conversion pipeline",
    manual: { rating: "no", note: "Monthly spreadsheet review" },
    crm: { rating: "partial", note: "Dashboard; staff must log data" },
    pf: { rating: "yes", note: "Live dashboard updated automatically" },
  },
  {
    category: "Visibility",
    feature: "Call recording & quality scoring",
    manual: { rating: "no", note: "None" },
    crm: { rating: "no", note: "Requires separate telephony add-on" },
    pf: { rating: "yes", note: "Every call recorded, scored, and flagged" },
  },
  {
    category: "Compliance",
    feature: "HIPAA-compliant infrastructure",
    manual: { rating: "partial", note: "Depends on staff discipline" },
    crm: { rating: "partial", note: "Varies by vendor; extra cost" },
    pf: { rating: "yes", note: "Built on HIPAA + ISO 27001 infrastructure" },
  },
  {
    category: "Ownership",
    feature: "Fully managed — no staff training needed",
    manual: { rating: "no", note: "Requires hiring & training" },
    crm: { rating: "no", note: "Your team still runs it" },
    pf: { rating: "yes", note: "We install, operate, and optimize" },
  },
];

const ratingIcon = (r: Rating) => {
  if (r === "yes") return <Check className="w-4 h-4 text-emerald-600" />;
  if (r === "partial") return <Minus className="w-4 h-4 text-amber-500" />;
  return <X className="w-4 h-4 text-destructive" />;
};

const ratingBg = (r: Rating) => {
  if (r === "yes") return "bg-emerald-50 dark:bg-emerald-950/30";
  if (r === "partial") return "bg-amber-50 dark:bg-amber-950/20";
  return "";
};

/* ── bottom-line stats ── */

const bottomLine = [
  { icon: Clock, stat: "<60s", label: "Average response time" },
  { icon: TrendingUp, stat: "27%", label: "Avg. conversion lift" },
  { icon: Zap, stat: "40%", label: "No-show reduction" },
  { icon: ShieldCheck, stat: "100%", label: "HIPAA compliance" },
];

/* ── objections ── */

const objections = [
  {
    q: '"We already have a CRM."',
    a: "A CRM stores data. It doesn't answer the phone, follow up persistently, or reactivate dormant leads. PatientFlow operates on top of your CRM — or replaces the need for one entirely.",
  },
  {
    q: '"Our front-desk staff handles intake."',
    a: "Your staff is great — when they're available. But after hours, during lunch, and on weekends, calls go to voicemail. PatientFlow ensures every inquiry gets a live response, 24/7.",
  },
  {
    q: "\u201CWe tried software before and it didn\u2019t work.\u201D",
    a: "Software fails when no one operates it. PatientFlow isn\u2019t software you buy \u2014 it\u2019s a system we install and run. You get results, not another login.",
  },
];

/* ── page ── */

export default function WhyPatientFlow() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Why PatientFlow — Compare Manual, CRM & Managed Systems"
        description="See how PatientFlow's managed patient conversion system compares to manual intake and CRM software across speed, follow-up, no-show prevention, and compliance."
        path="/why-patientflow"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="section-padding pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <p className="label-text mb-4">Competitive Comparison</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h1 className="mb-5 max-w-3xl mx-auto">
              Software doesn't convert patients.{" "}
              <span className="text-primary">Systems do.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Most clinics rely on either manual effort or CRM tools that log
              data but don't act on it. PatientFlow is neither — it's a fully
              managed conversion system that responds, follows up, and converts
              on your behalf.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <Button size="lg" className="gap-2" asChild>
              <a href="#">
                Book a Diagnostic Call <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Three-Column Comparison Table ── */}
      <section
        className="section-padding py-14 md:py-18"
        style={{ backgroundColor: "hsl(var(--surface-cool))" }}
      >
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="text-center mb-10">
              How the three approaches compare
            </h2>
          </ScrollReveal>

          {/* Desktop table */}
          <ScrollReveal delay={0.06}>
            <div className="hidden md:block overflow-x-auto rounded-xl border border-border bg-background shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-foreground w-[28%]">
                      Capability
                    </th>
                    <th className="p-4 font-semibold text-foreground/70 w-[24%]">
                      Manual Process
                    </th>
                    <th className="p-4 font-semibold text-foreground/70 w-[24%]">
                      CRM / SaaS Software
                    </th>
                    <th className="p-4 font-semibold text-primary w-[24%] bg-primary/5">
                      PatientFlow System ✦
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4 font-medium text-foreground">
                        {row.feature}
                      </td>
                      <td className={`p-4 text-center ${ratingBg(row.manual.rating)}`}>
                        <div className="flex flex-col items-center gap-1">
                          {ratingIcon(row.manual.rating)}
                          <span className="text-xs text-muted-foreground leading-tight">
                            {row.manual.note}
                          </span>
                        </div>
                      </td>
                      <td className={`p-4 text-center ${ratingBg(row.crm.rating)}`}>
                        <div className="flex flex-col items-center gap-1">
                          {ratingIcon(row.crm.rating)}
                          <span className="text-xs text-muted-foreground leading-tight">
                            {row.crm.note}
                          </span>
                        </div>
                      </td>
                      <td className={`p-4 text-center bg-primary/5`}>
                        <div className="flex flex-col items-center gap-1">
                          {ratingIcon(row.pf.rating)}
                          <span className="text-xs text-foreground/70 font-medium leading-tight">
                            {row.pf.note}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {rows.map((row, i) => (
              <ScrollReveal key={i} delay={0.04 * i}>
                <div className="rounded-xl border border-border bg-background shadow-sm p-4">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    {row.feature}
                  </p>
                  <div className="space-y-2">
                    {[
                      { label: "Manual", data: row.manual },
                      { label: "CRM", data: row.crm },
                      { label: "PatientFlow", data: row.pf },
                    ].map((col) => (
                      <div
                        key={col.label}
                        className={`flex items-start gap-2.5 rounded-lg px-3 py-2 ${
                          col.label === "PatientFlow"
                            ? "bg-primary/5 border border-primary/20"
                            : ratingBg(col.data.rating)
                        }`}
                      >
                        <div className="pt-0.5 shrink-0">
                          {ratingIcon(col.data.rating)}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                            {col.label}
                          </span>
                          <p className="text-xs text-muted-foreground leading-snug">
                            {col.data.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom-line stats ── */}
      <section className="section-padding py-12 md:py-16">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="text-center mb-10">The PatientFlow bottom line</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bottomLine.map((item, i) => (
              <ScrollReveal key={item.label} delay={0.08 * i}>
                <div className="text-center p-5 md:p-6 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-serif text-3xl md:text-4xl text-primary leading-none mb-2">
                    {item.stat}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Objections ── */}
      <section
        className="section-padding py-14 md:py-18"
        style={{ backgroundColor: "hsl(var(--surface-warm))" }}
      >
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4 text-center">Common Objections</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-center mb-10">
              "But we already have&nbsp;…"
            </h2>
          </ScrollReveal>
          <div className="space-y-5">
            {objections.map((obj, i) => (
              <ScrollReveal key={i} delay={0.08 * i}>
                <div className="rounded-xl bg-background border border-border shadow-sm p-6">
                  <p className="text-base font-semibold text-foreground mb-2 italic">
                    {obj.q}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {obj.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mb-4">
              Ready to stop losing patients to process gaps?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Book a 30-minute diagnostic call. We'll map your leakage, show you
              the math, and present a deployment plan — no obligation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-foreground"
              asChild
            >
              <a href="#">
                Book a Diagnostic Call <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <StickyCtaBar />
    </div>
  );
}
