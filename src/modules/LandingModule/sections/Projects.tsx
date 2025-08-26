import Project from "../components/project";
import TechList from "../components/tech-list";

const datas = [
  {
    cover: "/compfest-web.png",
    title: "COMPFEST 17",
    date: "May 2025",
    desc: "Official event website of COMPFEST, Indonesia's largest IT event by Fasilkom UI students. Contributed as a software engineer by designing and implementing an engaging, interactive frontend that enhanced user experience.",
    tech: ["/techs/tailwind-css.svg", "/techs/nextjs.svg"],
    sourceCode: "https://github.com/COMPFEST",
    projectUrl: "https://compfest.id/",
  },
  {
    cover: "/ddp0-web.png",
    title: "DDP0 2025",
    date: "July 2025",
    desc: "blablabla",
    tech: ["/tools/ubuntu.svg", "/tools/figma.svg", "/techs/nextjs.svg"],
    sourceCode: "https://github.com/DDP0",
    projectUrl: "https://ddp0.csui.dev/",
  },
  {
    cover: "/ijtihad-web.png",
    title: "Ijtihad",
    date: "Aug 2025",
    desc: "blablabla",
    tech: ["/tools/ubuntu.svg", "/tools/figma.svg", "/techs/nextjs.svg"],
    sourceCode: "",
    projectUrl: "https://ijtihad.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="project"
      className="min-h-screen flex flex-col gap-14 items-center justify-center"
    >
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
