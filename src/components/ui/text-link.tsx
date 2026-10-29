import { AnchorHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  asChild?: boolean;
};
export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex min-h-11 items-center gap-3 text-[13px] underline-offset-[6px] hover:text-accent hover:underline focus-visible:text-accent focus-visible:underline",
          className,
        )}
        {...props}
      />
    );
  },
);
TextLink.displayName = "TextLink";
