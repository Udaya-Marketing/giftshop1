import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { QuickAdd } from "@/components/QuickAdd";
import { products, getProduct } from "@/data/products";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return product
    ? pageMetadata(`${product.name} — ${product.category.toLowerCase()}`, `${product.description} Shop the ${product.name} from ${site.name}, lovingly wrapped and sent with care.`, `/product/${product.slug}`)
    : pageMetadata("Thoughtful gift", "Explore considered gifts from Aster & Pine.", "/shop");
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const similar = products.filter((item) => item.slug !== product.slug && item.categorySlug === product.categorySlug).slice(0, 3);
  const crumbs = [{ name: "Home", href: "/" }, { name: "Shop", href: "/shop" }, { name: product.category, href: `/shop/${product.categorySlug}` }, { name: product.name, href: `/product/${product.slug}` }];
  const breadcrumb = breadcrumbJsonLd(crumbs);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.slug,
    brand: { "@type": "Brand", name: site.name },
    aggregateRating: { "@type": "AggregateRating", ratingValue: product.rating, reviewCount: product.reviewCount },
    offers: { "@type": "Offer", priceCurrency: site.currency, price: product.price.toFixed(2), availability: "https://schema.org/InStock", url: `${site.url}/product/${product.slug}` },
  };
  return (
    <main id="main" className="page-container inner-page">
      <Breadcrumbs items={crumbs} />
      <section className="product-detail"><div className="product-detail-image"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 760px) 100vw, 55vw" className="cover-image" /></div><div className="product-detail-copy"><div className="eyebrow">{product.category} · {product.occasion}</div><h1>{product.name}</h1><div className="detail-rating">★★★★★ <span>{product.rating} · {product.reviewCount} kind words</span></div><p className="detail-price">{formatPrice(product.price)}</p><p>{product.description}</p><p className="product-detail-note">Finished with care and ready to give. Add a personal note at checkout.</p><QuickAdd slug={product.slug} label="Add to your bag" /><div className="detail-delivery"><span>♡</span> Thoughtfully packed in recyclable materials<br /><span>↗</span> Sent across the UK and worldwide</div><Link href="/contact" className="text-link">Need help choosing? Talk to us <span aria-hidden="true">↗</span></Link></div></section>
      {similar.length > 0 && <section className="related-products"><div className="section-heading"><div><div className="eyebrow">In good company</div><h2>You may also <em>like.</em></h2></div><Link href={`/shop/${product.categorySlug}`} className="text-link">More {product.category.toLowerCase()} <span aria-hidden="true">↗</span></Link></div><div className="product-grid">{similar.map((item) => <ProductCard key={item.slug} product={item} />)}</div></section>}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </main>
  );
}
