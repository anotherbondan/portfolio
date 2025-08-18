"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col w-full pt-20 min-h-screen items-center justify-center"
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col gap-6 items-center justify-center">
          <h1 className="text-7xl font-playfair-display">
            <span className="text-purple-400 [text-shadow:0_0_5px_theme(colors.purple.400),0_0_10px_theme(colors.purple.500),0_0_20px_theme(colors.purple.600),0_0_40px_theme(colors.purple.700)]">
              <Typewriter
                words={["Full-Stack Developer", "CS Student", "Software Engineer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={65}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="font-inter text-stone-400">
            Coffee - Code - Sleep - Repeat
          </p>
        </div>
      </div>
    </section>
  );
}
