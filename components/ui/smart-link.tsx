"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useQuoteModal } from "@/components/forms/quote-modal";

const routes = new Set([
  "/",
  "/about",
  "/products",
  "/solutions",
  "/services",
  "/industries",
  "/news",
  "/careers",
  "/support",
  "/blogs",
  "/contact",
]);

export function SmartLink({
  href,
  className,
  children,
  onClick,
}: React.ComponentProps<"a"> & { href: string }) {
  const { openQuote } = useQuoteModal();
  const [path, hash] = href.split("#");
  const to = path || "/";
  if (to === "/contact") {
    return (
      <button
        type="button"
        className={cn("no-underline", className)}
        onClick={(event) => {
          onClick?.(event as unknown as React.MouseEvent<HTMLAnchorElement>);
          openQuote();
        }}
      >
        {children}
      </button>
    );
  }
  const dest = hash ? `${to}#${hash}` : to;
  if (routes.has(to) || href.startsWith("/products/")) {
    return (
      <Link href={dest} className={cn("no-underline", className)} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cn("no-underline", className)} onClick={onClick}>
      {children}
    </a>
  );
}
