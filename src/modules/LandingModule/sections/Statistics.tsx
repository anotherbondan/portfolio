"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "2++", label: "Years of Experience" },
  { value: "10++", label: "Projects Completed" },
  { value: "20++", label: "Technologies Learned" },
];

export default function Statistics() {
  return (
    <section className="relative z-20 mb-10 flex w-full justify-center px-6">
      <div className="grid w-full max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        {/* Statistics Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass group relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-8 shadow-[0_20px_40px_-15px_theme('colors.purple.500/20')] backdrop-blur-xl transition-all duration-500 hover:border-purple-500/20 md:p-10 lg:col-span-2"
        >
          {/* Subtle Background Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10 grid w-full grid-cols-1 gap-8 divide-y divide-white/10 md:grid-cols-3 md:gap-4 md:divide-x md:divide-y-0">
            {stats.map((stat, idx) => (
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
                  className="font-playfair-display mb-1 text-4xl font-bold text-purple-300 [text-shadow:0_0_20px_theme('colors.purple.500/80')] md:text-5xl"
                >
                  {stat.value}
                </motion.h3>
                <p className="font-inter text-center text-sm font-medium tracking-wider text-neutral-400 uppercase">
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
          className="glass group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-8 text-center shadow-[0_20px_40px_-15px_theme('colors.purple.500/20')] backdrop-blur-xl transition-colors duration-500 hover:border-purple-500/30 max-lg:flex-row max-lg:gap-10 max-md:flex-col max-md:gap-4 lg:col-span-1"
        >
          {/* Subtle Background Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/10 p-1.5 transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_20px_theme('colors.purple.500/30')] max-lg:h-40 max-lg:w-40 max-lg:p-3">
            <img src="/universitas-indonesia.png" alt="Universitas Indonesia" />
          </div>
          <div className="flex flex-col items-center md:items-start lg:items-center">
            <h3 className="font-playfair-display relative z-10 text-2xl font-bold text-neutral-200">
              Universitas Indonesia
            </h3>
            <p className="font-inter relative z-10 mt-2 mb-6 text-sm text-neutral-400">
              Faculty of Computer Science
            </p>
            <div className="relative z-10 flex w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 shadow-[0_0_15px_theme('colors.purple.500/10')] transition-colors duration-300 group-hover:border-purple-400/50">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              <span className="font-inter text-sm font-bold tracking-wide text-purple-200">
                GPA: 3.82
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
