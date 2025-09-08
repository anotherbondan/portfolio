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
    <Card className="group rounded-xl flex flex-col w-100 h-136 tracking-wider transition-all hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_10px_theme('colors.purple.500')] hover:animate-slow-bounce">
      <div className="w-full h-72 p-6 overflow-hidden">
        <img
          src={data.cover}
          alt="icon"
          className="w-full h-full rounded-lg object-cover group-hover:brightness-50 transition-all"
        />
      </div>
      <div className="flex flex-col px-6 pb-6 justify-between h-full">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h1 className="font-semibold font-inter text-2xl text-purple-500">
              {data.title}
            </h1>
            <p className="text-card-disabled text-xs font-light font-inter">
              {data.date}
            </p>
          </div>
          <p className="text-xs text-card-disabled font-inter">{data.desc}</p>
          {children}
        </div>
        <div className="flex w-full gap-4">
          {data.sourceCode && (
            <Button className="flex items-center bg-card-hover border-purple-400 gap-4 px-4 rounded-lg text-sm font-inter py-2">
              <GrGithub />
              <Link href={data.sourceCode} target="_blank">
                Code
              </Link>
            </Button>
          )}
          {data.projectUrl && (
            <Button className="flex items-center gap-4 rounded-lg px-4 bg-purple-600 border-purple-400 text-sm font-inter py-2">
              <FaArrowUpRightFromSquare />
              <Link href={data.projectUrl} target="_blank">
                View Site
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
