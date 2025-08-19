import Card from "@/components/ui/card";

interface TechListProps {
  data: string[];
}

export default function TechList({ data }: TechListProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {data.map((image, idx) => (
        <Card key={idx} className="rounded-md w-6 h-6 p-1 bg-card-hover border-1 border-card-disabled">
          <img src={image} alt="icon" className="w-full h-auto object-cover"/>
        </Card>
      ))}
    </div>
  );
}
