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
    tech: ["/fe/nextjs.svg", "/fe/tailwind-css.svg", "/fe/vite.svg", "/fe/react-router.svg", "/be/nestjs.svg",   "/be/prisma.svg", "/be/postgresql.svg"],
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
      "/fe/tailwind-css.svg",
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
    tech: [
      "/fe/nextjs.svg",
      "/fe/tailwind-css.svg",
      "/devtools/vercel.svg",
      "/fe/framer.svg",
    ],
    sourceCode: "https://github.com/anotherbondan/portfolio",
    projectUrl: "https://ananda-gautama.vercel.app/",
  },
  {
    cover: "/compfest-web.png",
    title: "COMPFEST 18",
    date: "2026",
    desc: "The official event platform for COMPFEST 18, Indonesia's largest student-run IT event. Designed to handle high traffic and deliver a seamless user experience, the website features a modern, responsive interface providing attendees with real-time event schedules and registration portals.",
    tech: ["/fe/nextjs.svg", "/fe/tailwind-css.svg"],
    sourceCode: "",
    projectUrl: "",
  },
  {
    cover: "/bem.jpg",
    title: "BEM Fasilkom UI",
    date: "2026",
    desc: "A centralized, dynamic digital hub for BEM Fasilkom UI. This platform serves as the primary gateway for students to access organizational news, academic resources, and event updates, built with a focus on performance and accessibility.",
    tech: ["/fe/nextjs.svg", "/fe/tailwind-css.svg"],
    sourceCode: "",
    projectUrl: "",
  },
  {
    cover: "/portfolio-web.png",
    title: "Rantai Skena (Budayago 2025)",
    date: "2025",
    desc: "An innovative digital initiative developed for Budayago 2025, aimed at connecting creative communities and amplifying local cultural movements. The platform provides a vibrant, interactive space for artists and enthusiasts to collaborate.",
    tech: ["/fe/nextjs.svg", "/fe/tailwind-css.svg"],
    sourceCode: "",
    projectUrl: "",
  },
];

export default function Projects() {
  return (
    <section
      id="project"
      className="relative flex min-h-screen flex-col items-center justify-center gap-14 pt-32 pb-20"
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

      <div className="mt-4 grid w-full max-w-7xl grid-cols-1 gap-10 px-6 lg:px-8">
        {datas.map((data, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
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
