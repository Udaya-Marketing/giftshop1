"use client";

import { useState } from "react";

type CartLine = { slug: string; quantity: number };
const CART_KEY = "aster-pine-cart";

export function QuickAdd({ slug, label = "Add to bag" }: { slug: string; label?: string }) {
  const [added, setAdded] = useState(false);

  function addToCart() {
    try {
      const current = JSON.parse(localStorage.getItem(CART_KEY) || "[]") as CartLine[];
      const existing = current.find((line) => line.slug === slug);
      if (existing) existing.quantity += 1;
      else current.push({ slug, quantity: 1 });
      localStorage.setItem(CART_KEY, JSON.stringify(current));
      window.dispatchEvent(new Event("cart-updated"));
      setAdded(true);
      window.setTimeout(() => setAdded(false), 1800);
    } catch (error) {
      console.error("Could not save your bag. Please try again.", error);
    }
  }

  return <button className="button button-outline quick-add" type="button" onClick={addToCart}>{added ? "Added to your bag" : label}</button>;
}
