import Card from "@/components/ui/card";

interface TechListProps {
  data: string[];
}

export default function TechList({ data }: TechListProps) {
  return (
    <div className="flex flex-wrap gap-2 py-2">
      {data.map((image, idx) => (
        <Card
          key={idx}
          className="border-card-hover h-8 w-8 rounded-lg border-1 bg-neutral-900 p-1.5 transition-all duration-200 hover:scale-105 hover:rotate-6 lg:h-10 lg:w-10"
        >
          <img
            src={image}
            alt="icon"
            className="h-full w-full object-contain"
          />
        </Card>
      ))}
    </div>
  );
}
