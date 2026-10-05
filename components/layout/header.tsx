"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronLeft, ChevronRight, Menu, Search, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { SiteSearch } from "@/components/layout/site-search";
import { Button } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { useQuoteModal } from "@/components/forms/quote-modal";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

type LinkItem = {
  label: string;
  href: string;
  children?: readonly LinkItem[];
};

function childList(item: object): readonly LinkItem[] {
  const kids = (item as LinkItem).children;
  return kids ?? [];
}

function isActive(label: string, href: string, pathname: string) {
  if (label === "Resources") {
    return ["/news", "/blogs", "/careers", "/support"].some((p) => pathname.startsWith(p));
  }
  const path = href.split("#")[0];
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function MenuLinks({
  items,
  onPick,
}: {
  items: readonly LinkItem[];
  onPick: () => void;
}) {
  const [sub, setSub] = useState<string | null>(null);

  return (
    <div
      className="min-w-[240px] rounded-card border border-border bg-white py-1 text-fg shadow-soft"
      onMouseLeave={() => setSub(null)}
    >
      {items.map((item) => {
        const kids = childList(item);
        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setSub(kids.length ? item.label : null)}
          >
            <SmartLink
              href={item.href}
              onClick={onPick}
              className="flex items-center justify-between gap-6 px-4 py-2.5 text-sm font-medium text-fg no-underline hover:bg-sky"
            >
              {item.label}
              {kids.length > 0 && <ChevronRight size={14} className="shrink-0 text-muted" />}
            </SmartLink>
            {kids.length > 0 && sub === item.label && (
              <div className="absolute top-0 left-full z-50 pl-1">
                <MenuLinks items={kids} onPick={onPick} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Header() {
  const { openQuote } = useQuoteModal();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [stack, setStack] = useState<LinkItem[]>([]);

  const closeMenu = () => {
    setOpen(false);
    setStack([]);
  };

  useEffect(() => {
    closeMenu();
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const mobileItems = stack.length ? childList(stack[stack.length - 1]) : nav;
  const mobileParent = stack[stack.length - 1];

  return (
    <header className="sticky top-0 z-50 bg-white text-fg shadow-[0_1px_0_rgb(227_235_243)]">
      <div className="relative flex h-[76px] items-center justify-between px-5 md:px-10 lg:px-20">
        <Logo />
        <nav
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 xl:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = isActive(item.label, item.href, pathname);
            const kids = childList(item);
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDesktopOpen(kids.length ? item.label : null)}
                onMouseLeave={() => setDesktopOpen(null)}
              >
                <SmartLink
                  href={item.href}
                  className={cn(
                    "inline-flex items-center rounded-button px-1 py-2 text-[15px] font-medium text-[#3d4d5c] no-underline hover:text-fg",
                    active && "text-fg",
                  )}
                  aria-expanded={kids.length ? desktopOpen === item.label : undefined}
                  aria-haspopup={kids.length ? "true" : undefined}
                >
                  {item.label}
                </SmartLink>
                {kids.length > 0 && desktopOpen === item.label && (
                  <div className="absolute top-full left-0 z-50 pt-2">
                    <MenuLinks items={kids} onPick={() => setDesktopOpen(null)} />
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-button text-fg hover:bg-sky"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={18} />
          </button>
          <Button size="sm" className="hidden sm:inline-flex" onClick={openQuote}>
            Get a Quote <ArrowRight size={15} />
          </Button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center xl:hidden"
            onClick={() => (open ? closeMenu() : setOpen(true))}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-x-0 top-[76px] bottom-0 z-50 flex flex-col bg-white text-fg xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          {mobileParent && (
            <button
              type="button"
              className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-5 text-left text-sm font-semibold"
              onClick={() => setStack((current) => current.slice(0, -1))}
            >
              <ChevronLeft size={18} />
              {mobileParent.label}
            </button>
          )}
          <nav className="flex-1 overflow-y-auto" aria-label="Mobile">
            {mobileParent && (
              <SmartLink
                href={mobileParent.href}
                onClick={closeMenu}
                className="flex h-14 items-center border-b border-border px-5 text-sm font-semibold text-brand no-underline"
              >
                View all {mobileParent.label}
              </SmartLink>
            )}
            {mobileItems.map((item) => {
              const kids = childList(item);
              const active = isActive(item.label, item.href, pathname);
              if (kids.length > 0) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    className="flex h-14 w-full items-center justify-between border-b border-border px-5 text-left text-base"
                    onClick={() => setStack((current) => [...current, item])}
                  >
                    <span className={cn(active && "font-semibold")}>{item.label}</span>
                    <ChevronRight size={18} className="text-muted" />
                  </button>
                );
              }
              return (
                <SmartLink
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "flex h-14 items-center border-b border-border px-5 text-base no-underline",
                    active && "font-semibold",
                  )}
                >
                  {item.label}
                </SmartLink>
              );
            })}
          </nav>
          <div className="shrink-0 border-t border-border p-4">
            <Button
              className="w-full"
              onClick={() => {
                closeMenu();
                openQuote();
              }}
            >
              Get a Quote <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      )}
      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
