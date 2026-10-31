"use client";
import { Section } from "@/components/ui/layout";
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
    <Section id="tech">
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
            <div className="grid grid-cols-3 border-t border-l border-border max-[360px]:grid-cols-2 min-[768px]:grid-cols-4 min-[1024px]:grid-cols-5">
              {g.items.map((item) => (
                <div
                  className="relative isolate flex min-h-26 flex-col items-start gap-[18px] overflow-hidden border-r border-b border-border bg-surface bg-[linear-gradient(135deg,var(--surface)_0%,color-mix(in_srgb,var(--foreground)_3%,var(--surface))_25%,color-mix(in_srgb,var(--foreground)_7%,var(--surface))_50%,color-mix(in_srgb,var(--foreground)_3%,var(--surface))_75%,var(--surface)_100%)] px-3 py-[18px] shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(135deg,transparent_10%,rgb(255_255_255/0.03)_30%,rgb(255_255_255/0.14)_50%,rgb(255_255_255/0.03)_70%,transparent_90%)] before:opacity-25 before:transition-opacity before:duration-700 before:ease-in-out hover:before:opacity-45 motion-reduce:before:transition-none min-[768px]:min-h-29 min-[768px]:p-6 dark:before:opacity-10 dark:hover:before:opacity-25"
                  key={item.alt}
                >
                  <TechIcon
                    src={item.src}
                    label={item.alt}
                    className="size-7 object-contain"
                  />
                  <span className="text-[10px] min-[768px]:text-[12px]">
                    {item.alt}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
