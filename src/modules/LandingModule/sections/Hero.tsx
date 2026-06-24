"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 pt-32 px-4 lg:px-8  pb-20 sm:gap-12 lg:flex-row lg:py-20"
    >
      <div className="z-10 flex h-full w-full max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12">
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
            className="group relative flex h-56 w-56 cursor-pointer items-center justify-center sm:h-64 sm:w-64 lg:h-80 lg:w-80"
          >
            {/* Animated Gradient Glow Background */}
            <div className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full bg-gradient-to-tr from-primary-600 via-primary-500 to-primary-400 opacity-20 transition-opacity duration-700 group-hover:opacity-40" />

            {/* Outer Border Ring */}
            <div className="absolute inset-0 scale-105 rounded-full border border-primary-500/20 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 scale-110 rounded-full border border-primary-300/10 transition-transform delay-75 duration-700 group-hover:scale-125" />

            {/* Main Avatar Container */}
            <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-2 border-black/10 bg-white/70 shadow-2xl shadow-primary-500/40 transition-all duration-500 group-hover:border-primary-500/50 group-hover:shadow-primary-500/60 dark:border-white/10 dark:bg-neutral-900/70">
              <Image
                src="/hero.jpeg"
                alt="Ananda Gautama SK Profile"
                fill
                className="object-cover grayscale-100 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
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
            <h2 className="font-playfair-display text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-100">
              Hi, I&apos;m{" "}
              <span className="text-primary-600 dark:text-primary-500">
                Ananda Gautama SK
              </span>
            </h2>
            <h1 className="font-playfair-display min-h-10 text-2xl text-neutral-600 sm:text-3xl lg:min-h-12 lg:text-4xl dark:text-neutral-400">
              <span className="text-primary-600 [text-shadow:0_0_15px_theme('colors.primary.500/50')] dark:text-primary-300">
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

          <p className="font-inter max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg lg:text-xl dark:text-neutral-400">
            I specialize in building scalable web applications, designing
            elegant user interfaces, and solving complex problems with code.
          </p>

          <div className="mt-2 flex w-full flex-col items-center gap-4 sm:mt-4 sm:w-auto sm:flex-row sm:flex-wrap lg:justify-start">
            <Button
              asChild
              className="w-full rounded-full border-none bg-primary-600 px-6 py-3.5 transition-colors hover:bg-primary-500 sm:w-auto sm:py-3"
            >
              <Link href="#project" className="w-full sm:w-auto">
                <span className="font-inter font-semibold text-neutral-100">
                  View My Work
                </span>
              </Link>
            </Button>
            <Button
              asChild
              className="group flex w-full items-center justify-center gap-2 rounded-full border border-black/20 bg-transparent px-6 py-3.5 text-neutral-800 transition-colors hover:border-primary-500/30 hover:bg-primary-900/10 sm:w-auto sm:py-3 dark:border-white/20 dark:text-white"
            >
              <Link
                href="/AnandaGautamaSekarKhosmana_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <span className="font-inter font-semibold">Resume</span>
                <LuDownload />
              </Link>
            </Button>
            <Link
              href="#contact"
              className="group mt-2 flex items-center gap-1.5 sm:mt-0"
            >
              <span className="font-inter text-sm font-semibold group-hover:underline sm:text-base">
                Contact Me
              </span>
              <FaArrowRight className="transform transition-all group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
