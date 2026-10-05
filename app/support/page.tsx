import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { company, supportPortal } from "@/lib/content";

export const metadata = { title: "Support - Galaxy Imaging Technologies" };

export default function Support() {
 return (
 <main>
 <PageHero
 compact
 kicker="Support"
 title="Technical Support."
 body="Existing customers can open the Galaxy support portal, or reach the Bengaluru team by phone or email."
 image="/images/unique/service-bench.jpg"
 ctas={[{ label: "Open Support Portal", href: supportPortal }]}
 />

 <section className="container-page grid gap-4 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-3 lg:py-20">
 <a
 href={supportPortal}
 className="rounded-card border border-border bg-white p-6 no-underline hover:border-navy"
 >
 <p className="text-[11px] font-semibold tracking-[0.18em] text-accent">PORTAL</p>
 <h2 className="mt-3 font-display text-2xl">support.gitonline.biz</h2>
 <p className="mt-3 text-sm leading-6 text-muted">
 The support page on the current Galaxy site directs customers to this portal.
 </p>
 </a>
 <a
 href={`tel:${company.phone.replace(/\s/g, "")}`}
 className="rounded-card border border-border bg-white p-6 no-underline hover:border-navy"
 >
 <p className="text-[11px] font-semibold tracking-[0.18em] text-accent">PHONE</p>
 <h2 className="mt-3 font-display text-2xl">{company.phone}</h2>
 <p className="mt-3 text-sm leading-6 text-muted">Mobile {company.mobile}</p>
 </a>
 <a
 href={`mailto:${company.email}`}
 className="rounded-card border border-border bg-white p-6 no-underline hover:border-navy sm:col-span-2 lg:col-span-1"
 >
 <p className="text-[11px] font-semibold tracking-[0.18em] text-accent">EMAIL</p>
 <h2 className="mt-3 font-display text-2xl break-all">{company.email}</h2>
 <p className="mt-3 text-sm leading-6 text-muted">{company.addressShort}</p>
 </a>
 </section>

 <section className="border-t border-border">
 <div className="container-page flex flex-col gap-4 py-12 sm:flex-row sm:items-center sm:justify-between md:py-16 lg:py-20">
 <p className="max-w-xl text-sm leading-6 text-muted">
 Need a service visit, AMC or a spare? Send the request from the contact page.
 </p>
 <Button asChild>
 <SmartLink href="/contact">Request Service</SmartLink>
 </Button>
 </div>
 </section>
 </main>
 );
}
