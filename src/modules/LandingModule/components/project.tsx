"use client";
import { ActionIcon } from "@/components/ui/action-icon";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { projectsData } from "@/data/projects";
import TechList from "./tech-list";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Disclosure from "@/components/disclosure";
import { Reveal, tactile, timing } from "@/components/motion";
type ProjectData = (typeof projectsData)[number];
function Actions({ data }: { data: ProjectData }) {
  return (
    <div className="mt-[22px] flex flex-wrap items-center gap-2 max-[768px]:gap-2.5">
      {data.projectUrl && (
        <Button asChild size="compact" className="group/action">
          <a href={data.projectUrl} target="_blank" rel="noopener noreferrer">
            View Project <ActionIcon>↗</ActionIcon>
          </a>
        </Button>
      )}
      {data.sourceCode && (
        <Button
          asChild
          variant="secondary"
          size="compact"
          className="group/action"
        >
          <a href={data.sourceCode} target="_blank" rel="noopener noreferrer">
            Source Code <ActionIcon>↗</ActionIcon>
          </a>
        </Button>
      )}
    </div>
  );
}
export default function Project({
  data,
  variant = "featured",
  index = 0,
}: {
  data: ProjectData;
  variant?: "featured" | "archive";
  index?: number;
}) {
  if (variant === "archive")
    return <ArchiveProject data={data} index={index} />;
  return <FeaturedProject data={data} index={index} />;
}

