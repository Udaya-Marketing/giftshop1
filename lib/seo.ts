import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const canonical = `${site.url}${path}`;
  const metaDescription = description.length <= 154
    ? description
    : `${description.slice(0, 153).replace(/\s+\S*$/, "")}…`;
  return {
    title: { absolute: title },
    description: metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: site.name,
      title,
      description: metaDescription,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.tagline }],
    },
    twitter: { card: "summary_large_image", title, description: metaDescription, images: ["/opengraph-image"] },
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}
