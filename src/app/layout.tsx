import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/elements/Footer";
import ScrollProgressBar from "@/components/elements/ScrollProgressBar";

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

export const metadata: Metadata = {
  title: "Ananda Gautama SK | Software Engineer",
  description: "Portfolio of Ananda Gautama SK, a Full-Stack Developer and Software Engineer building scalable web applications and elegant user interfaces.",
  keywords: ["Ananda Gautama", "Software Engineer", "Full-Stack Developer", "Frontend", "Backend", "Portfolio", "Next.js", "React"],
  openGraph: {
    title: "Ananda Gautama SK | Software Engineer",
    description: "Portfolio of Ananda Gautama SK, a Full-Stack Developer and Software Engineer building scalable web applications and elegant user interfaces.",
    url: "https://ananda-gautama.vercel.app/",
    siteName: "Ananda Gautama Portfolio",
    images: [
      {
        url: "/portfolio-web.png", // Reusing the project screenshot as the OG image
        width: 1200,
        height: 630,
        alt: "Ananda Gautama SK Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananda Gautama SK | Software Engineer",
    description: "Portfolio of Ananda Gautama SK, a Full-Stack Developer and Software Engineer building scalable web applications.",
    images: ["/portfolio-web.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
