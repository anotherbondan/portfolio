"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin size={22} />,
      href: "https://www.linkedin.com/in/anandagautama/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={22} />,
      href: "https://github.com/anotherbondan",
      label: "GitHub",
    },
    {
      icon: <FaInstagram size={22} />,
      href: "https://instagram.com/nandaaskrr",
      label: "Instagram",
    },
    {
      icon: <FaXTwitter size={22} />,
      href: "https://x.com/bombdamn",
      label: "X",
    },
    {
      icon: <LuMail size={22} />,
      href: "mailto:anandagautama3112@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Experiences", href: "/#experience" },
    { name: "Tools", href: "/#tech" },
    { name: "Projects", href: "/#project" },
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-black/40 backdrop-blur-md relative overflow-hidden mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 pt-16 pb-8 md:flex-row lg:px-8 relative z-10">
        
        {/* Brand / Navigation Links */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <h2 className="font-playfair-display text-2xl font-bold text-neutral-200">
            Ananda Gautama
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-purple-300 font-inter text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-neutral-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-6 md:flex-row lg:px-8 border-t border-white/5 relative z-10">
        <p className="text-neutral-500 text-sm font-inter">
          © {year} Ananda Gautama. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
