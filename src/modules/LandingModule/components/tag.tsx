interface TagProps {
  desc: string;
  index: number;
}

interface TagListProps {
  descList: string[];
}

const Tag: React.FC<TagProps> = ({ desc }) => {
  return (
    <div className="w-fit rounded-lg border-1 border-neutral-700 px-2 py-0.5 transition-all hover:rotate-3">
      <h1 className="font-inter text-xs text-neutral-500">{desc}</h1>
    </div>
  );
};

const TagList: React.FC<TagListProps> = ({ descList }) => {
  return (
    <div className="flex w-full flex-wrap gap-2">
      {descList.map((desc, i) => (
        <Tag key={desc} desc={desc} index={i} />
      ))}
    </div>
  );
};

export default TagList;
