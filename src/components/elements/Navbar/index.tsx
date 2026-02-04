"use client";

import Button from "@/components/ui/button";
import {
  LuBox,
  LuBriefcaseBusiness,
  LuHouse,
  LuMail,
  LuWrench,
} from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="fixed z-50 flex min-w-full px-20 py-8">
        <div className="glass border-card-hover flex w-full items-center justify-center rounded-4xl border-1 px-8 py-5 backdrop-blur-sm">
          <div className="flex min-w-full items-center justify-between gap-10">
            <div className="flex items-center justify-between gap-6">
              <Button className="flex h-18 w-18 items-center justify-center rounded-full p-4 transition-all hover:rotate-12 hover:scale-105 transform">
                <img
                  src="/portfolio.png"
                  alt="icon"
                  className="h-full w-full"
                />
              </Button>
            </div>
            {/* Menu */}
            <div className="flex items-center justify-between gap-4">
              <Link href="/#home">
                <Button className="group flex h-18 w-18 items-center justify-center rounded-xl">
                  <LuHouse size={32} color="white" />
                  <div className="border-card-hover bg-card font-inter absolute -bottom-1/2 hidden rounded-md border-[1px] px-1 group-hover:block">
                    Home
                  </div>
                </Button>
              </Link>
              <Link href="#experience">
                <Button className="group flex h-18 w-18 items-center justify-center rounded-xl">
                  <LuBriefcaseBusiness size={32} color="white" />
                  <div className="border-card-hover bg-card font-inter absolute -bottom-1/2 hidden rounded-md border-[1px] px-1 group-hover:block">
                    Experiences
                  </div>
                </Button>
              </Link>
              <Link href="#tech">
                <Button className="group flex h-18 w-18 items-center justify-center rounded-xl">
                  <LuWrench size={32} color="white" />
                  <div className="border-card-hover bg-card font-inter absolute -bottom-1/2 hidden rounded-md border-[1px] px-1 group-hover:block">
                    Tools
                  </div>
                </Button>
              </Link>
              <Link href="#project">
                <Button className="group flex h-18 w-18 items-center justify-center rounded-xl">
                  <LuBox size={32} color="white" />
                  <div className="border-card-hover bg-card font-inter absolute -bottom-1/2 hidden rounded-md border-[1px] px-1 group-hover:block">
                    Projects
                  </div>
                </Button>
              </Link>
              <Link href="#contact">
                <Button className="group flex h-18 w-18 items-center justify-center rounded-xl">
                  <LuMail size={32} color="white" />
                  <div className="border-card-hover bg-card font-inter absolute -bottom-1/2 hidden rounded-md border-[1px] px-1 group-hover:block">
                    Contact
                  </div>
                </Button>
              </Link>
            </div>
            {/* ReachOut */}
            <Button className="flex h-18 items-center justify-between gap-4 rounded-xl px-6">
              <FaLinkedin size={40} />
              <h1 className="font-inter text-2xl font-semibold max-lg:hidden">
                Reach Out
              </h1>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
