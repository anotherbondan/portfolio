import Slider from "../components/slider";

const techs1 = [
  {
    src: "/icons8-chakra-ui.svg",
    alt: "Chakra UI",
  },
  {
    src: "/4375122_logo_ubuntu_icon.svg",
    alt: "Ubuntu",
  },
  {
    src: "/9118036_nextjs_fill_icon.svg",
    alt: "NextJS",
  },
  {
    src: "/icons8-express-js.svg",
    alt: "ExpressJS",
  },
  {
    src: "/icons8-figma.svg",
    alt: "Figma",
  },
  {
    src: "/icons8-github.svg",
    alt: "Github",
  },
  {
    src: "/icons8-java.svg",
    alt: "Java",
  },
  {
    src: "/icons8-javascript.svg",
    alt: "Javascript",
  },
  {
    src: "/icons8-node-js.svg",
    alt: "NodeJS",
  },
  {
    src: "/icons8-npm.svg",
    alt: "npm",
  },
  {
    src: "/icons8-prisma-orm.svg",
    alt: "Prisma",
  },
  {
    src: "/icons8-python.svg",
    alt: "Python",
  },
  {
    src: "/icons8-react.svg",
    alt: "ReactJS",
  },
  {
    src: "/icons8-react.svg",
    alt: "ReactJS",
  },
  {
    src: "/icons8-react.svg",
    alt: "ReactJS",
  },
  {
    src: "/icons8-react.svg",
    alt: "ReactJS",
  },
  {
    src: "/icons8-react.svg",
    alt: "ReactJS",
  },
  {
    src: "/icons8-react.svg",
    alt: "ReactJS",
  },
  {
    src: "/icons8-react.svg",
    alt: "ReactJS",
  },
  {
    src: "/icons8-tailwind-css.svg",
    alt: "TailwindCSS",
  },
];

const techs2 = [
  {
    src: "",
    alt: ""
  }
]

export default function Tech() {
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen gap-10">
      <h1 className="text-6xl font-playfair-display">Tech & Tools</h1>
      <div
        className="w-full rounded-xl glass backdrop-blur-md transition outline-1 outline-card-hover hover:outline-purple-400
        hover:shadow-[0_0_10px_theme('colors.purple.500')]"
      >
        <div className="w-full flex flex-col gap-8 py-8 overflow-x-hidden">
          <Slider images={techs1} direction="right" />
          <Slider images={techs1} direction="left" />
          <div className="pointer-events-none absolute z-10 left-0 top-0 h-full w-16 bg-gradient-to-r from-card to-transparent rounded-l-xl" />
          <div className="pointer-events-none absolute z-10 right-0 top-0 h-full w-16 bg-gradient-to-l from-card to-transparent rounded-r-xl" />
        </div>
      </div>
    </section>
  );
}
