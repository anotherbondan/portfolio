"use client";
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
    <section id="home" className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <Reveal hero>
            <p className="eyebrow">
              <span className="accent">●</span> Software engineer / CS student
            </p>
          </Reveal>
          <h1>
            <span className="line-mask">
              <Reveal hero index={1}>
                Ananda
              </Reveal>
            </span>
            <span className="line-mask">
              <Reveal hero index={2}>
                Gautama <span className="accent">SK.</span>
              </Reveal>
            </span>
          </h1>
          <Reveal hero index={3}>
            <p className="hero-role">Full-Stack Developer</p>
          </Reveal>
          <Reveal hero index={4}>
            <p className="intro">
              I specialize in building scalable web applications, designing
              elegant user interfaces, and solving complex problems with code.
            </p>
            <div className="actions">
              <Button asChild>
                <Link href="/#project">
                  View My Work <span aria-hidden>↗</span>
                </Link>
              </Button>
              <Button asChild className="secondary">
                <a
                  href="/CV_AnandaGautamaSekarKhosmana.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume <span aria-hidden>↓</span>
                </a>
              </Button>
              <Link className="text-link" href="/#contact">
                Contact Me <span aria-hidden>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal className="portrait-column" hero index={3}>
          <motion.figure
            className="portrait"
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
              className="object-cover"
            />
            <figcaption className="eyebrow">
              Ananda Gautama SK / Portfolio
            </figcaption>
          </motion.figure>
          <span className="portrait-index" aria-hidden>
            01 — INTRODUCTION
          </span>
        </Reveal>
        <div className="hero-bottom eyebrow">
          <span>Engineering with intention.</span>
          <a href="#project" className="text-link">
            Explore selected work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
