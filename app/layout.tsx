import React from "react"
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hon. Eloke O. Victor | Fresh Ideas 2027",
  description:
    "Official campaign website for Igueben, Esan Central, and Esan West Federal Constituency.",
  keywords: [
    "Eloke Victor",
    "House of Representatives",
    "Igueben",
    "Esan Central",
    "Esan West",
    "Fresh Ideas 2027",
    "Possibilities 2027",
    "Nigeria Politics",
    "Edo State",
    "Federal Constituency",
  ],
  authors: [{ name: "Hon. Eloke O. Victor Campaign" }],
  icons: {
    icon: "/images/img2.jpeg",
    apple: "/images/img2.jpeg",
  },
  openGraph: {
    title: "Hon. Eloke O. Victor | Fresh Ideas 2027",
    description:
      "Official campaign website for Igueben, Esan Central, and Esan West Federal Constituency.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hon. Eloke O. Victor | Fresh Ideas 2027",
    description: "Official campaign website for Igueben, Esan Central, and Esan West Federal Constituency.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a5f4a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
