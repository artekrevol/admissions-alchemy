import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Mic, PenLine } from "lucide-react";
import abeerImg from "@/assets/abeer-raza.png";
import asimImg from "@/assets/asim-siddiqui.png";

const leaders = [
  {
    name: "Abeer Raza",
    role: "CMO & Co-Founder, TekRevol",
    image: abeerImg,
    bio: "Growth strategist behind TekRevol's 829% revenue growth. Published author on Inc. Magazine covering healthcare innovation and digital transformation.",
    signals: [
      { icon: PenLine, label: "Published Author — Inc. Magazine" },
      { icon: Mic, label: "Host — Technology for a Change Podcast" },
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/ababoraza/",
      inc: "https://www.inc.com/author/abeer-raza",
    },
  },
  {
    name: "Asim Rais Siddiqui",
    role: "CTO & Co-Founder, TekRevol",
    image: asimImg,
    bio: "Enterprise architect who has led 50+ healthcare and fintech builds to production. Oversees a 500+ engineering team delivering HIPAA-compliant, scalable systems.",
    signals: [
      { icon: PenLine, label: "50+ Healthcare & Fintech Builds" },
      { icon: Mic, label: "Forbes Best Startup Employers '24–'26" },
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/asimraissiddiqui/",
    },
  },
];

export function LeadershipSection() {
  return (
    <section
      className="section-padding py-16 md:py-20"
      style={{ backgroundColor: "hsl(var(--surface-warm))" }}
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="label-text mb-4 text-center">Leadership</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="text-center mx-auto max-w-2xl mb-12">
            Built by operators who've scaled healthcare technology
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {leaders.map((leader, i) => (
            <ScrollReveal key={leader.name} delay={0.1 * i}>
              <div className="rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                {/* Headshot */}
                <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                  <img
                    src={leader.image}
                    alt={`${leader.name}, ${leader.role}`}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {leader.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {leader.bio}
                  </p>

                  {/* Authority signals */}
                  <div className="space-y-2 mb-5 mt-auto">
                    {leader.signals.map((signal) => (
                      <div
                        key={signal.label}
                        className="flex items-center gap-2.5 text-xs font-medium text-foreground/80"
                      >
                        <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                          <signal.icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        {signal.label}
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <a
                      href={leader.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
                    >
                      LinkedIn
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    {"inc" in leader.links && (
                      <a
                        href={(leader.links as any).inc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
                      >
                        Inc. Articles
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
