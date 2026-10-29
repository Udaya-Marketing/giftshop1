import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-place">London · Edinburgh · Copenhagen · Wherever you are</div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-wordmark">aster <i>&</i> pine</Link>
            <p>Good things, gathered with you in mind.</p>
            <a href="https://www.instagram.com/" aria-label="Visit Aster and Pine on Instagram">Instagram ↗</a>
          </div>
          <div><h2>Find your way</h2><Link href="/shop">Shop all gifts</Link><Link href="/occasions/birthday-gifts">Shop by occasion</Link><Link href="/journal">The journal</Link></div>
          <div><h2>Here to help</h2><Link href="/contact">Contact us</Link><Link href="/contact">Delivery & returns</Link><Link href="/contact">FAQs</Link></div>
          <div><h2>Come say hello</h2><p>Monday–Friday<br />9.00–17.00 GMT</p><a href={`mailto:${site.email}`}>{site.email}</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}. Made with care.</span><span>Thoughtful things, sent worldwide.</span></div>
      </div>
    </footer>
  );
}
