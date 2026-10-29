import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { QuickAdd } from "@/components/QuickAdd";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/product/${product.slug}`} className="product-image-link" aria-label={`View ${product.name}`}>
        <div className="product-image-wrap"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 640px) 48vw, (max-width: 1024px) 30vw, 23vw" className="cover-image" /></div>
      </Link>
      <div className="product-card-meta"><span>{product.category}</span><span>★★★★★ <span className="review-count">({product.reviewCount})</span></span></div>
      <div className="product-card-title"><Link href={`/product/${product.slug}`}>{product.name}</Link><span>{formatPrice(product.price)}</span></div>
      <QuickAdd slug={product.slug} />
    </article>
  );
}
