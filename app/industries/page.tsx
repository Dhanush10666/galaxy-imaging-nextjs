import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SmartLink } from "@/components/ui/smart-link";
import { industries } from "@/lib/content";

export const metadata = { title: "Industries - Galaxy Imaging Technologies" };

export default function Industries() {
 return (
 <main>
 <PageHero
 kicker="Industries"
 title="Technology That Adapts to Your Industry."
 body="Every industry has different workflows, document volumes, security requirements and workplace environments. Galaxy helps organisations select technology around the way they work."
 image="/images/industry-corporate.jpg"
 ctas={[{ label: "Discuss Your Requirement", href: "/contact" }]}
 />

 {industries.map((ind, i) => (
 <section
 id={ind.slug}
 key={ind.slug}
 className="grid min-h-[70vh] md:grid-cols-2"
 >
 <div className={`relative min-h-[320px] overflow-hidden rounded-image md:rounded-none ${i % 2 ? "md:order-2" : ""}`}>
 <img src={ind.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
 </div>
 <div className="flex flex-col justify-center bg-bg px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">
 {String(i + 1).padStart(2, "0")}
 </p>
 <h2 className="mt-4 font-display text-4xl">{ind.title}</h2>
 <p className="mt-3 text-lg font-medium">{ind.headline}</p>
 <p className="mt-5 max-w-md text-sm leading-7 text-muted">{ind.body}</p>
 <p className="mt-8 text-[12px] font-semibold tracking-[0.14em] text-muted">SOLUTIONS</p>
 <p className="mt-2 max-w-md text-sm leading-6">{ind.solutions.join(" · ")}</p>
 </div>
 </section>
 ))}

 <CtaBand
 title="Your Industry. Your Requirements."
 body="Don't see your industry? Your requirements don't have to fit into a category. Tell us what you need and we'll help identify the right technology and support model."
 primary={{ label: "Discuss Your Requirement", href: "/contact" }}
 />
 <SmartLink href="/contact" className="sr-only">
 Discuss
 </SmartLink>
 </main>
 );
}
