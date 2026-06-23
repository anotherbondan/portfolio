"use client";

import Button from "@/components/ui/button";
import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Tools", href: "#tech", id: "tech" },
  { name: "Projects", href: "#project", id: "project" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-6 z-50 flex w-full justify-center px-3">
        <div className="glass flex w-full max-w-5xl items-center justify-between gap-auto rounded-full px-4 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 md:gap-12">
          {/* Left: Logo */}
          <Link
            href="/#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex transform items-center justify-center pl-2 transition-transform hover:scale-105 hover:-rotate-12"
          >
            <div className="relative h-10 w-10">
              <Image
                src="/portfolio.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Center: Desktop Menu */}
          <div className="hidden items-center justify-center gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-inter rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-purple-500/20 text-purple-300 not-dark:text-purple-500"
                      : "text-neutral-300 not-dark:text-neutral-700 hover:bg-white/5 hover:text-purple-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right: LinkedIn Reach Out & Mobile Hamburger */}
          <div className="flex items-center shrink-0 gap-4">
            <Button
              asChild
              className="hidden h-10 w-fit items-center justify-center gap-1 rounded-full border-none bg-purple-600 px-3 py-2 hover:bg-purple-500   sm:block md:flex"
            >
              <Link
                href="https://www.linkedin.com/in/anandagautama/"
                target="_blank"
              >
                <FaLinkedin size={18} className="text-neutral-100"/>
                <span className="font-inter text-sm font-semibold max-lg:text-xs text-neutral-100 max-lg:hidden">
                  Reach Out
                </span>
              </Link>
            </Button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-neutral-600 transition-colors hover:bg-black/20 hover:text-purple-500 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-purple-400"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            )}

            <button
              className="p-2 text-neutral-700 dark:text-neutral-200 transition-colors hover:text-purple-400 md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HiMenu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-neutral-900/70 px-6 backdrop-blur-md"
          >
            <button
              className="absolute top-8 right-8 p-2 text-neutral-300 transition-colors hover:text-purple-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HiX size={36} />
            </button>

            <div className="flex w-full max-w-sm flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-playfair-display text-4xl font-bold transition-all ${
                    activeSection === link.id
                      ? "text-purple-400"
                      : "text-neutral-300 hover:text-purple-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="https://www.linkedin.com/in/anandagautama/"
                target="_blank"
                className="mt-8 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="flex py-4 w-full items-center justify-center gap-3 rounded-2xl border-none bg-purple-600 hover:bg-purple-500">
                  <FaLinkedin size={24} className="text-neutral-100"/>
                  <span className="font-inter text-lg font-semibold text-neutral-100">
                    Connect on LinkedIn
                  </span>
                </Button>
              </Link>

              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex py-4 w-full items-center justify-center gap-3 rounded-2xl bg-black/30 text-neutral-100 transition-colors hover:bg-black/20 hover:text-purple-500 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-purple-400"
                >
                  {theme === "dark" ? (
                    <>
                      <FaSun size={24} />
                      <span className="font-inter text-lg font-semibold">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <FaMoon size={24}/>
                      <span className="font-inter text-lg font-semibold ">Dark Mode</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
