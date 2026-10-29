"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { BagIcon, HeartIcon, MenuIcon, SearchIcon } from "@/components/icons";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const updateCart = () => {
      try {
        const lines = JSON.parse(localStorage.getItem("aster-pine-cart") || "[]") as { quantity: number }[];
        setCartQuantity(lines.reduce((sum, line) => sum + line.quantity, 0));
      } catch (error) {
        console.error("Could not read the shopping bag count.", error);
      }
    };
    updateCart();
    window.addEventListener("cart-updated", updateCart);
    window.addEventListener("storage", updateCart);
    return () => {
      window.removeEventListener("cart-updated", updateCart);
      window.removeEventListener("storage", updateCart);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="header-inner page-container">
        <button className="icon-button mobile-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon open={menuOpen} />
        </button>
        <Link href="/" className="wordmark" aria-label={`${site.name} home`}>aster <i>&</i> pine</Link>
        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {site.navigation.map((item) => <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
          <div className="mobile-nav-note">Made with care in London · Sent everywhere</div>
        </nav>
        <div className="header-actions">
          <button className="currency-switch" aria-label="Currency set to Indian rupees">INR <span>⌄</span></button>
          <button className="icon-button" aria-label="Search products" onClick={() => setSearchOpen(!searchOpen)}><SearchIcon /></button>
          <Link className="icon-button wishlist-link" href="/shop" aria-label="Browse your wishlist"><HeartIcon /></Link>
          <Link className="icon-button bag-link" href="/cart" aria-label={`Shopping bag${cartQuantity ? `, ${cartQuantity} items` : ""}`}><BagIcon /><span className="cart-count" aria-hidden="true">{cartQuantity || "Bag"}</span></Link>
        </div>
      </div>
      {searchOpen && (
        <form className="search-panel page-container" action="/shop">
          <label htmlFor="site-search">What are you looking for?</label>
          <input id="site-search" name="q" type="search" placeholder="A birthday, a thank-you, a little something…" autoFocus />
          <button className="text-link" type="submit">Search the shop <span aria-hidden="true">↗</span></button>
        </form>
      )}
    </header>
  );
}
