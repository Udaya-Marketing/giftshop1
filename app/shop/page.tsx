import Image from "next/image";
import Link from "next/link";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Thoughtful gifts & curated gift boxes", "Shop considered gift boxes, personalised keepsakes, wedding favours and festive hampers from Aster & Pine.", "/shop");

export default async function ShopPage({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
  const query = searchParams ? await searchParams : undefined;
  const term = query?.q?.trim().toLowerCase();
  const filtered = term ? products.filter((product) => `${product.name} ${product.category} ${product.occasion}`.toLowerCase().includes(term)) : products;
  return (
    <main id="main" className="page-container inner-page">
      <div className="shop-hero"><div><div className="eyebrow">The Aster & Pine collection</div><h1>Find something <em>lovely.</em></h1><p>For birthdays, new beginnings, old friends and all the ordinary days in between.</p></div><div className="shop-hero-image"><Image src={categories[0].image} alt="A thoughtful gift wrapped with care" fill sizes="(max-width: 760px) 90vw, 45vw" className="cover-image arch-image" /></div></div>
      <div className="category-pills">{categories.map((category) => <Link key={category.slug} href={`/shop/${category.slug}`}>{category.name}<span aria-hidden="true">↗</span></Link>)}</div>
      {term && <p className="search-result-label">Showing {filtered.length} result{filtered.length === 1 ? "" : "s"} for “{term}”</p>}
      {filtered.length ? <div className="product-grid shop-product-grid">{filtered.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="empty-search"><h2>Nothing quite like that yet.</h2><p>Try another search, or browse all of our thoughtful gifts.</p><Link className="text-link" href="/shop">See all gifts ↗</Link></div>}
    </main>
  );
}
