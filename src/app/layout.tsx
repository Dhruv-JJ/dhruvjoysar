import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhruv Joysar - Developer & EXTC Engineer",
  description:
    "Electronics & Telecommunication Engineer. Building ML models, FPGA hardware, and impactful systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          html {
            color-scheme: light dark;
          }
          html.light {
            color-scheme: light;
          }
          html.dark {
            color-scheme: dark;
          }
        `}</style>
      </head>
      <body className={`${inter.variable} h-full antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
