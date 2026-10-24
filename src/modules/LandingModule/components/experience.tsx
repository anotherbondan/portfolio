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
    <Reveal className="experience">
      <span className="spine-dot" aria-hidden />
      <p className="eyebrow accent">{data.date}</p>
      <div className="experience-header">
        <Image src={data.logo} alt="" width={44} height={44} />
        <div>
          <h3>{data.event}</h3>
          <p className="muted">{data.role}</p>
        </div>
      </div>
      <Disclosure
        id={"experience-" + index}
        summary={<span className="text-link">Responsibilities</span>}
      >
        <ul className="experience-description">
          {data.descs.map((desc) => (
            <li key={desc}>{desc}</li>
          ))}
        </ul>
      </Disclosure>
      <TagList descList={data.tags} />
    </Reveal>
  );
}
