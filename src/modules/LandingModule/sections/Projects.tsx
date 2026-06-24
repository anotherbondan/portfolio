"use client";

import Project from "../components/project";
import TechList from "../components/tech-list";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { projectsData, projectFilters } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData = projectsData.filter((data) =>
    activeFilter === "All" ? true : data.category === activeFilter,
  );

  return (
    <section
      id="project"
      className="relative flex min-h-screen flex-col items-center justify-center gap-14 px-4 pt-32 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 px-4 text-center"
      >
        <h1 className="font-playfair-display text-primary-600 [text-shadow:0_0_15px_theme('colors.primary.500/50')] dark:text-primary-300 text-5xl md:text-6xl">
          Featured Work
        </h1>
        <p className="font-inter text-center text-sm tracking-widest text-gray-600 uppercase dark:text-gray-400">
          A showcase of my recent works and contributions
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Tabs value={activeFilter} onValueChange={setActiveFilter}>
          <TabsList className="max-w-[90vw]">
            {projectFilters.map((filter) => (
              <TabsTrigger key={filter} value={filter}>
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      <motion.div
        layout
        className="relative grid w-full max-w-7xl grid-cols-1 gap-10"
      >
        <AnimatePresence>
          {filteredData.map((data) => (
            <motion.div
              layout
              key={`${data.title}-${data.date}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, scale: 0.9, height: 0, overflow: "hidden" }}
              transition={{ duration: 0.3 }}
              className="flex w-full"
            >
              <Project data={data}>
                <TechList data={data.tech} />
              </Project>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
