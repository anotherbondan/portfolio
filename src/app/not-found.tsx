"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden pt-32 pb-20 sm:gap-12 lg:py-20">
      <div className="z-10 flex h-full w-full max-w-4xl flex-col items-center justify-center gap-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-5 sm:gap-6"
        >
          {/* Animated Glow Behind 404 */}
          <div className="group relative">
            <div className="absolute -inset-4 animate-[spin_8s_linear_infinite] rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-purple-400 opacity-20 blur-2xl transition-opacity duration-700 group-hover:opacity-40" />
            <h1 className="font-playfair-display relative text-8xl font-black tracking-tighter text-neutral-900 md:text-9xl dark:text-neutral-100">
              <span className="bg-gradient-to-br from-purple-600 to-purple-400 bg-clip-text text-transparent [text-shadow:0_0_15px_theme('colors.purple.500/30')] dark:from-purple-400 dark:to-purple-300">
                404
              </span>
            </h1>
          </div>

          <div className="my-2 h-px w-24 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

          <h2 className="font-playfair-display text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-neutral-100">
            Page Not Found
          </h2>

          <p className="font-inter max-w-md text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className="mt-4 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Button
              asChild
              className="group w-full rounded-full border-none bg-purple-600 px-8 py-3.5 transition-colors hover:bg-purple-500 sm:w-auto"
            >
              <Link href="/">
                <span className="font-inter flex items-center gap-2 font-semibold text-neutral-100">
                  <FaArrowLeft className="transform transition-all group-hover:-translate-x-1" />
                  Back to Home
                </span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
