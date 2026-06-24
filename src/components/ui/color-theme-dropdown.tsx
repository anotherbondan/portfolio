"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPalette } from "react-icons/fa6";
import { useColorTheme } from "@/components/color-theme-provider";

const themes = [
  { name: "Amethyst", value: "amethyst", colorClass: "bg-purple-500" },
  { name: "Sapphire", value: "sapphire", colorClass: "bg-blue-500" },
  { name: "Emerald", value: "emerald", colorClass: "bg-emerald-500" },
  { name: "Topaz", value: "topaz", colorClass: "bg-amber-500" },
  { name: "Ruby", value: "ruby", colorClass: "bg-rose-500" },
] as const;

export function ColorThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorTheme, setColorTheme } = useColorTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-neutral-600 transition-colors hover:bg-black/20 hover:text-primary-500 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-primary-400"
        aria-label="Toggle color theme"
      >
        <FaPalette size={18} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 z-50 w-36 rounded-2xl border border-white/10 bg-white/80 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-black/80"
          >
            <div className="flex flex-col gap-1">
              {themes.map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => {
                    setColorTheme(theme.value);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                    colorTheme === theme.value
                      ? "bg-primary-500/20 text-primary-600 dark:text-primary-400"
                      : "text-neutral-600 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/5 hover:text-primary-500 dark:hover:text-primary-400"
                  }`}
                >
                  <div className={`h-4 w-4 rounded-full ${theme.colorClass}`} />
                  {theme.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
