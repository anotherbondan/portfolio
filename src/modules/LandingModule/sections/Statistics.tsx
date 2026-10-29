import { Container } from "@/components/ui/layout";
import Image from "next/image";
import { statsData } from "@/data/statistics";
export default function Statistics() {
  return (
    <Container
      as="section"
      aria-label="Statistics and education"
      className="grid grid-cols-3 border-y border-border py-6 min-[768px]:py-7 min-[1024px]:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.7fr)]"
    >
      {statsData.map((s) => (
        <div
          className="flex flex-col gap-1.5 border-r border-border px-3 first:pl-0 max-[1024px]:nth-3:border-0 min-[768px]:px-6"
          key={s.label}
        >
          <strong className="font-display text-[32px] leading-[1.1] font-medium tracking-[-0.04em] max-[360px]:text-[28px] min-[768px]:text-[44px]">
            {s.value}
          </strong>
          <span className="font-mono text-[8px] leading-[1.6] tracking-normal text-muted uppercase min-[768px]:text-[9px] min-[768px]:tracking-[0.1em]">
            {s.label}
          </span>
        </div>
      ))}
      <div className="col-span-full mt-6 flex items-center gap-4 border-t border-border pt-6 min-[1024px]:col-auto min-[1024px]:mt-0 min-[1024px]:border-t-0 min-[1024px]:pt-0 min-[1024px]:pl-6">
        <Image
          src="/universitas-indonesia.webp"
          alt=""
          className="shrink-0 object-contain"
          width={48}
          height={48}
        />
        <div>
          <h2 className="text-[17px] font-medium">Universitas Indonesia</h2>
          <p className="text-[11px] text-muted">Faculty of Computer Science</p>
          <span className="mt-1.5 block font-mono text-[11px] leading-[1.6] text-accent">
            GPA: 3.78
          </span>
        </div>
      </div>
    </Container>
  );
}
