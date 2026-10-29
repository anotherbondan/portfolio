import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion";
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/elements/Footer";
import ScrollProgressBar from "@/components/elements/ScrollProgressBar";
import { ThemeProvider } from "@/components/theme-provider";
import { ColorThemeProvider } from "@/components/color-theme-provider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ananda's Portfolio",
    template: "%s | Ananda Gautama SK",
  },
  description:
    "Portfolio of Ananda Gautama SK, a Full-Stack Developer and Software Engineer specializing in building scalable web applications and elegant user interfaces.",
  keywords: [
    "Ananda Gautama",
    "Ananda Gautama SK",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "CS Student",
    "Universitas Indonesia",
  ],
  authors: [{ name: "Ananda Gautama SK", url: baseUrl }],
  creator: "Ananda Gautama SK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ananda Gautama SK | Full-Stack Developer",
    description:
      "Explore the portfolio, projects, and professional journey of Ananda Gautama SK, a passionate Software Engineer.",
    url: baseUrl,
    siteName: "Ananda Gautama SK Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananda Gautama SK | Full-Stack Developer",
    description:
      "Explore the portfolio, projects, and professional journey of Ananda Gautama SK, a passionate Software Engineer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-pt-24 scroll-smooth motion-reduce:scroll-auto! [@media(hover:hover)_and_(pointer:fine)_and_(prefers-reduced-motion:no-preference)]:data-[cursor-active]:cursor-none! [@media(hover:hover)_and_(pointer:fine)_and_(prefers-reduced-motion:no-preference)]:data-[cursor-active]:[&_*]:cursor-none!"
    >
      <body
        className={`${outfit.variable} ${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ColorThemeProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <MotionProvider>
              <a
                href="#main"
                className="fixed top-[-100px] left-4 z-[150] bg-background p-3 focus:top-3"
              >
                Skip to content
              </a>
              <ScrollProgressBar />
              <Navbar />
              {children}
              <Footer />
            </MotionProvider>
          </ThemeProvider>
        </ColorThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
