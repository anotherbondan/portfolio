"use client";
import { useState, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { timing, entranceEase } from "@/components/motion";
export default function Disclosure({
  id,
  summary,
  children,
  className = "",
}: {
  id: string;
  summary: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  return (
    <div className={"disclosure " + className} data-open={open}>
      <h3>
        <button
          className="disclosure-toggle"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(!open)}
        >
          {summary}
          <span className="disclosure-sign" aria-hidden>
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
        className="disclosure-panel"
      >
        {children}
      </motion.div>
    </div>
  );
}
