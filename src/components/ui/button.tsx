"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { tactile } from "@/components/motion";
type ButtonProps = HTMLMotionProps<"button"> & { asChild?: boolean };
const MotionSlot = motion.create(Slot);
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const reduced = useReducedMotion();
    const Comp = asChild ? MotionSlot : motion.button;
    return (
      <Comp
        ref={ref}
        whileTap={reduced ? undefined : { scale: 0.98 }}
        transition={tactile}
        className={cn("button", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";
export default Button;
