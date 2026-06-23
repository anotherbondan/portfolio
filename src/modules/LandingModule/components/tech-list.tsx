import Image from "next/image";

interface TechListProps {
  data: string[];
}

export default function TechList({ data }: TechListProps) {
  return (
    <div className="flex flex-wrap gap-2 py-2">
      {data.map((image, idx) => (
        <div
          key={idx}
          className="border-card-hover h-8 w-8 rounded-lg border-1 bg-neutral-900/50 p-1.5 shadow-none transition-all duration-200 hover:scale-105 hover:rotate-6 md:h-12 md:w-12 lg:h-10 lg:w-10"
        >
          <div className="relative h-full w-full">
            <Image src={image} alt="icon" fill className="object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
}
