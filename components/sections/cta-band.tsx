import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { SectionWave } from "@/components/ui/wave";

export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative bg-navy text-white">
      <div className="absolute inset-x-0 top-0 -translate-y-[99%]">
        <SectionWave color="#07275d" />
      </div>
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between md:py-16 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="section-title">{title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg">
            <SmartLink href={primary.href}>
              {primary.label} <ArrowRight size={16} />
            </SmartLink>
          </Button>
          {secondary && (
            <Button asChild size="lg" variant="secondary">
              <SmartLink href={secondary.href}>{secondary.label}</SmartLink>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
