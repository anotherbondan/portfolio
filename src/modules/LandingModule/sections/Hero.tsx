"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 pt-32 pb-20 sm:gap-12 lg:flex-row lg:py-20"
    >
      <div className="z-10 flex h-full w-full max-w-6xl flex-col items-center justify-between gap-10 px-6 lg:flex-row lg:gap-12">
        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mt-8 flex justify-center sm:mt-10 lg:mt-0 lg:w-1/2"
        >
          {/* Floating container */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="group relative flex h-56 w-56 sm:h-64 sm:w-64 cursor-pointer items-center justify-center lg:h-80 lg:w-80"
          >
            {/* Animated Gradient Glow Background */}
            <div className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-purple-400 opacity-20 blur-2xl transition-opacity duration-700 group-hover:opacity-40" />

            {/* Outer Border Ring */}
            <div className="absolute inset-0 scale-105 rounded-full border border-purple-500/20 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 scale-110 rounded-full border border-purple-300/10 transition-transform delay-75 duration-700 group-hover:scale-125" />

            {/* Main Avatar Container */}
            <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-2 border-white/10 bg-black/50 shadow-[0_0_40px_theme('colors.purple.500/20')] transition-colors duration-500 group-hover:border-purple-400/50">
              <Image
                src="/office-worker.png"
                alt="Ananda Gautama SK Profile"
                fill
                className="object-cover grayscale-[30%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
          </motion.div>
        </motion.div>
        {/* Left Side: Text and Description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-5 text-center sm:gap-6 lg:w-1/2 lg:items-start lg:text-left"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-playfair-display text-3xl sm:text-4xl font-semibold text-neutral-100 lg:text-5xl">
              Hi, I&apos;m{" "}
              <span className="text-purple-300">Ananda Gautama SK</span>
            </h2>
            <h1 className="font-playfair-display min-h-[40px] lg:min-h-[48px] text-2xl sm:text-3xl text-neutral-400 lg:text-4xl">
              <span className="text-purple-300 [text-shadow:0_0_15px_theme('colors.purple.500/50')]">
                <Typewriter
                  words={[
                    "Full-Stack Developer",
                    "CS Student",
                    "Software Engineer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={65}
                  delaySpeed={1500}
                />
              </span>
            </h1>
          </div>

          <p className="font-inter max-w-lg text-base sm:text-lg leading-relaxed text-neutral-400 lg:text-xl">
            I specialize in building scalable web applications, designing
            elegant user interfaces, and solving complex problems with code.
            Let&apos;s build something amazing together.
          </p>

          <div className="mt-2 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:mt-4 lg:justify-start">
            <a href="#project" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-full border-none bg-purple-600 px-6 py-3.5 sm:py-3 shadow-[0_0_15px_theme('colors.purple.500/30')] transition-colors hover:bg-purple-500 hover:shadow-[0_0_25px_theme('colors.purple.500/50')]">
                <span className="font-inter font-semibold">View My Work</span>
              </Button>
            </a>
            <a
              href="/AnandaGautamaSekarKhosmana_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3.5 sm:py-3 transition-colors hover:border-purple-400 hover:bg-purple-900/10">
                <span className="font-inter font-semibold">Resume</span>
                <LuDownload />
              </Button>
            </a>
            <a href="#contact" className="group mt-2 flex items-center gap-1.5 sm:mt-0">
              <span className="font-inter text-sm sm:text-base font-semibold group-hover:underline">
                Contact Me
              </span>
              <FaArrowRight className="transform transition-all group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}
