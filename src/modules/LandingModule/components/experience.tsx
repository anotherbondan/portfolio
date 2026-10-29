"use client";
import Image from "next/image";
import { journeyData } from "@/data/journey";
import TagList from "./tag";
import Disclosure from "@/components/disclosure";
import { Reveal } from "@/components/motion";
export default function Experience({
  data,
  index,
}: {
  data: (typeof journeyData)[number];
  index: number;
}) {
  return (
    <Reveal className="relative pb-11">
      <span
        className="absolute top-[5px] -left-8 size-[9px] border border-accent bg-background min-[768px]:-left-[42px]"
        aria-hidden
      />
      <p className="font-mono text-[11px] leading-[1.6] tracking-[0.1em] text-accent uppercase">
        {data.date}
      </p>
      <div className="my-5 flex items-start gap-3 min-[768px]:gap-4">
        <Image
          src={data.logo}
          alt=""
          className="size-9 shrink-0 object-contain min-[768px]:size-11"
          width={44}
          height={44}
        />
        <div>
          <h3 className="mb-1.5 text-[22px] leading-[1.2] font-medium min-[768px]:text-[23px]">
            {data.event}
          </h3>
          <p className="text-[12px] leading-[1.7] text-muted">{data.role}</p>
        </div>
      </div>
      <Disclosure
        variant="experience"
        id={"experience-" + index}
        summary={
          <span className="inline-flex min-h-11 items-center gap-3 text-[13px] underline-offset-[6px] group-hover/disclosure:text-accent group-hover/disclosure:underline group-focus-visible/disclosure:text-accent group-focus-visible/disclosure:underline">
            Responsibilities
          </span>
        }
      >
        <ul className="mt-2 mb-6 pl-4 text-xs leading-[1.9] text-muted [&_li+li]:mt-2">
          {data.descs.map((desc) => (
            <li key={desc}>{desc}</li>
          ))}
        </ul>
      </Disclosure>
      <TagList descList={data.tags} />
    </Reveal>
  );
}
