"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  // Clamp to prevent negative scroll values (rubber banding)
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative z-[100] top-0 h-1 overflow-hidden">
      <motion.div
        className="fixed top-0 w-full h-1 origin-center bg-purple-500"
        style={{ scaleX }}
      />
    </div>
  );
}
