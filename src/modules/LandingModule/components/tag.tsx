export default function TagList({ descList }: { descList: string[] }) {
  return (
    <ul className="tags">
      {descList.map((desc) => (
        <li key={desc}>{desc}</li>
      ))}
    </ul>
  );
}
