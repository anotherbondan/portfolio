"use client";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  animate,
  MotionConfig,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
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
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <AccentCursor />
    </MotionConfig>
  );
}

function AccentCursor() {
  const overlay = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ringX = useSpring(x, tactile);
  const ringY = useSpring(y, tactile);
  const scale = useMotionValue(1);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const root = document.documentElement;
    let tracking = false;
    let active = false;
    let expanded = false;
    let scaleAnimation: ReturnType<typeof animate> | undefined;

    const hide = () => {
      active = false;
      root.removeAttribute("data-cursor-active");
      overlay.current?.removeAttribute("data-active");
    };
    const reset = () => {
      tracking = false;
      hide();
    };
    const refresh = () => {
      if (!tracking || !media.matches) {
        hide();
        return;
      }

      const target = document.elementFromPoint(x.get(), y.get());
      // Keep native text selection, unavailable controls, and modal UI intact.
      const nativeTarget = target?.closest(
        'input, textarea, select, option, [contenteditable]:not([contenteditable="false"]), :disabled, [aria-disabled="true"], [aria-busy="true"], [inert]',
      );
      const modal = document.querySelector(
        'dialog[open], [role="dialog"][aria-modal="true"]:not([hidden]), [role="alertdialog"][aria-modal="true"]:not([hidden])',
      );
      if (!target || nativeTarget || modal) {
        hide();
        return;
      }

      const nextExpanded = Boolean(
        target.closest(
          'a[href], button, summary, [role="link"], [role="button"], [role="tab"], [aria-expanded]',
        ),
      );
      if (nextExpanded !== expanded) {
        expanded = nextExpanded;
        scaleAnimation?.stop();
        scaleAnimation = animate(scale, expanded ? 44 / 28 : 1, {
          duration: timing.feedback,
        });
      }
      if (!active) {
        // Re-entry starts at the pointer rather than springing from an old spot.
        ringX.jump(x.get());
        ringY.jump(y.get());
        overlay.current?.setAttribute("data-active", "");
        root.setAttribute("data-cursor-active", "");
        active = true;
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !media.matches) {
        reset();
        return;
      }
      tracking = true;
      x.set(event.clientX);
      y.set(event.clientY);
      refresh();
    };
    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) reset();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") reset();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        [
          "Tab",
          "Escape",
          "Enter",
          " ",
          "Home",
          "End",
          "PageUp",
          "PageDown",
        ].includes(event.key) ||
        event.key.startsWith("Arrow")
      ) {
        reset();
      }
    };
    const onVisibility = () => {
      if (document.hidden) reset();
    };
    // Re-evaluate stationary pointers when scrolling or controls change state.
    const observer = new MutationObserver(refresh);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: [
        "disabled",
        "aria-disabled",
        "aria-busy",
        "open",
        "aria-modal",
        "role",
        "hidden",
        "inert",
        "contenteditable",
        "href",
        "aria-expanded",
        "class",
      ],
    });
    document.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerout", onPointerOut);
    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("scroll", refresh, true);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", reset);
    window.addEventListener("resize", refresh);
    media.addEventListener("change", reset);

    return () => {
      reset();
      scaleAnimation?.stop();
      observer.disconnect();
      document.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("scroll", refresh, true);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", reset);
      window.removeEventListener("resize", refresh);
      media.removeEventListener("change", reset);
    };
  }, [x, y, ringX, ringY, scale]);

  return (
    <div
      ref={overlay}
      className="pointer-events-none invisible fixed inset-0 z-[200] overflow-clip [@media(hover:hover)_and_(pointer:fine)_and_(prefers-reduced-motion:no-preference)]:data-[active]:visible"
      aria-hidden="true"
    >
      <motion.div
        className="absolute -top-[3px] -left-[3px] size-1.5 rounded-full bg-accent"
        style={{ x, y }}
      />
      <motion.div
        className="absolute -top-3.5 -left-3.5 size-7 rounded-full border border-accent"
        style={{ x: ringX, y: ringY, scale }}
      />
    </div>
  );
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
  const visible = {
    y: 0,
    opacity: 1,
    ...(mask ? { clipPath: "inset(0 0 0% 0)" } : {}),
  };
  return (
    <motion.div
      className={cn(
        "focus-within:transform-none! focus-within:opacity-100! motion-reduce:transform-none! motion-reduce:opacity-100! motion-reduce:[clip-path:none]!",
        className,
      )}
      initial={
        reduced
          ? false
          : {
              y: hero ? 32 : 20,
              opacity: 0,
              ...(mask ? { clipPath: "inset(0 0 18% 0)" } : {}),
            }
      }
      animate={reduced ? visible : undefined}
      whileInView={visible}
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
