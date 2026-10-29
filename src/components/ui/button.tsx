"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { tactile } from "@/components/motion";

type ButtonProps = HTMLMotionProps<"button"> & {
  asChild?: boolean;
  variant?: "primary" | "secondary";
  size?: "default" | "compact";
};
const MotionSlot = motion.create(Slot);
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      asChild = false,
      variant = "primary",
      size = "default",
      ...props
    },
    ref,
  ) => {
    const reduced = useReducedMotion();
    const Comp = asChild ? MotionSlot : motion.button;
    return (
      <Comp
        ref={ref}
        whileTap={reduced ? undefined : { scale: 0.98 }}
        transition={tactile}
        className={cn(
          "inline-flex items-center justify-center border font-semibold transition-[background,border-color] duration-[140ms] ease-linear",
          size === "default"
            ? "min-h-12 gap-7 px-[22px] py-3 text-[13px]"
            : "min-h-11 gap-4 px-3.5 py-2.5 text-[11px] max-[768px]:px-4 max-[768px]:py-3 min-[768px]:max-[1024px]:gap-2",
          variant === "primary"
            ? "border-accent-fill bg-accent-fill text-[#faf9f6] hover:border-primary-900 hover:bg-primary-900"
            : "border-border bg-transparent text-foreground hover:border-accent hover:bg-surface",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";
export default Button;
