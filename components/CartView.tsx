"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";

type CartLine = { slug: string; quantity: number };
const CART_KEY = "aster-pine-cart";

export function CartView() {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]") as CartLine[];
        setLines(saved.filter((line) => products.some((product) => product.slug === line.slug) && line.quantity > 0));
      } catch (error) {
        console.error("Could not read your saved bag.", error);
      } finally {
        setReady(true);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function save(next: CartLine[]) {
    setLines(next);
    localStorage.setItem(CART_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("cart-updated"));
  }

  const subtotal = lines.reduce((sum, line) => sum + (products.find((product) => product.slug === line.slug)?.price ?? 0) * line.quantity, 0);

  if (!ready) return <div className="cart-empty">Your bag is opening…</div>;
  if (!lines.length) return <div className="cart-empty"><p>Nothing in your bag just yet.</p><Link className="button button-outline" href="/shop">Find a thoughtful gift</Link></div>;

  return (
    <div className="cart-layout">
      <div className="cart-lines">{lines.map((line) => {
        const product = products.find((item) => item.slug === line.slug);
        if (!product) return null;
        return <article className="cart-line" key={line.slug}><div className="cart-thumb"><Image src={product.image} alt={product.alt} fill sizes="100px" className="cover-image" /></div><div className="cart-line-info"><Link href={`/product/${product.slug}`}>{product.name}</Link><span>{formatPrice(product.price)}</span><label>Quantity <select value={line.quantity} onChange={(event) => save(lines.map((item) => item.slug === line.slug ? { ...item, quantity: Number(event.target.value) } : item))}>{[1, 2, 3, 4, 5].map((quantity) => <option key={quantity} value={quantity}>{quantity}</option>)}</select></label></div><button className="remove-link" onClick={() => save(lines.filter((item) => item.slug !== line.slug))}>Remove</button></article>;
      })}</div>
      <aside className="cart-summary"><h2>Your order</h2><div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><p>Shipping and any personal touches are calculated at checkout.</p><button className="button button-dark checkout-button" type="button" onClick={() => alert("Thank you — checkout will be available when our shop opens.")}>Continue to checkout</button><Link href="/shop" className="text-link">Keep looking <span aria-hidden="true">↗</span></Link></aside>
    </div>
  );
}
