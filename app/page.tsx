import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import { SprigIcon } from "@/components/icons";
import { products, categories } from "@/data/products";
import { imageUrl, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(`${site.name} — thoughtful gifts, gathered by hand`, "Discover considered gift boxes, personal keepsakes and celebration details, gathered in London and sent with care worldwide.", "/");

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you ship internationally?", acceptedAnswer: { "@type": "Answer", text: "Yes. We send Aster & Pine gifts across the UK and worldwide. Delivery options appear at checkout." } },
    { "@type": "Question", name: "Can I add a personal message?", acceptedAnswer: { "@type": "Answer", text: "Every gift can include a handwritten message, added at checkout." } },
  ],
};

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero page-container">
        <div className="hero-copy">
          <div className="hero-side-note">EST. 2026 — GIFTS WITH A STORY</div>
          <div className="eyebrow">A little more thought, in every detail</div>
          <h1>For the moments<br />that <em>mean something.</em></h1>
          <p>Gifts gathered with feeling, wrapped by hand and sent to the people you keep close.</p>
          <Link href="/shop" className="button button-outline">Shop the collection <span aria-hidden="true">↗</span></Link>
          <div className="hero-footnote"><span>London, made by hand</span><span>01 — 04</span></div>
        </div>
        <div className="hero-photos">
          <div className="hero-frame" />
          <div className="hero-photo hero-photo-main"><Image src={imageUrl("photo-1513201099705-a9746e1e201f", 1300)} alt="A thoughtful gift box, wrapped in soft paper and finished with a ribbon" fill priority sizes="(max-width: 760px) 90vw, 48vw" className="cover-image" /></div>
          <div className="hero-photo hero-photo-detail"><Image src={imageUrl("photo-1549465220-1a8b9238cd48", 700)} alt="A small gift tied with a soft blush ribbon" fill sizes="(max-width: 760px) 42vw, 20vw" className="cover-image" /></div>
          <span className="photo-caption">Something lovely, chosen for them</span>
        </div>
      </section>

      <section className="promise-section page-container" aria-label="Our promises">
        <div className="promise-image"><Image src={imageUrl("photo-1490750967868-88aa4486c946", 900)} alt="Fresh seasonal flowers, gathered simply" fill sizes="(max-width: 760px) 80vw, 28vw" className="cover-image arch-image" /></div>
        <div className="promise-grid">
          {[["01", "Handpicked", "Good things from makers we know by name.", "photo-1455390582262-044cdead277a"], ["02", "Made personal", "A note, a name, a detail that feels like them.", "photo-1490750967868-88aa4486c946"], ["03", "Sent with care", "Beautifully wrapped, arriving right on time.", "photo-1549465220-1a8b9238cd48"]].map(([number, title, copy, image], index) => (
            <Reveal key={title} delay={index * 0.1}>
              <article className="promise-item"><div className="promise-thumb"><Image src={imageUrl(image, 240)} alt="" fill sizes="76px" className="cover-image" /></div><span className="eyebrow">{number} / {title}</span><p>{copy}</p></article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sage-story">
        <div className="page-container sage-story-inner">
          <Reveal className="sage-photo-wrap"><div className="sage-photo"><Image src={imageUrl("photo-1608755728617-aefab37d2edd", 1000)} alt="A beautifully arranged gift, ready to make somebody's day" fill sizes="(max-width: 760px) 90vw, 40vw" className="cover-image arch-image" /></div></Reveal>
          <Reveal className="sage-story-copy" delay={0.12}>
            <div className="eyebrow">Good things, gathered</div>
            <h2>Never an afterthought —<br />always <em>part of the story.</em></h2>
            <p>We believe the way you give can say as much as the gift itself. So we bring together useful, beautiful things that feel like they were always meant to find each other.</p>
            <Link href="/contact" className="button button-outline">Book a gift consultation <span aria-hidden="true">↗</span></Link>
          </Reveal>
          <div className="sage-sprig"><SprigIcon /></div>
        </div>
      </section>

      <section className="story-section page-container">
        <Reveal className="story-copy">
          <div className="eyebrow">A note from us</div>
          <h2>More than<br /><em>pretty boxes.</em></h2>
          <p>It began with a familiar feeling: wanting to find a gift that said the right thing, in a way that felt like you. Aster & Pine is our answer — a small collection of considered things from independent makers, chosen for their craft, their usefulness and the stories they carry.</p>
          <Link href="/about" className="text-link">A little more about us <span aria-hidden="true">↗</span></Link>
        </Reveal>
        <div className="story-collage">
          <div className="story-image story-image-back"><Image src={imageUrl("photo-1490750967868-88aa4486c946", 800)} alt="A handful of delicate flowers chosen for a thoughtful gift" fill sizes="(max-width: 760px) 55vw, 25vw" className="cover-image" /></div>
          <div className="story-image story-image-front"><Image src={imageUrl("photo-1603006905003-be475563bc59", 850)} alt="A hand-poured candle beside small comforts for a slow evening" fill sizes="(max-width: 760px) 65vw, 30vw" className="cover-image" /></div>
          <span className="photo-caption">A little of this, a little of that</span>
        </div>
      </section>

      <section className="quote-strip">
        <SprigIcon className="quote-sprig quote-sprig-left" />
        <div className="eyebrow">A small thought to keep</div>
        <blockquote>“The smallest things are often the ones<br />that stay with us.”</blockquote>
        <span className="quote-author">Aster & Pine, on giving well</span>
        <SprigIcon className="quote-sprig quote-sprig-right" />
      </section>

      <section className="collections-section page-container">
        <div className="section-heading collections-heading"><div><div className="eyebrow">Find the feeling</div><h2>Gifts for <em>every chapter.</em></h2></div><Link href="/shop" className="text-link">Explore all gifts <span aria-hidden="true">↗</span></Link></div>
        <div className="collection-grid">
          {categories.slice(0, 4).map((category, index) => <Link className={`collection-tile collection-tile-${index + 1}`} href={`/shop/${category.slug}`} key={category.slug}><Image src={category.image} alt={`${category.name} collection at Aster & Pine`} fill sizes="(max-width: 640px) 48vw, 24vw" className="cover-image" /><span className="collection-label">{category.name}<span aria-hidden="true">↗</span></span></Link>)}
          <div className="collection-title-card"><span className="eyebrow">A reason to give</span><h3>For the little<br />and the <em>life-changing.</em></h3></div>
        </div>
      </section>

      <section className="difference-section page-container">
        <div className="difference-photo"><Image src={imageUrl("photo-1523438885200-e635ba2c371e", 1500)} alt="Carefully arranged flowers and details for a special gathering" fill sizes="(max-width: 760px) 100vw, 65vw" className="cover-image" /></div>
        <Reveal className="difference-card">
          <div className="eyebrow">The Aster & Pine difference</div><h2>Good from<br /><em>the very start.</em></h2>
          <ul><li><span>01</span> Considered makers, chosen by hand</li><li><span>02</span> Personal notes, written just for them</li><li><span>03</span> Carefully packed, sent around the world</li></ul>
          <Link href="/about" className="text-link">What we believe <span aria-hidden="true">↗</span></Link>
        </Reveal>
      </section>

      <section className="bestsellers-section page-container">
        <div className="section-heading"><div><div className="eyebrow">A few favourites</div><h2>Lovely things, <em>well loved.</em></h2></div><Link href="/shop" className="text-link">Shop all gifts <span aria-hidden="true">↗</span></Link></div>
        <div className="product-grid">{products.filter((product) => product.featured).slice(0, 4).map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </section>

      <section className="testimonials-section">
        <div className="page-container testimonials-inner"><div className="eyebrow">Kind words, kept close</div><blockquote>“It felt like someone had thought about every little detail. The birthday girl kept the box, too.”</blockquote><div className="testimonial-name">Martha W. <span>— a very happy gift-giver</span></div><div className="testimonial-count">01 <span>/</span> 03</div></div>
      </section>

      <section className="instagram-section page-container">
        <div className="section-heading"><div><div className="eyebrow">A little window into our world</div><h2>From our hands <em>to your feed.</em></h2></div><a href="https://www.instagram.com/" className="text-link">@asterandpine <span aria-hidden="true">↗</span></a></div>
        <div className="instagram-grid">{["photo-1513201099705-a9746e1e201f", "photo-1490750967868-88aa4486c946", "photo-1549465220-1a8b9238cd48", "photo-1603006905003-be475563bc59", "photo-1523438885200-e635ba2c371e"].map((id, i) => <div className="instagram-photo" key={id}><Image src={imageUrl(id, 500)} alt={`Aster & Pine gift inspiration, detail ${i + 1}`} fill sizes="(max-width: 640px) 40vw, 18vw" className="cover-image" /></div>)}</div>
      </section>

      <section className="values-section">
        <div className="page-container values-inner"><div className="eyebrow">Where the good things begin</div><h2>Local. Seasonal. <em>Sent everywhere.</em></h2><SprigIcon className="values-sprig" /><p>We work with small makers, seasonal growers and family-run studios — bringing their good work together in one thoughtful parcel, wherever you call home.</p><Link href="/about" className="text-link">How we choose well <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="newsletter-section page-container">
        <div className="newsletter-copy"><div className="eyebrow">A note from Aster & Pine</div><h2>Good things, <em>in your inbox.</em></h2><p>First look at new collections, little rituals and a thank-you of 10% on your first order.</p></div>
        <Newsletter />
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
