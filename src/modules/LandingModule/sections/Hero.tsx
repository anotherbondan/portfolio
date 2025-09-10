"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full flex-col items-center justify-center pt-20"
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="font-playfair-display text-7xl">
            <span className="text-purple-200 [text-shadow:0_0_5px_theme(colors.purple.400),0_0_10px_theme(colors.purple.500),0_0_20px_theme(colors.purple.600),0_0_40px_theme(colors.purple.700)]">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "CS Student",
                  "Software Engineer",
                ]}
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
