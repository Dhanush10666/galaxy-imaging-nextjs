import { EnquiryForm } from "@/components/forms/enquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { company } from "@/lib/content";

export const metadata = { title: "Contact - Galaxy Imaging Technologies" };

export default function Contact() {
 return (
 <main>
 <PageHero
 kicker="Contact"
 title="Let's Talk Technology."
 body="Have a product requirement, service request or workplace technology challenge? Talk to our team."
 image="/images/visit-us.jpg"
 ctas={[{ label: "Send an Enquiry", href: "#enquiry" }]}
 />

 <section className="container-page grid gap-16 py-12 md:grid-cols-12 md:py-16 lg:py-20">
 <div className="md:col-span-5">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">
 CONTACT INFORMATION
 </p>
 <h2 className="mt-3 font-display text-3xl">{company.name}</h2>
 <address className="mt-6 space-y-3 text-sm not-italic leading-7 text-muted">
 <p>{company.address}</p>
 <p>
 Phone{" "}
 <a href={`tel:08040935778`} className="text-fg">
 {company.phone}
 </a>
 </p>
 <p>
 Mobile{" "}
 <a href={`tel:+919845240947`} className="text-fg">
 {company.mobile}
 </a>
 </p>
 <p>
 Email{" "}
 <a href={`mailto:${company.email}`} className="text-fg">
 {company.email}
 </a>
 </p>
 </address>
 </div>
 <div id="enquiry" className="scroll-mt-28 md:col-span-7">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">QUICK CONNECT</p>
 <h2 className="mt-3 font-display text-3xl">Tell Us What You Need.</h2>
 <div className="mt-8">
 <EnquiryForm />
 </div>
 </div>
 </section>

 <section className="border-y border-border">
 <div id="quote" className="container-page scroll-mt-28 py-12 md:py-16 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">NEED A QUOTE?</p>
 <h2 className="mt-3 font-display text-3xl">Looking for the Right Product?</h2>
 <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
 Share your requirement with us and our team can help you identify the appropriate
 product or solution.
 </p>
 <div className="mt-8 max-w-3xl">
 <EnquiryForm intent="quote" />
 </div>
 </div>
 </section>

 <section className="grid pt-12 md:grid-cols-2 md:pt-16 lg:pt-20">
 <div className="relative min-h-[360px] overflow-hidden rounded-image md:rounded-none">
 <img src="/images/unique/office-front.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
 </div>
 <div className="flex flex-col justify-center bg-navy px-5 py-12 text-paper md:px-10 md:py-16 lg:px-20 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-paper/50">VISIT US</p>
 <h2 className="mt-4 font-display text-4xl">Come Talk to Us.</h2>
 <p className="mt-5 text-sm leading-7 text-paper/75">
 Galaxy Imaging Technologies · {company.addressShort}
 </p>
 </div>
 </section>

 <CtaBand
 title="Have a Question?"
 body="Whether you're looking for a printer, planning a meeting room, managing a large print environment or need support for existing equipment - we're here to help."
 primary={{ label: "Get in Touch", href: "#enquiry" }}
 />
 </main>
 );
}
