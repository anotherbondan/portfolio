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
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-12 py-20 md:flex-row"
    >
      <div className="z-10 flex h-full w-full max-w-6xl flex-col items-center justify-between gap-12 px-6 md:flex-row">
        {/* Left Side: Text and Description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-6 text-center md:w-1/2 md:items-start md:text-left"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-playfair-display text-4xl font-semibold text-neutral-100 md:text-5xl">
              Hi, I&apos;m{" "}
              <span className="text-purple-300">Ananda Gautama SK</span>
            </h2>
            <h1 className="font-playfair-display h-[40px] text-3xl text-neutral-400 md:text-4xl">
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

          <p className="font-inter max-w-lg text-lg leading-relaxed text-neutral-400 md:text-xl">
            I specialize in building scalable web applications, designing
            elegant user interfaces, and solving complex problems with code.
            Let&apos;s build something amazing together.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a href="#project">
              <Button className="rounded-full border-none bg-purple-600 px-6 py-3 shadow-[0_0_15px_theme('colors.purple.500/30')] transition-colors hover:bg-purple-500 hover:shadow-[0_0_25px_theme('colors.purple.500/50')]">
                <span className="font-inter font-semibold">View My Work</span>
              </Button>
            </a>
            <a
              href="/AnandaGautamaSekarKhosmana_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 transition-colors hover:border-purple-400 hover:bg-purple-900/10">
                <span className="font-inter font-semibold">Resume</span>
                <LuDownload />
              </Button>
            </a>
            <a href="#contact" className="group flex items-center gap-1.5">
              <span className="font-inter font-semibold group-hover:underline">
                Contact Me
              </span>
              <FaArrowRight className="transform transition-all group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mt-10 flex justify-center md:mt-0 md:w-1/2"
        >
          {/* Floating container */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="group relative flex h-64 w-64 cursor-pointer items-center justify-center md:h-80 md:w-80"
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
      </div>
    </section>
  );
}
