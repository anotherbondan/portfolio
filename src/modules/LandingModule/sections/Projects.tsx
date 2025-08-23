import Project from "../components/project";
import TechList from "../components/tech-list";

const datas = [
  {
    cover: "/compfest.jpg",
    title: "Compfest Main Web",
    date: "May 2025",
    desc: "blablablablablablalbalblalblalblalbalblalblalblallbab",
    tech: ["/tools/ubuntu.svg", "/tools/figma.svg", "/techs/nextjs.svg"],
    sourceCode: "",
    projectUrl: "https://compfest.id/"
  },
  {
    cover: "/compfest.jpg",
    title: "Compfest Main Web",
    date: "May 2025",
    desc: "blablabla",
    tech: ["/tools/ubuntu.svg", "/tools/figma.svg", "/techs/nextjs.svg"],
    sourceCode: "",
    projectUrl: "https://compfest.id/"
  },
  {
    cover: "/compfest.jpg",
    title: "Compfest Main Web",
    date: "May 2025",
    desc: "blablabla",
    tech: ["/tools/ubuntu.svg", "/tools/figma.svg", "/techs/nextjs.svg"],
    sourceCode: "",
    projectUrl: ""
  },
];

export default function Projects() {
  return (
    <section id="project" className="min-h-screen flex flex-col gap-14 items-center justify-center">
      <h1 className="text-7xl font-playfair-display">Projects</h1>
      <div className="flex w-full justify-between items-center">
        {datas.map((data, idx) => (
          <Project key={idx} data={data}>
            <TechList data={data.tech} />
          </Project>
        ))}
      </div>
    </section>
  );
}
