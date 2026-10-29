import Link from "next/link";

export default function NotFound() {
  return <main id="main" className="not-found page-container"><div className="eyebrow">A small detour</div><h1>This page wandered <em>off to find a gift.</em></h1><p>We couldn’t find the page you were looking for, but there are plenty of thoughtful things back at the shop.</p><Link href="/shop" className="button button-outline">Back to the shop <span aria-hidden="true">↗</span></Link></main>;
}
