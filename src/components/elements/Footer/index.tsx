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
    <footer className="footer container">
      <div>
        <Link className="brand" href="/#home">
          ag<span className="accent">.</span>
        </Link>
        <p className="muted">
          © {new Date().getFullYear()} Ananda Gautama SK.
          <br />
          All rights reserved.
        </p>
      </div>
      <div className="footer-links">
        <nav aria-label="Footer navigation">
          {[
            ["Home", "home"],
            ["Projects", "project"],
            ["Journey", "experience"],
            ["Tools", "tech"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <Link key={id} href={"/#" + id}>
              {label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Social links">
          {socials.map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer">
              {label} <span aria-hidden>↗</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
