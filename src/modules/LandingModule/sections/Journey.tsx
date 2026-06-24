"use client";

import Experience from "../components/experience";
import TagList from "../components/tag";
import { motion } from "framer-motion";

import { journeyData } from "@/data/journey";

export default function Journey() {
  return (
    <section
      id="experience"
      className="relative flex min-h-screen w-full flex-col items-center gap-24 pt-32 px-4 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="z-10 flex flex-col items-center gap-4 text-center"
      >
        <h1 className="font-playfair-display text-center text-5xl text-primary-600 [text-shadow:0_0_15px_theme('colors.primary.500/50')] md:text-6xl dark:text-primary-300">
          Professional Journey
        </h1>
        <p className="font-inter text-center text-sm tracking-widest text-gray-600 uppercase dark:text-gray-400">
          A timeline of my professional experiences
        </p>
      </motion.div>
      <div className="relative flex w-full flex-col items-center justify-center gap-10">
        <div className="absolute left-8 z-0 h-full w-1 rounded-full bg-primary-400 opacity-50 shadow-[0_0_5px_theme('colors.primary.500/50')] lg:left-1/2 lg:-translate-x-1/2 lg:opacity-100"></div>
        {journeyData.map((data, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
            className={`flex w-full justify-start ${idx % 2 == 0 ? "lg:justify-start" : "lg:justify-end"}`}
          >
            <Experience key={idx} data={data} index={idx}>
              <TagList descList={data.tags} />
            </Experience>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
