"use client";

import Button from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Tools", href: "#tech", id: "tech" },
    { name: "Projects", href: "#project", id: "project" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Find the section that is currently most visible
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

  return (
    <nav className="fixed top-6 z-50 flex w-full justify-center px-4">
      <div className="glass flex items-center justify-between gap-6 md:gap-12 rounded-full px-4 py-3 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px_theme('colors.purple.500/20')]">
        
        {/* Left: Logo */}
        <Link href="/#home" className="flex items-center justify-center transform transition-transform hover:scale-105 hover:-rotate-12 pl-2">
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

        {/* Right: LinkedIn Reach Out */}
        <Link href="https://www.linkedin.com/in/anandagautama/" target="_blank">
          <Button className="flex h-10 items-center justify-center gap-2 rounded-full px-5 py-2 bg-purple-600 border-none hover:bg-purple-500 hover:shadow-[0_0_10px_theme('colors.purple.500/50')]">
            <FaLinkedin size={18} />
            <span className="font-inter text-sm font-semibold hidden md:block">
              Reach Out
            </span>
          </Button>
        </Link>
        
      </div>
    </nav>
  );
}
