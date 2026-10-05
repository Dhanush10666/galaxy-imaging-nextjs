import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center no-underline",
        onDark && "rounded-button bg-white px-3 py-2",
      )}
      aria-label="Galaxy Imaging Technologies home"
    >
      <img
        src="/brand/galaxy-logo.png"
        alt="Galaxy Imaging Technologies"
        width={991}
        height={143}
        className="h-8 w-auto max-w-[58vw] sm:h-[42px] sm:max-w-none"
      />
    </Link>
  );
}
