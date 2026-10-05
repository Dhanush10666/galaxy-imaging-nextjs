import { cn } from "@/lib/utils";

/** Flowing section edge. `color` is the fill of the shape (usually the next section). */
export function SectionWave({
  className,
  color = "var(--color-paper)",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 96"
      preserveAspectRatio="none"
      aria-hidden
      className={cn(
        "pointer-events-none block h-12 w-full md:h-[72px]",
        flip && "-scale-y-100",
        className,
      )}
    >
      <path
        fill={color}
        d="M0 58C160 18 280 8 460 36C640 64 760 92 960 70C1140 50 1280 16 1440 40V96H0Z"
      />
    </svg>
  );
}
