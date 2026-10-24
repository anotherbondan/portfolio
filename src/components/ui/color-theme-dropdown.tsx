"use client";
import { useState, useRef, useEffect } from "react";
import { useColorTheme } from "@/components/color-theme-provider";
const themes = [
  { name: "Amethyst", value: "amethyst", color: "#a855f7" },
  { name: "Sapphire", value: "sapphire", color: "#3b82f6" },
  { name: "Emerald", value: "emerald", color: "#22c55e" },
  { name: "Topaz", value: "topaz", color: "#f59e0b" },
  { name: "Ruby", value: "ruby", color: "#f43f5e" },
] as const;
export function ColorThemeDropdown() {
  const [open, setOpen] = useState(false);
  const { colorTheme, setColorTheme } = useColorTheme();
  const ref = useRef<HTMLDivElement>(null),
    trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const handler = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [open]);
  return (
    <div
      className="color-dropdown"
      ref={ref}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={trigger}
        className="icon-button"
        aria-label="Choose accent color"
        aria-expanded={open}
        aria-controls="accent-options"
        onClick={() => setOpen(!open)}
      >
        <span className="color-indicator" aria-hidden />
      </button>
      {open && (
        <div
          id="accent-options"
          className="color-options"
          role="group"
          aria-label="Accent color"
        >
          {themes.map((t) => (
            <button
              key={t.value}
              aria-pressed={colorTheme === t.value}
              onClick={() => {
                setColorTheme(t.value);
                setOpen(false);
                trigger.current?.focus();
              }}
            >
              <span style={{ background: t.color }} aria-hidden />
              {t.name}
              {colorTheme === t.value && (
                <span className="color-check" aria-hidden>
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
