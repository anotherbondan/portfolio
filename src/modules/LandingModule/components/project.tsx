import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
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
    <Card className="group hover:border-primary-500/30 relative flex w-full flex-col gap-6 rounded-3xl border border-black/5 bg-white/70 p-5 transition-all duration-500 before:absolute before:-inset-4 before:-z-10 before:content-[''] hover:-translate-y-2 lg:flex-row lg:gap-8 lg:rounded-[2rem] lg:p-8 dark:border-white/5 dark:bg-neutral-900/70">
      {/* Background Glow on hover */}
      <div className="from-primary-500/5 pointer-events-none absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:rounded-[2rem]" />

      {/* Image Container */}
      <div className="relative aspect-2/1 w-full shrink-0 overflow-hidden rounded-xl border border-black/5 bg-neutral-100 lg:w-2/5 lg:rounded-2xl dark:border-white/5 dark:bg-neutral-900/70">
        <Image
          src={data.cover}
          alt={data.title}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Subtle overlay that fades out on hover */}
        <div className="pointer-events-none absolute inset-0 bg-neutral-900/10 transition-colors duration-500 group-hover:bg-transparent" />
      </div>

      {/* Content Container */}
      <div className="z-10 flex w-full flex-col justify-between py-1 lg:w-3/5 lg:py-2">
        <div className="flex flex-col gap-4 lg:gap-2">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
            <h3 className="font-playfair-display group-hover:text-primary-600 dark:group-hover:text-primary-300 text-2xl font-bold text-neutral-800 transition-colors duration-300 lg:text-3xl dark:text-neutral-200">
              {data.title}
            </h3>
            <span className="font-inter border-primary-500/20 bg-primary-500/10 text-primary-600 dark:text-primary-300 self-start rounded-full border px-3 py-1.5 text-[10px] font-semibold tracking-wide lg:text-xs">
              {data.date}
            </span>
          </div>
          <p className="font-inter text-sm leading-relaxed font-light text-neutral-600 lg:text-base dark:text-neutral-400">
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
              <Button className="font-inter bg-primary-600 hover:bg-primary-500 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 lg:px-6">
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
              <Button className="font-inter flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-sm font-semibold text-neutral-700 transition-all duration-300 hover:bg-black/10 hover:text-black lg:px-6 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white">
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
