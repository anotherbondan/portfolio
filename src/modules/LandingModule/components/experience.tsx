"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";

interface ExperienceData {
  logo: string;
  event: string;
  role: string;
  date: string;
  descs: string[];
}

type ExperienceProps = {
  children: ReactNode;
  data: ExperienceData;
  index: number;
};

const Experience: React.FC<ExperienceProps> = ({ data, children, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex w-full lg:w-1/2">
      <div
        className={`flex w-full flex-row items-center gap-6 lg:gap-8 ${
          index % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
        } pl-16 lg:pl-0`}
      >
        <div
          className={`bg-primary-500 shadow-[0_0_5px_theme('colors.primary.500')] absolute left-[1.6rem] h-4 w-4 shrink-0 rounded-full max-lg:-translate-x-4 lg:static lg:left-auto ${
            index % 2 == 0 ? "lg:translate-x-1/2" : "lg:-translate-x-1/2"
          } dark:bg-primary-200 z-10`}
        ></div>
        <div className="group hover:border-primary-500/30 relative min-h-64 w-full max-w-156 rounded-3xl border border-black/10 bg-white/70 p-6 transition-all duration-300 before:absolute before:-inset-4 before:-z-10 before:content-[''] hover:-translate-y-2 max-lg:max-w-full lg:p-7 dark:border-white/10 dark:bg-neutral-900/70">
          <div className="from-primary-500/5 pointer-events-none absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="flex h-full flex-col gap-3">
            <div className="flex items-center gap-3 max-md:flex-col max-md:items-start">
              <div className="relative h-20 min-w-20 overflow-hidden rounded-xl border-1 border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
                {data?.logo ? (
                  <Image
                    src={data?.logo}
                    alt="icon"
                    fill
                    sizes="80px"
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="p-4">
                    <FaBriefcase className="h-full w-full" />
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="font-inter text-2xl font-semibold">
                  {data?.event ?? "Event"}
                </h2>
                <h3 className="font-inter text-md text-neutral-600 dark:text-neutral-300">
                  {data?.role ?? "Role"}
                </h3>
                <div className="flex items-center gap-1">
                  <LuCalendar color="#999999" />
                  <span className="font-inter text-card-disabled text-sm">
                    {data?.date ?? "Date"}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-2 flex h-full flex-col justify-between gap-4">
              <div
                className={`flex-col gap-2 ${!isExpanded ? "hidden md:flex" : "flex"}`}
              >
                <ul className="font-inter text-card-disabled list-disc pl-4 text-sm">
                  {data.descs.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary-400 hover:text-primary-300 flex items-center gap-2 text-sm font-semibold md:hidden"
              >
                {isExpanded ? (
                  <>
                    Show Less <FaChevronUp className="text-xs" />
                  </>
                ) : (
                  <>
                    Show Description <FaChevronDown className="text-xs" />
                  </>
                )}
              </button>

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
