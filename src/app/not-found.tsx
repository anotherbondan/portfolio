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
            <div className="from-primary-600 to-primary-400 absolute -inset-4 rounded-full bg-gradient-to-tr via-fuchsia-500 opacity-20 blur-2xl transition-opacity duration-700 group-hover:opacity-40" />
            <h1 className="font-playfair-display relative text-8xl font-black tracking-tighter text-neutral-900 md:text-9xl dark:text-neutral-100">
              <span className="from-primary-600 to-primary-400 [text-shadow:0_0_15px_theme('colors.primary.500/30')] dark:from-primary-400 dark:to-primary-300 bg-gradient-to-br bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </div>

          <div className="via-primary-500/50 my-2 h-px w-24 bg-gradient-to-r from-transparent to-transparent"></div>

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
              className="group bg-primary-600 hover:bg-primary-500 w-full rounded-full border-none px-8 py-3.5 transition-colors sm:w-auto"
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
