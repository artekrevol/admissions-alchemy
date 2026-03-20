import { Navbar } from "@/components/homepage/Navbar";
import { HeroSection } from "@/components/homepage/HeroSection";
import { PainSection } from "@/components/homepage/PainSection";
import { LeakageSection } from "@/components/homepage/LeakageSection";
import { ReframeSection } from "@/components/homepage/ReframeSection";
import { SolutionSection } from "@/components/homepage/SolutionSection";
import { ProcessSection } from "@/components/homepage/ProcessSection";
import { ResultsSection } from "@/components/homepage/ResultsSection";
import { CtaSection } from "@/components/homepage/CtaSection";
import { Footer } from "@/components/homepage/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PainSection />
      <LeakageSection />
      <ReframeSection />
      <SolutionSection />
      <ProcessSection />
      <ResultsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
