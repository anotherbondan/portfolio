import Card from "../components/card";
import TagList from "../components/tag";
const data = [
  {
    logo: "/compfest.jpg",
    event: "Compfest 17",
    role: "Staff of Software Engineer",
    date: "May 2025 - Present",
    desc: "bikin web bos",
    tag: ["Frontend", "Teamwork", "Ubuntu", "Hardwork"],
  },
  {
    logo: "",
    event: "",
    role: "",
    date: "",
    desc: "",
    tag: [],
  },
  {
    logo: "",
    event: "",
    role: "",
    date: "",
    desc: "",
    tag: [],
  },
];

export default function Journey() {
  return (
    <section id="experience" className="">
      <Card data={data[0]}>
        <TagList descList={data[0].tag}/>
      </Card>
    </section>
  );
}
