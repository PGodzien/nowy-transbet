import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import { GridLines } from "@/components/PageGrid";
import PageCurtain from "@/components/PageCurtain";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://transbet.com.pl'),
  title: "Transbet Industrial Group",
  description: "Beton, prefabrykacja betonowa i zbrojeniowa oraz wsparcie budownictwa tunelowego.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${instrumentSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GridLines />
        {children}
        <PageCurtain />
      </body>
    </html>
  );
}
