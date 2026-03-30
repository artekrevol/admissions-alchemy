import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = "https://censusflow.co";

export function SEOHead({ title, description, path, type = "website", jsonLd }: SEOHeadProps) {
  const fullUrl = `${BASE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} | PatientFlow`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", fullUrl, "property");
    setMeta("og:type", type, "property");
    setMeta("og:site_name", "PatientFlow", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // JSON-LD
    const ldId = "seo-jsonld";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    const ldData = jsonLd || {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: fullTitle,
      description,
      url: fullUrl,
      publisher: {
        "@type": "Organization",
        name: "PatientFlow",
        url: BASE_URL,
      },
    };
    if (!script) {
      script = document.createElement("script");
      script.id = ldId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ldData);

    return () => {
      // Cleanup handled by next mount
    };
  }, [fullTitle, description, fullUrl, type, jsonLd]);

  return null;
}
