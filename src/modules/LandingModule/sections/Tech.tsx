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
    <section
      id="tech"
      className="flex min-h-screen w-full flex-col items-center pt-40 pb-20 gap-14"
    >
      <h1 className="font-playfair-display text-6xl text-purple-200 [text-shadow:0_0_5px_theme(colors.purple.400),0_0_10px_theme(colors.purple.500),0_0_20px_theme(colors.purple.600),0_0_40px_theme(colors.purple.700)]">Techs and Tools</h1>
      <div className="glass border-card-hover w-full rounded-xl border-1 backdrop-blur-md transition hover:border-purple-400 hover:shadow-[0_0_10px_theme('colors.purple.500')]">
        <div className="flex w-full flex-col gap-8 overflow-x-hidden py-8">
          <Slider images={techs} direction="right" />
          <Slider images={tools} direction="left" />
          <div className="from-card pointer-events-none absolute top-0 left-0 z-10 h-full w-16 rounded-l-xl bg-gradient-to-r to-transparent" />
          <div className="from-card pointer-events-none absolute top-0 right-0 z-10 h-full w-16 rounded-r-xl bg-gradient-to-l to-transparent" />
        </div>
      </div>
    </section>
  );
}
