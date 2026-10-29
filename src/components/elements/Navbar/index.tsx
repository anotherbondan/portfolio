"use client";
import { Container } from "@/components/ui/layout";
import { Brand } from "@/components/ui/brand";
import { IconButton } from "@/components/ui/icon-button";
import { TextLink } from "@/components/ui/text-link";
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
        <Container
          as="nav"
          className="flex min-h-17 items-center justify-between gap-5 min-[768px]:min-h-20"
          aria-label="Main navigation"
        >
          <Brand aria-label="Ananda Gautama, home" />
          <div className="hidden gap-7 min-[768px]:flex min-[768px]:max-[1024px]:gap-[18px]">
            {links.map((l) => (
              <Link
                key={l.id}
                href={"/#" + l.id}
                aria-current={active === l.id ? "location" : undefined}
                className="relative flex min-h-11 items-center text-[12px] text-muted after:absolute after:bottom-[5px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-[140ms] after:ease-linear hover:text-foreground hover:after:scale-x-100 aria-[current]:text-foreground aria-[current]:after:scale-x-100"
              >
                {l.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1.5 max-[360px]:gap-1">
            <ColorThemeDropdown />
            <IconButton
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
            </IconButton>
            <TextLink
              className="ml-3 max-[1024px]:hidden"
              href="https://www.linkedin.com/in/anandagautama/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </TextLink>
            <IconButton
              ref={trigger}
              className="min-[768px]:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Open navigation menu"
              onClick={() => setOpen(true)}
            >
              ☰
            </IconButton>
          </div>
        </Container>
      </header>
      <dialog
        id="mobile-navigation"
        ref={dialog}
        className="m-0 h-dvh max-h-dvh w-full max-w-none border-0 bg-background p-6 text-foreground backdrop:bg-[#0008]"
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
        <div>
          <div className="mb-10 flex items-center justify-between">
            <p
              id="menu-title"
              className="font-mono text-[11px] leading-[1.6] tracking-[0.1em] uppercase"
            >
              Navigation
            </p>
            <IconButton
              autoFocus
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              ×
            </IconButton>
          </div>
          <nav aria-label="Mobile navigation" className="grid">
            {links.map((l, i) => (
              <Link
                key={l.id}
                href={"/#" + l.id}
                onClick={() => setOpen(false)}
                className="flex items-center gap-5 border-t border-border py-5 font-display text-[32px]"
              >
                <span className="font-mono text-[11px] leading-[1.6]">
                  0{i + 1}
                </span>
                {l.name}
                <span className="ml-auto" aria-hidden>
                  ↗
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </dialog>
    </>
  );
}
