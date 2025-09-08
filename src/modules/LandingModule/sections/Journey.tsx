"use client";

import Button from "@/components/ui/button";
import Experience from "../components/experience";
import TagList from "../components/tag";
const datas = [
  {
    logo: "/compfest.jpg",
    event: "Compfest 17",
    role: "Staff of Software Engineer",
    date: "May 2025 - Present",
    descs: ["Build interactive frontend"],
    tags: ["Frontend", "Teamwork", "Ubuntu", "Figma", "ReactJS", "TailwindCSS"],
  },
  {
    logo: "/ddp0.jpg",
    event: "DDP0 2025",
    role: "Staff of IT Development",
    date: "July 2025 - Present",
    descs: ["bikin web bos"],
    tags: ["Frontend", "Teamwork", "Ubuntu", "Figma", "ReactJS", "TailwindCSS"],
  },
  {
    logo: "/bem.webp",
    event: "BEM Fasilkom UI 2025",
    role: "Staff of SE at Business and Partnership",
    date: "Aug 2025 - Present",
    descs: ["bikin web bos"],
    tags: ["Frontend", "Teamwork", "Ubuntu", "Figma", "ReactJS", "TailwindCSS"],
  },
];

export default function Journey() {
  return (
    <section
      id="experience"
      className="flex flex-col w-full min-h-screen items-center gap-24"
    >
      <h1 className="font-playfair-display text-6xl text-center">
        Journey so far...
      </h1>
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <div className="absolute w-1 h-full bg-purple-200 rounded-full shadow-[0_0_10px_theme('colors.purple.500')]"></div>
        {datas.map((data, idx) => (
          <div key={idx} className={`flex w-full ${idx % 2 == 0 ? "justify-start" : "justify-end"}`}>
            <Experience key={idx} data={data} index={idx}>
              <TagList descList={data.tags} />
            </Experience>
          </div>
        ))}
      </div>
    </section>
  );
}
