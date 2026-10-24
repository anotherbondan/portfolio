"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { frontend, backend, database, devops } from "@/data/tech";
import { TechIcon } from "../components/tech-list";
import { SectionHeading } from "@/components/motion";
const groups = [
  { id: "frontend", label: "Frontend", items: frontend },
  { id: "backend", label: "Backend", items: backend },
  { id: "database", label: "Database", items: database },
  { id: "devops", label: "DevOps & Tools", items: devops },
];
export default function Tech() {
  return (
    <section id="tech" className="section container">
      <SectionHeading
        number="03"
        title="Tools of the trade."
        description="Skills & expertise"
      />
      <Tabs defaultValue="frontend">
        <TabsList aria-label="Technology categories">
          {groups.map((g) => (
            <TabsTrigger key={g.id} value={g.id}>
              {g.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {groups.map((g) => (
          <TabsContent key={g.id} value={g.id}>
            <div className="tool-grid">
              {g.items.map((item) => (
                <div className="tool-cell" key={item.alt}>
                  <TechIcon src={item.src} label={item.alt} />
                  <span>{item.alt}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
