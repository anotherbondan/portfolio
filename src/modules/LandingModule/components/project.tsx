import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";

interface projectData {
  cover: string;
  title: string;
  desc: string;
  date: string;
  sourceCode: string;
  projectUrl: string;
  category?: string;
}

interface ProjectProps {
  children: ReactNode;
  data: projectData;
}

export default function Project({ data, children }: ProjectProps) {
  return (
    <Card className="group relative flex w-full flex-col gap-6 rounded-3xl border border-white/5 bg-black/40 p-5 transition-all duration-500 before:absolute before:-inset-4 before:-z-10 before:content-[''] hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_20px_40px_-15px_theme('colors.purple.500/20')] lg:flex-row lg:gap-8 lg:rounded-[2rem] lg:p-8">
      {/* Background Glow on hover */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:rounded-[2rem]" />

      {/* Image Container */}
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-white/5 bg-black/50 lg:w-2/5 lg:rounded-2xl">
        <img
          src={data.cover}
          alt={data.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Subtle overlay that fades out on hover */}
        <div className="pointer-events-none absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-transparent" />
      </div>

      {/* Content Container */}
      <div className="z-10 flex w-full flex-col justify-between py-1 lg:w-3/5 lg:py-2">
        <div className="flex flex-col gap-4 lg:gap-5">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
            <h1 className="font-playfair-display text-2xl font-bold text-neutral-200 transition-colors duration-300 group-hover:text-purple-300 lg:text-3xl">
              {data.title}
            </h1>
            <span className="font-inter self-start rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-purple-300 lg:text-xs">
              {data.date}
            </span>
          </div>
          <p className="font-inter text-sm leading-relaxed font-light text-neutral-400 lg:text-base">
            {data.desc}
          </p>
          {children}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:mt-8">
          {data.projectUrl && (
            <Link
              href={data.projectUrl}
              target="_blank"
              className="group/btn flex-1"
            >
              <Button className="font-inter flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_20px_theme('colors.purple.500/40')] lg:px-6">
                View Project
                <FaArrowUpRightFromSquare
                  size={14}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </Button>
            </Link>
          )}
          {data.sourceCode && (
            <Link
              href={data.sourceCode}
              target="_blank"
              className="group/btn flex-1"
            >
              <Button className="font-inter flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-neutral-300 transition-all duration-300 hover:bg-white/10 hover:text-white lg:px-6">
                <GrGithub
                  size={16}
                  className="transition-transform duration-300 group-hover/btn:scale-110"
                />
                Source Code
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
