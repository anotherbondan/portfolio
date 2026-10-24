"use client";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { projectsData } from "@/data/projects";
import TechList from "./tech-list";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Disclosure from "@/components/disclosure";
import { Reveal } from "@/components/motion";
type ProjectData = (typeof projectsData)[number];
function Actions({ data }: { data: ProjectData }) {
  return (
    <div className="actions project-actions">
      {data.projectUrl && (
        <Button asChild>
          <a href={data.projectUrl} target="_blank" rel="noopener noreferrer">
            View Project <span aria-hidden>↗</span>
          </a>
        </Button>
      )}
      {data.sourceCode && (
        <Button asChild className="secondary">
          <a href={data.sourceCode} target="_blank" rel="noopener noreferrer">
            Source Code <span aria-hidden>↗</span>
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);
  const reduced = useReducedMotion();
  const image = (
    <div className="project-media">
      <motion.div
        className="project-image"
        style={{ scale: reduced ? 1 : scale }}
      >
        <Image
          src={data.cover}
          alt={data.title + " website screenshot"}
          fill
          sizes={
            variant === "featured"
              ? "(max-width: 767px) 90vw, (max-width: 1400px) 55vw, 760px"
              : "(max-width: 767px) 90vw, 600px"
          }
          className="object-cover"
        />
      </motion.div>
      <span className="media-caption eyebrow" aria-hidden>
        Explore {data.title} ↗
      </span>
    </div>
  );
  if (variant === "archive")
    return (
      <Disclosure
        id={"archive-" + data.id}
        className="archive-project"
        summary={
          <>
            <span className="archive-number mono">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="archive-title">{data.title}</span>
            <span className="archive-category mono">{data.category}</span>
            <span className="archive-date mono">{data.date}</span>
          </>
        }
      >
        <div className="archive-content">
          {image}
          <div>
            <p className="muted">{data.desc}</p>
            <TechList data={data.tech} />
            <Actions data={data} />
          </div>
        </div>
      </Disclosure>
    );
  return (
    <article
      ref={ref}
      className={"featured-project " + (index % 2 ? "reverse" : "")}
    >
      <Reveal className="featured-visual" mask>
        <Card>{image}</Card>
      </Reveal>
      <Reveal className="featured-copy" index={1}>
        <p className="eyebrow accent">
          0{index + 1} / {data.category} / {data.date}
        </p>
        <h3>{data.title}</h3>
        <p className="muted">{data.desc}</p>
        <TechList data={data.tech} />
        <Actions data={data} />
      </Reveal>
    </article>
  );
}
