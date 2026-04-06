import { Navbar } from "@/components/homepage/Navbar";
import { Footer } from "@/components/homepage/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const placeholderPosts = [
  {
    title: "How to Reduce Patient Wait Times by 40%",
    excerpt: "Discover proven strategies that leading healthcare facilities use to dramatically cut wait times and improve patient satisfaction scores.",
    date: "2026-04-01",
    readTime: "5 min read",
    category: "Operations",
  },
  {
    title: "The Hidden Cost of No-Shows in Healthcare",
    excerpt: "No-shows cost the U.S. healthcare system over $150 billion annually. Learn how automation can recover lost revenue and fill empty slots.",
    date: "2026-03-25",
    readTime: "4 min read",
    category: "Revenue",
  },
  {
    title: "Speed-to-Lead: Why Response Time Matters in Patient Acquisition",
    excerpt: "Studies show that responding to patient inquiries within 5 minutes increases conversion by 400%. Here's how to make it happen.",
    date: "2026-03-18",
    readTime: "6 min read",
    category: "Growth",
  },
  {
    title: "Reactivating Dormant Leads: A Step-by-Step Guide",
    excerpt: "Your CRM is full of untapped potential. Learn how to re-engage cold leads and turn them into booked appointments.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Strategy",
  },
  {
    title: "HIPAA-Compliant Automation: What You Need to Know",
    excerpt: "Automation doesn't have to compromise compliance. Here's how to streamline operations while staying fully HIPAA-compliant.",
    date: "2026-03-03",
    readTime: "7 min read",
    category: "Compliance",
  },
  {
    title: "The Future of Healthcare Operations: AI and Beyond",
    excerpt: "From predictive scheduling to intelligent triage, AI is reshaping how healthcare facilities operate. Here's what's coming next.",
    date: "2026-02-24",
    readTime: "6 min read",
    category: "Innovation",
  },
];

const categoryColors: Record<string, string> = {
  Operations: "bg-primary/10 text-primary",
  Revenue: "bg-accent/10 text-accent",
  Growth: "bg-emerald-500/10 text-emerald-700",
  Strategy: "bg-violet-500/10 text-violet-700",
  Compliance: "bg-amber-500/10 text-amber-700",
  Innovation: "bg-sky-500/10 text-sky-700",
};

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog | CensusFlow – Healthcare Operations Insights"
        description="Expert insights on patient flow management, healthcare operations, revenue optimization, and clinic growth strategies."
      />
      <Navbar />
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container-wide section-padding">
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">Blog</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Insights & Resources
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert perspectives on healthcare operations, patient flow optimization, and revenue growth.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderPosts.map((post, i) => (
              <article
                key={i}
                className="group flex flex-col rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div className="h-44 rounded-t-xl bg-muted/60 flex items-center justify-center">
                  <span className="text-muted-foreground/40 text-sm">Featured Image</span>
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-muted text-muted-foreground"}`}>
                      {post.category}
                    </span>
                  </div>

                  <h2 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-border/60">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming soon note */}
          <div className="text-center mt-14">
            <p className="text-sm text-muted-foreground">
              More articles coming soon. Stay tuned for the latest healthcare operations insights.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
