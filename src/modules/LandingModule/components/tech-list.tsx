"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { frontend, backend, database, devops } from "@/data/tech";
const items = [...frontend, ...backend, ...database, ...devops];
export function TechIcon({ src, label }: { src: string; label: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const mono = [
    "shadcn-ui",
    "radix-ui",
    "framer",
    "better-auth",
    "drizzle",
    "vercel",
    "resend",
    "open-ai",
    "github",
    "railway",
    "tanstack",
  ].some((t) => src.includes(t));
  const image =
    mounted && resolvedTheme === "light" && mono
      ? src.replace(/.(svg|png)$/, "-black.$1")
      : src;
  return <Image src={image} alt="" width={24} height={24} title={label} />;
}
export default function TechList({ data }: { data: string[] }) {
  return (
    <ul className="tech-list">
      {data.map((src) => {
        const label =
          items.find((i) => i.src === src)?.alt ??
          src.split("/").pop()!.replace(".svg", "");
        return (
          <li key={src}>
            <TechIcon src={src} label={label} />
            <span>{label}</span>
          </li>
        );
      })}
    </ul>
  );
}
