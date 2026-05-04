import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhruv Joysar - Developer & EXTC Engineer",
  description:
    "Electronics & Telecommunication Engineer. Building ML models, FPGA hardware, and impactful systems.",
  keywords: [
    "Dhruv Joysar",
    "developer",
    "EXTC",
    "machine learning",
    "FPGA",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
