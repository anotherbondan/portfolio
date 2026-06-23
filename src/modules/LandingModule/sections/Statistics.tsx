"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { statsData } from "@/data/statistics";

export default function Statistics() {
  return (
    <section className="relative z-20 flex w-full justify-center px-4">
      <div className="grid w-full max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        {/* Statistics Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-8 transition-all duration-500 hover:border-purple-500/30 md:p-10 lg:col-span-2 dark:border-white/5 dark:bg-neutral-900/70"
        >
          {/* Subtle Background Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10 grid w-full grid-cols-1 gap-8 divide-y divide-black/10 md:grid-cols-3 md:gap-4 md:divide-x md:divide-y-0 dark:divide-white/10">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center max-md:pb-4 md:px-2"
              >
                <motion.h3
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.15 + 0.2,
                    type: "spring",
                  }}
                  className="font-playfair-display mb-1 text-4xl font-bold text-purple-600 [text-shadow:0_0_20px_theme('colors.purple.500/80')] md:text-5xl dark:text-purple-300"
                >
                  {stat.value}
                </motion.h3>
                <p className="font-inter text-center text-sm font-medium tracking-wider text-neutral-600 uppercase dark:text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-8 text-center transition-colors duration-500 hover:border-purple-500/30 max-lg:flex-row max-lg:gap-10 max-md:flex-col max-md:gap-4 lg:col-span-1 dark:border-white/5 dark:bg-neutral-900/70"
        >
          {/* Subtle Background Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/10 p-1.5 transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-500/20 max-lg:h-40 max-lg:w-40 max-lg:p-3">
            <div className="relative h-full w-full">
              <Image
                src="/universitas-indonesia.png"
                alt="Universitas Indonesia"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start lg:items-center">
            <h3 className="font-playfair-display relative z-10 text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              Universitas Indonesia
            </h3>
            <p className="font-inter relative z-10 mt-2 mb-6 text-sm text-neutral-600 dark:text-neutral-400">
              Faculty of Computer Science
            </p>
            <div className="relative z-10 flex w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 shadow-[0_0_10px_theme('colors.purple.500/10')] transition-colors duration-300 group-hover:border-purple-500/30">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              <span className="font-inter text-sm font-bold tracking-wide text-purple-700 dark:text-purple-200">
                GPA: 3.82
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
