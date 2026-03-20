import { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ResultCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  highlight?: boolean;
}

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n).toLocaleString()}`;
  return `$${Math.round(n)}`;
}

export const ResultCard = ({ icon: Icon, label, value, highlight = false }: ResultCardProps) => {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    const start = prevValue.current;
    const end = value;
    const duration = 400;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(start + (end - start) * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    prevValue.current = value;
  }, [value]);

  return (
    <div className={`rounded-xl p-5 md:p-6 border transition-all duration-300 ${
      highlight
        ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]"
        : "bg-background border-border shadow-sm"
    }`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
          highlight ? "bg-primary-foreground/15" : "bg-primary/10"
        }`}>
          <Icon className={`w-[18px] h-[18px] stroke-[1.5] ${highlight ? "text-primary-foreground" : "text-primary"}`} />
        </div>
        <span className={`text-xs font-semibold uppercase tracking-wider ${
          highlight ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}>
          {label}
        </span>
      </div>
      <p className={`font-serif text-3xl md:text-4xl leading-none tabular-nums ${
        highlight ? "text-primary-foreground" : "text-foreground"
      }`}>
        {formatCurrency(displayValue)}
      </p>
    </div>
  );
};
