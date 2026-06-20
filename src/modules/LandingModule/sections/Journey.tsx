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
      "Spearheaded strategic partnerships with corporate sponsors and tech startups to fund large-scale faculty events and initiatives.",
      "Led and mentored a team of business development associates to innovate new revenue streams and secure vital sponsorships.",
      "Negotiated multi-tiered partnership agreements while maintaining long-term, mutually beneficial relationships with key stakeholders."
    ],
    tags: ["Leadership", "Business Strategy", "Negotiation"],
  },
  {
    logo: "/compfest.jpg",
    event: "COMPFEST",
    role: "Expert Staff of Software Engineer",
    date: "Mar 2026 - Present",
    descs: [
      "Architected scalable microservices and responsive frontends for Southeast Asia's largest student-run IT event.",
      "Mentored junior developers, enforcing clean code practices, thorough code reviews, and robust CI/CD pipelines.",
      "Optimized database queries and significantly improved site load times to handle massive traffic spikes during peak event registration."
    ],
    tags: ["Next.js", "TypeScript", "System Architecture"],
  },
  {
    logo: "/ddp0.jpg",
    event: "Faculty of Computer Science, UI",
    role: "Teaching Assistant of Programming Foundations 2",
    date: "Jan 2026 - Jun 2026",
    descs: [
      "Guided undergraduate students in mastering Object-Oriented Programming principles, data structures, and algorithmic logic using Java.",
      "Evaluated weekly lab assignments and course projects, providing comprehensive and constructive feedback on code quality and design patterns.",
      "Conducted weekly tutorial sessions to demystify complex theoretical concepts like Polymorphism, Inheritance, and Encapsulation."
    ],
    tags: ["Java", "OOP", "Mentoring"],
  },
  {
    logo: "/compfest.jpg",
    event: "Compfest 17",
    role: "Staff of Software Engineer",
    date: "May 2025 - Present",
    descs: [
      "Built responsive and user-friendly web interfaces for the main COMPFEST website",
      "Collaborated with backend and design teams to ensure smooth integration and consistent UI",
      "Improved frontend performance and accessibility across devices and browsers",
    ],
    tags: ["ReactJS", "TailwindCSS"],
  },
  {
    logo: "/ddp0.jpg",
    event: "DDP0 2025",
    role: "Staff of IT Development",
    date: "July 2025 - Present",
    descs: [
      "Built responsive and user-friendly web interfaces for the main DDP0 2025 website",
      "Collaborated with design teams to ensure a smooth and consistent UI",
      "Improved frontend performance and accessibility across devices and browsers",
    ],
    tags: ["ReactJS", "TailwindCSS", "NextJS"],
  },
  {
    logo: "/bem.jpg",
    event: "BEM FASILKOM UI",
    role: "Staff of SE at Business and Partnership",
    date: "Aug 2025 - Present",
    descs: [
      "Built the official BEM FASILKOM UI portfolio website",
      "Developed fullstack web projects for external clients",
      "Collaborated with team members to design and deliver effective web solutions",
    ],
    tags: ["ReactJS", "TailwindCSS", "NextJS"],
  },
];

export default function Journey() {
  return (
    <section
      id="experience"
      className="flex min-h-screen w-full flex-col items-center gap-24 pt-40 pb-20 relative"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-playfair-display text-center text-6xl text-purple-300 [text-shadow:0_0_15px_theme('colors.purple.500/50')]"
      >
        Journey so far...
      </motion.h1>
      <div className="flex w-full flex-col items-center justify-center gap-10 relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="absolute h-full w-1 rounded-full bg-purple-400 shadow-[0_0_10px_theme('colors.purple.500/50')] left-8 md:left-1/2 md:-translate-x-1/2 opacity-50 md:opacity-100 z-0"></div>
        {datas.map((data, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
            className={`flex w-full justify-start ${idx % 2 == 0 ? "md:justify-start" : "md:justify-end"}`}
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
