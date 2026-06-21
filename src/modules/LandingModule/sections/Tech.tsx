"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const frontend = [
  { src: "/fe/react.svg", alt: "ReactJS" },
  { src: "/fe/nextjs.svg", alt: "NextJS" },
  { src: "/fe/vite.svg", alt: "Vite" },
  { src: "/fe/react-router.svg", alt: "React Router" },
  { src: "/fe/tanstack.svg", alt: "Tanstack" },
  { src: "/fe/chakra-ui.svg", alt: "Chakra UI" },
  { src: "/fe/shadcn-ui.svg", alt: "Shadcn/ui" },
  { src: "/fe/tailwind-css.svg", alt: "TailwindCSS" },
  { src: "/fe/framer.svg", alt: "Framer" },
  { src: "/fe/flutter.svg", alt: "Flutter" },
  { src: "/fe/css.svg", alt: "CSS3" },
  { src: "/fe/html.svg", alt: "HTML5" },
];

const backend = [
  { src: "/be/node-js.svg", alt: "NodeJS" },
  { src: "/be/nestjs.svg", alt: "NestJS" },
  { src: "/be/express-js.svg", alt: "ExpressJS" },
  { src: "/be/django.svg", alt: "Django" },
  { src: "/be/fast-api.svg", alt: "FastAPI" },
  { src: "/be/redis.svg", alt: "Redis" },
  { src: "/be/postgresql.svg", alt: "PostgreSQL" },
  { src: "/be/prisma.svg", alt: "Prisma ORM" },
  { src: "/be/drizzle.svg", alt: "Drizzle ORM" },
  { src: "/be/typescript.svg", alt: "TypeScript" },
  { src: "/be/javascript.svg", alt: "Javascript" },
  { src: "/be/java.svg", alt: "Java" },
  { src: "/be/python.svg", alt: "Python" },
  { src: "/be/dart.svg", alt: "Dart" },
];

const devops = [
  { src: "/devtools/docker.svg", alt: "Docker" },
  { src: "/devtools/vercel.svg", alt: "Vercel" },
  { src: "/devtools/railway.svg", alt: "Railway" },
  { src: "/devtools/google-cloud.svg", alt: "Google Cloud Platform" },
  { src: "/devtools/pnpm.svg", alt: "pnpm" },
  { src: "/devtools/npm.svg", alt: "npm" },
  { src: "/devtools/firebase.svg", alt: "Firebase" },
  { src: "/devtools/neon.svg", alt: "Neon" },
  { src: "/devtools/supabase.svg", alt: "Supabase" },
  { src: "/devtools/ubuntu.svg", alt: "Ubuntu" },
  { src: "/devtools/gemini-ai.svg", alt: "Gemini" },
  { src: "/devtools/github.svg", alt: "Github" },
  { src: "/devtools/figma.svg", alt: "Figma" },
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
        className="group glass relative flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/5 bg-black/20 transition-all duration-300 before:absolute before:-inset-4 before:-z-10 before:content-[''] hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_10px_30px_theme('colors.purple.500/20')]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="relative h-1/2 w-1/2 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
          />
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
              y: { duration: 0 },
            }}
            className="font-inter pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-purple-500/30 bg-purple-900/80 px-3 py-1.5 text-xs whitespace-nowrap text-purple-100 shadow-xl"
          >
            {item.alt}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Tech() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "devops">(
    "frontend",
  );

  const currentData =
    activeTab === "frontend"
      ? frontend
      : activeTab === "backend"
        ? backend
        : devops;

  return (
    <section
      id="tech"
      className="flex min-h-screen w-full flex-col items-center gap-12 pt-40 pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 px-4 text-center"
      >
        <h1 className="font-playfair-display text-center text-5xl text-purple-300 [text-shadow:0_0_15px_theme('colors.purple.500/50')] md:text-6xl">
          Techs and Tools
        </h1>
        <p className="font-inter text-center text-sm tracking-widest text-gray-400 uppercase">
          Technologies I use to build robust applications
        </p>
      </motion.div>

      <div className="flex w-full max-w-5xl flex-col items-center gap-10 px-6">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass flex w-auto flex-wrap gap-1 rounded-3xl border border-white/10 p-1.5 md:rounded-full"
        >
          <button
            onClick={() => setActiveTab("frontend")}
            className={`font-inter rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 max-md:text-xs ${
              activeTab === "frontend"
                ? "bg-purple-600 text-white shadow-[0_0_15px_theme('colors.purple.500/40')]"
                : "text-neutral-400 hover:bg-white/5 hover:text-purple-300"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`font-inter rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 max-md:text-xs ${
              activeTab === "backend"
                ? "bg-purple-600 text-white shadow-[0_0_15px_theme('colors.purple.500/40')]"
                : "text-neutral-400 hover:bg-white/5 hover:text-purple-300"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab("devops")}
            className={`font-inter rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 max-md:text-xs ${
              activeTab === "devops"
                ? "bg-purple-600 text-white shadow-[0_0_15px_theme('colors.purple.500/40')]"
                : "text-neutral-400 hover:bg-white/5 hover:text-purple-300"
            }`}
          >
            DevOps & Tools
          </button>
        </motion.div>

        {/* Tab Content */}
        <div className="min-h-[400px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 justify-center gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7"
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
