import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { approach, company } from "@/lib/content";

export const metadata = { title: "About - Galaxy Imaging Technologies" };

export default function About() {
 return (
 <main>
 <PageHero
 kicker="About"
 title="Technology Expertise. Built Around Long-Term Partnerships."
 body="Galaxy Imaging Technologies is an office automation and workplace technology solutions provider helping organisations with printing, document management, scanning, displays, collaboration and related services."
 image="/images/reception.jpg"
 ctas={[{ label: "Contact Galaxy", href: "/contact" }]}
 />

 <section className="container-page grid gap-12 py-12 md:grid-cols-12 md:py-16 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent md:col-span-3">
 OUR STORY
 </p>
 <div className="md:col-span-8">
 <h2 className="font-display text-4xl font-medium tracking-[-0.02em] md:text-5xl">
 From Office Automation to Connected Workplaces.
 </h2>
 <p className="mt-8 text-base leading-7 text-muted">
 Technology in the workplace has changed significantly. What started with traditional
 printing and copying has evolved into connected document workflows, secure printing,
 digital scanning, collaboration spaces and integrated workplace technology.
 </p>
 <p className="mt-5 text-base leading-7 text-muted">
 Galaxy Imaging Technologies has grown alongside this change - bringing together
 products, technical expertise and service support to address evolving business
 requirements.
 </p>
 <p className="mt-8 font-display text-2xl leading-snug">
 Our approach is simple: Understand the requirement. Recommend the right solution.
 Support it for the long run.
 </p>
 </div>
 </section>

 <section className="border-y border-border bg-surface">
 <div className="container-page grid gap-12 py-12 md:grid-cols-12 md:py-16 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent md:col-span-3">
 WHAT WE BELIEVE
 </p>
 <div className="md:col-span-8">
 <h2 className="font-display text-4xl font-medium tracking-[-0.02em]">
 Technology Should Solve Problems. Not Create Them.
 </h2>
 <p className="mt-8 text-base leading-7 text-muted">
 Every organisation has different workflows, volumes, budgets and priorities. Instead
 of recommending technology simply because it is available, our approach is to
 understand how the workplace operates and identify solutions that fit those
 requirements.
 </p>
 </div>
 </div>
 </section>

 <section className="container-page py-12 md:py-16 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">OUR APPROACH</p>
 <h2 className="mt-3 font-display text-4xl">How we work with you.</h2>
 <ol className="mt-14 grid gap-px md:grid-cols-5">
 {approach.map((step) => (
 <li key={step.n} className="rounded-card bg-elevated p-6 md:min-h-[280px] md:p-7">
 <p className="font-display text-3xl text-accent">{step.n}</p>
 <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>
 <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
 </li>
 ))}
 </ol>
 </section>

 <section className="grid md:grid-cols-2">
 <div className="relative min-h-[360px] overflow-hidden rounded-image md:rounded-none">
 <img src="/images/mfp-detail.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
 </div>
 <div className="flex flex-col justify-center bg-navy px-5 py-12 text-paper md:px-10 md:py-16 lg:px-20 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-paper/50">EXPERIENCE</p>
 <h2 className="mt-4 font-display text-4xl">Knowledge That Comes From the Field.</h2>
 <p className="mt-6 text-sm leading-7 text-paper/75">
 Galaxy's management and team bring extensive experience in office automation,
 multifunction printers, projectors and workplace technology.
 </p>
 <p className="mt-8 text-sm leading-7 text-paper/75">
 {company.md.name}, {company.md.role}. {company.md.note}
 </p>
 </div>
 </section>

 <section className="container-page py-12 md:py-16 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">OUR COMMITMENT</p>
 <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
 We Don't Just Supply Technology. We Stay With It.
 </h2>
 <p className="mt-8 max-w-2xl text-base leading-7 text-muted">
 From consultation and installation to maintenance and ongoing support, our objective is
 to build lasting relationships with the organisations we serve.
 </p>
 </section>

 <CtaBand
 title="Contact Galaxy"
 body="Have a workplace technology requirement? Talk to the team in Bengaluru."
 primary={{ label: "Contact Galaxy", href: "/contact" }}
 />
 </main>
 );
}
