import { Container } from "@/components/ui/layout";
import { Brand } from "@/components/ui/brand";
import { TextLink } from "@/components/ui/text-link";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
const socials = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/anandagautama/",
    Icon: FaLinkedinIn,
  },
  { label: "GitHub", url: "https://github.com/anotherbondan", Icon: FaGithub },
  {
    label: "Instagram",
    url: "https://instagram.com/nandaaskrr",
    Icon: FaInstagram,
  },
  { label: "X", url: "https://x.com/bombdamn", Icon: FaXTwitter },
  {
    label: "Email",
    url: "mailto:anandagautama3112@gmail.com",
    Icon: FaEnvelope,
  },
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
            ["Home", "/#home"],
            ["Projects", "/#project"],
            ["Journey", "/#experience"],
            ["Tools", "/#tech"],
            ["Contact", "/#contact"],
          ].map(([label, href]) => (
            <TextLink
              key={href}
              asChild
              className="text-[11px] text-muted underline-offset-[5px]"
            >
              <Link href={href}>{label}</Link>
            </TextLink>
          ))}
        </nav>
        <nav
          aria-label="Social links"
          className="mt-2 flex flex-wrap gap-1.5 min-[768px]:mt-4 min-[768px]:gap-2"
        >
          {socials.map(({ label, url, Icon }) => (
            <TextLink
              key={label}
              href={url}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
              className="size-11 justify-center gap-0 text-muted transition-colors duration-[140ms] hover:bg-surface focus-visible:bg-surface motion-reduce:transition-none"
            >
              <Icon
                className="size-[18px]"
                aria-hidden="true"
                focusable="false"
              />
            </TextLink>
          ))}
        </nav>
      </div>
    </Container>
  );
}
