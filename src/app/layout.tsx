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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Ananda's Portfolio",
  description:
    "Portfolio of Ananda Gautama SK, a Full-Stack Developer and Software Engineer building scalable web applications and elegant user interfaces.",
  keywords: [
    "Ananda Gautama",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend",
    "Backend",
    "Portfolio",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Ananda's Portfolio",
    description:
      "Portfolio of Ananda Gautama SK, a Full-Stack Developer and Software Engineer building scalable web applications and elegant user interfaces.",
    url: baseUrl,
    siteName: "Ananda Gautama Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananda's Portfolio",
    description:
      "Portfolio of Ananda Gautama SK, a Full-Stack Developer and Software Engineer building scalable web applications.",
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
