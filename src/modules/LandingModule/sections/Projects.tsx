"use client";

import Project from "../components/project";
import TechList from "../components/tech-list";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // pake icon lucide-react
import Button from "@/components/ui/button";

const datas = [
  {
    cover: "/compfest-web.png",
    title: "COMPFEST 17",
    date: "May 2025",
    desc: "Official event website of COMPFEST, Indonesia's largest IT event by Fasilkom UI students.",
    tech: [
      "/techs/nextjs.svg",
      "/techs/tailwind-css.svg",
      "/techs/prisma-orm.svg",
      "/tools/PostgreSQL.svg",
    ],
    sourceCode: "https://github.com/COMPFEST",
    projectUrl: "https://compfest.id/",
  },
  {
    cover: "/ddp0-web.png",
    title: "DDP-0 2025",
    date: "July 2025",
    desc: "DDP-0 is a preparatory program by COSMIC 2024 designed to introduce fundamental programming concepts to incoming CSUI 2025 students.",
    tech: [
      "/techs/nextjs.svg",
      "/techs/tailwind-css.svg",
      "/techs/prisma-orm.svg",
    ],
    sourceCode: "https://github.com/DDP0",
    projectUrl: "https://ddp0.csui.dev/",
  },
  {
    cover: "/ijtihad-web.png",
    title: "Ijtihad",
    date: "Aug 2025",
    desc: "AI-powered platform for halal product validation, contract analysis, and a fatwa chatbot, developed for the Gemastik 2025 Software Development Competition.",
    tech: [
      "/techs/nextjs.svg",
      "/techs/FastAPI.svg",
      "/tools/vercel.svg",
      "/tools/railway.svg",
      "/techs/redis.svg",
      "/tools/firebase.svg",
      "/tools/gemini-ai.svg",
      "/tools/PostgreSQL.svg",
    ],
    sourceCode: "https://github.com/anotherbondan/ijtihad-frontend",
    projectUrl: "https://ijtihad.vercel.app/",
  },
  {
    cover: "/portfolio-web.png",
    title: "Portfolio",
    date: "Sep 2025",
    desc: "A personal web portfolio built to showcase my projects, tools, and experiences in software engineering.",
    tech: ["/techs/nextjs.svg", "/tools/vercel.svg"],
    sourceCode: "https://github.com/anotherbondan/portfolio",
    projectUrl: "",
  },
];

export default function Projects() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 },
      },
    },
  });

  return (
    <section
      id="project"
      className="relative flex min-h-screen flex-col items-center justify-center gap-14"
    >
      <h1 className="font-playfair-display text-7xl">Projects</h1>

      <div className="pointer-events-none absolute inset-x-0 bottom-1/3 z-10 flex items-center justify-between px-4">
        <Button
          onClick={() => slider.current?.prev()}
          className="glass pointer-events-auto -translate-x-1/2 rounded-full p-2 text-white"
        >
          <ChevronLeft size={28} />
        </Button>
        <Button
          onClick={() => slider.current?.next()}
          className="glass pointer-events-auto translate-x-1/2 rounded-full p-2 text-white"
        >
          <ChevronRight size={28} />
        </Button>
      </div>

      {/* slider */}
      <div ref={sliderRef} className="keen-slider w-full">
        {datas.map((data, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex justify-center px-6 py-10"
          >
            <Project data={data}>
              <TechList data={data.tech} />
            </Project>
          </div>
        ))}
      </div>
    </section>
  );
}