function ArchiveProject({ data, index }: { data: ProjectData; index: number }) {
  const open = useRef(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const trailingX = useSpring(x, tactile);
  const trailingY = useSpring(y, tactile);

  const showPreview = (event: PointerEvent<HTMLDivElement>) => {
    if (
      open.current ||
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      setPreviewVisible(false);
      return;
    }

    const width = Math.min(320, window.innerWidth - 32);
    const height = width / 1.8;
    const gap = 24;
    const left =
      event.clientX + gap + width > window.innerWidth - 16
        ? event.clientX - width - gap
        : event.clientX + gap;
    const top =
      event.clientY + gap + height > window.innerHeight - 16
        ? event.clientY - height - gap
        : event.clientY + gap;

    x.set(Math.max(16, Math.min(left, window.innerWidth - width - 16)));
    y.set(Math.max(16, Math.min(top, window.innerHeight - height - 16)));
    if (!previewVisible) {
      trailingX.jump(x.get());
      trailingY.jump(y.get());
      setPreviewVisible(true);
    }
  };

  useEffect(() => {
    if (!previewVisible) return;
    const hide = () => setPreviewVisible(false);
    window.addEventListener("scroll", hide, true);
    window.addEventListener("resize", hide);
    window.addEventListener("blur", hide);
    document.addEventListener("keydown", hide);
    return () => {
      window.removeEventListener("scroll", hide, true);
      window.removeEventListener("resize", hide);
      window.removeEventListener("blur", hide);
      document.removeEventListener("keydown", hide);
    };
  }, [previewVisible]);

  const image = (
    <div className="relative aspect-[1.8] overflow-hidden bg-surface">
      <Image
        src={data.cover}
        alt={data.title + " website screenshot"}
        fill
        sizes="(max-width: 767px) 90vw, 600px"
        className="object-cover object-top"
      />
    </div>
  );
  return (
    <>
      <Disclosure
        id={"archive-" + data.id}
        className="last:border-b last:border-border"
        onOpenChange={(nextOpen) => {
          open.current = nextOpen;
          setPreviewVisible(false);
        }}
        onPointerEnter={showPreview}
        onPointerMove={showPreview}
        onPointerLeave={() => setPreviewVisible(false)}
        onPointerCancel={() => setPreviewVisible(false)}
        summary={
          <>
            <span className="w-[18px] font-mono text-[9px] leading-[1.6] text-muted min-[768px]:w-7 min-[768px]:text-[11px]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-[20px] font-normal tracking-[-0.02em] group-hover/disclosure:text-accent group-focus-visible/disclosure:text-accent min-[768px]:text-[25px]">
              {data.title}
            </span>
            <span className="hidden w-30 font-mono text-[10px] leading-[1.6] text-muted min-[1024px]:block">
              {data.category}
            </span>
            <span className="w-[66px] font-mono text-[9px] leading-[1.6] text-muted max-[360px]:hidden min-[768px]:w-[90px] min-[768px]:text-[10px]">
              {data.date}
            </span>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-5 pt-2 pb-8 min-[768px]:grid-cols-2 min-[768px]:gap-8 min-[768px]:pl-13">
          {image}
          <div>
            <p className="text-[13px] text-muted">{data.desc}</p>
            <TechList data={data.tech} />
            <Actions data={data} />
          </div>
        </div>
      </Disclosure>
      {previewVisible &&
        createPortal(
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed top-0 left-0 z-50 hidden aspect-[1.8] w-[min(320px,calc(100vw-32px))] overflow-hidden border border-border bg-surface shadow-xl [@media(hover:hover)_and_(pointer:fine)]:block"
            style={{ x: reduced ? x : trailingX, y: reduced ? y : trailingY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduced ? 0 : timing.feedback }}
          >
            <Image
              src={data.cover}
              alt=""
              fill
              sizes="320px"
              className="object-cover object-top"
            />
          </motion.div>,
          document.body,
        )}
    </>
  );
}

function FeaturedProject({
  data,
  index,
}: {
  data: ProjectData;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);
  const reduced = useReducedMotion();
  const image = (
    <div className="relative aspect-[1.8] overflow-hidden bg-surface">
      <motion.div
        className="absolute inset-0 motion-reduce:transform-none! max-[768px]:transform-none!"
        style={{ scale: reduced ? 1 : scale }}
      >
        <Image
          src={data.cover}
          alt={data.title + " website screenshot"}
          fill
          sizes="(max-width: 767px) 90vw, (max-width: 1400px) 55vw, 760px"
          className="object-cover object-top"
        />
      </motion.div>
      <span
        className="absolute right-4 bottom-4 translate-y-2 border border-border bg-background px-3.5 py-2.5 font-mono text-[11px] leading-[1.6] tracking-[0.1em] text-foreground uppercase opacity-0 transition-[opacity,translate] duration-[280ms] ease-linear group-focus-within/project:translate-y-0 group-focus-within/project:opacity-100 group-hover/project:translate-y-0 group-hover/project:opacity-100 motion-reduce:translate-none! max-[768px]:hidden [@media(pointer:coarse)]:hidden"
        aria-hidden
      >
        Explore {data.title} ↗
      </span>
    </div>
  );
  return (
    <article
      ref={ref}
      className="group/project flex flex-col items-stretch gap-6 min-[768px]:grid min-[768px]:grid-cols-12 min-[768px]:items-center min-[1024px]:gap-9"
    >
      <Reveal
        className={cn(
          "overflow-hidden min-[768px]:col-start-1 min-[768px]:col-end-8",
          index % 2 !== 0 &&
            "min-[768px]:col-start-6 min-[768px]:col-end-13 min-[768px]:row-start-1",
        )}
        mask
      >
        <Card>{image}</Card>
      </Reveal>
      <Reveal
        className={cn(
          "min-[768px]:col-start-8 min-[768px]:col-end-13",
          index % 2 !== 0 &&
            "min-[768px]:col-start-1 min-[768px]:col-end-6 min-[768px]:row-start-1",
        )}
        index={1}
      >
        <p className="font-mono text-[11px] leading-[1.6] tracking-[0.1em] text-accent uppercase min-[768px]:max-[1024px]:text-[9px]">
          0{index + 1} / {data.category} / {data.date}
        </p>
        <h3 className="my-3.5 text-[36px] leading-[1.1] font-medium tracking-[-0.04em] min-[768px]:my-[18px] min-[768px]:text-[32px] min-[1024px]:text-[clamp(2rem,3vw,3.4rem)]">
          {data.title}
        </h3>
        <p className="text-[13px] leading-[1.85] text-muted">{data.desc}</p>
        <TechList data={data.tech} />
        <Actions data={data} />
      </Reveal>
    </article>
  );
}
