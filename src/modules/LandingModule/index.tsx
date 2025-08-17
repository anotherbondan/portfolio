import ContactMe from "./sections/ContactMe";
import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";

export default function LandingModule() {
  return (
    <main className="flex flex-col gap-10 px-15">
      <Hero/>
      <Journey/>
      <Tech/>
      <Projects/>
      <ContactMe/>
    </main>
  )
}