import { Container } from "@/components/ui/layout";
import { Brand } from "@/components/ui/brand";
import { TextLink } from "@/components/ui/text-link";
import Link from "next/link";
const socials = [
  ["LinkedIn", "https://www.linkedin.com/in/anandagautama/"],
  ["GitHub", "https://github.com/anotherbondan"],
  ["Instagram", "https://instagram.com/nandaaskrr"],
  ["X", "https://x.com/bombdamn"],
  ["Email", "mailto:anandagautama3112@gmail.com"],
];
export default function Footer() {
  return (
    <Container
      as="footer"
      className="flex flex-col items-start justify-between gap-6 border-t border-border py-9 min-[768px]:flex-row min-[768px]:gap-9"
    >
      <div>
        <Brand />
        <p className="mt-5 text-[10px] text-muted">
          © {new Date().getFullYear()} Ananda Gautama SK.
          <br />
          All rights reserved.
        </p>
      </div>
      <div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-4 min-[768px]:gap-5"
        >
          {[
            ["Home", "home"],
            ["Projects", "project"],
            ["Journey", "experience"],
            ["Tools", "tech"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <TextLink
              key={id}
              asChild
              className="text-[11px] text-muted underline-offset-[5px]"
            >
              <Link href={"/#" + id}>{label}</Link>
            </TextLink>
          ))}
        </nav>
        <nav
          aria-label="Social links"
          className="mt-2 flex flex-wrap gap-4 min-[768px]:mt-4 min-[768px]:gap-5"
        >
          {socials.map(([label, url]) => (
            <TextLink
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-0 text-[11px] text-muted underline-offset-[5px]"
            >
              {label} <span aria-hidden>↗</span>
            </TextLink>
          ))}
        </nav>
      </div>
    </Container>
  );
}
