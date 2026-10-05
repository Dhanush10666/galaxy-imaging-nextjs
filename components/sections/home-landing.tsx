import { ArrowRight, ArrowUpRight, BarChart3, ChevronDown, ChevronRight, Headset, Layers, LifeBuoy, Plus, Printer, Search, Settings, ShieldCheck, Users, Wrench } from "lucide-react";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { SectionWave } from "@/components/ui/wave";
import { Button } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import {
  approach,
  blogPosts,
  industries,
} from "@/lib/content";

function BrandDivider() {
  return <span className="mx-1.5 h-6 w-px shrink-0 bg-[#d5dee8] sm:mx-6 sm:h-9 md:mx-11" aria-hidden />;
}

function PartnerStrip() {
  return (
    <ul className="mx-auto mt-8 flex w-max min-w-full items-center justify-center px-3 sm:mt-10">
      <li className="shrink-0">
        <img src="/brand/partners/mark-a.png" alt="Konica Minolta" className="h-9 w-auto sm:h-14 md:h-16" />
      </li>
      <BrandDivider />
      <li className="shrink-0 font-sans text-[16px] leading-none font-bold tracking-[0.01em] text-[#e10600] sm:text-[26px] md:text-[32px]">
        TOSHIBA
      </li>
      <BrandDivider />
      <li className="shrink-0">
        <svg viewBox="0 0 64 64" className="h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14" role="img" aria-label="HP">
          <circle cx="32" cy="32" r="32" fill="#0096d6" />
          <text
            x="32"
            y="40"
            textAnchor="middle"
            fill="#ffffff"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="26"
            fontStyle="italic"
            fontWeight="700"
          >
            hp
          </text>
        </svg>
      </li>
      <BrandDivider />
      <li className="shrink-0 font-sans text-[17px] leading-none font-bold tracking-[-0.03em] text-[#e10600] sm:text-[28px] md:text-[34px]">
        Kodak
      </li>
      <BrandDivider />
      <li className="flex shrink-0 flex-col items-center">
        <svg viewBox="0 0 24 12" className="mb-1 h-2 w-5" aria-hidden>
          <path
            fill="#e10600"
            d="M12 6C10.2 3.6 8.4 2.6 6.8 3.6 5.2 4.6 5 6.6 6.4 8c1.4 1.4 3.4.6 5.6-2 2.2 2.6 4.2 3.4 5.6 2 1.4-1.4 1.2-3.4-.4-4.4C15.6 2.6 13.8 3.6 12 6z"
          />
        </svg>
        <span className="font-sans text-[14px] leading-none font-bold tracking-[0.04em] text-[#e10600] sm:text-[22px] sm:tracking-[0.08em] md:text-[28px]">
          FUJITSU
        </span>
      </li>
    </ul>
  );
}

const solutionCards = [
  {
    id: "managed-print",
    title: "Managed Print Services",
    href: "/solutions#managed-print",
    image: "/images/solutions/managed-print.jpg",
  },
  {
    id: "workflow",
    title: "Document Workflow Solutions",
    href: "/solutions#digitisation",
    image: "/images/solutions/workflow.jpg",
  },
  {
    id: "av",
    title: "AV & Collaboration Solutions",
    href: "/solutions#av",
    image: "/images/solutions/collaboration.jpg",
  },
  {
    id: "cost",
    title: "Cost Optimization Solutions",
    href: "/solutions#managed-print",
    image: "/images/solutions/cost.jpg",
  },
];

const productCards = [
  {
    name: "Konica Minolta Printers & MFDs",
    href: "/products/multifunction-printers",
    image: "/images/products/km.jpg",
  },
  {
    name: "Toshiba Copiers",
    href: "/products/multifunction-printers",
    image: "/images/products/toshiba.jpg",
  },
  {
    name: "HP Printers",
    href: "/products/it-workplace",
    image: "/images/products/hp.jpg",
  },
  {
    name: "Scanners",
    href: "/products/document-scanners",
    image: "/images/products/scanner.jpg",
  },
  {
    name: "AV Equipment",
    href: "/products/professional-displays",
    image: "/images/products/av.jpg",
  },
  {
    name: "Consumables & Spares",
    href: "/services#consumables",
    image: "/images/products/toner.jpg",
  },
] as const;

