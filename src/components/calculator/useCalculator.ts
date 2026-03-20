import { useState, useMemo } from "react";

export type AssumptionMode = "conservative" | "expected" | "aggressive";

const ASSUMPTIONS = {
  conservative: { conversionLift: 3, noShowReduction: 0.15, reachableRate: 0.10, reactivationRate: 0.10 },
  expected:     { conversionLift: 6, noShowReduction: 0.25, reachableRate: 0.15, reactivationRate: 0.20 },
  aggressive:   { conversionLift: 10, noShowReduction: 0.40, reachableRate: 0.20, reactivationRate: 0.30 },
} as const;

export interface CalcInputs {
  inquiries: number;
  conversionRate: number;
  avgRevenue: number;
  scheduled: number;
  noShowRate: number;
  dormantLeads: number;
}

export interface CalcResults {
  conversionUpsideAnnual: number;
  noShowLossMonthly: number;
  noShowUpsideAnnual: number;
  dormantOpportunity: number;
  totalAnnualOpportunity: number;
}

export const DEFAULT_INPUTS: CalcInputs = {
  inquiries: 150,
  conversionRate: 25,
  avgRevenue: 12000,
  scheduled: 30,
  noShowRate: 20,
  dormantLeads: 1200,
};

export function useCalculator(initialInputs: Partial<CalcInputs> = {}) {
  const [inputs, setInputs] = useState<CalcInputs>({ ...DEFAULT_INPUTS, ...initialInputs });
  const [mode, setMode] = useState<AssumptionMode>("expected");

  const results = useMemo<CalcResults>(() => {
    const a = ASSUMPTIONS[mode];
    const { inquiries, conversionRate, avgRevenue, scheduled, noShowRate, dormantLeads } = inputs;

    const currentAdmissions = inquiries * (conversionRate / 100);
    const improvedAdmissions = inquiries * ((conversionRate + a.conversionLift) / 100);
    const additionalAdmissions = Math.max(improvedAdmissions - currentAdmissions, 0);
    const conversionUpsideAnnual = additionalAdmissions * avgRevenue * 12;

    const missedAppointments = scheduled * (noShowRate / 100);
    const recoverableAppointments = missedAppointments * a.noShowReduction;
    const noShowLossMonthly = missedAppointments * avgRevenue;
    const noShowUpsideAnnual = recoverableAppointments * avgRevenue * 12;

    const reachableDormant = dormantLeads * a.reachableRate;
    const reactivatedAdmissions = reachableDormant * a.reactivationRate;
    const dormantOpportunity = reactivatedAdmissions * avgRevenue;

    const totalAnnualOpportunity = conversionUpsideAnnual + noShowUpsideAnnual + dormantOpportunity;

    return { conversionUpsideAnnual, noShowLossMonthly, noShowUpsideAnnual, dormantOpportunity, totalAnnualOpportunity };
  }, [inputs, mode]);

  const updateInput = (key: keyof CalcInputs, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return { inputs, mode, setMode, results, updateInput };
}
