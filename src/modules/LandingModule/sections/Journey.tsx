"use client";

import Experience from "../components/experience";
import TagList from "../components/tag";
import { motion } from "framer-motion";

const datas = [
  {
    logo: "/bem.jpg",
    event: "BEM FASILKOM UI",
    role: "Deputy of Business & Partnership Bureau",
    date: "May 2026 - Present",
    descs: [
      "Led and supervised a team of software engineers to develop and deliver professional IT solutions for external enterprise clients.",
      "Maintained and optimized the official internal BEM web infrastructure to ensure reliable access for faculty members and students.",
      "Acted as the primary technical liaison, partnering closely with clients to translate business requirements into scalable software architecture.",
    ],
    tags: [
      "Project Management",
      "Full-Stack Development",
      "Technical Leadership",
    ],
  },
  {
    logo: "/compfest-17.jpg",
    event: "COMPFEST 18",
    role: "Expert Staff of Software Engineer",
    date: "Mar 2026 - Present",
    descs: [
      "Engineered highly complex frontend features and interactive user interfaces for Southeast Asia's largest student-run IT event.",
      "Developed advanced core functionalities to support large-scale event operations and seamless user experiences.",
      "Optimized database queries and significantly improved site load times to handle massive traffic spikes during peak event registration.",
    ],
    tags: ["Next.js", "TypeScript", "Frontend Engineering"],
  },
  {
    logo: "/universitas-indonesia.png",
    event: "Faculty of Computer Science, UI",
    role: "Teaching Assistant of Programming Foundations 2",
    date: "Jan 2026 - Jun 2026",
    descs: [
      "Guided undergraduate students in mastering Object-Oriented Programming principles, data structures, and algorithmic logic using Java.",
      "Evaluated weekly lab assignments and course projects, providing comprehensive and constructive feedback on code quality and design patterns.",
      "Conducted pre-exam tutorial sessions to demystify complex theoretical concepts like Polymorphism, Inheritance, and Encapsulation.",
    ],
    tags: ["Java", "Object-Oriented Programming", "Code Review"],
  },
  {
    logo: "/compfest-17.jpg",
    event: "COMPFEST 17",
    role: "Staff of Software Engineer",
    date: "May 2025 - Present",
    descs: [
      "Engineered responsive, high-performance web components for Indonesia's largest student-run IT event, reaching thousands of participants.",
      "Collaborated cross-functionally with UI/UX designers and backend engineers to integrate complex APIs and deliver a seamless user journey.",
      "Optimized frontend accessibility and rendering speeds, ensuring a flawless experience across diverse devices and modern browsers.",
    ],
    tags: ["React", "Tailwind CSS", "Web Performance"],
  },
  {
    logo: "/ddp0.jpg",
    event: "DDP0 2025",
    role: "Staff of IT Development",
    date: "July 2025 - Present",
    descs: [
      "Spearheaded the frontend development of the official DDP0 portal, a critical preparatory platform for incoming Computer Science students.",
      "Translated complex Figma wireframes into pixel-perfect, interactive React components while maintaining strict design system consistency.",
      "Implemented modern web performance standards, significantly reducing load times and improving the overall accessibility score.",
    ],
    tags: ["Next.js", "UI/UX Implementation", "Frontend Development"],
  },
  {
    logo: "/bem.jpg",
    event: "BEM FASILKOM UI",
    role: "Staff of SE at Business and Partnership",
    date: "Aug 2025 - Present",
    descs: [
      "Architected and deployed the official portfolio platform for BEM FASILKOM UI, establishing a strong digital presence for the organization.",
      "Engineered end-to-end web solutions for external enterprise clients, driving technical requirements from conception to production.",
      "Partnered closely with business stakeholders to align technical deliverables with strategic partnership goals and client expectations.",
    ],
    tags: ["Next.js", "Full-Stack Engineering", "Web Architecture"],
  },
];

export default function Journey() {
  return (
    <section
      id="experience"
      className="relative flex min-h-screen w-full flex-col items-center gap-24 pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="z-10 flex flex-col items-center gap-4 px-4 text-center"
      >
        <h1 className="font-playfair-display text-center text-6xl text-purple-600 [text-shadow:0_0_15px_theme('colors.purple.500/50')] dark:text-purple-300">
          Journey so far...
        </h1>
        <p className="font-inter text-center text-sm tracking-widest text-gray-600 uppercase dark:text-gray-400">
          A timeline of my professional experiences
        </p>
      </motion.div>
      <div className="relative flex w-full flex-col items-center justify-center gap-10 px-4 lg:px-12">
        <div className="absolute left-8 z-0 h-full w-1 rounded-full bg-purple-400 opacity-50 shadow-[0_0_5px_theme('colors.purple.500/50')] lg:left-1/2 lg:-translate-x-1/2 lg:opacity-100"></div>
        {datas.map((data, idx) => (
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
