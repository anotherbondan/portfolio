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
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative mt-20 w-full overflow-hidden border-t border-black/5 bg-white/70 dark:border-white/5 dark:bg-neutral-900/70">
      <div className="pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 pt-16 pb-8 md:flex-row lg:px-8">
        {/* Brand / Navigation Links */}
        <div className="flex flex-col items-center gap-6 md:items-start">
          <h2 className="font-playfair-display text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            Ananda Gautama SK
          </h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:justify-start">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-inter hover:text-primary-600 dark:hover:text-primary-300 text-sm font-medium text-neutral-600 transition-colors dark:text-neutral-400"
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
              className="hover:text-primary-600 dark:hover:text-primary-400 text-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:scale-110 dark:text-neutral-400"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 border-t border-black/5 px-6 py-6 md:flex-row lg:px-8 dark:border-white/5">
        <p className="font-inter text-sm text-neutral-500">
          © {year} Ananda Gautama SK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
