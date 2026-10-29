import type { MetadataRoute } from "next";
import { categories, occasions, products } from "@/data/products";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/shop", "/journal", "/about", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.7 })),
    ...categories.map((category) => ({ url: `${site.url}/shop/${category.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 })),
    ...occasions.map((occasion) => ({ url: `${site.url}/occasions/${occasion.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
    ...products.map((product) => ({ url: `${site.url}/product/${product.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...posts.map((post) => ({ url: `${site.url}/journal/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
