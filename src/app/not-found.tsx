import { Container } from "@/components/ui/layout";
import Link from "next/link";
import Button from "@/components/ui/button";
export default function NotFound() {
  return (
    <Container as="main" id="main" className="min-h-[85vh] pt-45 pb-20">
      <p className="font-mono text-[11px] leading-[1.6] tracking-[0.1em] uppercase">
        404 / Page not found
      </p>
      <h1 className="my-8 text-[clamp(4rem,9vw,8rem)] leading-none tracking-[-0.05em]">
        Lost in
        <br />
        <span className="text-accent">the details.</span>
      </h1>
      <p className="mb-7 max-w-[450px] text-muted">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Button asChild>
        <Link href="/">
          Back to Home <span aria-hidden>↗</span>
        </Link>
      </Button>
    </Container>
  );
}
