import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-wide section-padding flex items-center justify-between h-16 md:h-20">
        <a href="/" className="font-serif text-xl md:text-2xl text-display tracking-tight">
          PatientFlow
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">The Problem</a>
          <a href="#system" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our System</a>
          <a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Results</a>
          <Button variant="hero" size="lg">Book a Diagnostic Call</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border section-padding py-6 flex flex-col gap-4">
          <a href="#problem" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>The Problem</a>
          <a href="#system" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Our System</a>
          <a href="#results" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Results</a>
          <Button variant="hero" size="lg" className="w-full mt-2">Book a Diagnostic Call</Button>
        </div>
      )}
    </nav>
  );
}
