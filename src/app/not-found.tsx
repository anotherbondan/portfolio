import Link from "next/link";
import Button from "@/components/ui/button";
export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <p className="eyebrow">404 / Page not found</p>
      <h1>
        Lost in
        <br />
        <span className="accent">the details.</span>
      </h1>
      <p className="muted">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Button asChild>
        <Link href="/">
          Back to Home <span aria-hidden>↗</span>
        </Link>
      </Button>
    </main>
  );
}
