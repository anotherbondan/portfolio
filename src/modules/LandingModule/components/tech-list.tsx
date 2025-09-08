import Card from "@/components/ui/card";

interface TechListProps {
  data: string[];
}

export default function TechList({ data }: TechListProps) {
  return (
    <div className="flex flex-wrap gap-2 py-2">
      {data.map((image, idx) => (
        <Card key={idx} className="rounded-md w-8 h-8 lg:w-10 lg:h-10 p-1.5 bg-card-hover hover:scale-105 hover:rotate-6 transition-all duration-200">
          <img src={image} alt="icon" className="w-full h-auto object-cover"/>
        </Card>
      ))}
    </div>
  );
}
