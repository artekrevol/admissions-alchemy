import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navPages = [
  { label: "Pipeline Audit", href: "/revenue-leakage", desc: "Find the leaks in your current system" },
  { label: "Speed-to-Lead Engine", href: "/patient-growth-engine", desc: "Automate your 5-minute response" },
  { label: "Lead Reactivation", href: "/dormant-leads", desc: "Wake up your dormant database" },
  { label: "Full Intake Automation", href: "/no-shows", desc: "End-to-end pipeline visibility" },
];

const secondaryPages = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why PatientFlow", href: "/why-patientflow" },
  { label: "Case Study", href: "/case-study" },
  { label: "Engagement Model", href: "/engagement-model" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;
  const isSolutionActive = navPages.some(p => isActive(p.href));

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-background/95 backdrop-blur-lg border-b border-border/60 shadow-sm"
        : "bg-background/80 backdrop-blur-md border-b border-border/30"
    }`}>
      <div className="container-wide section-padding flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-serif text-xl md:text-2xl text-display tracking-tight hover:opacity-80 transition-opacity">
          PatientFlow
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors ${
              isSolutionActive || dropdownOpen
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}>
              Solutions
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 pt-2 w-72"
                >
                  <div className="bg-background rounded-xl border border-border shadow-xl p-2">
                    {navPages.map((page) => (
                      <Link
                        key={page.href}
                        to={page.href}
                        className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                          isActive(page.href)
                            ? "bg-primary/[0.06] text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        <span className="font-medium text-foreground block">{page.label}</span>
                        <span className="text-xs text-muted-foreground">{page.desc}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {secondaryPages.map((page) => (
            <Link
              key={page.href}
              to={page.href}
              className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive(page.href)
                  ? "text-foreground font-medium bg-primary/[0.05]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
            >
              {page.label}
            </Link>
          ))}

          {/* Phone number */}
          <a
            href="tel:+15551234567"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            (555) 123-4567
          </a>

          <div className="ml-3">
            <Link to="/contact">
              <Button variant="hero" size="lg">Request a Pipeline Audit</Button>
            </Link>
          </div>
        </div>

        <button className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-muted/50 transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="section-padding py-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-2 px-3">Solutions</p>
              {navPages.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive(page.href) ? "text-foreground font-medium bg-primary/[0.06]" : "text-foreground/80"
                  }`}
                >
                  {page.label}
                </Link>
              ))}
              <div className="border-t border-border my-3" />
              {secondaryPages.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive(page.href) ? "text-foreground font-medium bg-primary/[0.06]" : "text-foreground/80"
                  }`}
                >
                  {page.label}
                </Link>
              ))}
              <a href="tel:+15551234567" className="flex items-center gap-2 px-3 py-2.5 text-sm text-foreground/80">
                <Phone className="w-4 h-4" /> (555) 123-4567
              </a>
              <Button variant="hero" size="lg" className="w-full mt-4">Request a Pipeline Audit</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
