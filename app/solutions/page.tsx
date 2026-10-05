import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SmartLink } from "@/components/ui/smart-link";
import { solutionProcess, solutions } from "@/lib/content";

export const metadata = { title: "Solutions - Galaxy Imaging Technologies" };

export default function Solutions() {
 return (
 <main>
 <PageHero
 kicker="Solutions"
 title="Solutions Designed Around Your Business."
 body="Technology works best when products, people and processes work together. Galaxy provides integrated workplace solutions across printing, document management, security and audiovisual environments."
 image="/images/boardroom.jpg"
 ctas={[{ label: "Talk to a Solutions Expert", href: "/contact" }]}
 />

 {solutions.map((sol, i) => (
 <section
 id={sol.id}
 key={sol.id}
 className={`scroll-mt-24 ${i % 2 === 1 ? "bg-surface" : ""}`}
 >
 <div className="container-page grid items-center gap-10 py-12 md:grid-cols-12 md:py-16 lg:py-20">
 <div className={`${i % 2 === 1 ? "md:order-2 md:col-span-6" : "md:col-span-6"}`}>
 <div className="relative aspect-[4/3] overflow-hidden rounded-image">
 <img src={sol.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
 </div>
 </div>
 <div className="md:col-span-6">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-accent">{sol.title}</p>
 <h2 className="mt-3 font-display text-4xl tracking-[-0.02em]">{sol.headline}</h2>
 <p className="mt-5 text-sm leading-7 text-muted">{sol.body}</p>
 {"process" in sol && sol.process && (
 <p className="mt-6 text-sm font-medium tracking-wide">
 {sol.process.join(" → ")}
 </p>
 )}
 <ul className="mt-8 space-y-2.5">
 {sol.points.map((p) => (
 <li key={p} className="flex gap-3 text-sm">
 <span className="mt-[0.55em] h-px w-2 shrink-0 bg-accent" />
 {p}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </section>
 ))}

 <section className="border-t border-border bg-navy text-paper">
 <div className="container-page py-12 md:py-16 lg:py-20">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-paper/50">SOLUTION PROCESS</p>
 <h2 className="mt-3 font-display text-4xl">How We Work</h2>
 <ol className="mt-12 grid gap-8 md:grid-cols-5">
 {solutionProcess.map((step, i) => (
 <li key={step}>
 <p className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</p>
 <p className="mt-3 text-lg">{step}</p>
 </li>
 ))}
 </ol>
 <SmartLink
 href="/contact"
 className="mt-12 inline-flex h-12 items-center bg-paper px-6 text-sm font-semibold text-navy no-underline"
 >
 Talk to a Solutions Expert
 </SmartLink>
 </div>
 </section>
 </main>
 );
}
