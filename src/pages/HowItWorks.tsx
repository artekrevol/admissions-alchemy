import { Navbar } from "@/components/homepage/Navbar";
import { Footer } from "@/components/homepage/Footer";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { PageLink } from "@/components/homepage/PageLink";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Headphones, BarChart3, Users, Clock, PhoneCall, Bot, Eye, ShieldCheck, TrendingUp, LineChart } from "lucide-react";

const step1Bullets = [
  "Listen to recorded calls",
  "Review lead and conversion data",
  "Interview intake staff",
  "Identify where inquiries drop",
];

const step1Metrics = [
  "Response time",
  "Contact attempts before drop-off",
  "Where follow-up breaks",
  "Which sources convert",
  "What's said on calls",
  "Where delays kill momentum",
];

const step1Output = [
  "conversion rate",
  "response time",
  "revenue loss",
];

const step2Details = [
  { icon: Clock, text: "Response to every inquiry within minutes" },
  { icon: Bot, text: "AI voice answering, qualifying, and booking" },
  { icon: TrendingUp, text: "Follow-up that runs until conversion or disqualification" },
  { icon: Eye, text: "Real-time pipeline visibility" },
];

const step2Exclusions = [
  "Train the system",
  "Manage the technology",
  "Hire additional intake staff",
  "Handle compliance setup",
];

const step3Metrics = [
  "Conversion rate",
  "Response time",
  "No-show rate",
  "Revenue by source",
];

const step3Output = [
  "Leads vs conversions",
  "Conversion by source",
  "Time-to-contact",
  "Revenue generated",
  "Reactivation results",
];

const youProvide = [
  "Access to CRM/EHR",
  "Intake criteria and protocols",
  "10 minutes weekly",
  "30 minutes monthly",
];

