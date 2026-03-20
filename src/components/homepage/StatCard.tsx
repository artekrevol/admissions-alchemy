import { ScrollReveal } from "./ScrollReveal";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-background rounded-xl p-6 md:p-8 border border-border shadow-sm text-center">
        <p className="stat-number text-3xl md:text-4xl lg:text-5xl mb-2">{value}</p>
        <p className="text-sm text-muted-foreground font-medium">{label}</p>
      </div>
    </ScrollReveal>
  );
}
