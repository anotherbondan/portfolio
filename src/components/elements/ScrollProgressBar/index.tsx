"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function ScrollProgressBar() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  // Clamp to prevent negative scroll values (rubber banding)
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reduced) return null;
  return (
    <div className="relative top-0 z-[100] h-1 overflow-hidden">
      <motion.div
        className="fixed top-0 h-1 w-full origin-left bg-primary-500"
        style={{ scaleX }}
      />
    </div>
  );
}
