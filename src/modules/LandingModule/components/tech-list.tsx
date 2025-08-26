import Card from "@/components/ui/card";

interface TechListProps {
  data: string[];
}

export default function TechList({ data }: TechListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {data.map((image, idx) => (
        <Card key={idx} className="rounded-md w-8 h-8 p-1 bg-card-hover">
          <img src={image} alt="icon" className="w-full h-auto object-cover"/>
        </Card>
      ))}
    </div>
  );
}
