"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { careerIntro, company } from "@/lib/content";

const field = "field";

export default function Careers() {
 const [sent, setSent] = useState(false);

 return (
 <main>
 <PageHero
 compact
 kicker="Careers"
 title="Work With Galaxy."
 body={careerIntro}
 image="/images/unique/office-front.jpg"
 ctas={[{ label: "Apply", href: "/careers#apply" }]}
 />

 <section id="apply" className="scroll-mt-28 container-page grid gap-10 py-12 md:grid-cols-12 md:py-16 lg:py-20">
 <div className="md:col-span-4">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">APPLY</p>
 <h2 className="mt-3 font-display text-3xl sm:text-4xl">Send your details.</h2>
 <p className="mt-4 text-sm leading-6 text-muted">
 Share your name, email, subject and resume. The team will review applications at{" "}
 {company.addressShort}
 </p>
 <p className="mt-4 text-sm">
 <a className="font-semibold text-navy no-underline" href={`mailto:${company.email}`}>
 {company.email}
 </a>
 </p>
 </div>
 <div className="md:col-span-8">
 {sent ? (
 <div className="rounded-card border border-border bg-elevated p-8">
 <h3 className="font-display text-3xl">Thank you.</h3>
 <p className="mt-3 text-sm leading-6 text-muted">
 Your application has been noted. Galaxy will be in touch if there is a suitable
 opening.
 </p>
 </div>
 ) : (
 <form
 className="grid gap-4 rounded-card border border-border bg-white p-5 sm:p-8 md:grid-cols-2"
 onSubmit={(e) => {
 e.preventDefault();
 setSent(true);
 }}
 >
 <label className="grid gap-1.5 text-[12px] font-medium">
 Your Name *
 <input required name="name" className={field} />
 </label>
 <label className="grid gap-1.5 text-[12px] font-medium">
 Your Email *
 <input required type="email" name="email" className={field} />
 </label>
 <label className="grid gap-1.5 text-[12px] font-medium md:col-span-2">
 Subject
 <input name="subject" className={field} />
 </label>
 <label className="grid gap-1.5 text-[12px] font-medium md:col-span-2">
 Resume
 <input
 name="resume"
 type="file"
 accept=".pdf,.doc,.docx"
 className={field}
 />
 </label>
 <label className="grid gap-1.5 text-[12px] font-medium md:col-span-2">
 Your Message
 <textarea name="message" rows={5} className={field} />
 </label>
 <div className="md:col-span-2">
 <Button type="submit" size="lg" className="w-full sm:w-auto">
 Submit Application
 </Button>
 </div>
 </form>
 )}
 </div>
 </section>
 </main>
 );
}
