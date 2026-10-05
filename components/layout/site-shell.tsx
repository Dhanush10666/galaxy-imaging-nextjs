import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/layout/theme";
import { QuoteModalProvider } from "@/components/forms/quote-modal";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QuoteModalProvider>
        <div className="flex min-h-dvh flex-col bg-white text-fg">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </QuoteModalProvider>
    </ThemeProvider>
  );
}