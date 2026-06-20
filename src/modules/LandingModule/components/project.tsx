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
}

interface ProjectProps {
  children: ReactNode;
  data: projectData;
}

export default function Project({ data, children }: ProjectProps) {
  return (
    <Card className="group relative flex flex-col md:flex-row gap-8 w-full border border-white/5 p-6 md:p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_20px_40px_-15px_theme('colors.purple.500/20')] bg-black/40 overflow-hidden">
      {/* Background Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      {/* Image Container */}
      <div className="relative w-full md:w-2/5 aspect-video overflow-hidden rounded-2xl shrink-0 border border-white/5 bg-black/50">
        <img
          src={data.cover}
          alt={data.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Subtle overlay that fades out on hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between w-full md:w-3/5 py-2 z-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <h1 className="font-playfair-display text-3xl font-bold text-neutral-200 group-hover:text-purple-300 transition-colors duration-300">
              {data.title}
            </h1>
            <span className="self-start font-inter text-xs font-semibold tracking-wide text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
              {data.date}
            </span>
          </div>
          <p className="text-neutral-400 font-inter text-base font-light leading-relaxed">
            {data.desc}
          </p>
          <div className="pt-2">
            {children}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-8">
          {data.projectUrl && (
            <Link href={data.projectUrl} target="_blank" className="group/btn flex-1">
              <Button className="w-full font-inter flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_theme('colors.purple.500/40')]">
                View Project
                <FaArrowUpRightFromSquare size={14} className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </Button>
            </Link>
          )}
          {data.sourceCode && (
            <Link href={data.sourceCode} target="_blank" className="group/btn flex-1">
              <Button className="w-full font-inter flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 px-6 py-3 text-sm font-semibold transition-all duration-300">
                <GrGithub size={16} className="transition-transform duration-300 group-hover/btn:scale-110" />
                Source Code
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
