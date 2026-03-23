import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return (
    <section className="section-padding pt-32 md:pt-40 pb-20 md:pb-28 lg:pb-36 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.06, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <ScrollReveal>
              <p className="label-text mb-6">For Healthcare Operators</p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h1 className="max-w-xl mb-8" style={{ textWrap: "balance" as any }}>
                Stop losing patients between inquiry and intake.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-4 leading-relaxed">
                You're generating demand—but your current system lets too many patients slip through before they ever reach care.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                We install and run a patient conversion system that captures, follows up, and converts every inquiry—without adding headcount.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.24}>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Button variant="hero" size="xl">
                  Identify Where You're Losing Revenue
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
                <Link to="/how-it-works">
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                    See How It Works
                  </Button>
                </Link>
              </div>
              {/* Urgency signal */}
              <p className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
                We take 3 new engagements per quarter — limited availability
              </p>
            </ScrollReveal>
          </div>

          {/* Right: system visual */}
          <ScrollReveal delay={0.3}>
            <div className="hidden lg:block">
              <HeroVisual />
            </div>
          </ScrollReveal>
        </div>

        {/* Social proof bar — unique stats not repeated elsewhere */}
        <ScrollReveal delay={0.36}>
          <div className="mt-14 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
              <div>
                <p className="font-serif text-2xl md:text-3xl text-primary leading-none">$840K</p>
                <p className="text-xs text-muted-foreground mt-1">recovered for one client</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border" />
              <div>
                <p className="font-serif text-2xl md:text-3xl text-primary leading-none">34%</p>
                <p className="text-xs text-muted-foreground mt-1">conversion achieved</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border" />
              <div>
                <p className="font-serif text-2xl md:text-3xl text-primary leading-none">3 weeks</p>
                <p className="text-xs text-muted-foreground mt-1">to deploy</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border" />
              <div>
                <p className="font-serif text-2xl md:text-3xl text-primary leading-none">HIPAA + ISO</p>
                <p className="text-xs text-muted-foreground mt-1">certified & compliant</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
