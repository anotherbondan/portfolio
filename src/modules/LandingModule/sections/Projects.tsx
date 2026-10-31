"use client";
import { Section } from "@/components/ui/layout";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projectsData, projectFilters } from "@/data/projects";
import Project from "../components/project";
import { SectionHeading, timing } from "@/components/motion";
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const reduced = useReducedMotion();
  const filtered = projectsData.filter(
    (p) => filter === "All" || p.category === filter,
  );
  return (
    <Section id="project">
      <SectionHeading
        number="01"
        title="Selected work."
        description="Ideas, engineered into experiences"
      />
      <div className="-m-2 grid gap-14 overflow-clip p-2 min-[768px]:gap-24">
        {["matakota", "compfest-18", "fiorisce"].map((id, index) => (
          <Project
            key={id}
            data={projectsData.find((p) => p.id === id)!}
            index={index}
          />
        ))}
      </div>
      <div className="mt-16 block gap-6 border-t border-border pt-[30px] min-[768px]:mt-25 min-[768px]:flex min-[768px]:items-baseline min-[768px]:justify-between">
        <h3 className="text-[28px] font-medium">
          Project archive{" "}
          <span className="font-mono text-[13px] text-muted">/ 14</span>
        </h3>
        <p className="mt-3 text-[12px] text-muted min-[768px]:mt-0">
          A complete collection of my work and contributions.
        </p>
      </div>
      <div
        role="group"
        aria-label="Filter project archive"
        className="mt-7 mb-5 flex flex-wrap gap-1.5 min-[768px]:gap-2"
      >
        {projectFilters.map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            className={cn(
              "relative isolate min-h-11 overflow-hidden border border-border bg-transparent px-3 py-2.5 text-[10px] text-muted transition-[background,color,border-color] duration-[140ms] ease-linear hover:border-accent hover:text-foreground min-[768px]:px-4 min-[768px]:text-[12px]",
              "aria-pressed:bg-surface aria-pressed:bg-[linear-gradient(135deg,var(--surface)_0%,color-mix(in_srgb,var(--foreground)_3%,var(--surface))_25%,color-mix(in_srgb,var(--foreground)_7%,var(--surface))_50%,color-mix(in_srgb,var(--foreground)_3%,var(--surface))_75%,var(--surface)_100%)] aria-pressed:text-foreground aria-pressed:shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]",
              "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(135deg,transparent_10%,rgb(255_255_255/0.03)_30%,rgb(255_255_255/0.14)_50%,rgb(255_255_255/0.03)_70%,transparent_90%)] before:opacity-0 before:transition-opacity before:duration-700 before:ease-in-out motion-reduce:before:transition-none",
              "aria-pressed:before:opacity-25 aria-pressed:hover:before:opacity-45 dark:aria-pressed:before:opacity-10 dark:aria-pressed:hover:before:opacity-25",
            )}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p
        className="pt-1.5 pb-[18px] font-mono text-[10px] tracking-[0.1em] text-muted uppercase"
        role="status"
        aria-live="polite"
      >
        {filtered.length} projects / {filter}
      </p>
      <motion.div
        key={filter}
        initial={false}
        animate={reduced ? {} : { opacity: [0.35, 1] }}
        transition={{ duration: reduced ? 0 : timing.state }}
      >
        {filtered.map((p, index) => (
          <Project key={p.id} data={p} variant="archive" index={index} />
        ))}
      </motion.div>
    </Section>
  );
}
