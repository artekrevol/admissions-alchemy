import { Navbar } from "@/components/homepage/Navbar";
import { HeroSection } from "@/components/homepage/HeroSection";
import { ProblemSection } from "@/components/homepage/ProblemSection";
import { LeakageSection } from "@/components/homepage/LeakageSection";
import { SystemSection } from "@/components/homepage/SystemSection";
import { ResultsSection } from "@/components/homepage/ResultsSection";
import { ProcessSection } from "@/components/homepage/ProcessSection";
import { ObjectionsSection } from "@/components/homepage/ObjectionsSection";
import { CtaSection } from "@/components/homepage/CtaSection";
import { Footer } from "@/components/homepage/Footer";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { PageLink } from "@/components/homepage/PageLink";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <LeakageSection />

      {/* Internal links after leakage */}
      <section className="section-padding py-12 md:py-16">
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-6">Go Deeper</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal delay={0.06}>
              <PageLink href="/revenue-leakage" label="Revenue Leakage" description="See exactly where patients drop off between inquiry and admission." />
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <PageLink href="/patient-growth-engine" label="Patient Growth Engine" description="The system that captures, contacts, and converts every inquiry." />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SystemSection />
      <ResultsSection />

      {/* Case study teaser */}
      <section className="section-padding py-12 md:py-16" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <PageLink href="/case-study" label="$840K Recovered — Read the Case Study" description="See how one provider fixed their intake and recovered $840K in annual revenue." />
          </ScrollReveal>
        </div>
      </section>

      <ProcessSection />
      <ObjectionsSection />
      <CtaSection />
      <Footer />
      <StickyCtaBar />
    </div>
  );
};

export default Index;
