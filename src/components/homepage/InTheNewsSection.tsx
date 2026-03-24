import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Newspaper, Mic, Trophy, Video } from "lucide-react";

type NewsItemType = "article" | "podcast" | "award" | "video";

interface NewsItem {
  type: NewsItemType;
  title: string;
  source: string;
  url: string;
  description?: string;
}

const typeConfig: Record<NewsItemType, { icon: typeof Newspaper; label: string }> = {
  article: { icon: Newspaper, label: "Article" },
  podcast: { icon: Mic, label: "Podcast" },
  award: { icon: Trophy, label: "Award" },
  video: { icon: Video, label: "Video" },
};

const newsItems: NewsItem[] = [
  {
    type: "article",
    title: "How Healthcare Providers Can Recover Hidden Revenue",
    source: "Inc. Magazine",
    url: "https://www.inc.com/author/abeer-raza",
    description:
      "Abeer Raza breaks down the patient conversion gaps costing clinics hundreds of thousands annually.",
  },
  {
    type: "award",
    title: "Forbes Best Startup Employers 2024–2026",
    source: "Forbes",
    url: "https://www.forbes.com/companies/tekrevol/",
    description:
      "TekRevol recognized three consecutive years for workplace excellence and innovation.",
  },
  {
    type: "podcast",
    title: "Technology for a Change — Healthcare Series",
    source: "Hosted by Abeer Raza",
    url: "https://www.inc.com/author/abeer-raza",
    description:
      "Deep dives into digital transformation, AI in patient care, and scaling healthcare operations.",
  },
  {
    type: "award",
    title: "Inc. 5000 — #769 Fastest-Growing Companies",
    source: "Inc. Magazine",
    url: "https://www.inc.com/profile/TekRevol",
    description:
      "829% revenue growth recognized by Inc. 5000, ranking TekRevol among the fastest-growing private companies in America.",
  },
  {
    type: "award",
    title: "#1 Web Development Company Globally",
    source: "Clutch",
    url: "https://clutch.co/profile/tekrevol",
    description:
      "Top-rated across 2,000+ reviews for engineering quality, project delivery, and client outcomes.",
  },
  {
    type: "award",
    title: "Best Tech Startup — Timmy Awards, Dallas",
    source: "Tech Titans",
    url: "#",
    description:
      "Recognized for innovation and community impact in the Dallas-Fort Worth tech ecosystem.",
  },
];

export function InTheNewsSection() {
  return (
    <section
      id="in-the-news"
      className="section-padding py-16 md:py-20"
      style={{ backgroundColor: "hsl(var(--surface-warm))" }}
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4 text-center">In The News</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="text-center mx-auto max-w-2xl mb-4">
            Awards, press & media
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-center text-muted-foreground max-w-lg mx-auto mb-12">
            Featured coverage and recognition from leading business and
            technology publications.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {newsItems.map((item, i) => {
            const config = typeConfig[item.type];
            return (
              <ScrollReveal key={item.title} delay={0.06 * i}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full rounded-xl bg-background border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-5 flex flex-col flex-1">
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <config.icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {config.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* Source */}
                    <p className="text-xs font-medium text-primary mb-2">
                      {item.source}
                    </p>

                    {/* Description */}
                    {item.description && (
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                        {item.description}
                      </p>
                    )}

                    {/* Read link */}
                    <div className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-accent transition-colors mt-auto pt-3 border-t border-border">
                      Read more
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
