const colorMap: { [key: number]: string } = {
  0: "bg-primary",
  1: "bg-secondary",
  2: "bg-accent-1",
  3: "bg-accent-3",
};

interface TagProps {
  desc: string;
  index: number;
}

interface TagListProps {
  descList: string[];
}

const Tag: React.FC<TagProps> = ({ desc, index }) => {
  return (
    <div className={`w-fit rounded-lg border-2 ${colorMap[index % 4]} px-2`}>
      <h1 className="font-nunito text-white text-xs">{desc}</h1>
    </div>
  );
};

const TagList: React.FC<TagListProps> = ({ descList }) => {
  return (
    <div className="flex gap-1 w-full overflow-x-scroll">
      {descList.map((desc, i) => (
        <Tag key={desc} desc={desc} index={i} />
      ))}
    </div>
  );
};

export default TagList