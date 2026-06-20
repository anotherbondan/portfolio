"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/button";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full flex-col md:flex-row items-center justify-center gap-12 py-20 relative"
    >
      <div className="flex h-full w-full max-w-6xl items-center justify-between z-10 flex-col md:flex-row gap-12 px-6">
        
        {/* Left Side: Text and Description */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start justify-center gap-6 md:w-1/2 text-center md:text-left"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-semibold text-neutral-100">
              Hi, I'm <span className="text-purple-300">Ananda Gautama SK</span>
            </h2>
            <h1 className="font-playfair-display text-3xl md:text-4xl text-neutral-400 h-[40px]">
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

          <p className="font-inter text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed">
            I specialize in building scalable web applications, designing elegant user interfaces, and solving complex problems with code. Let's build something amazing together.
          </p>

          <div className="flex flex-wrap gap-4 mt-4 items-center">
            <a href="#project">
              <Button className="bg-purple-600 border-none px-6 py-3 rounded-full hover:bg-purple-500 transition-colors shadow-[0_0_15px_theme('colors.purple.500/30')] hover:shadow-[0_0_25px_theme('colors.purple.500/50')]">
                <span className="font-inter font-semibold">View My Work</span>
              </Button>
            </a>
            <a href="/AnandaGautamaSekarKhosmana_CV.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-transparent border-white/20 border px-6 py-3 rounded-full hover:border-purple-400 hover:bg-purple-900/10 transition-colors flex items-center gap-2 group">
                <span className="font-inter font-semibold">Resume</span>
                <LuDownload/>
              </Button>
            </a>
            <a href="#contact" className="flex items-center gap-1.5 group">
                <span className="font-inter font-semibold group-hover:underline">Contact Me</span>
                <FaArrowRight className="group-hover:translate-x-1 transform transition-all"/>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center md:w-1/2 relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glass flex items-center justify-center p-2 shadow-[0_0_30px_theme('colors.purple.500/30')]">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-card">
              <Image 
                src="/office-worker.png" 
                alt="Ananda Gautama Profile" 
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative orbit ring */}
            <div className="absolute inset-0 rounded-full border border-purple-500/30 -m-4 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-0 rounded-full border border-purple-300/10 -m-8 animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
