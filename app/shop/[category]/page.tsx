import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/data/site";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  return category
    ? pageMetadata(`${category.name} — thoughtful gifts`, `${category.description} Explore the ${category.name.toLowerCase()} collection at ${site.name}.`, `/shop/${category.slug}`)
    : pageMetadata("Gift collection", "Explore thoughtful gifts from Aster & Pine.", "/shop");
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const items = products.filter((product) => product.categorySlug === category.slug);
  const crumbs = [{ name: "Home", href: "/" }, { name: "Shop", href: "/shop" }, { name: category.name, href: `/shop/${category.slug}` }];
  const jsonLd = breadcrumbJsonLd(crumbs);
  return <main id="main" className="page-container inner-page"><Breadcrumbs items={crumbs} /><header className="category-hero"><div className="category-hero-image"><Image src={category.image} alt={`Aster & Pine ${category.name.toLowerCase()} collection`} fill sizes="(max-width: 760px) 90vw, 40vw" className="cover-image arch-image" /></div><div><div className="eyebrow">A collection for every chapter</div><h1>{category.name}<br /><em>with feeling.</em></h1><p>{category.description}</p></div></header><div className="product-grid shop-product-grid">{items.map((product) => <ProductCard key={product.slug} product={product} />)}</div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></main>;
}
