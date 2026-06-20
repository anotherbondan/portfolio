"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const frontend = [
  { src: "/techs/react.svg", alt: "ReactJS" },
  { src: "/techs/nextjs.svg", alt: "NextJS" },
  { src: "/techs/tailwind-css.svg", alt: "TailwindCSS" },
  { src: "/techs/chakra-ui.svg", alt: "Chakra UI" },
  { src: "/techs/typescript.svg", alt: "TypeScript" },
  { src: "/techs/javascript.svg", alt: "Javascript" },
  { src: "/tools/figma.svg", alt: "Figma" },
];

const backend = [
  { src: "/techs/node-js.svg", alt: "NodeJS" },
  { src: "/techs/express-js.svg", alt: "ExpressJS" },
  { src: "/techs/python.svg", alt: "Python" },
  { src: "/techs/FastAPI.svg", alt: "FastAPI" },
  { src: "/techs/java.svg", alt: "Java" },
  { src: "/tools/PostgreSQL.svg", alt: "PostgreSQL" },
  { src: "/techs/prisma-orm.svg", alt: "Prisma" },
  { src: "/techs/redis.svg", alt: "Redis" },
  { src: "/tools/firebase.svg", alt: "Firebase" },
  { src: "/tools/neon.svg", alt: "Neon" },
];

const devops = [
  { src: "/tools/docker.svg", alt: "Docker" },
  { src: "/tools/ubuntu.svg", alt: "Ubuntu" },
  { src: "/tools/github.svg", alt: "Github" },
  { src: "/tools/vercel.svg", alt: "Vercel" },
  { src: "/tools/railway.svg", alt: "Railway" },
  { src: "/tools/npm.svg", alt: "npm" },
  { src: "/tools/vs-code.svg", alt: "VS Code" },
  { src: "/tools/gemini-ai.svg", alt: "Gemini" },
  { src: "/tools/chatgpt.svg", alt: "OpenAI" },
];

function HoverTile({ item }: { item: { src: string; alt: string } }) {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Update coordinates. Offset slightly so the tooltip doesn't sit exactly under the cursor arrow
    setCoords({ x: e.clientX + 15, y: e.clientY + 15 });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    // Immediately set coords before showing so it mounts at the right spot
    setCoords({ x: e.clientX + 15, y: e.clientY + 15 });
    setIsHovered(true);
  };

  return (
    <>
      <div 
        className="group relative flex flex-col items-center justify-center aspect-square glass rounded-2xl border border-white/5 bg-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_10px_30px_theme('colors.purple.500/20')]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="relative w-1/2 h-1/2 transition-transform duration-300 group-hover:scale-110">
          <Image src={item.src} alt={item.alt} fill className="object-contain" />
        </div>
      </div>
      
      {/* Floating Tooltip outside the relative container but tied to this tile's state */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: coords.x, y: coords.y }}
            animate={{ opacity: 1, scale: 1, x: coords.x, y: coords.y }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              opacity: { duration: 0.15 },
              scale: { duration: 0.15 },
              x: { duration: 0 },
              y: { duration: 0 }
            }}
            className="fixed top-0 left-0 z-50 pointer-events-none bg-purple-900/80 text-purple-100 text-xs px-3 py-1.5 rounded-full whitespace-nowrap shadow-xl border border-purple-500/30 font-inter"
          >
            {item.alt}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Tech() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "devops">("frontend");

  const currentData = activeTab === "frontend" ? frontend : activeTab === "backend" ? backend : devops;

  return (
    <section
      id="tech"
      className="flex min-h-screen w-full flex-col items-center pt-40 pb-20 gap-12"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-playfair-display text-center text-5xl md:text-6xl text-purple-300 [text-shadow:0_0_15px_theme('colors.purple.500/50')]"
      >
        Techs and Tools
      </motion.h1>
      
      <div className="flex flex-col items-center w-full max-w-5xl gap-10 px-6">
        
        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 glass p-1.5 rounded-3xl md:rounded-full border border-white/10 w-full md:w-auto"
        >
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-6 py-2.5 rounded-full font-inter text-sm font-semibold transition-all duration-300 ${
              activeTab === "frontend"
                ? "bg-purple-600 text-white shadow-[0_0_15px_theme('colors.purple.500/40')]"
                : "text-neutral-400 hover:text-purple-300 hover:bg-white/5"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-6 py-2.5 rounded-full font-inter text-sm font-semibold transition-all duration-300 ${
              activeTab === "backend"
                ? "bg-purple-600 text-white shadow-[0_0_15px_theme('colors.purple.500/40')]"
                : "text-neutral-400 hover:text-purple-300 hover:bg-white/5"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab("devops")}
            className={`px-6 py-2.5 rounded-full font-inter text-sm font-semibold transition-all duration-300 ${
              activeTab === "devops"
                ? "bg-purple-600 text-white shadow-[0_0_15px_theme('colors.purple.500/40')]"
                : "text-neutral-400 hover:text-purple-300 hover:bg-white/5"
            }`}
          >
            DevOps & Tools
          </button>
        </motion.div>

        {/* Tab Content */}
        <div className="w-full min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-center"
            >
              {currentData.map((item, idx) => (
                <HoverTile key={`${activeTab}-${idx}`} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
