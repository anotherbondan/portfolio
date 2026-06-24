"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = HTMLMotionProps<"button"> & {
  className?: string;
  asChild?: boolean;
};

const MotionSlot = motion.create(Slot);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? MotionSlot : motion.button;

    return (
      <Comp
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "bg-card border-card-hover hover:border-primary-500/30 hover:bg-primary-900/10 border-1 shadow-md transition-colors",

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
