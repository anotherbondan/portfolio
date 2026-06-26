"use client";

import Button from "@/components/ui/button";
import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { ColorThemeDropdown } from "@/components/ui/color-theme-dropdown";

const navLinks = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "Experiences", href: "/#experience", id: "experience" },
  { name: "Tools", href: "/#tech", id: "tech" },
  { name: "Projects", href: "/#project", id: "project" },
  { name: "Contact", href: "/#contact", id: "contact" },
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
        <div className="glass gap-auto flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 md:gap-6">
          {/* Left: Logo */}
          <Link
            href="/#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex transform items-center justify-center pl-2 transition-transform hover:scale-105 hover:-rotate-12"
          >
            <div className="relative h-10 w-10">
              <Image
                src="/portfolio.webp"
                alt="Logo"
                fill
                sizes="40px"
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
                      ? "bg-primary-500/20 text-primary-600 dark:text-primary-300"
                      : "hover:text-primary-500 dark:hover:text-primary-400 text-neutral-500 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right: LinkedIn Reach Out & Mobile Hamburger */}
          <div className="flex shrink-0 items-center gap-2 md:gap-4">
            <Button
              asChild
              className="bg-primary-600 hover:bg-primary-500 hidden h-10 w-fit items-center justify-center gap-1 rounded-full border-none px-3 py-2 sm:block md:flex"
            >
              <Link
                href="https://www.linkedin.com/in/anandagautama/"
                target="_blank"
                aria-label="Reach out on LinkedIn"
              >
                <FaLinkedin size={18} className="text-neutral-100" />
                <span className="font-inter text-sm font-semibold text-neutral-100 max-lg:hidden max-lg:text-xs">
                  Reach Out
                </span>
              </Link>
            </Button>

            {mounted && (
              <>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="hover:text-primary-500 dark:hover:text-primary-400 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-neutral-600 transition-colors hover:bg-black/20 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <FaSun size={18} />
                  ) : (
                    <FaMoon size={18} />
                  )}
                </button>
                <ColorThemeDropdown />
              </>
            )}

            <button
              className="hover:text-primary-500 dark:hover:text-primary-400 p-2 text-neutral-700 transition-colors md:hidden dark:text-neutral-200"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
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
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-neutral-900/70 px-6 py-6 backdrop-blur-md"
            style={{ WebkitBackdropFilter: "blur(12px)" }}
          >
            <button
              className="hover:text-primary-500 dark:hover:text-primary-400 absolute top-8 right-8 p-2 text-neutral-100 transition-colors dark:text-neutral-300"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
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
                      ? "text-primary-600 dark:text-primary-400"
                      : "hover:text-primary-500 dark:hover:text-primary-300 text-neutral-100 dark:text-neutral-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="https://www.linkedin.com/in/anandagautama/"
                target="_blank"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="bg-primary-600 hover:bg-primary-500 flex w-full items-center justify-center gap-3 rounded-2xl border-none py-4">
                  <FaLinkedin size={24} className="text-neutral-100" />
                  <span className="font-inter text-lg font-semibold text-neutral-100">
                    Connect on LinkedIn
                  </span>
                </Button>
              </Link>

              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="hover:text-primary-500 dark:hover:text-primary-400 flex w-full items-center justify-center gap-3 rounded-2xl bg-black/5 py-4 text-neutral-100 transition-colors hover:bg-black/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/10"
                >
                  {theme === "dark" ? (
                    <>
                      <FaSun size={24} />
                      <span className="font-inter text-lg font-semibold">
                        Light Mode
                      </span>
                    </>
                  ) : (
                    <>
                      <FaMoon size={24} />
                      <span className="font-inter text-lg font-semibold">
                        Dark Mode
                      </span>
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
