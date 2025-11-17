import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marielouisestokholm.dk'

export const metadata: Metadata = {
  title: 'Referencer & evalueringer - Erfaringer fra virkeligheden',
  description: 'Godkendte udtalelser fra kunder og kandidater. Udvalgte cases og citater, der viser både proces og effekt - menneskeligt, fagligt og konkret.',
  openGraph: {
    title: 'Referencer & evalueringer - Erfaringer fra virkeligheden',
    description: 'Godkendte udtalelser fra kunder og kandidater. Udvalgte cases og citater, der viser både proces og effekt - menneskeligt, fagligt og konkret.',
    images: [
      {
        url: `${siteUrl}/images/picture-3.png`,
        width: 1200,
        height: 630,
        alt: 'Marie Louise Stokholm - Referencer',
      }
    ],
    type: 'website',
    url: `${siteUrl}/testimonials`,
    siteName: 'Marie Louise Stokholm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Referencer & evalueringer - Erfaringer fra virkeligheden',
    description: 'Godkendte udtalelser fra kunder og kandidater.',
    images: [`${siteUrl}/images/picture-3.png`],
  },
}

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

