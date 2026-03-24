import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="section-padding py-14 md:py-16 border-t border-border">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl text-foreground mb-3 block hover:opacity-80 transition-opacity">PatientFlow</Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The revenue system for healthcare operators.
            </p>
            <a
              href="https://www.tekrevol.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors group"
            >
              <span className="text-xs text-muted-foreground">Powered by</span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">TekRevol</span>
              <ExternalLink className="w-3 h-3 text-muted-foreground" />
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">Solutions</p>
            <div className="space-y-2.5">
              <Link to="/revenue-leakage" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Revenue Leakage</Link>
              <Link to="/patient-growth-engine" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Growth Engine</Link>
              <Link to="/no-shows" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">No-Show Prevention</Link>
              <Link to="/dormant-leads" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Dormant Leads</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-4">Company</p>
            <div className="space-y-2.5">
              <Link to="/how-it-works" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">How It Works</Link>
              <Link to="/why-patientflow" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Why PatientFlow</Link>
              <Link to="/case-study" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Case Study</Link>
              <Link to="/sprint" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">3-Week Sprint</Link>
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
            <p className="text-sm text-muted-foreground mt-3">
              <a href="tel:+15551234567" className="hover:text-foreground transition-colors">(555) 123-4567</a>
            </p>
          </div>
        </div>

        {/* Certifications row */}
        <div className="border-t border-border pt-6 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["HIPAA Compliant", "ISO 27001", "GDPR Compliant", "HL7 FHIR Certified"].map(cert => (
              <span key={cert} className="text-xs text-muted-foreground font-medium">
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PatientFlow. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Forbes-Ranked · Inc. 5000 · Clutch #1 Global
          </p>
        </div>
      </div>
    </footer>
  );
}
