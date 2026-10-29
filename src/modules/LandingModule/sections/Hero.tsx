"use client";
import { ActionIcon } from "@/components/ui/action-icon";
import { Container } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/text-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Button from "@/components/ui/button";
import { Reveal, tactile } from "@/components/motion";
export default function Hero() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const sx = useSpring(x, tactile),
    sy = useSpring(y, tactile);
  return (
    <section
      id="home"
      className="relative bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px)] bg-size-[calc(100%/12)_100%] pt-30 pb-10 min-[768px]:pt-40 min-[1440px]:pt-[190px] min-[1440px]:pb-13"
    >
      <Container className="grid grid-cols-4 items-center gap-0 min-[768px]:grid-cols-12 min-[768px]:gap-x-6">
        <div className="relative z-2 col-span-full min-[768px]:col-span-8">
          <Reveal hero>
            <Eyebrow>
              <span className="text-accent">●</span> Software engineer / CS
              student
            </Eyebrow>
          </Reveal>
          <h1 className="my-6 text-[clamp(3.25rem,12vw,5.8rem)] leading-[0.98] font-medium tracking-[-0.065em] max-[360px]:text-[12vw] min-[768px]:mt-7 min-[768px]:text-[clamp(4rem,8.2vw,6rem)] min-[1024px]:text-[clamp(4.5rem,8.2vw,8.1rem)]">
            <span className="-mb-[0.08em] block overflow-hidden pb-[0.08em]">
              <Reveal hero index={1}>
                Ananda
              </Reveal>
            </span>
            <span className="-mb-[0.08em] block overflow-hidden pb-[0.08em]">
              <Reveal hero index={2}>
                Gautama <span className="text-accent">SK.</span>
              </Reveal>
            </span>
          </h1>
          <Reveal hero index={3}>
            <p className="mb-[18px] font-display text-[25px] tracking-[-0.02em] min-[768px]:text-[clamp(1.5rem,2.5vw,2.2rem)]">
              Full-Stack Developer
            </p>
          </Reveal>
          <Reveal hero index={4}>
            <p className="max-w-120 text-[13px] leading-[1.9] text-muted min-[768px]:max-w-[510px] min-[768px]:text-[15px]">
              I specialize in building scalable web applications, designing
              elegant user interfaces, and solving complex problems with code.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 max-[768px]:gap-2.5">
              <Button
                asChild
                className="group/action max-[768px]:gap-4 max-[768px]:px-4"
              >
                <Link href="/#project">
                  View My Work <ActionIcon>↗</ActionIcon>
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="group/action max-[768px]:gap-4 max-[768px]:px-4"
              >
                <a
                  href="/CV_AnandaGautamaSekarKhosmana.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume <ActionIcon>↓</ActionIcon>
                </a>
              </Button>
              <TextLink asChild className="group/action max-[360px]:w-full">
                <Link href="/#contact">
                  Contact Me <ActionIcon>↗</ActionIcon>
                </Link>
              </TextLink>
            </div>
          </Reveal>
        </div>
        <Reveal
          className="relative col-start-2 col-end-5 mt-[50px] w-full max-w-[330px] justify-self-end min-[768px]:col-start-9 min-[768px]:col-end-13 min-[768px]:mt-15 min-[768px]:max-w-none"
          hero
          index={3}
        >
          <motion.figure
            className="group/portrait relative aspect-[5/4] w-full border border-border bg-surface before:absolute before:-top-3.5 before:right-3.5 before:bottom-3.5 before:-left-3.5 before:-z-1 before:border before:border-accent motion-reduce:transform-none! min-[768px]:aspect-[4/5]"
            style={{ x: reduced ? 0 : sx, y: reduced ? 0 : sy }}
            onPointerMove={(e) => {
              if (reduced || !window.matchMedia("(pointer: fine)").matches)
                return;
              const b = e.currentTarget.getBoundingClientRect();
              x.set(
                Math.max(
                  -6,
                  Math.min(6, ((e.clientX - b.left) / b.width) * 12 - 6),
                ),
              );
              y.set(
                Math.max(
                  -6,
                  Math.min(6, ((e.clientY - b.top) / b.height) * 12 - 6),
                ),
              );
            }}
            onPointerLeave={() => {
              x.set(0);
              y.set(0);
            }}
          >
            <Image
              src="/me.webp"
              alt="Ananda Gautama SK"
              fill
              priority
              sizes="(max-width: 767px) 80vw, (max-width: 1023px) 36vw, 400px"
              className="object-cover object-[center_35%] grayscale transition-[filter] duration-[280ms] ease-linear group-hover/portrait:grayscale-0 min-[768px]:object-center"
            />
          </motion.figure>
        </Reveal>
        <div className="col-span-full mt-7 flex items-center justify-between gap-4 font-mono text-[8px] leading-[1.6] tracking-[0.1em] text-muted uppercase min-[768px]:mt-16 min-[768px]:text-[11px]">
          <span className="max-[360px]:max-w-25">
            Engineering with intention.
          </span>
          <TextLink
            href="#project"
            className="text-[10px] min-[768px]:text-[13px]"
          >
            Explore selected work ↓
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
