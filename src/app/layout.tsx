import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/elements/Footer";
import ScrollProgressBar from "@/components/elements/ScrollProgressBar";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgressBar />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
