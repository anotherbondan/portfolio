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
    <div className="flex w-1/2">
      <div
        className={`flex w-full items-center gap-6 ${
          index % 2 == 0 ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`h-4 w-4 rounded-full bg-purple-200 shadow-[0_0_10px_theme('colors.purple.500')] ${
            index % 2 == 0 ? "translate-x-1/2" : "-translate-x-1/2"
          }`}
        ></div>
        <div className="group glass backdrop-blur-3xl border-white/10 min-h-64 max-w-140 rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_10px_30px_theme('colors.purple.500/20')]">
          <div className="flex h-full flex-col gap-3">
            <div className="flex items-center gap-3">
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
