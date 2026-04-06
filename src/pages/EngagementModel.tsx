import { Navbar } from "@/components/homepage/Navbar";
import { Footer } from "@/components/homepage/Footer";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Settings, Headphones, Shield, Info, CheckCircle2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "The Admissions Pipeline Audit",
    price: "$2,500",
    desc: 'Before we build anything, we analyze 90 days of your historical lead data, listen to call recordings, and map your current CRM workflows. We deliver a concrete "Revenue Leakage Report" showing exactly where leads are dropping and how much revenue is leaking.',
    note: "This fee is 100% credited toward your implementation.",
  },
  {
    number: "02",
    icon: Settings,
    title: "System Implementation",
    price: "$0 upfront for early partners",
    desc: "We install the PatientFlow architecture on top of your existing EHR/CRM. We build the automated follow-up sequences, the VOB routing, and the real-time pipeline dashboards. We waive the standard implementation fee for our initial case study partners.",
    note: null,
  },
  {
    number: "03",
    icon: Headphones,
    title: "The Managed Service Retainer",
    price: "Flat monthly fee",
    desc: "You pay a flat monthly fee based on your active lead volume. No per-lead charges. No surprise invoices. Your tier scales automatically as your pipeline grows.",
    note: null,
  },
];

const tiers = [
  {
    name: "Starter",
    price: "$1,500/mo",
    volume: "Up to 250 leads/mo",
    engagementTarget: "≥ 15%",
    meetingTarget: "≥ 5%",
    features: [
      "Speed-to-Lead automation",
      "CRM routing",
      "Basic reporting dashboard",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$3,000/mo",
    volume: "251 – 500 leads/mo",
    engagementTarget: "≥ 20%",
    meetingTarget: "≥ 8%",
    features: [
      "Everything in Starter",
      "30/60/90-day reactivation sequences for dormant leads",
      "A/B message testing",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$5,000/mo",
    volume: "501 – 1,000 leads/mo",
    engagementTarget: "≥ 25%",
    meetingTarget: "≥ 12%",
    features: [
      "Everything in Growth",
      "Automated VOB routing",
      "No-show prevention sequences",
      "Direct EHR/CRM integration",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "$8,000+/mo",
    volume: "1,000+ leads/mo",
    engagementTarget: "≥ 30%",
    meetingTarget: "≥ 15%",
    features: [
      "Full suite",
      "Dedicated account manager",
      "Custom dashboards",
      "SLA guarantee",
    ],
    highlighted: false,
  },
];

const complianceItems = [
  {
    title: "No Per-Admission Fees",
    desc: "In strict compliance with the federal Anti-Kickback Statute (AKS) and the Eliminating Kickbacks in Recovery Act (EKRA), PatientFlow does not charge percentage-of-revenue fees, per-patient bounties, or commission-based success fees.",
  },
  {
    title: "Fair Market Value",
    desc: "All tier pricing is fixed in advance, represents Fair Market Value (FMV) for software and managed marketing services, and fits squarely within the Personal Services and Management Contracts Safe Harbor.",
  },
  {
    title: "Auto-Upgrades",
    desc: "Tiers are determined by active lead volume. If your volume exceeds your current tier's threshold, you will be notified in your monthly performance report and automatically upgraded at the start of the next billing cycle.",
  },
  {
    title: "Performance Targets",
    desc: "Engagement and Meeting Rate targets are service-level goals used to measure campaign health, not billing triggers.",
  },
];

export default function EngagementModel() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Engagement Model — How We Partner | PatientFlow"
        description="We don't just sell you software and leave you to figure it out. We operate as your performance partner with a legally compliant, volume-based pricing model."
        path="/engagement-model"
      />
      <Navbar />

      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-6">How We Partner</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h1 className="max-w-3xl mb-6" style={{ textWrap: "balance" as any }}>
              We Manage the System. You Focus on the Admission.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              We don't just sell you software and leave you to figure it out. We operate as your performance partner, managing your lead engagement with a legally compliant, volume-based pricing model that scales as you grow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">The Process</p>
            <h2 className="max-w-2xl mb-12">Three steps to a system that works.</h2>
          </ScrollReveal>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={0.08 * i}>
                <div className="p-6 md:p-8 rounded-xl bg-background border border-border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">Step {step.number}</span>
                        <span className="text-sm font-semibold text-accent">{step.price}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      {step.note && (
                        <p className="text-sm text-primary font-medium mt-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          {step.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding section-y" id="pricing">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="label-text mb-4">Managed Service Tiers</p>
              <h2 className="max-w-2xl mx-auto mb-4">Volume-based pricing. No surprises.</h2>
              <p className="text-muted-foreground text-base max-w-xl mx-auto">
                Every tier includes full system operation, performance reporting, and dedicated support. Your tier scales automatically as your pipeline grows.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={0.06 * i}>
                <div className={`relative p-6 rounded-xl border shadow-sm h-full flex flex-col ${
                  tier.highlighted
                    ? "border-primary bg-primary/[0.03] shadow-md ring-2 ring-primary/20"
                    : "border-border bg-background"
                }`}>
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}

                  <h3 className="text-lg font-semibold text-foreground mb-1">{tier.name}</h3>
                  <p className="font-serif text-2xl text-primary mb-1">{tier.price}</p>
                  <p className="text-xs text-muted-foreground mb-4">{tier.volume}</p>

                  {/* Targets with tooltips */}
                  <div className="space-y-2 mb-5 pb-5 border-b border-border">
                    <div className="flex items-center gap-1.5 text-sm">
                      <span className="text-foreground font-medium">{tier.engagementTarget} Engagement Rate</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="text-xs">The percentage of leads that reply to an automated SMS, email, or voicemail.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm">
                      <span className="text-foreground font-medium">{tier.meetingTarget} Meeting Rate</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="text-xs">The percentage of total leads that result in a scheduled intake appointment.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 flex-1 mb-6">
                    {tier.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button
                      variant={tier.highlighted ? "hero" : "hero-outline"}
                      size="lg"
                      className="w-full"
                    >
                      Request a Pipeline Audit
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Trust signals near pricing */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
              {["HIPAA Compliant", "ISO 27001", "Powered by TekRevol"].map(badge => (
                <div key={badge} className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <Shield className="w-3.5 h-3.5 text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Compliance & Billing Transparency */}
      <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-4">Legal & Compliance</p>
            <h2 className="max-w-2xl mb-10">Compliance & Billing Transparency</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {complianceItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.06 * i}>
                <div className="p-6 rounded-xl bg-background border border-border shadow-sm h-full">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding section-y bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mx-auto max-w-2xl mb-6">
              Ready to see where your pipeline is leaking?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
              Start with a $2,500 Pipeline Audit. Get a concrete Revenue Leakage Report—100% credited toward implementation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <Button
              size="xl"
              className="bg-background text-primary hover:bg-background/90 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-base font-semibold"
            >
              Request a Pipeline Audit
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <StickyCtaBar />
    </div>
  );
}