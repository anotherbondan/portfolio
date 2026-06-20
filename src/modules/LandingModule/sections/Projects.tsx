"use client";

import Project from "../components/project";
import TechList from "../components/tech-list";
import { motion } from "framer-motion";

const datas = [
  {
    cover: "/compfest-web.png",
    title: "COMPFEST 17",
    date: "May 2025",
    desc: "Official event website of COMPFEST, Indonesia's largest IT event by Fasilkom UI students.",
    tech: ["/fe/nextjs.svg", "/fe/tailwind-css.svg", "/be/prisma.svg"],
    sourceCode: "https://github.com/COMPFEST",
    projectUrl: "https://compfest.id/",
  },
  {
    cover: "/ddp0-web.png",
    title: "DDP-0 2025",
    date: "July 2025",
    desc: "DDP-0 is a preparatory program by COSMIC 2024 designed to introduce fundamental programming concepts to incoming CSUI 2025 students.",
    tech: ["/fe/nextjs.svg", "/fe/tailwind-css.svg", "/be/prisma.svg"],
    sourceCode: "https://github.com/DDP0",
    projectUrl: "https://ddp0.csui.dev/",
  },
  {
    cover: "/ijtihad-web.png",
    title: "Ijtihad",
    date: "Aug 2025",
    desc: "AI-powered platform for halal product validation, contract analysis, and a fatwa chatbot, developed for the Gemastik 2025 Software Development Competition.",
    tech: [
      "/fe/nextjs.svg",
      "/be/fast-api.svg",
      "/devtools/gemini-ai.svg",
      "/devtools/vercel.svg",
      "/devtools/railway.svg",
      "/be/redis.svg",
      "/devtools/firebase.svg",
      "/be/postgresql.svg",
    ],
    sourceCode: "https://github.com/anotherbondan/ijtihad-frontend",
    projectUrl: "https://ijtihad.vercel.app/",
  },
  {
    cover: "/portfolio-web.png",
    title: "Portfolio",
    date: "Sep 2025",
    desc: "A personal web portfolio built to showcase my projects, tools, and experiences in software engineering.",
    tech: ["/fe/nextjs.svg", "/devtools/vercel.svg"],
    sourceCode: "https://github.com/anotherbondan/portfolio",
    projectUrl: "https://ananda-gautama.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="project"
      className="relative flex min-h-screen flex-col items-center justify-center gap-14 pt-32 pb-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-playfair-display text-5xl text-purple-300 [text-shadow:0_0_15px_theme('colors.purple.500/50')] md:text-7xl"
      >
        Projects
      </motion.h1>

      <div className="mt-4 grid w-full max-w-7xl grid-cols-1 gap-10 px-6 lg:px-8">
        {datas.map((data, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="flex w-full"
          >
            <Project data={data}>
              <TechList data={data.tech} />
            </Project>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
