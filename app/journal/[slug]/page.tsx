import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts } from "@/data/posts";
import { site } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return post ? pageMetadata(`${post.title} — The Journal`, post.excerpt, `/journal/${post.slug}`) : pageMetadata("The Journal", "Notes and good ideas from Aster & Pine.", "/journal");
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const crumbs = [{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: post.title, href: `/journal/${post.slug}` }];
  const breadcrumb = breadcrumbJsonLd(crumbs);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/journal/${post.slug}`,
  };
  return <main id="main" className="page-container inner-page article-page"><Breadcrumbs items={crumbs} /><article><header className="article-heading"><div className="eyebrow">{new Date(`${post.date}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {post.readTime}</div><h1>{post.title}</h1><p>{post.excerpt}</p></header><div className="article-cover"><Image src={post.image} alt={post.alt} fill sizes="(max-width: 900px) 100vw, 75vw" className="cover-image" /></div><div className="article-body">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p>Looking for something to give? <Link href="/shop">Explore our thoughtful gift collection</Link>, or find more ideas in <Link href="/journal">the journal</Link>.</p></div></article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /></main>;
}
