export default function TagList({ descList }: { descList: string[] }) {
  return (
    <ul className="mt-3.5 flex list-none flex-wrap gap-1.5 p-0">
      {descList.map((desc) => (
        <li
          key={desc}
          className="border border-border px-[7px] py-[3px] font-mono text-[9px] text-muted"
        >
          {desc}
        </li>
      ))}
    </ul>
  );
}
