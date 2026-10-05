"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { SmartLink } from "@/components/ui/smart-link";
import {
  blogPosts,
  industries,
  productCategories,
  services,
  solutions,
} from "@/lib/content";

type Hit = { label: string; href: string; hint: string };

function index(): Hit[] {
  const pages: Hit[] = [
    { label: "Home", href: "/", hint: "Page" },
    { label: "About Us", href: "/about", hint: "Page" },
    { label: "Products", href: "/products", hint: "Page" },
    { label: "Solutions", href: "/solutions", hint: "Page" },
    { label: "Services", href: "/services", hint: "Page" },
    { label: "Industries", href: "/industries", hint: "Page" },
    { label: "News", href: "/news", hint: "Resources" },
    { label: "Blogs", href: "/blogs", hint: "Resources" },
    { label: "Careers", href: "/careers", hint: "Resources" },
    { label: "Support", href: "/support", hint: "Resources" },
    { label: "Contact", href: "/contact", hint: "Get a quote" },
  ];
  const products = productCategories.flatMap((cat) => [
    { label: cat.title, href: `/products/${cat.slug}`, hint: "Product" },
    ...cat.products.map((p) => ({
      label: p.name,
      href: `/products/${cat.slug}`,
      hint: p.brand,
    })),
  ]);
  const sols = solutions.map((s) => ({ label: s.title, href: `/solutions#${s.id}`, hint: "Solution" }));
  const svcs = services.map((s) => ({ label: s.title, href: `/services#${s.id}`, hint: "Service" }));
  const inds = industries.map((s) => ({ label: s.title, href: `/industries#${s.slug}`, hint: "Industry" }));
  const posts = blogPosts.map((p) => ({ label: p.title, href: "/blogs", hint: "Blog" }));
  return [...pages, ...products, ...sols, ...svcs, ...inds, ...posts];
}

export function SiteSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const items = useMemo(() => index(), []);
  const query = q.trim().toLowerCase();
  const hits = query
    ? items.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(query)).slice(0, 8)
    : items.slice(0, 6);

  useEffect(() => {
    if (!open) return;
    setQ("");
    const t = window.setTimeout(() => input.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-navy/40" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="mx-auto mt-20 w-[min(640px,calc(100%-32px))] rounded-card bg-white p-4 shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <Search size={18} className="text-muted" />
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products, solutions, services"
            className="h-10 w-full bg-transparent text-sm outline-none"
          />
          <button type="button" className="grid h-10 w-10 place-items-center" onClick={onClose} aria-label="Close search">
            <X size={18} />
          </button>
        </div>
        <ul className="mt-2">
          {hits.length === 0 && <li className="px-2 py-4 text-sm text-muted">No matches in the Galaxy catalogue.</li>}
          {hits.map((hit) => (
            <li key={hit.href + hit.label}>
              <SmartLink
                href={hit.href}
                onClick={onClose}
                className="flex items-center justify-between gap-4 rounded-button px-2 py-3 no-underline hover:bg-sky"
              >
                <span className="text-sm font-medium">{hit.label}</span>
                <span className="shrink-0 text-xs text-muted">{hit.hint}</span>
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
