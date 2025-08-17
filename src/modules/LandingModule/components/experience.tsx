import { ReactNode } from "react";

interface ExperienceData {
  logo: string;
  event: string;
  role: string;
  date: string;
  desc: string;
}

type ExperienceProps = {
  children: ReactNode;
  data: ExperienceData;
};

const Experience: React.FC<ExperienceProps> = ({ data, children }) => {
  return (
    <div className="w-112 h-63 p-7 glass rounded-xl">
      <div className="flex flex-col gap-3 h-full">
        <div className="flex gap-3">
          <div className="w-20 h-20 rounded-lg">
            <img
              src={data?.logo ?? "/office-worker.png"}
              alt="icon"
              className="w-full overflow-hidden"
            />
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="font-bold font-inter text-2xl">
              {data?.event ?? "Event"}
            </h2>
            <h3 className="font-bold font-inter text-lg">
              {data?.role ?? "Role"}
            </h3>
            <h4 className="font-inter text-xs">{data?.date ?? "Date"}</h4>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <p className="font-inter">{data?.desc ?? "Description"}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Experience;
