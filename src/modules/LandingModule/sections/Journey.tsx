"use client";
import { Section } from "@/components/ui/layout";
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
    <Section
      id="experience"
      className="block items-start gap-[6%] min-[768px]:grid min-[768px]:grid-cols-[4fr_7fr] min-[1024px]:gap-[8.33%]"
    >
      <div className="static mb-10 min-[768px]:sticky min-[768px]:top-[130px] min-[768px]:mb-0">
        <SectionHeading
          className="max-[768px]:mb-5"
          number="02"
          title="The journey."
          description="Experience & collaboration"
        />
        <p className="text-[13px] text-muted">
          A timeline of my professional experiences.
        </p>
      </div>
      <div
        ref={ref}
        className="relative ml-[5px] pl-7 min-[768px]:ml-0 min-[768px]:pl-[38px]"
      >
        <div className="absolute inset-y-0 left-0 w-px bg-border" aria-hidden>
          <motion.div
            className="absolute inset-0 origin-top bg-accent"
            style={{ scaleY: reduced ? 1 : scrollYProgress }}
          />
        </div>
        {journeyData.map((data, index) => (
          <Experience key={data.event + data.date} data={data} index={index} />
        ))}
      </div>
    </Section>
  );
}
