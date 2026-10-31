"use client";
import { Section } from "@/components/ui/layout";
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
            className="min-h-11 border border-border bg-transparent px-3 py-2.5 text-[10px] text-muted transition-[background,color,border-color] duration-[140ms] ease-linear hover:border-accent hover:text-foreground aria-pressed:border-foreground aria-pressed:bg-foreground aria-pressed:text-background min-[768px]:px-4 min-[768px]:text-[12px]"
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
