import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const IconButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, type = "button", ...props }, ref) => (
  <button
    ref={ref}
    type={type}
    className={cn(
      "flex min-h-11 w-11 items-center justify-center border border-border bg-transparent text-[22px] text-foreground hover:bg-surface max-[360px]:w-[42px]",
      className,
    )}
    {...props}
  />
));
IconButton.displayName = "IconButton";
