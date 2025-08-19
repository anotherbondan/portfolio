interface TagProps {
  desc: string;
  index: number;
}

interface TagListProps {
  descList: string[];
}

const Tag: React.FC<TagProps> = ({ desc, index }) => {
  return (
    <div className={`w-fit rounded-lg bg-card-hover px-2`}>
      <h1 className="font-inter text-white text-xs">{desc}</h1>
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

export default TagList;
