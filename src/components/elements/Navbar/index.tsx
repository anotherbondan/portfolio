import Button from "@/components/ui/button";
import {
  LuBox,
  LuBriefcaseBusiness,
  LuHouse,
  LuMail,
  LuUser,
  LuWrench,
} from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="flex fixed py-8 px-20 min-w-screen z-50">
      <div className="flex w-full rounded-3xl items-center justify-center py-5 px-7 glass outline-1 outline-card-hover backdrop-blur-md">
        <div className="flex min-w-full justify-between items-center gap-10">
          <div className="flex justify-between items-center gap-6">
            <Button className="flex rounded-xl w-18 h-18 justify-center items-center ">
              <LuUser size={36} color="white" />
            </Button>
            <h1 className="font-playfair-display text-5xl">Ananda</h1>
          </div>
          {/* Menu */}
          <div className="flex justify-between items-center gap-4">
            <Button className="group flex w-18 h-18 items-center justify-center rounded-xl">
              <LuHouse size={32} color="white" />
              <div className="border-[1px] border-card-hover px-1 bg-card absolute hidden group-hover:block -bottom-1/2 font-inter rounded-md">Home</div>
            </Button>
            <Button className="group flex w-18 h-18 items-center justify-center rounded-xl">
              <LuBriefcaseBusiness size={32} color="white" />
              <div className="border-[1px] border-card-hover px-1 bg-card absolute hidden group-hover:block -bottom-1/2 font-inter rounded-md">Experiences</div>
            </Button>
            <Button className="group flex w-18 h-18 items-center justify-center rounded-xl">
              <LuWrench size={32} color="white" />
              <div className="border-[1px] border-card-hover px-1 bg-card absolute hidden group-hover:block -bottom-1/2 font-inter rounded-md">Tools</div>
            </Button>
            <Button className="group flex w-18 h-18 items-center justify-center rounded-xl">
              <LuBox size={32} color="white" />
              <div className="border-[1px] border-card-hover px-1 bg-card absolute hidden group-hover:block -bottom-1/2 font-inter rounded-md">Projects</div>
            </Button>
            <Button className="group flex w-18 h-18 items-center justify-center rounded-xl">
              <LuMail size={32} color="white" />
              <div className="border-[1px] border-card-hover px-1 bg-card absolute hidden group-hover:block -bottom-1/2 font-inter rounded-md">Contact</div>
            </Button>
          </div>
          {/* ReachOut */}
          <Button className="flex h-18 justify-between items-center rounded-xl px-6 gap-4 ">
            <FaLinkedin size={40} />
            <h1 className="text-2xl font-semibold font-inter max-lg:hidden">
              Reach Out
            </h1>
          </Button>
        </div>
      </div>
    </nav>
  );
}
