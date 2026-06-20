"use client";

import Button from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Tools", href: "#tech", id: "tech" },
    { name: "Projects", href: "#project", id: "project" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      sections.forEach(section => {
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
        <div className="glass flex items-center justify-between gap-6 md:gap-12 rounded-full px-4 py-3 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px_theme('colors.purple.500/20')] w-full max-w-5xl">
          
          {/* Left: Logo */}
          <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center transform transition-transform hover:scale-105 hover:-rotate-12 pl-2">
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
          <div className="hidden md:flex items-center justify-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`font-inter text-sm font-medium transition-all px-4 py-2 rounded-full ${
                    isActive 
                      ? "bg-purple-500/20 text-purple-300" 
                      : "text-neutral-300 hover:text-purple-400 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right: LinkedIn Reach Out & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/anandagautama/" target="_blank" className="hidden sm:block">
              <Button className="flex h-10 items-center justify-center gap-2 rounded-full px-5 py-2 bg-purple-600 border-none hover:bg-purple-500 hover:shadow-[0_0_10px_theme('colors.purple.500/50')]">
                <FaLinkedin size={18} />
                <span className="font-inter text-sm font-semibold hidden md:block">
                  Reach Out
                </span>
              </Button>
            </Link>
            
            <button 
              className="md:hidden p-2 text-neutral-300 hover:text-purple-400 transition-colors"
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
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center px-6"
          >
            <button 
              className="absolute top-8 right-8 p-2 text-neutral-300 hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HiX size={36} />
            </button>
            
            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
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
              
              <Link href="https://www.linkedin.com/in/anandagautama/" target="_blank" className="w-full mt-8" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full flex h-14 items-center justify-center gap-3 rounded-2xl bg-purple-600 border-none hover:bg-purple-500">
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
