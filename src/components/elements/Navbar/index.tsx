import {
  LuBox,
  LuBriefcaseBusiness,
  LuHouse, 
  LuMail,
  LuUser,
  LuWrench,
} from "react-icons/lu";

export default function Navbar() {
  return (
    <nav className="flex py-4 px-10">
      <div className="flex w-full h-20 border-4 rounded-2xl items-center justify-center px-3 bg-accent-2 shadow-lg">
        <div className="flex min-w-full justify-between items-center gap-10">
          {/* Logo */}
          <div className="flex justify-between items-center gap-3">
            <div className="flex border-4 rounded-lg w-14 h-14 justify-center items-center bg-primary">
              <LuUser size={36} color="white"/>
            </div>
            <h2 className="font-nunito text-4xl">Bondan</h2>
          </div>
          {/* Menu */}
          <div className="flex justify-between items-center gap-4">
            <div className="flex border-4 w-14 h-14 rounded-lg items-center justify-center bg-primary">
              <LuHouse size={36} color="white"/>
            </div>
            <div className="flex border-4 w-14 h-14 rounded-lg items-center justify-center bg-primary">
              <LuBriefcaseBusiness size={36} color="white"/>
            </div>
            <div className="flex border-4 w-14 h-14 rounded-lg items-center justify-center bg-primary">
              <LuWrench size={36} color="white"/>
            </div>
            <div className="flex border-4 w-14 h-14 rounded-lg items-center justify-center bg-primary">
              <LuBox size={36} color="white"/>
            </div>
            <div className="flex border-4 w-14 h-14 rounded-lg items-center justify-center bg-primary">
              <LuMail size={36} color="white"/>
            </div>
          </div>
          {/* ReachOut */}
          <div className="flex h-14 justify-between items-center border-4 rounded-lg px-2 gap-1 bg-primary">
            <img
              src="/icons8-linkedin.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <h3 className="text-xl font-bold font-nunito max-lg:hidden text-white">
              Reach Out
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}
