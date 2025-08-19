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
];

export default function Journey() {
  return (
    <section id="experience" className=""> 
      {datas.map((data, idx) => (
        <Experience key={idx} data={data} index={idx}>
          <TagList descList={data.tags} />
        </Experience>
      ))}
    </section>
  );
}
