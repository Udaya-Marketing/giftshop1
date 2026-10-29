import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/ContactForm";

export const metadata = pageMetadata("Contact our London gift studio", "Tell us what you have in mind. Our London gift studio can help with personal gifts, wedding favours and corporate orders.", "/contact");

export default function ContactPage() {
  return <main id="main" className="page-container inner-page contact-page"><header className="contact-intro"><div className="eyebrow">A real person will read this</div><h1>Let’s talk about <em>something lovely.</em></h1><p>Whether you need a hand choosing or have a whole table to think about, we’d be glad to help.</p></header><div className="contact-layout"><div className="contact-details"><h2>Find us here</h2><p>Our little studio is in London. Our gifts travel a good deal further.</p><a href={`mailto:${site.email}`}>{site.email}</a><p className="contact-hours">Monday–Friday<br />9.00–17.00 GMT</p><p>For wedding favours and larger orders, a few weeks’ notice helps us make it just right.</p></div><ContactForm /></div></main>;
}
