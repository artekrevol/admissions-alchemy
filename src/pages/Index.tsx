import { Navbar } from "@/components/homepage/Navbar";
import { HeroSection } from "@/components/homepage/HeroSection";
import { TrustBar } from "@/components/homepage/TrustBar";
import { ProblemSection } from "@/components/homepage/ProblemSection";
import { LeakageSection } from "@/components/homepage/LeakageSection";
import { SystemSection } from "@/components/homepage/SystemSection";
import { ImpactStrip } from "@/components/homepage/ImpactStrip";
import { ResultsSection } from "@/components/homepage/ResultsSection";
import { ProofCarousel } from "@/components/homepage/ProofCarousel";
import { ProcessSection } from "@/components/homepage/ProcessSection";
import { ObjectionsSection } from "@/components/homepage/ObjectionsSection";
import { CtaSection } from "@/components/homepage/CtaSection";
import { Footer } from "@/components/homepage/Footer";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { PageLink } from "@/components/homepage/PageLink";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { SEOHead } from "@/components/SEOHead";
import { MiniCalculator } from "@/components/calculator/MiniCalculator";
import { ByTheNumbers } from "@/components/homepage/ByTheNumbers";
import { AsFeaturedIn } from "@/components/homepage/AsFeaturedIn";
import { AfterYouBook } from "@/components/homepage/AfterYouBook";
import { LeadershipSection } from "@/components/homepage/LeadershipSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="PatientFlow — Turn Inquiries Into Admissions"
        description="We install and operate a patient conversion system that helps healthcare clinics increase admissions, reduce no-shows, and recover lost revenue."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PatientFlow",
          url: "https://patientflow.com",
          description: "We install and operate a patient conversion system that helps healthcare clinics increase admissions, reduce no-shows, and recover lost revenue.",
          serviceType: "Healthcare Revenue System",
        }}
      />
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AsFeaturedIn />

      {/* Problem — warm bg */}
      <ProblemSection />

      {/* Calculator — cool bg */}
      <MiniCalculator />

      {/* Leakage — white bg */}
      <LeakageSection />

      {/* Deep dive links */}
      <section className="section-padding py-10 md:py-14" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className="label-text mb-5">Go Deeper</p>
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

      {/* System — cool bg */}
      <SystemSection />

      {/* By the Numbers — warm bg (alternates from cool) */}
      <ByTheNumbers />

      {/* Impact strip — neutral divider */}
      <ImpactStrip />

      {/* Results — white bg */}
      <ResultsSection />

      {/* Proof — warm bg */}
      <ProofCarousel />

      {/* Case study teaser */}
      <section className="section-padding py-10 md:py-14">
        <div className="container-narrow">
          <ScrollReveal>
            <PageLink href="/case-study" label="$840K Recovered — Read the Case Study" description="See how one provider fixed their intake and recovered $840K in annual revenue." />
          </ScrollReveal>
        </div>
      </section>

      {/* Process — cool bg */}
      <ProcessSection />

      {/* After You Book — cool bg handled internally */}
      <AfterYouBook />

      {/* Objections — white bg */}
      <ObjectionsSection />

      {/* Final CTA — primary bg */}
      <CtaSection />
      <Footer />
      <StickyCtaBar />
    </div>
  );
};

export default Index;
