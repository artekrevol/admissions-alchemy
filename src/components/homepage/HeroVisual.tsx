import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, CalendarCheck, BarChart3, RefreshCw, Bell } from "lucide-react";

const nodes = [
  { icon: Phone, label: "Inquiry", x: 10, y: 8, delay: 0.2 },
  { icon: Mail, label: "Auto Follow-Up", x: 55, y: 5, delay: 0.4 },
  { icon: CalendarCheck, label: "Scheduling", x: 10, y: 45, delay: 0.6 },
  { icon: Bell, label: "No-Show Prevention", x: 55, y: 42, delay: 0.8 },
  { icon: RefreshCw, label: "Reactivation", x: 10, y: 80, delay: 1.0 },
  { icon: BarChart3, label: "Pipeline View", x: 55, y: 78, delay: 1.2 },
];

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative w-full aspect-square max-w-[420px] mx-auto">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
        <motion.path
          d="M25 18 L70 15 M25 55 L70 52 M25 18 L25 55 M70 15 L70 52 M25 55 L25 90 M70 52 L70 88 M25 90 L70 88"
          stroke="hsl(var(--primary))"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          strokeOpacity={0.2}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {nodes.map((node) => (
        <motion.div
          key={node.label}
          className="absolute"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: node.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="bg-background rounded-lg border border-border shadow-sm p-3 flex items-center gap-2.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
              <node.icon className="w-4 h-4 text-primary stroke-[1.5]" />
            </div>
            <span className="text-xs font-medium text-foreground whitespace-nowrap">{node.label}</span>
          </div>
        </motion.div>
      ))}

      {/* Center pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/[0.06]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.06, 0.02, 0.06] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
