import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface MidPageCtaProps {
  text: string;
  linkText?: string;
  href?: string;
}

export function MidPageCta({ text, linkText = "Identify Where You're Losing Revenue", href }: MidPageCtaProps) {
  return (
    <section className="section-padding py-12 md:py-16">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <p className="text-muted-foreground text-base mb-6 mx-auto" style={{ maxWidth: "none" }}>
            {text}
          </p>
          {href ? (
            <Link to={href}>
              <Button variant="hero" size="lg" className="shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
                {linkText}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          ) : (
            <Button variant="hero" size="lg" className="shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
              {linkText}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
