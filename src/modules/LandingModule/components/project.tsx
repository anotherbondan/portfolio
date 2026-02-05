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
    <Card className="group hover:animate-slow-bounce hover:ring-1 hover:ring-purple-200 flex gap-6 w-full border-1 border-neutral-500 hover:border-none transform p-10 rounded-2xl tracking-wider transition-all hover:shadow-[0_0_10px_theme('colors.purple.500')]">
      <div className="h-72 aspect-video overflow-hidden shrink-0">
        <img
          src={data.cover}
          alt="icon"
          className="h-full w-full rounded-xl object-cover transition-all group-hover:brightness-50"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h1 className="font-inter text-3xl font-semibold text-neutral-300">
              {data.title}
            </h1>
            <p className="text-card-disabled font-inter text-lg font-light">
              {data.date}
            </p>
          </div>
          <p className="text-card-disabled font-inter text-md font-light">{data.desc}</p>
          {children}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.sourceCode && (
            <Link href={data.sourceCode} target="_blank">
              <Button className="bg-card-hover w-full font-inter flex items-center justify-center  gap-4 rounded-lg border-card-disabled hover:ring-px hover:ring-purple-200 px-4 py-4 text-lg">
                <GrGithub size={28} />
                Code
              </Button>
            </Link>
          )}
          {data.projectUrl && (
            <Link href={data.projectUrl} target="_blank">
              <Button className="font-inter flex w-full items-center justify-center  gap-4 rounded-lg border-purple-400 bg-purple-600 px-4 py-4 text-lg">
                <FaArrowUpRightFromSquare size={28} />
                View Site
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
