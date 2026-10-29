import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = HTMLAttributes<HTMLElement> & {
  as?: "p" | "span" | "figcaption";
};
export function Eyebrow({
  as: Component = "p",
  className,
  ...props
}: EyebrowProps) {
  return (
    <Component
      className={cn(
        "font-mono text-[11px] leading-[1.6] tracking-[0.1em] uppercase",
        className,
      )}
      {...props}
    />
  );
}
