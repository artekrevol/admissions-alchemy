import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, prefix = "", suffix = "", duration = 1.8, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

interface AnimatedStatProps {
  value: string;
  label: string;
  delay?: number;
}

export function AnimatedStat({ value, label, delay = 0 }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  // Parse value to extract number and formatting
  const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
  const prefix = match?.[1] || "";
  const num = match ? parseInt(match[2].replace(/,/g, "")) : 0;
  const suffix = match?.[3] || "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="bg-background rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center"
    >
      <p className="stat-number text-3xl md:text-4xl lg:text-5xl mb-2">
        {inView ? <AnimatedCounter value={num} prefix={prefix} suffix={suffix} /> : value}
      </p>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
}
