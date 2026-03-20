import { useRef } from "react";

interface CalcInputProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
}

export const CalcInput = ({ label, value, onChange, prefix, suffix, min = 0, max = 100000, step = 1 }: CalcInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground block">{label}</label>
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 text-muted-foreground text-sm pointer-events-none">{prefix}</span>
        )}
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v)) onChange(Math.min(Math.max(v, min), max));
          }}
          min={min}
          max={max}
          step={step}
          className={`w-full rounded-lg border border-border bg-background px-3 py-3 text-base font-medium text-foreground
            focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
            ${prefix ? "pl-7" : ""} ${suffix ? "pr-8" : ""}`}
        />
        {suffix && (
          <span className="absolute right-3 text-muted-foreground text-sm pointer-events-none">{suffix}</span>
        )}
      </div>
    </div>
  );
};
