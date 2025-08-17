import { ReactNode } from "react";

interface CardData {
  logo: string;
  event: string;
  role: string;
  date: string;
  desc: string;
}

type CardProps = {
  children: ReactNode;
  data: CardData;
};

const Card: React.FC<CardProps> = ({ data, children }) => {
  return (
    <div className="w-112 h-63 p-7 bg-accent-2 rounded-xl border-4">
      <div className="flex flex-col gap-3 h-full">
        <div className="flex gap-3">
          <div className="w-20 h-20 border-4 rounded-lg bg-white">
            <img src={data?.logo ?? "/office-worker.png"} alt="icon" className="w-full overflow-hidden" />
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="font-bold font-nunito text-2xl">{data?.event ?? "Event"}</h2>
            <h3 className="font-bold font-nunito text-lg">{data?.role ?? "Role"}</h3>
            <h4 className="font-nunito text-xs">{data?.date ?? "Date"}</h4>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <p className="font-nunito">{data?.desc ?? "Description"}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
