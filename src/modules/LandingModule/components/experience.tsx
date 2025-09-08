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
        className={`flex w-full items-center justify-between ${
          index % 2 == 0 ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full bg-purple-200 shadow-[0_0_10px_theme('colors.purple.500')] ${
            index % 2 == 0 ? "translate-x-1/2" : "-translate-x-1/2"
          }`}
        ></div>
        <div className="w-124 h-63 p-7 glass rounded-xl border-card-hover border-1 hover:border-purple-200 hover:shadow-[0_0_10px_theme('colors.purple.500')] transition-all">
          <div className="flex flex-col gap-3 h-full">
            <div className="flex gap-3 items-center">
              <div className="min-w-20 h-20 rounded-lg border-card-hover border-1 bg-white overflow-hidden">
                <img
                  src={data?.logo ?? "/office-worker.png"}
                  alt="icon"
                  className="w-full h-full object-center"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="font-semibold font-inter text-2xl">
                  {data?.event ?? "Event"}
                </h2>
                <h3 className="font-inter text-md text-purple-500">
                  {data?.role ?? "Role"}
                </h3>
                <div className="flex gap-1 items-center">
                  <LuCalendar color="#999999" />
                  <span className="font-inter text-sm text-card-disabled">
                    {data?.date ?? "Date"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full">
              <ul className="font-inter list-disc pl-4 text-card-disabled text-sm">
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
