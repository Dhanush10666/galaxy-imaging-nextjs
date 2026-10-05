"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { brands, productCategories } from "@/lib/content";

export default function Products() {
 const [filter, setFilter] = useState("all");
 const cats = useMemo(
 () =>
 filter === "all"
 ? productCategories
 : productCategories.filter((c) => c.brands.includes(filter as never) || c.slug === filter),
 [filter],
 );

 return (
 <main>
 <PageHero
 kicker="Products"
 title="The Right Technology for the Way You Work."
 body="Explore printing, scanning, display, collaboration and workplace technology from established global brands."
 image="/images/slides/products.jpg"
 ctas={[
 { label: "Find My Solution", href: "#finder" },
 { label: "Enquire Now", href: "/contact", variant: "secondary" },
 ]}
 />

 <section className="container-page py-12 md:py-16 lg:py-20">
 <div className="flex flex-wrap gap-2">
 <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
 All categories
 </FilterChip>
 {productCategories.map((c) => (
 <FilterChip key={c.slug} active={filter === c.slug} onClick={() => setFilter(c.slug)}>
 {c.title}
 </FilterChip>
 ))}
 </div>
 </section>

 <section className="container-page pb-12 md:pb-16 lg:pb-20">
 <div className="grid gap-8">
 {cats.map((cat, i) => (
 <article
 key={cat.slug}
 className="grid overflow-hidden rounded-card border border-border bg-surface md:grid-cols-12"
 >
 <div className={`relative min-h-[280px] md:col-span-5 ${i % 2 ? "md:order-2" : ""}`}>
 <img src={cat.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
 </div>
 <div className="flex flex-col justify-between p-8 md:col-span-7 md:p-12">
 <div>
 <p className="text-[11px] font-semibold tracking-[0.18em] text-accent">
 {cat.kicker}
 </p>
 <h2 className="mt-3 font-display text-3xl md:text-4xl">{cat.title}</h2>
 <p className="mt-4 max-w-xl text-sm leading-6 text-muted">{cat.summary}</p>
 <p className="mt-5 text-[12px] tracking-wide text-muted">
 {cat.brands.join(" · ")}
 </p>
 </div>
 <div className="mt-8">
 <Button asChild>
 <Link href={`/products/${cat.slug}`}>
 View category
 </Link>
 </Button>
 </div>
 </div>
 </article>
 ))}
 </div>
 </section>

 <section id="finder" className="border-y border-border bg-elevated">
 <div className="container-page grid gap-12 py-12 md:grid-cols-12 md:py-16 lg:py-20">
 <div className="md:col-span-5">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">PRODUCT FINDER</p>
 <h2 className="mt-3 font-display text-4xl">Not Sure What You Need?</h2>
 <p className="mt-5 text-sm leading-6 text-muted">
 Tell us about your print volume, team size, workflow, industry, budget and required
 features. We'll help you identify the right category and solution.
 </p>
 </div>
 <div className="md:col-span-7">
 <ProductFinder />
 </div>
 </div>
 </section>

 <section className="container-page py-12 md:py-16 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-muted">OEM PARTNERS</p>
 <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-fg">
 {brands.map((b) => (
 <span key={b.name}>{b.name}</span>
 ))}
 </div>
 </section>

 <CtaBand
 title="Enquire Now"
 body="Share your requirement and we’ll help identify the appropriate product or solution."
 primary={{ label: "Enquire Now", href: "/contact" }}
 />
 </main>
 );
}

function FilterChip({
 active,
 onClick,
 children,
}: {
 active: boolean;
 onClick: () => void;
 children: React.ReactNode;
}) {
 return (
 <button
 type="button"
 onClick={onClick}
 className={`h-10 rounded-full border px-4 text-[13px] font-medium ${
 active ? "border-navy bg-navy text-paper dark:border-paper dark:bg-paper dark:text-navy" : "border-border bg-surface text-fg"
 }`}
 >
 {children}
 </button>
 );
}

function ProductFinder() {
 const [result, setResult] = useState<(typeof productCategories)[number] | null>(null);

 return (
 <form
 className="grid gap-4 md:grid-cols-2"
 onSubmit={(e) => {
 e.preventDefault();
 const data = new FormData(e.currentTarget);
 const volume = String(data.get("volume") ?? "");
 const workflow = String(data.get("workflow") ?? "");
 let slug = "multifunction-printers";
 if (workflow === "scan") slug = "document-scanners";
 else if (workflow === "meet") slug = "interactive-panels";
 else if (workflow === "signage") slug = "professional-displays";
 else if (volume === "production") slug = "production-printing";
 else if (workflow === "duplicate") slug = "digital-duplicators";
 setResult(productCategories.find((c) => c.slug === slug) ?? productCategories[0]);
 }}
 >
 <Field label="Print volume" name="volume">
 <option value="everyday">Everyday office</option>
 <option value="departmental">Departmental</option>
 <option value="production">High-volume / production</option>
 </Field>
 <Field label="Team size" name="team">
 <option value="small">1-20</option>
 <option value="mid">20-100</option>
 <option value="large">100+</option>
 </Field>
 <Field label="Primary workflow" name="workflow">
 <option value="print">Print / copy / scan</option>
 <option value="scan">Document digitisation</option>
 <option value="meet">Meetings & collaboration</option>
 <option value="signage">Displays & signage</option>
 <option value="duplicate">High-volume duplicating</option>
 </Field>
 <Field label="Industry" name="industry">
 <option>Corporate</option>
 <option>Healthcare</option>
 <option>Education</option>
 <option>Hospitality</option>
 <option>Government</option>
 <option>Print & Production</option>
 </Field>
 <div className="md:col-span-2">
 <Button type="submit">Find My Solution</Button>
 </div>
 {result && (
 <div className="border border-border bg-surface p-6 md:col-span-2">
 <p className="text-[11px] tracking-[0.18em] text-accent">RECOMMENDED</p>
 <h3 className="mt-2 font-display text-2xl">{result.title}</h3>
 <p className="mt-2 text-sm text-muted">{result.summary}</p>
 <Link
 href={`/products/${result.slug}`}
 className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
 >
 View {result.title} <ArrowUpRight size={16} />
 </Link>
 </div>
 )}
 </form>
 );
}

function Field({
 label,
 name,
 children,
}: {
 label: string;
 name: string;
 children: React.ReactNode;
}) {
 return (
 <label className="grid gap-1.5 text-[12px] font-medium">
 {label}
 <select
 name={name}
 className="field"
 >
 {children}
 </select>
 </label>
 );
}
