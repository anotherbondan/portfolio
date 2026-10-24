"use client";
import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { journeyData } from "@/data/journey";
import Experience from "../components/experience";
import { SectionHeading } from "@/components/motion";
export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const reduced = useReducedMotion();
  return (
    <section id="experience" className="section journey-grid container">
      <div className="sticky-intro">
        <SectionHeading
          number="02"
          title="The journey."
          description="Experience & collaboration"
        />
        <p className="muted">A timeline of my professional experiences.</p>
      </div>
      <div ref={ref} className="chronology">
        <div className="spine" aria-hidden>
          <motion.div style={{ scaleY: reduced ? 1 : scrollYProgress }} />
        </div>
        {journeyData.map((data, index) => (
          <Experience key={data.event + data.date} data={data} index={index} />
        ))}
      </div>
    </section>
  );
}
