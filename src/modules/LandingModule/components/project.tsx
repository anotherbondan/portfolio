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
    <Card className="group hover:animate-slow-bounce flex h-136 w-100 flex-col rounded-xl tracking-wider transition-all hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_10px_theme('colors.purple.500')]">
      <div className="h-72 w-full overflow-hidden p-6">
        <img
          src={data.cover}
          alt="icon"
          className="h-full w-full rounded-lg object-cover transition-all group-hover:brightness-50"
        />
      </div>
      <div className="flex h-full flex-col justify-between px-6 pb-6">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h1 className="font-inter text-2xl font-semibold text-purple-500">
              {data.title}
            </h1>
            <p className="text-card-disabled font-inter text-xs font-light">
              {data.date}
            </p>
          </div>
          <p className="text-card-disabled font-inter text-xs">{data.desc}</p>
          {children}
        </div>
        <div className="flex w-full gap-4">
          {data.sourceCode && (
            <Link href={data.sourceCode} target="_blank">
              <Button className="bg-card-hover font-inter flex items-center gap-4 rounded-lg border-purple-400 px-4 py-2 text-sm">
                <GrGithub />
                Code
              </Button>
            </Link>
          )}
          {data.projectUrl && (
            <Link href={data.projectUrl} target="_blank">
              <Button className="font-inter flex items-center gap-4 rounded-lg border-purple-400 bg-purple-600 px-4 py-2 text-sm">
                <FaArrowUpRightFromSquare />
                View Site
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
