interface TagProps {
  desc: string;
  index: number;
}

interface TagListProps {
  descList: string[];
}

const Tag: React.FC<TagProps> = ({ desc }) => {
  return (
    <div className="bg-card-hover border-card-pressed w-fit rounded-lg border-1 px-2 transition-all hover:rotate-3">
      <h1 className="font-inter text-xs text-white">{desc}</h1>
    </div>
  );
};

const TagList: React.FC<TagListProps> = ({ descList }) => {
  return (
    <div className="flex w-full flex-wrap gap-1.5">
      {descList.map((desc, i) => (
        <Tag key={desc} desc={desc} index={i} />
      ))}
    </div>
  );
};

export default TagList;
