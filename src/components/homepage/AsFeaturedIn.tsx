import { ScrollReveal } from "./ScrollReveal";

const publications = [
  { name: "Forbes", url: "https://www.forbes.com/companies/tekrevol/" },
  { name: "Inc.", url: "https://www.inc.com/profile/TekRevol" },
  { name: "Entrepreneur", url: "#" },
  { name: "Clutch", url: "https://clutch.co/profile/tekrevol" },
  { name: "GoodFirms", url: "#" },
];

export function AsFeaturedIn() {
  return (
    <section className="section-padding py-10 md:py-14 border-y border-border/50">
      <div className="container-wide">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-8 text-center">
            As Featured In
          </p>
        </ScrollReveal>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {publications.map((pub, i) => (
            <ScrollReveal key={pub.name} delay={0.06 * i}>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-opacity hover:opacity-100 opacity-50"
              >
                <span className="font-serif text-2xl md:text-3xl text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {pub.name}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
