"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "2++", label: "Years of Experience" },
  { value: "10++", label: "Projects Completed" },
  { value: "20++", label: "Technologies Learned" },
];

export default function Statistics() {
  return (
    <section className="w-full flex justify-center px-6 mt-[-4rem] mb-10 z-20 relative">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Statistics Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 relative overflow-hidden glass rounded-3xl p-8 md:p-10 border border-white/5 bg-black/40 shadow-[0_20px_40px_-15px_theme('colors.purple.500/20')] backdrop-blur-xl flex flex-col justify-center h-full group hover:border-purple-500/20 transition-all duration-500"
        >
          {/* Subtle Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 w-full relative z-10">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0 md:first:pt-0"
              >
                <motion.h3 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.2, type: "spring" }}
                  className="font-playfair-display text-4xl md:text-5xl font-bold text-purple-300 [text-shadow:0_0_20px_theme('colors.purple.500/80')] mb-1"
                >
                  {stat.value}
                </motion.h3>
                <p className="font-inter text-neutral-400 text-sm font-medium text-center uppercase tracking-wider">
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
          className="lg:col-span-1 relative overflow-hidden glass rounded-3xl p-8 border border-white/5 bg-black/40 shadow-[0_20px_40px_-15px_theme('colors.purple.500/20')] backdrop-blur-xl flex flex-col items-center justify-center text-center h-full group hover:border-purple-500/30 transition-colors duration-500"
        >
          {/* Subtle Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="w-16 h-16 rounded-full p-1 bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_20px_theme('colors.purple.500/30')] transition-all duration-500 relative z-10">
            <img src="/universitas-indonesia.png" alt="Universitas Indonesia" />
          </div>
          <h3 className="font-playfair-display text-2xl font-bold text-neutral-200 relative z-10">
            Universitas Indonesia
          </h3>
          <p className="font-inter text-neutral-400 text-sm mt-2 mb-6 relative z-10">
            Faculty of Computer Science
          </p>
          <div className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 shadow-[0_0_15px_theme('colors.purple.500/10')] relative z-10 flex items-center gap-2 group-hover:border-purple-400/50 transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="font-inter text-sm font-bold tracking-wide text-purple-200">
              GPA: 3.82
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
