import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Footer() {
  return (
    <footer className="section-padding py-14 md:py-16 border-t border-border">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <p className="font-serif text-xl text-display mb-3">PatientFlow</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The revenue system for healthcare operators.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">Solutions</p>
            <div className="space-y-2.5">
              <a href="/revenue-leakage" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Revenue Leakage</a>
              <a href="/patient-growth-engine" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Growth Engine</a>
              <a href="/no-shows" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">No-Show Prevention</a>
              <a href="/dormant-leads" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Dormant Leads</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">Company</p>
            <div className="space-y-2.5">
              <a href="/how-it-works" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">How It Works</a>
              <a href="/case-study" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Case Study</a>
              <a href="/sprint" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">3-Week Sprint</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">Get Started</p>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Book a Diagnostic Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PatientFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
