"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/anandagautama/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/anotherbondan",
      label: "GitHub",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://instagram.com/nandaaskrr",
      label: "Instagram",
    },
    {
      icon: <FaXTwitter size={20} />,
      href: "https://x.com/bombdamn",
      label: "X",
    },
    {
      icon: <LuMail size={20} />,
      href: "mailto:anandagautama3112@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Experiences", href: "#experience" },
    { name: "Tools", href: "#tech" },
    { name: "Projects", href: "#project" },
  ];

  return (
    <footer
      className="border-card-hover bg-card text-card-hover relative overflow-hidden border-t"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 pt-12 pb-6 md:flex-row lg:px-8">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-neutral-500 hover:text-neutral-300 ground font-inter text-sm transition-colors"
            >
              {link.name}
            </Link>
          ))}
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
              className="text-neutral-500 hover:text-neutral-300 transition-transform hover:scale-110"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className=" mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-6 md:flex-row lg:px-8">
        <p className="text-neutral-500 text-sm font-inter">
          © {year} Ananda Gautama. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
