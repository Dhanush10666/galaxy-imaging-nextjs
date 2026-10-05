import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SmartLink } from "@/components/ui/smart-link";
import { productCategories } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = productCategories.find((c) => c.slug === slug);
  return { title: `${cat?.title ?? "Products"} - Galaxy Imaging Technologies` };
}

export default async function ProductCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = productCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

 return (
 <main>
 <PageHero
 kicker="Products"
 title={cat.title}
 lede={cat.kicker}
 body={cat.summary}
 image={cat.image}
 compact
 ctas={[
 { label: "Enquire Now", href: "/contact" },
 { label: "All products", href: "/products", variant: "secondary" },
 ]}
 />
 <section className="container-page py-12 md:py-16 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.18em] text-muted">
 {cat.brands.join(" · ")}
 </p>
 <div className="mt-10 grid gap-4 md:grid-cols-2">
 {cat.products.map((p) => (
 <article key={p.name} className="border border-border bg-surface p-7">
 <p className="text-[11px] tracking-[0.16em] text-accent">{p.brand}</p>
 <h2 className="mt-3 font-display text-2xl">{p.name}</h2>
 <p className="mt-2 text-sm text-muted">{p.meta}</p>
 <SmartLink href="/contact" className="mt-6 inline-block text-sm font-semibold tracking-wide">
 Request a quote
 </SmartLink>
 </article>
 ))}
 </div>
 </section>
 <CtaBand
 title="Need help choosing?"
 body="Tell us about volume, workflow and environment - we’ll recommend a right-fit device."
 primary={{ label: "Talk to an Expert", href: "/contact" }}
 />
 </main>
 );
}
