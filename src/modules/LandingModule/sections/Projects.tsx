"use client";

import Project from "../components/project";
import TechList from "../components/tech-list";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const datas = [
  {
    cover: "/compfest-web.png",
    title: "COMPFEST 18",
    date: "2026",
    desc: "The official event platform for COMPFEST 18, Indonesia's largest student-run IT event. Designed to handle high traffic and deliver a seamless user experience, the website features a modern, responsive interface providing attendees with real-time event schedules and registration portals.",
    tech: [
      "/fe/nextjs.svg",
      "/fe/tailwind-css.svg",
      "/fe/vite.svg",
      "/fe/react-router.svg",
      "/be/nestjs.svg",
      "/be/drizzle.svg",
      "/be/postgresql.svg",
    ],
    sourceCode: "",
    projectUrl: "",
    category: "Organizational",
  },
  {
    cover: "/bem.jpg",
    title: "BEM FASILKOM UI",
    date: "2026",
    desc: "A centralized, dynamic digital hub for BEM Fasilkom UI. This platform serves as the primary gateway for students to access organizational news, academic resources, and event updates, built with a focus on performance and accessibility.",
    tech: ["/fe/nextjs.svg", "/fe/tailwind-css.svg"],
    sourceCode: "",
    projectUrl: "",
    category: "Organizational",
  },
  {
    cover: "/portfolio-web.png",
    title: "Gas.in",
    date: "2026",
    desc: "A platform-based programming course project focusing on delivering scalable and interactive web learning experiences.",
    tech: [
      "/fe/tailwind-css.svg",
      "/fe/flutter.svg",
      "/be/django.svg",
      "/be/postgresql.svg",
    ],
    sourceCode: "",
    projectUrl: "",
    category: "Academic",
  },
  {
    cover: "/portfolio-web.png",
    title: "Tiktaktuk",
    date: "2026",
    desc: "A database course project focusing on designing and optimizing complex database architectures for a dynamic application.",
    tech: [
      "/fe/react-router.svg",
      "/fe/vite.svg",
      "/fe/tailwind-css.svg",
      "/fe/shadcn-ui.svg",
      "/fe/tanstack.svg",
      "/fe/framer.svg",
      "/be/hono.svg",
      "/be/postgresql.svg",
      "/be/better-auth.svg",
      "/devtools/neon.svg",
    ],
    sourceCode: "",
    projectUrl: "",
    category: "Academic",
  },
  {
    cover: "/portfolio-web.png",
    title: "Lotus",
    date: "2026",
    desc: "A Human-Computer Interaction course project emphasizing user-centric design, accessibility, and intuitive interfaces.",
    tech: ["/devtools/figma.svg"],
    sourceCode: "",
    projectUrl: "",
    category: "Academic",
  },
  {
    cover: "/portfolio-web.png",
    title: "Cyber-Team",
    date: "2026",
    desc: "An Introduction to Software Security course project exploring vulnerability assessments, secure coding practices, and defensive software architectures.",
    tech: [
      "/fe/nextjs.svg",
      "/fe/tailwind-css.svg",
      "/be/prisma.svg",
      "/be/postgresql.svg",
      "/be/better-auth.svg",
      "/devtools/vercel.svg",
    ],
    sourceCode: "",
    projectUrl: "",
    category: "Academic",
  },
  {
    cover: "/portfolio-web.png",
    title: "Rantai Skena",
    date: "2025",
    desc: "An innovative digital initiative developed for Budayago 2025, aimed at connecting creative communities and amplifying local cultural movements. The platform provides a vibrant, interactive space for artists and enthusiasts to collaborate.",
    tech: [
      "/fe/nextjs.svg",
      "/fe/tailwind-css.svg",
      "/fe/framer.svg",
      "/fe/shadcn-ui.svg",
      "/fe/tanstack.svg",
      "/be/hono.svg",
      "/be/drizzle.svg",
      "/be/postgresql.svg",
      "/be/better-auth.svg",
      "/devtools/neon.svg",
      "/devtools/open-ai.svg",
    ],
    sourceCode: "",
    projectUrl: "",
    category: "Competition",
  },
  {
    cover: "/portfolio-web.png",
    title: "Portfolio",
    date: "Sep 2025",
    desc: "A personal web portfolio built to showcase my projects, tools, and experiences in software engineering.",
    tech: [
      "/fe/nextjs.svg",
      "/fe/tailwind-css.svg",
      "/fe/framer.svg",
      "/devtools/vercel.svg",
    ],
    sourceCode: "https://github.com/anotherbondan/portfolio",
    projectUrl: "https://ananda-gautama.vercel.app/",
    category: "Personal",
  },
  {
    cover: "/ijtihad-web.png",
    title: "Ijtihad",
    date: "Aug 2025",
    desc: "AI-powered platform for halal product validation, contract analysis, and a fatwa chatbot, developed for the Gemastik 2025 Software Development Competition.",
    tech: [
      "/fe/nextjs.svg",
      "/fe/tailwind-css.svg",
      "/be/fast-api.svg",
      "/be/redis.svg",
      "/be/postgresql.svg",
      "/devtools/gemini-ai.svg",
      "/devtools/vercel.svg",
      "/devtools/railway.svg",
      "/devtools/firebase.svg",
    ],
    sourceCode: "https://github.com/anotherbondan/ijtihad-frontend",
    projectUrl: "https://ijtihad.vercel.app/",
    category: "Competition",
  },
  {
    cover: "/ddp0-web.png",
    title: "DDP-0 2025",
    date: "July 2025",
    desc: "DDP-0 is a preparatory program by COSMIC 2024 designed to introduce fundamental programming concepts to incoming CSUI 2025 students.",
    tech: [
      "/fe/nextjs.svg",
      "/fe/tailwind-css.svg",
      "/fe/shadcn-ui.svg",
      "/fe/framer.svg",
      "/be/prisma.svg",
      "/be/postgresql.svg",
      "/be/better-auth.svg",
      "/devtools/vercel.svg",
    ],
    sourceCode: "https://github.com/DDP0",
    projectUrl: "https://ddp0.csui.dev/",
    category: "Academic",
  },
  {
    cover: "/compfest-web.png",
    title: "COMPFEST 17",
    date: "May 2025",
    desc: "Official event website of COMPFEST, Indonesia's largest IT event by Fasilkom UI students.",
    tech: [
      "/fe/nextjs.svg",
      "/fe/tailwind-css.svg",
      "/fe/vite.svg",
      "/fe/react-router.svg",
      "/be/nestjs.svg",
      "/be/prisma.svg",
      "/be/postgresql.svg",
    ],
    sourceCode: "https://github.com/COMPFEST",
    projectUrl: "https://compfest.id/",
    category: "Organizational",
  },
];

const filters = [
  "All",
  "Personal",
  "Organizational",
  "Academic",
  "Competition",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData = datas.filter((data) =>
    activeFilter === "All" ? true : data.category === activeFilter,
  );

  return (
    <section
      id="project"
      className="relative flex min-h-screen flex-col items-center justify-center gap-14 pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 px-4 text-center"
      >
        <h1 className="font-playfair-display text-5xl text-purple-300 [text-shadow:0_0_15px_theme('colors.purple.500/50')] md:text-7xl">
          Projects
        </h1>
        <p className="font-inter text-center text-sm tracking-widest text-gray-400 uppercase">
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
            {filters.map((filter) => (
              <TabsTrigger key={filter} value={filter}>
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      <motion.div layout className="relative mt-4 grid w-full max-w-7xl grid-cols-1 gap-10 px-6 lg:px-8">
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
