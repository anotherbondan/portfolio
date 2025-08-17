import Marquee from "react-fast-marquee";
import Slider from "../components/slider";

const icons = [
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

export default function Tech() {
  return (
    <section className="flex justify-center items-center">
      <div className="border-y-4 flex flex-col gap-8 py-8 w-[100vw]">
        <Slider images={icons}/>
        <Slider images={icons}/>
      </div>
    </section>
  );
}
