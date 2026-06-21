import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import { GridLines } from "@/components/PageGrid";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transbet Industrial Group",
  description: "Kompleksowe rozwiązania przemysłowe – betoniarnie, budowa tuneli i prefabrykaty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GridLines />
        {children}
      </body>
    </html>
  );
}
