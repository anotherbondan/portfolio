"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ColorThemeDropdown } from "@/components/ui/color-theme-dropdown";
const links = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "project" },
  { name: "Journey", id: "experience" },
  { name: "Tools", id: "tech" },
  { name: "Contact", id: "contact" },
];
export default function Navbar() {
  const [active, setActive] = useState("home"),
    [open, setOpen] = useState(false),
    [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const dialog = useRef<HTMLDialogElement>(null),
    trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const d = dialog.current!;
    const menuTrigger = trigger.current;
    const previous = document.body.style.overflow;
    d.showModal();
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 768px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", resize);
    return () => {
      d.close();
      document.body.style.overflow = previous;
      menuTrigger?.focus();
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <>
      <header className="site-header">
        <nav className="nav-bar container" aria-label="Main navigation">
          <Link
            href="/#home"
            className="brand"
            aria-label="Ananda Gautama, home"
          >
            ag<span className="accent">.</span>
          </Link>
          <div className="desktop-nav">
            {links.map((l) => (
              <Link
                key={l.id}
                href={"/#" + l.id}
                aria-current={active === l.id ? "location" : undefined}
              >
                {l.name}
              </Link>
            ))}
          </div>
          <div className="nav-controls">
            <ColorThemeDropdown />
            <button
              className="icon-button"
              aria-label={
                mounted && resolvedTheme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              <span aria-hidden>
                {mounted && resolvedTheme === "light" ? "☾" : "☼"}
              </span>
            </button>
            <a
              className="linkedin-nav text-link"
              href="https://www.linkedin.com/in/anandagautama/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <button
              ref={trigger}
              className="icon-button menu-trigger"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Open navigation menu"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>
        </nav>
      </header>
      <dialog
        id="mobile-navigation"
        ref={dialog}
        className="mobile-dialog"
        aria-labelledby="menu-title"
        onCancel={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const items = event.currentTarget.querySelectorAll<
            HTMLButtonElement | HTMLAnchorElement
          >("button, a[href]");
          const first = items[0],
            last = items[items.length - 1];
          if (
            event.shiftKey &&
            (document.activeElement === first ||
              document.activeElement === event.currentTarget)
          ) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="mobile-menu">
          <div className="mobile-menu-top">
            <p id="menu-title" className="eyebrow">
              Navigation
            </p>
            <button
              autoFocus
              className="icon-button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {links.map((l, i) => (
              <Link
                key={l.id}
                href={"/#" + l.id}
                onClick={() => setOpen(false)}
              >
                <span className="mono">0{i + 1}</span>
                {l.name}
                <span aria-hidden>↗</span>
              </Link>
            ))}
          </nav>
        </div>
      </dialog>
    </>
  );
}
