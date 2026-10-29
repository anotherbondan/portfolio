"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { frontend, backend, database, devops } from "@/data/tech";
const items = [...frontend, ...backend, ...database, ...devops];
export function TechIcon({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) {
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
  return (
    <Image
      src={image}
      alt=""
      width={24}
      height={24}
      title={label}
      className={className}
    />
  );
}
export default function TechList({ data }: { data: string[] }) {
  return (
    <ul className="mt-5 flex list-none flex-wrap gap-1.5 p-0">
      {data.map((src) => {
        const label =
          items.find((i) => i.src === src)?.alt ??
          src.split("/").pop()!.replace(".svg", "");
        return (
          <li
            key={src}
            className="flex items-center gap-1.5 border border-border px-2 py-1.5 text-[9px] text-muted"
          >
            <TechIcon
              src={src}
              label={label}
              className="size-[15px] object-contain"
            />
            <span>{label}</span>
          </li>
        );
      })}
    </ul>
  );
}
