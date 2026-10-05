import { PageHero } from "@/components/sections/page-hero";
import { blogPosts } from "@/lib/content";

export const metadata = { title: "Blogs - Galaxy Imaging Technologies" };

export default function Blogs() {
 return (
 <main>
 <PageHero
 compact
 kicker="Blogs"
 title="Notes on Printing and Workplace Technology."
 body="Articles published by Galaxy Imaging Technologies on printers, scanning and choosing the right device."
 image="/images/unique/print-reports.jpg"
 />

 <section className="container-page grid gap-4 py-12 md:py-16 lg:py-20">
 {blogPosts.map((post) => (
 <article key={post.title} className="rounded-card border border-border bg-white p-5 sm:p-8">
 {post.date && (
 <p className="text-[11px] font-semibold tracking-[0.16em] text-accent">{post.date}</p>
 )}
 <h2 className="mt-2 font-display text-2xl leading-snug sm:text-3xl">{post.title}</h2>
 <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{post.excerpt}</p>
 </article>
 ))}
 </section>
 </main>
 );
}
