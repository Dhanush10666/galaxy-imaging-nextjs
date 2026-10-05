import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: {
    default: "Galaxy Imaging Technologies",
    template: "%s",
  },
  description:
    "Galaxy Imaging Technologies brings together office automation, document management, printing, scanning, display and workplace technology solutions - backed by experienced service and support.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
