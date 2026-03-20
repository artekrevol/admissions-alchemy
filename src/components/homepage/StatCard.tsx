import { ScrollReveal } from "./ScrollReveal";
import { AnimatedStat } from "./AnimatedCounter";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return <AnimatedStat value={value} label={label} delay={delay} />;
}
