"use client";

import { createContext, useContext, useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Button } from "@/components/ui/button";

const QuoteModalContext = createContext<{ openQuote: () => void } | null>(null);

export function useQuoteModal() {
  const value = useContext(QuoteModalContext);
  if (!value) throw new Error("useQuoteModal must be used within QuoteModalProvider");
  return value;
}

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [session, setSession] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const openQuote = () => {
    setSent(false);
    setSession((n) => n + 1);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusable = () =>
      panel
        ? [...panel.querySelectorAll<HTMLElement>("button, input, select, textarea, a[href]")]
        : [];
    focusable()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const nodes = focusable();
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [open]);

  return (
    <QuoteModalContext.Provider value={{ openQuote }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-[#071428]/55"
            aria-label="Close quote form"
            onClick={() => setOpen(false)}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-full max-w-[420px] rounded-[18px] border border-[#e6eef8] bg-white px-6 py-7 text-center text-fg shadow-[0_18px_50px_rgba(7,20,40,0.16)] sm:px-8 sm:py-8"
          >
            <button
              type="button"
              className="absolute top-3.5 right-3.5 grid h-8 w-8 place-items-center rounded-full text-muted hover:bg-sky hover:text-fg"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <X size={16} />
            </button>
            <h2 id={titleId} className={sent ? "font-display text-[28px] leading-none font-bold tracking-[-0.03em]" : "eyebrow text-brand"}>
              {sent ? "Thank You" : "Request a Quote"}
            </h2>
            {sent ? (
              <>
                <p className="mt-4 text-[15px] leading-6 font-medium">We’ve received your request.</p>
                <p className="mx-auto mt-2 max-w-[34ch] text-[14px] leading-6 text-muted">
                  Our team will review your details and get back to you shortly.
                </p>
                <Button type="button" className="mt-6" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </>
            ) : (
              <>
                <p className="mx-auto mt-3 max-w-[34ch] text-[14px] leading-6 text-muted">
                  Share a few details and the Galaxy Imaging team will get back to you.
                </p>
                <div className="mt-5 text-left">
                  <EnquiryForm key={session} intent="quote" tone="modal" onSent={() => setSent(true)} />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  );
}
