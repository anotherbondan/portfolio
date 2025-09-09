interface TagProps {
  desc: string;
  index: number;
}

interface TagListProps {
  descList: string[];
}

const Tag: React.FC<TagProps> = ({ desc }) => {
  return (
    <div className="w-fit rounded-lg bg-card-hover border-card-pressed border-1 px-2 hover:rotate-3 transition-all">
      <h1 className="font-inter text-white text-xs">{desc}</h1>
    </div>
  );
};

const TagList: React.FC<TagListProps> = ({ descList }) => {
  return (
    <div className="flex gap-1.5 w-full flex-wrap">
      {descList.map((desc, i) => (
        <Tag key={desc} desc={desc} index={i} />
      ))}
    </div>
  );
};

export default TagList;
