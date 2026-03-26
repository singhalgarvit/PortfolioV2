import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Garvit Singhal — Full-stack developer",
  description:
    "Full-stack developer focused on Node.js, React, and polished web experiences. SKIT Jaipur.",
  openGraph: {
    title: "Garvit Singhal — Full-stack developer",
    description:
      "Full-stack developer focused on Node.js, React, and polished web experiences.",
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
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased text-text bg-bg`}
      >
        <a
          href="#home"
          className="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg border border-border bg-bg-elevated px-4 py-2 text-sm text-text opacity-0 transition focus:pointer-events-auto focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
