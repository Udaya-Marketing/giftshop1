import { CartView } from "@/components/CartView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Your gift bag", "Review the thoughtful gifts in your Aster & Pine bag.", "/cart");

export default function CartPage() {
  return <main id="main" className="page-container inner-page cart-page"><div className="eyebrow">Almost ready to make someone’s day</div><h1>Your <em>gift bag.</em></h1><CartView /></main>;
}
