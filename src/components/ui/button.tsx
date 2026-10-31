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
          "relative isolate inline-flex items-center justify-center overflow-hidden border font-semibold transition-[background,border-color] duration-[140ms] ease-linear",
          "bg-[linear-gradient(135deg,var(--button-metal-edge,var(--button-metal-base))_0%,color-mix(in_srgb,var(--button-metal-highlight)_var(--button-metal-soft,3%),var(--button-metal-base))_25%,color-mix(in_srgb,var(--button-metal-highlight)_var(--button-metal-peak,7%),var(--button-metal-base))_50%,color-mix(in_srgb,var(--button-metal-highlight)_var(--button-metal-soft,3%),var(--button-metal-base))_75%,var(--button-metal-edge,var(--button-metal-base))_100%)]",
          "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(135deg,transparent_10%,rgb(255_255_255/0.03)_30%,rgb(255_255_255/0.14)_50%,rgb(255_255_255/0.03)_70%,transparent_90%)] before:opacity-25 before:transition-opacity before:duration-700 before:ease-in-out hover:before:opacity-45 motion-reduce:before:transition-none dark:before:opacity-10 dark:hover:before:opacity-25",
          size === "default"
            ? "min-h-12 gap-7 px-[22px] py-3 text-[13px]"
            : "min-h-11 gap-4 px-3.5 py-2.5 text-[11px] max-[768px]:px-4 max-[768px]:py-3 min-[768px]:max-[1024px]:gap-2",
          variant === "primary"
            ? "border-accent-fill bg-accent-fill text-[#faf9f6] [--button-metal-base:var(--accent-fill)] [--button-metal-edge:var(--primary-900)] [--button-metal-highlight:var(--primary-100)] [--button-metal-peak:10%] [--button-metal-soft:5%] hover:border-primary-900 hover:bg-primary-900 hover:[--button-metal-base:var(--primary-900)] dark:before:opacity-25 dark:hover:before:opacity-45"
            : "border-border bg-surface text-foreground [--button-metal-base:var(--surface)] [--button-metal-highlight:var(--accent)] hover:border-accent",
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
