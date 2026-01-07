import type { Metadata } from "next";
import { Playfair_Display, Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Couples & Family Therapy in San Clemente | Kerreen M. Chau, LMFT",
  description: "Compassionate therapy for couples, teens, and families in San Clemente, CA. Kerreen M. Chau, LMFT has 23+ years experience. Telehealth available for California.",
  keywords: "couples therapy, family therapy, teen therapy, marriage counselor, LMFT, San Clemente, Orange County, California, telehealth",
  authors: [{ name: "Kerreen M. Chau, LMFT" }],
  openGraph: {
    title: "OC Couple and Family Therapy | Kerreen M. Chau, LMFT",
    description: "Compassionate therapy for couples, teens, and families in San Clemente, CA.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${sourceSans.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 z-50 rounded">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
