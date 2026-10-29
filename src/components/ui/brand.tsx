import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Brand({
  className,
  children,
  ...props
}: Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href="/#home"
      className={cn(
        "inline-flex min-h-11 items-center font-display text-[32px] leading-none font-semibold tracking-[-0.06em] min-[768px]:text-4xl",
        className,
      )}
      {...props}
    >
      {children ?? (
        <>
          ag<span className="text-accent">.</span>
        </>
      )}
    </Link>
  );
}