const weHandle = [
  "System setup and maintenance",
  "AI and script optimization",
  "Follow-up execution",
  "Pipeline management",
  "Performance tracking",
  "Compliance and infrastructure",
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="section-padding pt-32 md:pt-40 pb-20 md:pb-28 lg:pb-36 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container-narrow relative">
          <ScrollReveal>
            <p className="label-text mb-6">Implementation</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="max-w-3xl mb-8" style={{ textWrap: "balance" as any }}>
              We Install and Run Your Conversion System
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              You focus on clinical operations.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              We execute, monitor, and improve intake performance every week.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* STEP 1: DIAGNOSE */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">Step 1</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-6">Diagnose</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-lg max-w-2xl mb-4 leading-relaxed">
              We map exactly where revenue is leaking.
            </p>
            <p className="text-muted-foreground text-lg max-w-2xl mb-10 leading-relaxed">
              First 7–10 days, we audit your intake end-to-end.
            </p>
          </ScrollReveal>

          {/* Details bullets */}
          <div className="space-y-3 mb-12">
            {step1Bullets.map((item, i) => (
              <ScrollReveal key={item} delay={0.06 * i}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium text-base">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* What we measure */}
          <ScrollReveal>
            <h3 className="font-sans font-semibold text-lg text-foreground mb-6">What we measure</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {step1Metrics.map((item, i) => (
              <ScrollReveal key={item} delay={0.04 * i}>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* What you get */}
          <ScrollReveal>
            <h3 className="font-sans font-semibold text-lg text-foreground mb-4">What you get</h3>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-muted-foreground text-base mb-4 leading-relaxed">A clear breakdown of:</p>
            <div className="space-y-2 mb-6">
              {step1Output.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-foreground text-base">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              No assumptions. Just data showing what's broken—and what it's costing you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* STEP 2: DEPLOY */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">Step 2</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-6">Deploy</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-lg max-w-2xl mb-4 leading-relaxed">
              We install the system and run it inside your workflow.
            </p>
            <p className="text-muted-foreground text-lg max-w-2xl mb-10 leading-relaxed">
              No rip-and-replace. Everything connects to your CRM or EHR.
            </p>
          </ScrollReveal>

          {/* What goes live */}
          <ScrollReveal>
            <h3 className="font-sans font-semibold text-lg text-foreground mb-6">What goes live</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {step2Details.map((item, i) => (
              <ScrollReveal key={item.text} delay={0.06 * i}>
                <div className="bg-background rounded-xl p-6 border border-border shadow-sm h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary stroke-[1.5]" />
                  </div>
                  <span className="text-foreground font-medium text-base leading-relaxed">{item.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* What you don't do */}
          <ScrollReveal>
            <h3 className="font-sans font-semibold text-lg text-foreground mb-6">What you don't do</h3>
          </ScrollReveal>
          <div className="space-y-3 mb-12">
            {step2Exclusions.map((item, i) => (
              <ScrollReveal key={item} delay={0.06 * i}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium text-base">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Summary */}
          <ScrollReveal>
            <div className="p-8 rounded-xl border-2 border-primary/20 bg-primary/[0.04]">
              <p className="text-foreground text-base mb-2 leading-relaxed" style={{ maxWidth: "none" }}>
                Your team handles conversations.
              </p>
              <p className="text-foreground text-base mb-4 leading-relaxed" style={{ maxWidth: "none" }}>
                The system handles speed, volume, and consistency.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed" style={{ maxWidth: "none" }}>
                Live in 2–3 weeks. Processing by week four.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STEP 3: OPTIMIZE */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">Step 3</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="max-w-2xl mb-6">Optimize</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-lg max-w-2xl mb-10 leading-relaxed">
              We manage performance and improve it every week.
            </p>
          </ScrollReveal>

          {/* Metrics tracked */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {step3Metrics.map((item, i) => (
              <ScrollReveal key={item} delay={0.06 * i}>
                <div className="bg-background rounded-xl p-5 border border-border shadow-sm text-center">
                  <span className="text-foreground font-semibold text-sm">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* What you see */}
          <ScrollReveal>
            <h3 className="font-sans font-semibold text-lg text-foreground mb-6">What you see</h3>
          </ScrollReveal>
          <div className="space-y-3 mb-12">
            {step3Output.map((item, i) => (
              <ScrollReveal key={item} delay={0.06 * i}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border shadow-sm">
                  <LineChart className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium text-base">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Summary */}
          <ScrollReveal>
            <div className="p-8 rounded-xl border-2 border-primary/20 bg-primary/[0.04]">
              <p className="text-foreground text-base mb-2 leading-relaxed" style={{ maxWidth: "none" }}>
                Monthly strategy review.
              </p>
              <p className="text-foreground text-base mb-4 leading-relaxed" style={{ maxWidth: "none" }}>
                No vanity metrics. Just numbers tied to revenue.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed" style={{ maxWidth: "none" }}>
                If conversion doesn't improve within 60 days, we keep optimizing until it does.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* YOUR ROLE */}
      <section className="section-padding section-y bg-primary text-primary-foreground">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="text-primary-foreground mb-4">Your Role</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-primary-foreground/80 text-lg mb-12 leading-relaxed">
              You focus on care. We run the system.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* You provide */}
            <ScrollReveal delay={0.08}>
              <div>
                <h3 className="font-sans font-semibold text-lg text-primary-foreground mb-6">You provide</h3>
                <div className="space-y-3">
                  {youProvide.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-primary-foreground/80 text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* We handle */}
            <ScrollReveal delay={0.14}>
              <div>
                <h3 className="font-sans font-semibold text-lg text-primary-foreground mb-6">We handle</h3>
                <div className="space-y-3">
                  {weHandle.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-primary-foreground/80 text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="section-padding section-y-tight">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <p className="text-foreground text-lg md:text-xl font-medium mb-3" style={{ maxWidth: "none" }}>
              You're not buying software.
            </p>
            <p className="text-foreground text-lg md:text-xl font-medium" style={{ maxWidth: "none" }}>
              You're installing a system that runs your revenue process.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="mt-10">
              <Button variant="hero" size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Identify Where You're Losing Revenue
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
