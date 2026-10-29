import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("The Journal — notes on thoughtful giving", "Ideas for choosing a thoughtful gift, planning wedding favours and making corporate gifting feel personal.", "/journal");

export default function JournalPage() {
  return <main id="main" className="page-container inner-page journal-page"><header className="journal-intro"><div className="eyebrow">Notes from the studio</div><h1>A little thought <em>goes a long way.</em></h1><p>Good ideas for giving well, gathered here for whenever you need them.</p></header><div className="journal-grid">{posts.map((post, index) => <article className={`journal-card journal-card-${index + 1}`} key={post.slug}><Link href={`/journal/${post.slug}`} className="journal-image"><Image src={post.image} alt={post.alt} fill sizes="(max-width: 700px) 90vw, 40vw" className="cover-image" /></Link><div className="eyebrow">{new Date(`${post.date}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {post.readTime}</div><h2><Link href={`/journal/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link className="text-link" href={`/journal/${post.slug}`}>Read the story <span aria-hidden="true">↗</span></Link></article>)}</div></main>;
}
