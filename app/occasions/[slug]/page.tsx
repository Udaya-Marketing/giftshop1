import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { occasions, products } from "@/data/products";
import { imageUrl } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return occasions.map((occasion) => ({ slug: occasion.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const occasion = occasions.find((item) => item.slug === slug);
  return occasion
    ? pageMetadata(`${occasion.title} — gifts with feeling`, `${occasion.intro} Find a considered gift for the occasion at Aster & Pine.`, `/occasions/${occasion.slug}`)
    : pageMetadata("Gifts for every occasion", "Find thoughtful gifts for birthdays, weddings and thank-yous.", "/occasions");
}

export default async function OccasionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const occasion = occasions.find((item) => item.slug === slug);
  if (!occasion) notFound();
  const items = products.filter((product) => product.categorySlug === occasion.category);
  const crumbs = [{ name: "Home", href: "/" }, { name: "Occasions", href: "/shop" }, { name: occasion.title, href: `/occasions/${occasion.slug}` }];
  const breadcrumb = breadcrumbJsonLd(crumbs);
  return <main id="main" className="page-container inner-page"><Breadcrumbs items={crumbs} /><header className="occasion-hero"><div><div className="eyebrow">A reason to make a fuss</div><h1>{occasion.title}<br /><em>with feeling.</em></h1><p>{occasion.intro}</p></div><div className="occasion-photo"><Image src={imageUrl(occasion.slug.includes("wedding") ? "photo-1519741497674-611481863552" : "photo-1511988617509-a57c8a288659")} alt={`${occasion.title} thoughtfully celebrated with Aster & Pine`} fill sizes="(max-width: 760px) 90vw, 45vw" className="cover-image arch-image" /></div></header><div className="product-grid shop-product-grid">{items.map((product) => <ProductCard key={product.slug} product={product} />)}</div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /></main>;
}
