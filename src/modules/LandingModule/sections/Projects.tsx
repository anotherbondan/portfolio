"use client";
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
    <section id="project" className="section container">
      <SectionHeading
        number="01"
        title="Selected work."
        description="Ideas, engineered into experiences"
      />
      <div className="featured-gallery">
        {["matakota", "compfest-18", "fiorisce"].map((id, index) => (
          <Project
            key={id}
            data={projectsData.find((p) => p.id === id)!}
            index={index}
          />
        ))}
      </div>
      <div className="archive-heading">
        <h3>
          Project archive <span className="mono">/ 14</span>
        </h3>
        <p className="muted">
          A complete collection of my work and contributions.
        </p>
      </div>
      <div role="group" aria-label="Filter project archive" className="filters">
        {projectFilters.map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="eyebrow result-count" role="status" aria-live="polite">
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
    </section>
  );
}
