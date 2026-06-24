"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  // Clamp to prevent negative scroll values (rubber banding)
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative top-0 z-[100] h-1 overflow-hidden">
      <motion.div
        className="fixed top-0 h-1 w-full origin-center bg-primary-500"
        style={{ scaleX }}
      />
    </div>
  );
}
