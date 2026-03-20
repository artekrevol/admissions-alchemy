import { CalcInput } from "./CalcInput";
import { ResultCard } from "./ResultCard";
import { useCalculator, AssumptionMode, CalcInputs } from "./useCalculator";
import { ScrollReveal } from "@/components/homepage/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, CalendarX, DatabaseZap, DollarSign } from "lucide-react";

interface OpportunityCalculatorProps {
  /** Which result card to visually highlight */
  highlightCard?: "conversion" | "noshow" | "dormant";
  /** Initial input overrides */
  initialInputs?: Partial<CalcInputs>;
}

const modes: { key: AssumptionMode; label: string }[] = [
  { key: "conservative", label: "Conservative" },
  { key: "expected", label: "Expected" },
  { key: "aggressive", label: "Aggressive" },
];

export const OpportunityCalculator = ({ highlightCard, initialInputs }: OpportunityCalculatorProps) => {
  const { inputs, mode, setMode, results, updateInput } = useCalculator(initialInputs);

  return (
    <section className="section-padding section-y" style={{ backgroundColor: "hsl(var(--surface-warm))" }}>
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4">Opportunity Calculator</p>
          <h2 className="max-w-2xl mb-4">What's Your Intake Costing You?</h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl">
            Adjust the inputs below to see how much revenue your current process leaves on the table.
          </p>
        </ScrollReveal>

        {/* Assumption toggle */}
        <ScrollReveal delay={0.06}>
          <div className="flex flex-wrap gap-2 mb-10">
            {modes.map(m => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border ${
                  mode === m.key
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: Inputs */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 bg-background rounded-xl p-6 md:p-8 border border-border shadow-sm">
              <CalcInput
                label="Monthly inquiries"
                value={inputs.inquiries}
                onChange={v => updateInput("inquiries", v)}
                max={10000}
              />
              <CalcInput
                label="Current inquiry-to-admission conversion (%)"
                value={inputs.conversionRate}
                onChange={v => updateInput("conversionRate", v)}
                suffix="%"
                max={100}
                step={1}
              />
              <CalcInput
                label="Average revenue per admitted patient ($)"
                value={inputs.avgRevenue}
                onChange={v => updateInput("avgRevenue", v)}
                prefix="$"
                max={500000}
                step={500}
              />
              <CalcInput
                label="Monthly scheduled appointments"
                value={inputs.scheduled}
                onChange={v => updateInput("scheduled", v)}
                max={10000}
              />
              <CalcInput
                label="No-show rate (%)"
                value={inputs.noShowRate}
                onChange={v => updateInput("noShowRate", v)}
                suffix="%"
                max={100}
                step={1}
              />
              <CalcInput
                label="Dormant leads in your system"
                value={inputs.dormantLeads}
                onChange={v => updateInput("dormantLeads", v)}
                max={100000}
              />
            </div>
          </ScrollReveal>

          {/* RIGHT: Results */}
          <ScrollReveal delay={0.16}>
            <div className="space-y-4">
              <ResultCard
                icon={TrendingUp}
                label="Missed Conversion Value"
                value={results.conversionUpsideAnnual}
                highlight={highlightCard === "conversion"}
              />
              <ResultCard
                icon={CalendarX}
                label="No-Show Revenue Loss"
                value={results.noShowUpsideAnnual}
                highlight={highlightCard === "noshow"}
              />
              <ResultCard
                icon={DatabaseZap}
                label="Dormant Lead Opportunity"
                value={results.dormantOpportunity}
                highlight={highlightCard === "dormant"}
              />
              <ResultCard
                icon={DollarSign}
                label="Total Annual Opportunity"
                value={results.totalAnnualOpportunity}
                highlight
              />

              <p className="text-xs text-muted-foreground pt-2 leading-relaxed" style={{ maxWidth: "none" }}>
                Estimates based on your inputs and industry benchmarks. Actual results depend on execution and patient mix.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.22}>
          <div className="mt-14 text-center">
            <h3 className="font-sans font-semibold text-xl text-foreground mb-3">
              See where this number is coming from
            </h3>
            <p className="text-muted-foreground text-base max-w-lg mx-auto mb-6">
              We'll map your intake process, validate these assumptions, and show exactly where revenue is leaking.
            </p>
            <Button variant="hero" size="xl">
              Identify Where You're Losing Revenue
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
