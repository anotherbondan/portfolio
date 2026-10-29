"use client";
import { cn } from "@/lib/utils";
import { IconButton } from "@/components/ui/icon-button";
import { useState, useRef, useEffect } from "react";
import { useColorTheme } from "@/components/color-theme-provider";
const themes = [
  { name: "Amethyst", value: "amethyst", colorClass: "bg-[#a855f7]" },
  { name: "Sapphire", value: "sapphire", colorClass: "bg-[#3b82f6]" },
  { name: "Emerald", value: "emerald", colorClass: "bg-[#22c55e]" },
  { name: "Topaz", value: "topaz", colorClass: "bg-[#f59e0b]" },
  { name: "Ruby", value: "ruby", colorClass: "bg-[#f43f5e]" },
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
      className="relative"
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
      <IconButton
        ref={trigger}
        aria-label="Choose accent color"
        aria-expanded={open}
        aria-controls="accent-options"
        onClick={() => setOpen(!open)}
      >
        <span className="size-[15px] rounded-full bg-accent" aria-hidden />
      </IconButton>
      {open && (
        <div
          id="accent-options"
          className="absolute top-13 right-0 w-[190px] border border-border bg-background p-2 shadow-[0_12px_30px_#0002]"
          role="group"
          aria-label="Accent color"
        >
          {themes.map((t) => (
            <button
              key={t.value}
              aria-pressed={colorTheme === t.value}
              className="flex min-h-11 w-full items-center gap-3 border-0 bg-transparent p-2.5 text-left text-[13px] hover:bg-surface aria-pressed:bg-surface"
              onClick={() => {
                setColorTheme(t.value);
                setOpen(false);
                trigger.current?.focus();
              }}
            >
              <span
                className={cn("size-3 rounded-full", t.colorClass)}
                aria-hidden
              />
              {t.name}
              {colorTheme === t.value && (
                <span className="ml-auto" aria-hidden>
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
