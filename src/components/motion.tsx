"use client";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
export const timing = {
  feedback: 0.14,
  state: 0.28,
  entrance: 0.6,
  hero: 0.9,
  stagger: 0.07,
};
export const entranceEase = [0.22, 1, 0.36, 1] as const;
export const tactile = { type: "spring", stiffness: 220, damping: 26 } as const;
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
export function Reveal({
  children,
  className = "",
  index = 0,
  hero = false,
  mask = false,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  hero?: boolean;
  mask?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        reduced
          ? {}
          : {
              y: [hero ? 32 : 20, 0],
              opacity: [0.4, 1],
              ...(mask
                ? { clipPath: ["inset(0 0 18% 0)", "inset(0 0 0% 0)"] }
                : {}),
            }
      }
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduced ? 0 : hero ? timing.hero : timing.entrance,
        delay: reduced ? 0 : Math.min(index * timing.stagger, 0.28),
        ease: entranceEase,
      }}
    >
      {children}
    </motion.div>
  );
}
export function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">
        {number} / {description}
      </p>
      <h2>{title}</h2>
    </Reveal>
  );
}
