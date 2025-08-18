import Slider from "../components/slider";

const techs = [
  { src: "/techs/chakra-ui.svg", alt: "Chakra UI" },
  { src: "/techs/nextjs.svg", alt: "NextJS" },
  { src: "/techs/express-js.svg", alt: "ExpressJS" },
  { src: "/techs/prisma-orm.svg", alt: "Prisma" },
  { src: "/techs/react.svg", alt: "ReactJS" },
  { src: "/techs/tailwind-css.svg", alt: "TailwindCSS" },
  { src: "/techs/typescript.svg", alt: "TypeScript" },
  { src: "/techs/javascript.svg", alt: "Javascript" },
  { src: "/techs/python.svg", alt: "Python" },
  { src: "/techs/java.svg", alt: "Java" },
  { src: "/techs/node-js.svg", alt: "NodeJS" },
  { src: "/techs/FastAPI.svg", alt: "FastAPI" },
  { src: "/techs/redis.svg", alt: "Redis" },
];

const tools = [
  { src: "/tools/ubuntu.svg", alt: "Ubuntu" },
  { src: "/tools/figma.svg", alt: "Figma" },
  { src: "/tools/github.svg", alt: "Github" },
  { src: "/tools/npm.svg", alt: "npm" },
  { src: "/tools/firebase.svg", alt: "Firebase" },
  { src: "/tools/railway.svg", alt: "Railway" },
  { src: "/tools/docker.svg", alt: "Docker" },
  { src: "/tools/PostgreSQL.svg", alt: "PostgreSQL" },
  { src: "/tools/vs-code.svg", alt: "VS Code" },
  { src: "/tools/vercel.svg", alt: "Vercel" },
  { src: "/tools/neon.svg", alt: "Neon" },
  { src: "/tools/gemini-ai.svg", alt: "Gemini" },  
  { src: "/tools/chatgpt.svg", alt: "OpenAI" },   
];


export default function Tech() {
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen gap-10">
      <h1 className="text-6xl font-playfair-display">Techs and Tools</h1>
      <div
        className="w-full rounded-xl glass backdrop-blur-md transition outline-1 outline-card-hover hover:outline-purple-400
        hover:shadow-[0_0_10px_theme('colors.purple.500')]"
      >
        <div className="w-full flex flex-col gap-8 py-8 overflow-x-hidden">
          <Slider images={techs} direction="right" />
          <Slider images={tools} direction="left" />
          <div className="pointer-events-none absolute z-10 left-0 top-0 h-full w-16 bg-gradient-to-r from-card to-transparent rounded-l-xl" />
          <div className="pointer-events-none absolute z-10 right-0 top-0 h-full w-16 bg-gradient-to-l from-card to-transparent rounded-r-xl" />
        </div>
      </div>
    </section>
  );
}
