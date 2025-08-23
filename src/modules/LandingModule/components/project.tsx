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
    <Card className="rounded-xl flex flex-col w-86 h-136">
      <img
        src={data.cover}
        alt="icon"
        className="rounded-t-xl w-full h-46 object-cover"
      />
      <div className="flex flex-col p-6 justify-between h-full">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h1 className="font-semibold font-playfair-display text-xl">{data.title}</h1>
            <h2 className="text-card-disabled text-xs font-inter">{data.date}</h2>
          </div>
          <p className="text-sm text-card-disabled break-words font-inter">{data.desc}</p>
          {children}
        </div>
        <div className="flex w-full gap-2">
          {data.sourceCode && (
            <Button className="flex items-center bg-card-hover border-card-disabled gap-4 px-3 rounded-lg  font-inter py-1">
              <GrGithub />
              <Link href={data.sourceCode} target="_blank">
                Code
              </Link> 
            </Button>
          )}
          {data.projectUrl && (
            <Button className="flex items-center gap-4 rounded-lg px-6 bg-purple-600 border-none font-inter py-1">
              <FaArrowUpRightFromSquare />
              <Link href={data.projectUrl} target="_blank">
                View Project
              </Link> 
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
