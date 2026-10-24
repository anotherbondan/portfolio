import Image from "next/image";
import { statsData } from "@/data/statistics";
export default function Statistics() {
  return (
    <section
      aria-label="Statistics and education"
      className="info-band container"
    >
      {statsData.map((s) => (
        <div className="stat" key={s.label}>
          <strong>{s.value}</strong>
          <span className="eyebrow">{s.label}</span>
        </div>
      ))}
      <div className="education">
        <Image
          src="/universitas-indonesia.webp"
          alt=""
          width={48}
          height={48}
        />
        <div>
          <h2>Universitas Indonesia</h2>
          <p>Faculty of Computer Science</p>
          <span className="accent mono">GPA: 3.78</span>
        </div>
      </div>
    </section>
  );
}
