"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { certificates, newsAwards, newsIntro } from "@/lib/content";

export default function News() {
 const [open, setOpen] = useState<number | null>(null);

 useEffect(() => {
 if (open == null) return;
 const onKey = (e: KeyboardEvent) => {
 if (e.key === "Escape") setOpen(null);
 if (e.key === "ArrowRight") setOpen((i) => (i == null ? i : (i + 1) % certificates.length));
 if (e.key === "ArrowLeft")
 setOpen((i) => (i == null ? i : (i - 1 + certificates.length) % certificates.length));
 };
 document.body.style.overflow = "hidden";
 window.addEventListener("keydown", onKey);
 return () => {
 document.body.style.overflow = "";
 window.removeEventListener("keydown", onKey);
 };
 }, [open]);

 const active = open == null ? null : certificates[open];

 return (
 <main>
 <PageHero
 kicker="News"
 title="Recognised by the Brands We Represent."
 body={newsIntro}
 image="/images/news-banner.jpg"
 ctas={[{ label: "View Certificates", href: "/news#certificates" }]}
 />

 <section className="container-page grid gap-12 py-12 md:grid-cols-12 md:py-16 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent md:col-span-3">
 OEM AWARDS
 </p>
 <div className="md:col-span-9">
 <h2 className="max-w-3xl font-display text-4xl font-medium tracking-[-0.02em] md:text-5xl">
 Ten consecutive years of recognition.
 </h2>
 <ol className="mt-10 border-t border-border">
 {newsAwards.map((item, i) => (
 <li
 key={item}
 className="grid grid-cols-[auto_1fr] gap-6 border-b border-border py-5"
 >
 <span className="font-display text-sm text-muted">
 {String(i + 1).padStart(2, "0")}
 </span>
 <p className="text-base leading-7">{item.replace(/\.$/, "")}</p>
 </li>
 ))}
 </ol>
 </div>
 </section>

 <section id="certificates" className="scroll-mt-24 border-t border-border bg-surface">
 <div className="container-page py-12 md:py-16 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">CERTIFICATES</p>
 <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-[-0.02em] md:text-5xl">
 Authorization certificates and awards.
 </h2>
 <p className="mt-5 max-w-xl text-base leading-7 text-muted">
 Select a certificate to view it larger. Use the arrow keys to move between years.
 </p>

 <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
 {certificates.map((item, i) => (
 <li key={item.id}>
 <button
 type="button"
 onClick={() => setOpen(i)}
 className="flex h-full w-full flex-col overflow-hidden rounded-card border border-border bg-white text-left transition-colors hover:border-navy"
 >
 <span className="m-3 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[14px] bg-elevated p-3">
 <img
 src={item.image}
 alt=""
 className="max-h-full max-w-full rounded-[12px] object-contain"
 />
 </span>
 <span className="flex flex-1 flex-col border-t border-border p-5">
 <span className="text-[11px] font-semibold tracking-[0.16em] text-accent">
 {item.year}
 </span>
 {item.title !== item.year && (
 <span className="mt-2 font-display text-2xl leading-tight">{item.title}</span>
 )}
 <span className="mt-2 text-sm text-muted">{item.detail}</span>
 </span>
 </button>
 </li>
 ))}
 </ul>
 </div>
 </section>

 {active && open != null && (
 <div
 className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/80 p-4 md:p-10"
 role="dialog"
 aria-modal="true"
 aria-label={active.year}
 >
 <button
 type="button"
 className="absolute inset-0 cursor-default"
 aria-label="Close certificate"
 onClick={() => setOpen(null)}
 />
 <div className="relative z-10 flex max-h-full w-full max-w-5xl flex-col bg-bg">
 <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
 <div>
 <p className="text-[11px] font-semibold tracking-[0.16em] text-accent">
 {active.year}
 </p>
 <p className="mt-1 font-display text-2xl">
 {active.title === active.year ? active.detail : active.title}
 </p>
 {active.title !== active.year && (
 <p className="text-sm text-muted">{active.detail}</p>
 )}
 </div>
 <button
 type="button"
 className="grid h-11 w-11 shrink-0 place-items-center border border-border"
 aria-label="Close"
 onClick={() => setOpen(null)}
 >
 <X size={18} />
 </button>
 </div>
 <div className="flex min-h-0 flex-1 items-center justify-center bg-elevated p-4 md:p-8">
 <img
 src={active.image}
 alt={`${active.year}. ${active.title}. ${active.detail}`}
 className="max-h-[68dvh] w-auto max-w-full rounded-[16px] object-contain"
 />
 </div>
 <div className="flex items-center justify-between border-t border-border px-4 py-3">
 <button
 type="button"
 className="inline-flex h-11 items-center gap-2 px-3 text-sm font-semibold"
 onClick={() => setOpen((open - 1 + certificates.length) % certificates.length)}
 >
 <ChevronLeft size={18} /> Previous
 </button>
 <p className="text-sm tabular-nums text-muted">
 {open + 1} / {certificates.length}
 </p>
 <button
 type="button"
 className="inline-flex h-11 items-center gap-2 px-3 text-sm font-semibold"
 onClick={() => setOpen((open + 1) % certificates.length)}
 >
 Next <ChevronRight size={18} />
 </button>
 </div>
 </div>
 </div>
 )}

 <CtaBand
 title="Talk to Galaxy about your requirement."
 body="Products, solutions and support for printing, scanning and workplace technology."
 primary={{ label: "Contact Galaxy", href: "/contact" }}
 />
 </main>
 );
}
