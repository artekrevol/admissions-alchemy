import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, CalendarCheck, BarChart3, RefreshCw, Bell } from "lucide-react";

const nodes = [
  { icon: Phone, label: "Patient Inquiry", x: 10, y: 8, delay: 0.2 },
  { icon: Mail, label: "Auto Follow-Up", x: 55, y: 5, delay: 0.4 },
  { icon: CalendarCheck, label: "Scheduling", x: 10, y: 45, delay: 0.6 },
  { icon: Bell, label: "No-Show Prevention", x: 55, y: 42, delay: 0.8 },
  { icon: RefreshCw, label: "Reactivation", x: 10, y: 80, delay: 1.0, pulse: true },
  { icon: BarChart3, label: "Pipeline View", x: 55, y: 78, delay: 1.2 },
];

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative w-full aspect-square max-w-[420px] mx-auto">
      {/* Connection lines — increased stroke weight and contrast */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
        <motion.path
          d="M25 18 L70 15 M25 55 L70 52 M25 18 L25 55 M70 15 L70 52 M25 55 L25 90 M70 52 L70 88 M25 90 L70 88"
          stroke="hsl(var(--primary))"
          strokeWidth="0.6"
          strokeDasharray="3 2"
          strokeOpacity={0.4}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Animated data flow dots along the paths */}
      {inView && (
        <>
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/40"
            initial={{ left: "25%", top: "18%", opacity: 0 }}
            animate={{ left: ["25%", "70%"], top: ["18%", "15%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, delay: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/40"
            initial={{ left: "25%", top: "55%", opacity: 0 }}
            animate={{ left: ["25%", "70%"], top: ["55%", "52%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, delay: 3.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
          />
        </>
      )}

      {nodes.map((node) => (
        <motion.div
          key={node.label}
          className="absolute"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: node.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative bg-background rounded-lg border border-border/80 shadow-md p-3 flex items-center gap-2.5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            {/* Success pulse on Reactivation & Auto Follow-Up */}
            {node.pulse && (
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
              <node.icon className="w-4 h-4 text-primary stroke-[2]" />
            </div>
            <span className="text-xs font-semibold text-foreground whitespace-nowrap">{node.label}</span>
          </div>
        </motion.div>
      ))}

      {/* Center pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/[0.08]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.08, 0.03, 0.08] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
