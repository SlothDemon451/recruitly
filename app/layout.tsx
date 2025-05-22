import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Climate_Crisis } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const climateCrisis = Climate_Crisis({
  weight: ["400"],
  variable: "--font-climate-crisis",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recruitly - AI-Powered Recruitment Solutions",
  description:
    "Revolutionize your hiring process with Recruitly's AI-powered solutions. Unlock a new era of smart, efficient, and trustworthy talent acquisition.",
  keywords: ["recruitment", "AI", "hiring", "talent acquisition", "HR tech"],
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${climateCrisis.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
