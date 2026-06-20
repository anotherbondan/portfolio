import { ReactNode } from "react";
import { LuCalendar } from "react-icons/lu";

interface ExperienceData {
  logo: string;
  event: string;
  role: string;
  date: string;
  descs: string[];
}

type ExperienceProps = {
  children: ReactNode;
  data: ExperienceData;
  index: number;
};

const Experience: React.FC<ExperienceProps> = ({ data, children, index }) => {
  return (
    <div className="relative flex w-full lg:w-1/2">
      <div
        className={`flex w-full flex-row items-center gap-6 lg:gap-8 ${
          index % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
        } pl-16 lg:pl-0`}
      >
        <div
          className={`absolute left-[1.6rem] h-4 w-4 shrink-0 rounded-full bg-purple-200 shadow-[0_0_10px_theme('colors.purple.500')] max-lg:-translate-x-4 lg:static lg:left-auto ${
            index % 2 == 0 ? "lg:translate-x-1/2" : "lg:-translate-x-1/2"
          } z-10`}
        ></div>
        <div className="group glass min-h-64 w-full max-w-156 rounded-3xl border border-white/10 p-6 backdrop-blur-3xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_10px_30px_theme('colors.purple.500/20')] lg:p-7">
          <div className="flex h-full flex-col gap-3">
            <div className="flex items-center gap-3 max-md:flex-col max-md:items-start">
              <div className="border-card-hover h-20 min-w-20 overflow-hidden rounded-xl border-1 bg-white">
                <img
                  src={data?.logo ?? "/office-worker.png"}
                  alt="icon"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="font-inter text-2xl font-semibold">
                  {data?.event ?? "Event"}
                </h2>
                <h3 className="font-inter text-md text-neutral-300">
                  {data?.role ?? "Role"}
                </h3>
                <div className="flex items-center gap-1">
                  <LuCalendar color="#999999" />
                  <span className="font-inter text-card-disabled text-sm">
                    {data?.date ?? "Date"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between gap-4">
              <ul className="font-inter text-card-disabled list-disc pl-4 text-sm">
                {data.descs.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
