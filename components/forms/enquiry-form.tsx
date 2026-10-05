"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { interestOptions } from "@/lib/content";

export function EnquiryForm({
  intent = "enquiry",
  tone = "default",
  onSent,
}: {
  intent?: "enquiry" | "quote" | "service";
  tone?: "default" | "inverse" | "modal";
  onSent?: () => void;
}) {
  const [sent, setSent] = useState(false);
  const inverse = tone === "inverse";
  const field = inverse ? "field-inverse" : "field";

  if (sent && tone === "modal") return null;

  if (tone === "modal") {
    return (
      <form
        className="grid gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          onSent?.();
        }}
      >
        <input required name="name" aria-label="Full name" placeholder="Full Name*" className="field" suppressHydrationWarning />
        <input required name="email" type="email" aria-label="Business email" placeholder="Business Email*" className="field" suppressHydrationWarning />
        <input required name="mobile" type="tel" aria-label="Phone number" placeholder="Phone Number*" className="field" suppressHydrationWarning />
        <select required name="interest" aria-label="Requirement" className="field" defaultValue="" suppressHydrationWarning>
          <option value="" disabled>
            Select Your Requirement
          </option>
          {interestOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <Button type="submit" className="mt-1 w-full">
          Get a Quote <ArrowRight size={16} />
        </Button>
      </form>
    );
  }

  if (sent) {
    return (
      <div className={inverse ? "rounded-card bg-white p-6 text-fg" : "rounded-card border border-border bg-elevated p-8"}>
        <p className="eyebrow text-brand">Received</p>
        <h3 className="mt-3 font-display text-3xl">Thank you.</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-muted">
          Your {intent} has been noted. Our team in Bengaluru will get back to you with the
          right product, solution or support.
        </p>
      </div>
    );
  }

  if (inverse) {
    return (
      <form
        className="grid gap-2.5 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <input required name="name" aria-label="Full name" placeholder="Full Name*" className={field} suppressHydrationWarning />
        <input required name="email" type="email" aria-label="Business email" placeholder="Business Email*" className={field} suppressHydrationWarning />
        <input required name="mobile" type="tel" aria-label="Phone number" placeholder="Phone Number*" className={field} suppressHydrationWarning />
        <select required name="interest" aria-label="Requirement" className={field} defaultValue="" suppressHydrationWarning>
          <option value="" disabled>
            Select Your Requirement
          </option>
          {interestOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <Button type="submit" className="h-11 w-full rounded-[10px] bg-[#2f7fe8] hover:bg-[#256ed0] sm:col-span-2">
          Get a Quote <ArrowRight size={16} />
        </Button>
      </form>
    );
  }

  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="grid gap-1.5 text-xs font-medium">
        Full Name *
        <input required name="name" className={field} />
      </label>
      <label className="grid gap-1.5 text-xs font-medium">
        Company Name
        <input name="company" className={field} />
      </label>
      <label className="grid gap-1.5 text-xs font-medium">
        Mobile Number *
        <input required name="mobile" type="tel" className={field} />
      </label>
      <label className="grid gap-1.5 text-xs font-medium">
        Email Address *
        <input required name="email" type="email" className={field} />
      </label>
      <label className="grid gap-1.5 text-xs font-medium">
        City
        <input name="city" className={field} />
      </label>
      <label className="grid gap-1.5 text-xs font-medium">
        I'm Interested In *
        <select required name="interest" className={field} defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {interestOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-xs font-medium md:col-span-2">
        Your Requirement
        <textarea name="requirement" rows={5} className={field} />
      </label>
      <div className="md:col-span-2">
        <Button type="submit" size="lg">
          {intent === "quote" ? "Request a Quote" : intent === "service" ? "Request Service" : "Submit Enquiry"}
          <ArrowRight size={16} />
        </Button>
      </div>
    </form>
  );
}
