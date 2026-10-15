import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import { GridLines } from "@/components/PageGrid";
import CalculatorTag from "@/components/CalculatorTag";
import PageCurtain from "@/components/PageCurtain";
import CookieConsent from "@/components/CookieConsent";
import { consentDefaultsScript } from "@/lib/consent";
import "./globals.css";

// Google Tag Manager container of transbet.com.pl.
const GTM_ID = "GTM-WJLRLD2";

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
  // Pages set only their own name; the company name is added after it.
  title: {
    default: 'TRANSBET BETONIARNIE GROCHOWICZ Sp. K.',
    template: '%s | TRANSBET BETONIARNIE GROCHOWICZ Sp. K.',
  },
  description: "Beton, prefabrykacja betonowa i zbrojeniowa oraz wsparcie budownictwa tunelowego.",
  // Search Console verification tag of the previous transbet.com.pl, kept so the property stays verified after the domain switch.
  verification: { google: 'ZbKh8gwJznK5l3_EyCH1TmUib1Pb6m7m8RjgJDB_NLg' },
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
      <head>
        {/* Consent Mode defaults, before Google Tag Manager loads. */}
        <script dangerouslySetInnerHTML={{ __html: consentDefaultsScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript), right after <body>; the script itself is the <Script id="gtm"> below. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GridLines />
        {children}
        <CalculatorTag />
        <PageCurtain />
        <CookieConsent />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </body>
    </html>
  );
}