const serviceCards = [
  {
    title: "Printer & Copier AMC",
    body: "Preventive maintenance for uninterrupted work",
    href: "/services#amc",
    icon: Wrench,
  },
  {
    title: "Repair & Breakfix",
    body: "Quick and reliable on-site support",
    href: "/services#break-fix",
    icon: Settings,
  },
  {
    title: "Printer Rental",
    body: "Flexible rental options for businesses",
    href: "/services#rentals",
    icon: Printer,
  },
  {
    title: "Installation & Setup",
    body: "Hassle-free installation and configuration",
    href: "/services",
    icon: Layers,
  },
  {
    title: "On-Demand Support",
    body: "Remote and on-site assistance",
    href: "/support",
    icon: Headset,
  },
  {
    title: "Technical Support",
    body: "Expert help for your printers and office technology",
    href: "/support",
    icon: LifeBuoy,
  },
] as const;

const reasons = [
  {
    title: "Authorized Dealer",
    body: "Genuine products with official warranty",
    icon: ShieldCheck,
  },
  {
    title: "Expert Team",
    body: "Trained and experienced professionals",
    icon: Users,
  },
  {
    title: "Cost Optimization",
    body: "Solutions that reduce your printing costs",
    icon: BarChart3,
  },
  {
    title: "End-to-End Support",
    body: "From consultation to ongoing service",
    icon: Headset,
  },
] as const;

const stepIcons = [Search, ShieldCheck, Settings, Headset];

const insightImages = [
  "/images/unique/print-reports.jpg",
  "/images/boardroom.jpg",
  "/images/scanning.jpg",
  "/images/industry-education.jpg",
];

