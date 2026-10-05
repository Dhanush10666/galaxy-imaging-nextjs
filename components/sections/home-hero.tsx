"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { homeSlides } from "@/lib/content";
import { cn } from "@/lib/utils";

export function HomeHero() {
 const count = homeSlides.length;
 const [index, setIndex] = useState(0);
 const [hidden, setHidden] = useState(false);
 const [touching, setTouching] = useState(false);
 const [reduceMotion, setReduceMotion] = useState(false);
 const [live, setLive] = useState("");
 const touch = useRef<{ x: number; y: number } | null>(null);

 const paused = hidden || touching || reduceMotion;

 useEffect(() => {
 const sync = () => setHidden(document.hidden);
 sync();
 document.addEventListener("visibilitychange", sync);
 return () => document.removeEventListener("visibilitychange", sync);
 }, []);

 useEffect(() => {
 const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
 const sync = () => setReduceMotion(mq.matches);
 sync();
 mq.addEventListener("change", sync);
 return () => mq.removeEventListener("change", sync);
 }, []);

 useEffect(() => {
 if (paused) return;
 const id = window.setTimeout(() => setIndex((n) => (n + 1) % count), 4500);
 return () => window.clearTimeout(id);
 }, [paused, index, count]);

 function go(next: number, user = false) {
 const n = ((next % count) + count) % count;
 setIndex(n);
 if (user) {
 const slide = homeSlides[n];
 setLive(`${slide.title}. Slide ${n + 1} of ${count}.`);
 }
 }

 return (
 <section
 className="relative min-h-[calc(100dvh-72px)] overflow-hidden bg-navy text-paper"
 aria-roledescription="carousel"
 aria-label="Galaxy Imaging Technologies highlights"
 onTouchStart={(e) => {
 const t = e.touches[0];
 touch.current = { x: t.clientX, y: t.clientY };
 setTouching(true);
 }}
 onTouchEnd={(e) => {
 const start = touch.current;
 touch.current = null;
 setTouching(false);
 if (!start) return;
 const t = e.changedTouches[0];
 const dx = t.clientX - start.x;
 const dy = t.clientY - start.y;
 if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) {
 go(dx < 0 ? index + 1 : index - 1, true);
 }
 }}
 onTouchCancel={() => {
 touch.current = null;
 setTouching(false);
 }}
 onKeyDown={(e) => {
 if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
 e.preventDefault();
 go(e.key === "ArrowRight" ? index + 1 : index - 1, true);
 }}
 >
 <div className="absolute inset-0">
 {homeSlides.map((slide, i) => (
 <img
 key={slide.id}
 src={slide.image}
 alt={i === index ? slide.alt : ""}
 width={1600}
 height={900}
 className={cn(
 "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none",
 i === index ? "opacity-100" : "opacity-0",
 )}
 style={{ objectPosition: slide.position }}
 aria-hidden={i !== index}
 />
 ))}
 </div>
 <div className="home-hero-scrim pointer-events-none absolute inset-0" />

 <div className="relative flex min-h-[calc(100dvh-72px)] flex-col justify-end pb-8 pt-16 md:pb-12">
 <div className="container-page w-full">
 <div className="grid max-w-xl">
 {homeSlides.map((slide, i) => {
 const active = i === index;
 return (
 <div
 key={slide.id}
 id={`hero-slide-${slide.id}`}
 role={active ? "tabpanel" : undefined}
 aria-labelledby={`hero-tab-${slide.id}`}
 aria-hidden={!active}
 inert={!active}
 className={cn(
 "col-start-1 row-start-1 transition-opacity duration-500 motion-reduce:transition-none",
 active ? "opacity-100" : "pointer-events-none opacity-0",
 )}
 >
 <p className="inline-flex items-center gap-2 rounded-control bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white">
 {String(i + 1).padStart(2, "0")} - {slide.kicker}
 </p>
 {active ? (
 <h1 className="mt-4 max-w-[12ch] font-display text-[clamp(34px,10vw,64px)] font-semibold leading-[0.98] tracking-[-0.05em]">
 {slide.title}
 </h1>
 ) : (
 <p className="mt-4 max-w-[12ch] font-display text-[clamp(34px,10vw,64px)] font-semibold leading-[0.98] tracking-[-0.05em]">
 {slide.title}
 </p>
 )}
 <p className="mt-4 min-h-[4.5em] max-w-md text-[15px] leading-6 text-paper/85 md:text-base">
 {slide.lede}
 </p>
 <div className="mt-6 flex flex-wrap gap-3">
 <Button
 asChild
 size="md"
 className="h-11 bg-navy px-5 text-white hover:bg-navy-deep md:h-12"
 >
 <SmartLink href={slide.primary.href}>{slide.primary.label}</SmartLink>
 </Button>
 <Button
 asChild
 size="md"
 variant="secondary"
 className="h-11 border-white bg-white px-5 text-navy hover:bg-[#e8f2fb] md:h-12"
 >
 <SmartLink href={slide.secondary.href}>{slide.secondary.label}</SmartLink>
 </Button>
 </div>
 </div>
 );
 })}
 </div>

 <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
 <p
 className="shrink-0 font-display text-sm tabular-nums whitespace-nowrap text-paper/80"
 aria-hidden="true"
 >
 {String(index + 1).padStart(2, "0")}
 <span className="text-paper/45"> / {String(count).padStart(2, "0")}</span>
 </p>
 <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
 {homeSlides.map((slide, i) => {
 const active = i === index;
 return (
 <button
 key={slide.id}
 id={`hero-tab-${slide.id}`}
 type="button"
 role="tab"
 aria-selected={active}
 aria-controls={`hero-slide-${slide.id}`}
 aria-label={`${slide.kicker}, slide ${i + 1} of ${count}`}
 data-active={active ? "true" : "false"}
 className={cn("hero-progress", paused && "is-paused")}
 onClick={() => go(i, true)}
 >
 <span className="hero-progress-track">
 {active && (
 <span className="hero-progress-fill" />
 )}
 </span>
 </button>
 );
 })}
 </div>
 </div>
 </div>
 </div>

 <button
 type="button"
 className="absolute top-1/2 left-3 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-control bg-white text-navy shadow-soft hover:bg-[#e8f2fb] md:left-5"
 aria-label="Previous slide"
 onClick={() => go(index - 1, true)}
 >
 <ChevronLeft size={20} />
 </button>
 <button
 type="button"
 className="absolute top-1/2 right-3 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-control bg-white text-navy shadow-soft hover:bg-[#e8f2fb] md:right-5"
 aria-label="Next slide"
 onClick={() => go(index + 1, true)}
 >
 <ChevronRight size={20} />
 </button>
 <p className="sr-only" aria-live="polite">
 {live}
 </p>
 </section>
 );
}
