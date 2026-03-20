import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navPages = [
  { label: "Revenue Leakage", href: "/revenue-leakage" },
  { label: "Growth Engine", href: "/patient-growth-engine" },
  { label: "No-Shows", href: "/no-shows" },
  { label: "Dormant Leads", href: "/dormant-leads" },
];

const secondaryPages = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Case Study", href: "/case-study" },
  { label: "3-Week Sprint", href: "/sprint" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-wide section-padding flex items-center justify-between h-16 md:h-20">
        <a href="/" className="font-serif text-xl md:text-2xl text-display tracking-tight">
          PatientFlow
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solutions
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <div className="bg-background rounded-xl border border-border shadow-lg py-2">
                  {navPages.map((page) => (
                    <a
                      key={page.href}
                      href={page.href}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      {page.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="/case-study" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Study</a>
          <a href="/sprint" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sprint</a>
          <Button variant="hero" size="lg">Book a Diagnostic Call</Button>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-b border-border section-padding py-6 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1">Solutions</p>
          {navPages.map((page) => (
            <a key={page.href} href={page.href} className="text-sm text-foreground py-1.5" onClick={() => setOpen(false)}>
              {page.label}
            </a>
          ))}
          <div className="border-t border-border my-2" />
          {secondaryPages.map((page) => (
            <a key={page.href} href={page.href} className="text-sm text-foreground py-1.5" onClick={() => setOpen(false)}>
              {page.label}
            </a>
          ))}
          <Button variant="hero" size="lg" className="w-full mt-3">Book a Diagnostic Call</Button>
        </div>
      )}
    </nav>
  );
}
