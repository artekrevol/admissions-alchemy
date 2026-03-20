import { ArrowRight } from "lucide-react";

interface PageLinkProps {
  href: string;
  label: string;
  description: string;
}

export function PageLink({ href, label, description }: PageLinkProps) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between p-5 rounded-xl bg-background border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
    >
      <div>
        <p className="text-foreground font-semibold text-base mb-1 group-hover:text-primary transition-colors">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-4" />
    </a>
  );
}
