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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <LeakageSection />
      <SystemSection />
      <ResultsSection />
      <ProcessSection />
      <ObjectionsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
