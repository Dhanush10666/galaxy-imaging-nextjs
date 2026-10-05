import { SmartLink } from "@/components/ui/smart-link";

const leftLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
] as const;

const rightLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/news" },
  { label: "Contact Us", href: "/contact" },
] as const;

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] shrink-0" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2.2A6.8 6.8 0 0 0 5.2 9c0 5.1 6.1 12.2 6.4 12.5a.6.6 0 0 0 .8 0c.3-.3 6.4-7.4 6.4-12.5A6.8 6.8 0 0 0 12 2.2Zm0 9.2A2.4 2.4 0 1 1 12 6.6a2.4 2.4 0 0 1 0 4.8Z"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#050c18] text-white">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-12 sm:grid-cols-2 md:px-10 md:py-16 lg:grid-cols-[1.15fr_1.2fr_0.95fr_auto] lg:gap-6 lg:px-20 lg:py-20">
        <div>
          <SmartLink href="/" className="inline-flex items-center gap-2.5 no-underline">
            <img src="/brand/galaxy-mark.png" alt="" className="h-11 w-11" />
            <span className="font-display text-[17px] leading-[1.05] font-bold tracking-[0.06em]">
              GALAXY
              <br />
              IMAGING
            </span>
          </SmartLink>
          <p className="mt-2.5 max-w-[200px] text-[12px] leading-[1.45] text-white/55">
            Office Technology Solutions
            <br />
            for a Smarter Tomorrow
          </p>
        </div>

        <div className="relative lg:before:absolute lg:before:inset-y-0 lg:before:-left-3 lg:before:w-px lg:before:bg-white/20">
          <p className="text-[14px] font-semibold">Quick Links</p>
          <div className="mt-3 grid grid-cols-2 gap-x-6">
            <ul className="space-y-1.5">
              {leftLinks.map((item) => (
                <li key={item.label}>
                  <SmartLink href={item.href} className="text-[13px] text-white/65 no-underline hover:text-white">
                    {item.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
            <ul className="relative space-y-1.5 before:absolute before:inset-y-0 before:-left-3 before:w-px before:bg-white/20">
              {rightLinks.map((item) => (
                <li key={item.label}>
                  <SmartLink href={item.href} className="text-[13px] text-white/65 no-underline hover:text-white">
                    {item.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative lg:before:absolute lg:before:inset-y-0 lg:before:-left-3 lg:before:w-px lg:before:bg-white/20">
          <p className="text-[14px] font-semibold">Our Locations</p>
          <ul className="mt-3 space-y-2.5 text-[13px] text-white/75">
            <li className="flex items-center gap-2">
              <PinIcon />
              Bangalore (Head Office)
            </li>
            <li className="flex items-center gap-2">
              <PinIcon />
              Kochi (Branch)
            </li>
          </ul>
        </div>

        <div className="relative lg:before:absolute lg:before:inset-y-0 lg:before:-left-3 lg:before:w-px lg:before:bg-white/20">
          <p className="text-[14px] font-semibold">Follow Us</p>
          <ul className="mt-3 flex items-center gap-2">
            <li>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" className="block">
                <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
                  <rect width="32" height="32" rx="6" fill="#0A66C2" />
                  <path
                    fill="#fff"
                    d="M8.6 12.4h3.2v11.2H8.6zm1.6-5.1a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7zM14.6 12.4h3.05v1.53h.05c.42-.8 1.46-1.65 3.01-1.65 3.22 0 3.82 2.12 3.82 4.88v6.44h-3.18v-5.7c0-1.36-.03-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.8H14.6z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" aria-label="YouTube" className="block">
                <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
                  <rect width="32" height="32" rx="6" fill="#FF0000" />
                  <path fill="#fff" d="M13 10.8v10.4l9-5.2z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" aria-label="Facebook" className="block">
                <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
                  <rect width="32" height="32" rx="6" fill="#1877F2" />
                  <path
                    fill="#fff"
                    d="M17.6 25.2v-8.1h2.7l.4-3.1h-3.1v-2c0-.9.25-1.5 1.55-1.5H21V7.4c-.3 0-1.35-.13-2.57-.13-2.54 0-4.28 1.55-4.28 4.4v2.33H11.4v3.1h2.75v8.1z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
