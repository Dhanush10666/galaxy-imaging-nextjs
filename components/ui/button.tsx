import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button text-sm font-semibold tracking-[0.01em] shadow-[0_8px_20px_-12px_rgb(21_76_143_/_0.9)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-brand text-white shadow-none hover:bg-navy",
        secondary:
          "border border-white/80 bg-transparent text-white shadow-none hover:bg-white/10",
        ghost: "bg-transparent text-navy shadow-none hover:bg-navy/5",
        outline:
          "border border-navy/15 bg-white text-navy shadow-none hover:border-brand hover:text-brand",
        invert: "bg-white text-navy shadow-none hover:bg-sky",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-[15px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
