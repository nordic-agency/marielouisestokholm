import { Space_Grotesk, Playfair_Display } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marielouisestokholm.dk'

export const metadata: Metadata = {
  title: 'Erhvervscoach med indsigt i både mennesket og organisationen',
  description: 'Jeg hedder Marie Louise Stokholm og har mere end 25 års erfaring som leder og HR-direktør med udvikling af ledere, medarbejdere og organisationer. I dag driver jeg min egen virksomhed, hvor jeg coacher, rådgiver og fungerer som sparringspartner.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Erhvervscoach med indsigt i både mennesket og organisationen',
    description: 'Jeg hedder Marie Louise Stokholm og har mere end 25 års erfaring som leder og HR-direktør med udvikling af ledere, medarbejdere og organisationer. I dag driver jeg min egen virksomhed, hvor jeg coacher, rådgiver og fungerer som sparringspartner.',
    images: [
      {
        url: `${siteUrl}/images/picture-3.png`,
        width: 1200,
        height: 630,
        alt: 'Marie Louise Stokholm - Erhvervscoach',
      }
    ],
    type: 'website',
    url: siteUrl,
    siteName: 'Marie Louise Stokholm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erhvervscoach med indsigt i både mennesket og organisationen',
    description: 'Jeg hedder Marie Louise Stokholm og har mere end 25 års erfaring som leder og HR-direktør.',
    images: [`${siteUrl}/images/picture-3.png`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={playfair.variable}>
      <body className={`${spaceGrotesk.variable} font-playfair antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
