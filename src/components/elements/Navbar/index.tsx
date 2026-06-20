"use client";

import Button from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      <nav className="fixed top-6 z-50 flex w-full justify-center px-4">
        <div className="glass flex items-center justify-between backdrop-blur-md gap-6 md:gap-12 rounded-full px-4 py-3 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px_theme('colors.purple.500/20')] w-full max-w-5xl">
          
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
                      ? "bg-purple-500/20 text-purple-300"
                      : "text-neutral-300 hover:bg-white/5 hover:text-purple-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right: LinkedIn Reach Out & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/anandagautama/"
              target="_blank"
              className="hidden sm:block"
            >
              <Button className="flex h-10 items-center justify-center gap-2 rounded-full border-none bg-purple-600 px-5 py-2 hover:bg-purple-500 hover:shadow-[0_0_10px_theme('colors.purple.500/50')]">
                <FaLinkedin size={18} />
                <span className="font-inter hidden text-sm font-semibold md:block">
                  Reach Out
                </span>
              </Button>
            </Link>

            <button
              className="p-2 text-neutral-300 transition-colors hover:text-purple-400 md:hidden"
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
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 px-6 backdrop-blur-xl"
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
                <Button className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border-none bg-purple-600 hover:bg-purple-500">
                  <FaLinkedin size={24} />
                  <span className="font-inter text-lg font-semibold">
                    Connect on LinkedIn
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
