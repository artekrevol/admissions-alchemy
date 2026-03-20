import { useState, useMemo, useEffect, useRef } from "react";
import { CalcInput } from "./CalcInput";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n).toLocaleString()}`;
  return `$${Math.round(n)}`;
}

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    const start = prev.current;
    const end = value;
    const duration = 400;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(start + (end - start) * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    prev.current = value;
  }, [value]);

  return <span>{formatCurrency(display)}</span>;
}

export const MiniCalculator = () => {
  const [inquiries, setInquiries] = useState(150);
  const [conversionRate, setConversionRate] = useState(25);
  const [avgRevenue, setAvgRevenue] = useState(12000);

  const annualLoss = useMemo(() => {
    const currentAdmissions = inquiries * (conversionRate / 100);
    const improvedAdmissions = inquiries * ((conversionRate + 6) / 100);
    const additional = Math.max(improvedAdmissions - currentAdmissions, 0);
    return additional * avgRevenue * 12;
  }, [inquiries, conversionRate, avgRevenue]);

  return (
    <section className="section-padding section-y-tight" style={{ backgroundColor: "hsl(var(--surface-cool))" }}>
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4">Quick Estimate</p>
          <h2 className="max-w-2xl mb-8">How Much Is Low Conversion Costing You?</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="bg-background rounded-xl border border-border shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <CalcInput label="Monthly inquiries" value={inquiries} onChange={setInquiries} max={10000} />
              <CalcInput label="Conversion rate (%)" value={conversionRate} onChange={setConversionRate} suffix="%" max={100} />
              <CalcInput label="Revenue per patient ($)" value={avgRevenue} onChange={setAvgRevenue} prefix="$" max={500000} step={500} />
            </div>

            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Estimated annual revenue lost from low conversion</p>
              <p className="font-serif text-4xl md:text-5xl text-primary leading-none mb-1 tabular-nums">
                <AnimatedNumber value={annualLoss} />
              </p>
              <p className="text-xs text-muted-foreground mt-3 mb-6">Based on a 6% conversion lift benchmark</p>
              <Link to="/revenue-leakage">
                <Button variant="hero" size="lg">
                  See Full Breakdown
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
