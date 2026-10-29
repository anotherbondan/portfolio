"use client";
import { useState, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { timing, entranceEase } from "@/components/motion";
import { cn } from "@/lib/utils";
export default function Disclosure({
  id,
  summary,
  children,
  className,
  variant = "archive",
}: {
  id: string;
  summary: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: "archive" | "experience";
}) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  return (
    <div
      className={cn(
        variant === "archive" && "border-t border-border",
        className,
      )}
      data-open={open}
    >
      <h3>
        <button
          className={cn(
            "group/disclosure flex w-full items-center gap-3 border-0 bg-transparent text-left text-inherit min-[768px]:gap-6",
            variant === "archive"
              ? "min-h-18 py-5 min-[768px]:min-h-19"
              : "min-h-11 p-0",
          )}
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(!open)}
        >
          {summary}
          <span
            className={cn(
              "ml-auto font-mono font-normal",
              variant === "archive" ? "text-[24px]" : "text-[18px]",
            )}
            aria-hidden
          >
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>
      <motion.div
        id={id}
        inert={!open}
        aria-hidden={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{
          duration: reduced ? 0 : timing.state,
          ease: entranceEase,
        }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
}
