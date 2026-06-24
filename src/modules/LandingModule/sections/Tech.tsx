"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";

import { frontend, backend, devops, database } from "@/data/tech";

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

  const needsDarkBg = [
    "Shadcn/ui",
    "Radix UI",
    "Framer",
    "Better Auth",
    "Drizzle ORM",
    "Vercel",
    "Resend",
    "Open AI",
    "Github",
    "Railway",
    "Tanstack",
  ].includes(item.alt);

  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isLight = mounted && currentTheme === "light";

  const imageSrc =
    isLight && needsDarkBg
      ? item.src.replace(".svg", "-black.svg").replace(".png", "-black.png")
      : item.src;

  return (
    <>
      <div
        className="group relative flex aspect-square flex-col items-center justify-center rounded-2xl border border-black/5 bg-black/5 transition-all duration-300 before:absolute before:-inset-4 before:-z-10 before:content-[''] hover:-translate-y-2 hover:border-primary-500/30 dark:border-white/5 dark:bg-neutral-900/70"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="relative h-1/2 w-1/2 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={imageSrc}
            alt={item.alt}
            fill
            className="object-contain transition-all"
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
            className="font-inter pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-primary-500/30 bg-primary-100 px-3 py-1.5 text-xs whitespace-nowrap text-primary-900 shadow-xl dark:bg-primary-900/80 dark:text-primary-100"
          >
            {item.alt}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Tech() {
  const [activeTab, setActiveTab] = useState<
    "frontend" | "backend" | "database" | "devops"
  >("frontend");

  const currentData =
    activeTab === "frontend"
      ? frontend
      : activeTab === "backend"
        ? backend
        : activeTab === "database"
          ? database
          : devops;

  return (
    <section
      id="tech"
      className="flex min-h-screen w-full flex-col items-center gap-12  px-4 lg:px-8 pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 px-4 text-center"
      >
        <h1 className="font-playfair-display text-center text-5xl text-primary-600 [text-shadow:0_0_15px_theme('colors.primary.500/50')] md:text-6xl dark:text-primary-300">
          Skills & Expertise
        </h1>
        <p className="font-inter text-center text-sm tracking-widest text-gray-600 uppercase dark:text-gray-400">
          Technologies I use to build robust applications
        </p>
      </motion.div>

      <div className="flex w-full max-w-5xl flex-col items-center gap-10">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={(val: string) =>
              setActiveTab(
                val as "frontend" | "backend" | "database" | "devops",
              )
            }
          >
            <TabsList>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="devops">DevOps & Tools</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Tab Content */}
        <div className="min-h-100 w-full">
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
