import { ScrollReveal } from "./ScrollReveal";

const publications = [
  { name: "Forbes", url: "https://www.forbes.com/companies/tekrevol/" },
  { name: "Inc.", url: "https://www.inc.com/profile/TekRevol" },
  { name: "Clutch", url: "https://clutch.co/profile/tekrevol" },
];

export function AsFeaturedIn() {
  return (
    <section className="section-padding py-8 md:py-10">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground shrink-0">
              As Featured In
            </p>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-8 md:gap-12">
              {publications.map((pub) => (
                <a
                  key={pub.name}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl md:text-2xl text-muted-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  {pub.name}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
