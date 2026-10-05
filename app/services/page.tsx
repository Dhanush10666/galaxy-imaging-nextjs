import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { serviceJourney, services } from "@/lib/content";

export const metadata = { title: "Services - Galaxy Imaging Technologies" };

export default function Services() {
 return (
 <main>
 <PageHero
 kicker="Services"
 title="Technology Needs Support. We're Here for It."
 body="From preventive maintenance to emergency support, Galaxy provides services that help keep your workplace technology running."
 image="/images/unique/service-bench.jpg"
 ctas={[{ label: "Request Service", href: "/contact#enquiry" }]}
 />

 <section className="container-page py-12 md:py-16 lg:py-20">
 <div className="space-y-16">
 {services.map((svc, i) => (
 <article
 key={svc.id}
 id={svc.id}
 className="grid gap-8 border-t border-border pt-12 md:grid-cols-12"
 >
 <div className="md:col-span-4">
 <p className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
 <h2 className="mt-3 font-display text-3xl">{svc.title}</h2>
 <p className="mt-3 text-sm font-medium text-fg">{svc.kicker}</p>
 </div>
 <div className="md:col-span-8">
 <p className="text-sm leading-7 text-muted">{svc.body}</p>
 <ul className="mt-6 grid gap-2 sm:grid-cols-2">
 {svc.points.map((p) => (
 <li key={p} className="flex gap-3 text-sm">
 <span className="mt-[0.55em] h-px w-2 shrink-0 bg-accent" />
 {p}
 </li>
 ))}
 </ul>
 </div>
 </article>
 ))}
 </div>
 </section>

 <section className="bg-navy text-paper">
 <div className="container-page py-12 md:py-16 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-paper/50">SERVICE JOURNEY</p>
 <h2 className="mt-3 font-display text-4xl">From request to follow-up.</h2>
 <ol className="mt-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
 {serviceJourney.map((step, i) => (
 <li key={step} className="flex-1">
 <p className="font-display text-xl text-accent">{String(i + 1).padStart(2, "0")}</p>
 <p className="mt-3 text-lg">{step}</p>
 </li>
 ))}
 </ol>
 </div>
 </section>

 <CtaBand
 title="Request Service"
 body="If you need technical assistance, maintenance or service support, let us know what's happening."
 primary={{ label: "Request Service", href: "/contact#enquiry" }}
 />
 </main>
 );
}