export function HomeLanding() {
  const steps = approach.slice(0, 4);
  const posts = blogPosts.slice(0, 3);
  const featured = industries.slice(0, 3);

  return (
    <main>
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#071426] text-white lg:min-h-[calc(100dvh-76px)]">
        <video
          src="/videos/hero.mp4"
          poster="/images/hero-screen.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[#071426]/35 lg:hidden" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,36,0.82)_0%,rgba(6,18,36,0.55)_26%,rgba(6,18,36,0.22)_46%,transparent_68%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071426]/35 to-transparent" />
        <div className="relative mx-auto flex min-h-[680px] w-full max-w-[1440px] flex-col justify-center px-5 pt-4 pb-12 md:px-10 md:pb-16 lg:min-h-[calc(100dvh-76px)] lg:px-20 lg:pb-20">
          <div className="max-w-[640px]">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-white uppercase sm:text-[13px]">
              Smarter Workspaces
            </p>
            <h1 className="mt-4 font-display text-[clamp(38px,4.35vw,60px)] leading-[1.02] font-bold tracking-[-0.03em] text-white">
              Advanced Printing
              <br />
              Solutions for
              <br />
              Modern Businesses
            </h1>
            <p className="mt-5 max-w-[360px] text-[15px] leading-[1.55] text-white/90">
              High-performance printers, managed print services and office technology solutions.
            </p>
            <div className="mt-7">
              <Button asChild size="md" className="h-[48px] w-fit rounded-[8px] px-5 text-[15px]">
                <SmartLink href="/contact">
                  Get a Quote <ArrowRight size={16} />
                </SmartLink>
              </Button>
            </div>
          </div>
        </div>
        <p className="pointer-events-none absolute right-[5%] bottom-[17%] z-10 hidden w-[190px] rotate-[-8deg] text-left font-script text-[36px] leading-[0.88] text-white lg:block">
          Smarter
          <br />
          Workspaces
          <br />
          Brighter Businesses
        </p>
        <a
          href="#partners"
          className="absolute bottom-[4.25rem] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-0 text-[12px] text-white/75 no-underline"
        >
          Scroll
          <ChevronDown size={15} strokeWidth={1.75} />
        </a>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 block h-10 w-full md:h-14"
        >
          <path
            fill="#ffffff"
            d="M0 40C200 48 380 22 620 30C880 40 1040 62 1240 44C1340 34 1400 28 1440 36V80H0Z"
          />
        </svg>
      </section>

      <section id="partners" className="relative bg-white">
        <div className="overflow-x-auto pt-8 pb-8 md:pt-10 md:pb-10">
          <p className="text-center text-[11px] font-semibold tracking-[0.22em] text-[#8b97a6] uppercase md:text-[12px]">
            Authorized dealer of leading global brands
          </p>
          <PartnerStrip />
        </div>
        <SectionWave color="#eef5fc" className="mt-2" />
      </section>

      <section className="relative bg-sky">
        <div className="mx-auto grid w-full max-w-[1440px] items-start gap-8 px-5 py-12 md:px-10 md:py-16 lg:grid-cols-[minmax(340px,400px)_1fr] lg:gap-8 lg:px-20 lg:py-20">
          <div className="lg:pt-3">
            <p className="eyebrow text-brand">Our Solutions</p>
            <h2 className="mt-3 font-display text-[clamp(30px,2.5vw,40px)] leading-[1.08] font-bold tracking-[-0.035em] text-ink">
              <span className="block">Complete Office</span>
              <span className="block">Technology Solutions</span>
            </h2>
            <p className="mt-5 max-w-[30ch] text-[15px] leading-7 text-muted">
              Streamline your printing, document management and collaboration with solutions built for modern businesses.
            </p>
            <SmartLink href="/solutions" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand no-underline">
              Explore All Solutions <ArrowRight size={16} />
            </SmartLink>
          </div>
          <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {solutionCards.map((card) => (
              <SmartLink
                key={card.id}
                href={card.href}
                className="lift flex h-full flex-col rounded-[18px] bg-white p-2.5 pb-4 no-underline shadow-[0_16px_36px_-28px_rgb(7_39_93_/_0.55)]"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[12px] bg-elevated">
                  <img src={card.image} alt="" className="h-full w-full object-contain object-center" />
                </div>
                <h3 className="mt-3 mb-6 px-1.5 text-[15px] leading-5 font-semibold text-ink">{card.title}</h3>
                <span className="mt-auto ml-1.5 grid h-8 w-8 shrink-0 place-items-center self-start rounded-full border border-[#d5dee8] text-navy">
                  <Plus size={16} strokeWidth={1.75} />
                </span>
              </SmartLink>
            ))}
          </div>
        </div>
        <SectionWave color="#ffffff" />
      </section>

      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute top-0 right-0 hidden h-[70px] w-[240px] lg:block"
          style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 52% 100%)" }}
        >
          <img src="/images/products/building.jpg" alt="" className="h-full w-full object-cover object-right" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-start gap-8 px-5 py-12 md:px-10 md:py-16 lg:grid-cols-[auto_1fr] lg:gap-8 lg:px-20 lg:py-20">
          <div className="lg:pt-10">
            <p className="eyebrow text-brand">Our Products</p>
            <h2 className="mt-3 font-display text-[clamp(28px,2.15vw,34px)] leading-[1.08] font-bold tracking-[-0.035em] text-ink">
              <span className="block lg:whitespace-nowrap">A Wide Range of Printers</span>
              <span className="block lg:whitespace-nowrap">and Office Technology</span>
            </h2>
            <p className="mt-4 max-w-[34ch] text-[15px] leading-7 text-muted">
              High-performance devices from leading brands for every business need.
            </p>
            <SmartLink href="/products" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand no-underline">
              View All Products <ArrowRight size={16} />
            </SmartLink>
          </div>
          <div className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 lg:pt-14 xl:grid-cols-6">
            {productCards.map((card) => (
              <SmartLink
                key={card.name}
                href={card.href}
                className="lift flex h-full flex-col rounded-[16px] border border-[#e7eef5] bg-white p-2.5 pb-3.5 no-underline shadow-[0_12px_28px_-22px_rgb(7_39_93_/_0.45)]"
              >
                <div className="flex aspect-square items-center justify-center">
                  <img src={card.image} alt="" className="h-[82%] w-[82%] object-contain" />
                </div>
                <h3 className="mb-3 min-h-[2.5em] px-1 text-[13px] leading-[1.25] font-semibold text-ink">{card.name}</h3>
                <span className="mt-auto ml-1 grid h-7 w-7 place-items-center rounded-full border border-brand/50 text-brand">
                  <ArrowUpRight size={14} />
                </span>
              </SmartLink>
            ))}
          </div>
        </div>
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden className="pointer-events-none relative block h-20 w-full md:h-[120px]">
          <path fill="#1a5fad" d="M0 86C280 48 560 24 820 46C1100 70 1280 18 1440 0V140H0Z" />
          <path fill="#07275d" d="M0 112C300 78 600 64 900 86C1160 106 1320 62 1440 40V140H0Z" />
        </svg>
      </section>

      <section id="home-services" className="relative flex min-h-[620px] overflow-hidden bg-[#062b5c] text-white max-[800px]:block max-[800px]:min-h-0">
        <div className="relative z-[1] min-h-[620px] w-[32%] overflow-hidden max-[800px]:h-[360px] max-[800px]:min-h-[360px] max-[800px]:w-full max-[500px]:h-[280px] max-[500px]:min-h-[280px]">
          <img
            src="/images/services/technician.jpg"
            alt="Galaxy technician servicing a multifunction printer"
            className="block h-full w-full object-cover object-center"
          />
          <span
            aria-hidden
            className="absolute top-[-10%] -right-[90px] h-[120%] w-[180px] -rotate-[5deg] rounded-[50%] bg-[#062b5c] max-[800px]:hidden"
          />
        </div>
        <div className="relative z-[2] -ml-[45px] flex min-h-[620px] w-[68%] items-center gap-8 bg-[#062b5c] py-[64px] pr-10 pl-8 max-[1150px]:gap-6 max-[1150px]:pr-6 max-[1150px]:pl-6 max-[800px]:m-0 max-[800px]:block max-[800px]:w-full max-[800px]:min-h-0 max-[800px]:px-[25px] max-[800px]:py-[55px] max-[500px]:px-5 max-[500px]:py-[45px]">
          <div className="w-[300px] shrink-0 max-[1150px]:w-[240px] max-[800px]:mb-10 max-[800px]:w-full">
            <p className="mb-[18px] text-[11px] font-bold tracking-[3px] text-white uppercase">Our Services</p>
            <h2 className="mb-6 font-display text-[clamp(34px,3vw,50px)] leading-[1.08] font-bold tracking-[-1.5px] max-[1150px]:text-[36px] max-[800px]:text-[38px] max-[800px]:tracking-[-1px] max-[500px]:text-[32px]">
              End-to-End Support for Your Office Technology
            </h2>
            <p className="mb-[30px] max-w-[390px] text-[15px] leading-[1.55] text-white/80">
              Keep your operations running with reliable service and support.
            </p>
            <SmartLink
              href="/services"
              className="inline-flex items-center gap-5 rounded-[6px] border border-white/90 px-[18px] py-[13px] text-[13px] font-semibold text-white no-underline transition hover:bg-white hover:text-[#062b5c]"
            >
              View All Services <ArrowRight size={18} />
            </SmartLink>
          </div>
          <ul className="grid min-w-0 flex-1 grid-cols-3 gap-[18px] [grid-template-columns:repeat(3,minmax(0,1fr))] max-[1150px]:grid-cols-2 max-[1150px]:[grid-template-columns:repeat(2,minmax(0,1fr))] max-[800px]:w-full max-[800px]:grid-cols-1 max-[800px]:[grid-template-columns:repeat(1,minmax(0,1fr))]">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <li key={card.title} className="min-w-0">
                  <SmartLink
                    href={card.href}
                    className="flex h-full min-h-[148px] flex-col items-start rounded-[12px] bg-white px-6 py-[22px] text-[#081b36] no-underline"
                  >
                    <span className="mb-3 grid h-7 w-7 shrink-0 place-items-center text-[#1266d6]">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <h3 className="mb-2 text-[14px] leading-[1.3] font-bold text-[#071a35]">{card.title}</h3>
                    <p className="text-[12px] leading-[1.45] text-[#65758b]">{card.body}</p>
                  </SmartLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="home-about" className="relative bg-[#eef4fb]">
        <div className="mx-auto w-full max-w-[1440px] px-5 pt-12 md:px-10 md:pt-16 lg:px-20 lg:pt-20">
          <div className="grid overflow-hidden rounded-[20px] bg-[#f7faff] lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative z-10 flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">
              <p className="eyebrow text-brand">About Us</p>
              <h2 className="mt-3 font-display text-[clamp(30px,2.6vw,42px)] leading-[1.08] font-bold tracking-[-0.035em]">
                <span className="block">Your Trusted Office</span>
                <span className="block">Technology Partner</span>
              </h2>
              <p className="mt-4 max-w-[46ch] text-[15px] leading-7 text-muted">
                Galaxy Imaging delivers high-performance printing and office technology solutions to
                businesses across Bengaluru. We help organisations improve productivity, reduce costs
                and build smarter workspaces.
              </p>
              <Button asChild className="mt-6 w-fit">
                <SmartLink href="/about">
                  Learn More <ArrowRight size={16} />
                </SmartLink>
              </Button>
            </div>
            <div className="relative min-h-[280px] lg:min-h-[460px]">
              <img
                src="/images/about/reception.jpg"
                alt="Galaxy Imaging reception"
                className="absolute inset-0 h-full w-full object-cover object-[46%_center]"
              />
            </div>
          </div>
        </div>
          <div className="relative z-20 -mt-10 md:-mt-[52px]">
          <svg viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden className="block h-[180px] w-full md:h-[230px]">
            <path fill="#e8f4fd" d="M0 92C280 84 540 56 820 28C1060 6 1240 0 1440 10V220H0Z" />
            <path fill="#c3dff6" d="M0 114C320 108 580 96 860 68C1080 46 1260 28 1440 42V220H0Z" />
            <path fill="#ffffff" d="M0 138C340 132 640 128 940 118C1160 110 1320 100 1440 108V220H0Z" />
          </svg>
          <div className="-mt-6 bg-white px-5 pt-2 pb-12 md:px-10 md:pb-16 lg:px-20 lg:pb-20">
            <p className="eyebrow text-center text-brand">Why Businesses Choose Galaxy Imaging</p>
            <ul className="mx-auto mt-7 grid max-w-[1080px] gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="px-5 text-center lg:border-l lg:border-[#e4edf6] lg:first:border-l-0">
                    <Icon size={28} className="mx-auto text-brand" strokeWidth={1.75} />
                    <h3 className="mt-3 text-[15px] font-semibold text-ink">{item.title}</h3>
                    <p className="mx-auto mt-1 max-w-[20ch] text-[13px] leading-5 text-muted">{item.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section id="home-trust" className="relative -mt-px overflow-hidden bg-[#071e45] text-white">
        <img
          src="/images/industries/glass-tower.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e45]/50 via-[#071e45]/78 to-[#071e45]/55" />
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden className="absolute inset-x-0 top-0 z-10 block h-14 w-full md:h-[72px]">
          <path fill="#ffffff" d="M0 0H1440V26C1180 62 960 78 700 52C440 26 200 8 0 34Z" />
        </svg>
        <div className="relative mx-auto w-full max-w-[1440px] px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
          <p className="text-center text-[12px] font-semibold tracking-[0.22em] text-white/90 uppercase">
            Trusted by businesses across industries
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-5 text-white sm:gap-x-10">
            <li className="font-sans text-[26px] leading-none font-semibold tracking-[-0.04em] sm:text-[30px]">Infosys</li>
            <li className="flex items-start text-[24px] leading-none font-bold tracking-[-0.03em] lowercase sm:text-[28px]">
              accenture
              <span className="-mt-1 ml-0.5 text-[16px] text-[#a100ff]">{">"}</span>
            </li>
            <li className="text-[28px] leading-none font-bold tracking-[0.12em] sm:text-[32px]">IBM</li>
            <li className="flex items-center gap-2">
              <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
                <circle cx="16" cy="16" r="14" fill="none" stroke="#fff" strokeWidth="2.2" />
                <path d="M10 16h12M16 9v14" stroke="#fff" strokeWidth="2.2" />
                <circle cx="16" cy="16" r="3.2" fill="none" stroke="#fff" strokeWidth="2" />
              </svg>
              <span className="text-[20px] font-bold tracking-[0.14em] sm:text-[22px]">BOSCH</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-[24px] leading-none font-bold italic sm:text-[28px]">Flipkart</span>
              <span className="grid h-6 w-6 place-items-center rounded-[3px] bg-[#ffe11b] text-[16px] font-black text-[#2874f0]">f</span>
            </li>
            <li className="flex items-center gap-2">
              <svg viewBox="0 0 22 22" className="h-6 w-6" aria-hidden>
                <rect width="10" height="10" fill="#f25022" />
                <rect x="12" width="10" height="10" fill="#7fba00" />
                <rect y="12" width="10" height="10" fill="#00a4ef" />
                <rect x="12" y="12" width="10" height="10" fill="#ffb900" />
              </svg>
              <span className="text-[22px] leading-none font-semibold sm:text-[26px]">Microsoft</span>
            </li>
          </ul>
          <div className="mx-auto mt-8 flex max-w-[820px] items-center gap-4 rounded-[16px] bg-white px-5 py-4 text-ink shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:gap-6 sm:px-7 sm:py-5">
            <span className="font-display text-[42px] leading-none text-[#8eaccc]" aria-hidden>
              &ldquo;
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] leading-6 text-[#4b5568] sm:text-[15px]">
                Reliable service and excellent support. Galaxy Imaging has helped us streamline our office printing operations.
              </p>
              <p className="mt-2 text-[14px]">
                <span className="font-semibold">IT Manager</span>
                <span className="text-muted"> | Bangalore</span>
              </p>
            </div>
            <ChevronRight size={22} className="shrink-0 text-[#1b6fe0]" />
          </div>
        </div>
        <div className="relative">
          <SectionWave color="#ffffff" />
        </div>
      </section>

      <section id="home-industries" className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow text-brand">Industries</p>
              <h2 className="section-title mt-3">Real Workplaces. Real Requirements.</h2>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">
                Galaxy matches printing, scanning and workplace technology to how each industry actually works.
              </p>
            </div>
            <SmartLink href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-brand no-underline">
              View All Industries <ArrowRight size={16} />
            </SmartLink>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featured.map((item) => (
              <SmartLink
                key={item.slug}
                href={`/industries#${item.slug}`}
                className="group relative block min-h-[340px] overflow-hidden rounded-[22px] no-underline shadow-[0_16px_40px_rgba(7,39,93,0.08)]"
              >
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071e45]/85 via-[#071e45]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                  <div>
                    <h3 className="text-[18px] font-semibold tracking-[-0.02em]">{item.title}</h3>
                    <p className="mt-1 text-[13px] leading-5 text-white/75">{item.headline}</p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink transition group-hover:bg-brand group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
          <div className="rounded-[28px] bg-[#f4f8fd] px-5 py-12 md:px-12 md:py-14">
            <p className="eyebrow text-center text-brand">Our Work Process</p>
            <h2 className="section-title mx-auto mt-3 max-w-xl text-center">A Simple Process for Better Workspaces</h2>
            <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
              <span className="absolute top-[26px] right-[12%] left-[12%] hidden h-px bg-[#c5d7ee] md:block" aria-hidden />
              {steps.map((step, i) => {
                const Icon = stepIcons[i] ?? Search;
                return (
                  <li key={step.n} className="relative text-center">
                    <span className="relative z-10 mx-auto grid h-[52px] w-[52px] place-items-center rounded-full bg-white text-brand shadow-[0_8px_20px_rgba(27,111,224,0.12)]">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] text-brand uppercase">{step.n}</p>
                    <h3 className="mt-1 text-[16px] font-semibold">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-[24ch] text-[13px] leading-6 text-muted">{step.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow text-brand">Latest Insights</p>
              <h2 className="section-title mt-3">Industry Notes & Expert Tips</h2>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">
                Notes on Konica Minolta, Toshiba and choosing the right device for the workplace.
              </p>
            </div>
            <SmartLink href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-brand no-underline">
              View All Blogs <ArrowRight size={16} />
            </SmartLink>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <SmartLink href="/blogs" className="group overflow-hidden rounded-[22px] bg-navy text-white no-underline shadow-[0_16px_40px_rgba(7,39,93,0.06)]">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={insightImages[0]} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <p className="text-[12px] font-medium tracking-wide text-white/65">{posts[0]?.date}</p>
                <h3 className="mt-2 max-w-lg text-[22px] leading-7 font-semibold tracking-[-0.03em]">{posts[0]?.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
                  Read note <ArrowRight size={15} />
                </span>
              </div>
            </SmartLink>
            <div className="grid gap-5 lg:h-full lg:grid-rows-2">
              {posts.slice(1).map((post, i) => (
                <SmartLink
                  key={post.title}
                  href="/blogs"
                  className="grid min-h-[148px] grid-cols-[200px_minmax(0,1fr)] items-stretch overflow-hidden rounded-[22px] bg-navy text-white no-underline shadow-[0_16px_40px_rgba(7,39,93,0.06)] lg:h-full lg:min-h-0"
                >
                  <div className="relative min-h-[148px] lg:min-h-0">
                    <img
                      src={insightImages[i + 1]}
                      alt=""
                      className={`absolute inset-0 h-full w-full object-cover ${i === 1 ? "object-[18%_center]" : "object-center"}`}
                    />
                  </div>
                  <div className="flex flex-col justify-center px-5 py-4">
                    <p className="text-[12px] text-white/65">{post.date}</p>
                    <h3 className="mt-1.5 line-clamp-3 text-[15px] leading-5 font-semibold">{post.title}</h3>
                  </div>
                </SmartLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="enquiry" className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[#071428]" />
        <div className="absolute inset-0 bg-[linear-gradient(102deg,#06101f_0%,#0a2758_16%,#1458b4_42%,#1a6ad0_52%,#0e3f86_70%,#071428_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(48%_90%_at_38%_48%,rgba(120,180,255,0.22),transparent_72%)]" />
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden className="absolute inset-x-0 top-0 z-10 h-7 w-full md:h-9">
          <path fill="#ffffff" d="M0 0H1440V8C1120 34 860 40 560 22C300 8 140 4 0 12Z" />
        </svg>
        <div className="relative mx-auto w-full max-w-[1440px] px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
          <img
            src="/images/cta-printer.png?v=2"
            alt=""
            className="mx-auto mb-4 h-40 w-auto object-contain lg:hidden"
          />
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 lg:pl-[250px]">
            <div className="lg:ml-[min(0px,calc(4rem-max(0px,(100vw-1440px)/2)))]">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-white/85 uppercase sm:text-[12px]">
                Ready to optimize your office printing?
              </p>
              <h2 className="mt-2 font-display text-[clamp(26px,2.7vw,36px)] leading-[1.12] font-bold tracking-[-0.03em]">
                <span className="block">Get in Touch for the Right Solution</span>
                <span className="block">for Your Business</span>
              </h2>
            </div>
            <EnquiryForm intent="quote" tone="inverse" />
          </div>
          <img
            src="/images/cta-printer.png?v=2"
            alt=""
            className="pointer-events-none absolute bottom-3 left-[calc(2.25rem-(100vw-100%)/2)] hidden h-[calc(100%-28px)] w-auto max-w-[300px] object-contain object-bottom lg:block"
          />
        </div>
      </section>
    </main>
  );
}
