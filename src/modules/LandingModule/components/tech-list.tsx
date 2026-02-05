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
          className="bg-neutral-900 border-card-hover border-1 h-8 w-8 rounded-lg p-1.5 transition-all duration-200 hover:scale-105 hover:rotate-6 lg:h-10 lg:w-10"
        >
          <img src={image} alt="icon" className="h-auto w-full object-cover" />
        </Card>
      ))}
    </div>
  );
}
