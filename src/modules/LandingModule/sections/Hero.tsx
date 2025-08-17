import { Newspaper } from "lucide-react";
import Card from "../components/card";

export default function Hero() {
  return (
    <section id="hero" className="w-full">
      <div className="relative px-20 pt-10">
        <img src="/hero.svg" alt="pic" className="absolute w-100" />
        <svg
          width="339"
          height="458"
          viewBox="0 0 339 458"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-20 top-28"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.37194 219.397C3.33231 130.79 32.4294 39.5201 101.659 11.1954C173.099 -18.0336 247.661 27.159 292.355 100.753C338.363 176.511 354.777 277.8 310.579 355.207C263.252 438.095 175.056 477.336 96.9798 442.932C25.2295 411.315 1.36804 312.02 2.37194 219.397Z"
            fill="#FFD166"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
        <svg
          width="343"
          height="474"
          viewBox="0 0 343 474"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10 top-18 left-38"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.69218 243.488C6.77765 147.483 14.9394 26.0268 112.03 5.0896C205.945 -15.1627 254.463 97.7944 300.938 179.172C335.775 240.172 360.817 310.677 318.953 367.414C266.246 438.846 176.751 494.488 92.6069 461.516C9.63263 429.003 -0.985385 329.907 2.69218 243.488Z"
            fill="#FF6F61"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div className="flex items-center w-full min-h-[70vh] max-w-screen justify-end px-36">
        <div className="relative gap-10 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <h2 className="font-nunito text-3xl font-bold">Hi, I'm Nanda</h2>
              <h1 className="font-molle retro-text">Web Developer</h1>
              <p className="font-nunito text-stone-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                magnam.
              </p>
            </div>
            <button type="button" className="bg-accent-2 border-4 rounded-lg py-1.5 px-2 w-fit">
              <div className="flex gap-2">
                <Newspaper />
                <h1 className="font-bold font-nunito">Download CV</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
