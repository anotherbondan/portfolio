import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function ActionIcon({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "transition-transform duration-[140ms] ease-linear group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5 group-focus-visible/action:translate-x-0.5 group-focus-visible/action:-translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}
