import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { SectionWave } from "@/components/ui/wave";
import { cn } from "@/lib/utils";

type Cta = { label: string; href: string; variant?: "primary" | "secondary" };

export function PageHero({
  kicker,
  title,
  lede,
  body,
  image,
  ctas,
  compact,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  body?: string;
  image: string;
  ctas?: Cta[];
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-navy text-white",
        compact ? "min-h-[420px]" : "min-h-[520px] md:min-h-[600px]",
      )}
    >
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/88 via-navy/55 to-navy/20" />
      <div className="container-page relative flex min-h-[inherit] flex-col justify-end pt-28 pb-12 md:pb-16 lg:pb-20">
        {kicker && <p className="eyebrow mb-4 text-white/75">{kicker}</p>}
        <h1 className="max-w-4xl font-display text-[clamp(34px,5vw,58px)] leading-[1.06] font-semibold tracking-[-0.04em]">
          {title}
        </h1>
        {lede && <p className="mt-4 max-w-xl text-lg text-white/90">{lede}</p>}
        {body && <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{body}</p>}
        {ctas && ctas.length > 0 && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {ctas.map((cta) => (
              <Button key={cta.label} asChild size="lg" variant={cta.variant === "secondary" ? "secondary" : "primary"}>
                <SmartLink
                  href={cta.href}
                  {...(cta.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {cta.label} <ArrowRight size={16} />
                </SmartLink>
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <SectionWave color="#ffffff" />
      </div>
    </section>
  );
}
