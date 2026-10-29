"use client";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";
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
  className,
  titleClassName,
}: {
  number: string;
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <Reveal className={cn("mb-8 min-[768px]:mb-14", className)}>
      <Eyebrow className="mb-[1.3rem] text-[9px] leading-[1.6] text-muted min-[768px]:text-[11px]">
        {number} / {description}
      </Eyebrow>
      <h2
        className={cn(
          "text-[clamp(2.5rem,9vw,4rem)] leading-[1.06] font-medium tracking-[-0.045em] min-[768px]:text-[clamp(2.8rem,5vw,5rem)]",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </Reveal>
  );
}
