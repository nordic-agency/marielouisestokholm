import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marielouisestokholm.dk'

export const metadata: Metadata = {
  title: 'Tag kontakt til mig - Små skridt kan skabe store bevægelser',
  description: 'Små skridt kan skabe store bevægelser - lad os begynde med en gratis telefonsamtale. Kontakt mig for at aftale en indledende samtale eller stille spørgsmål om priser og praktik.',
  openGraph: {
    title: 'Tag kontakt til mig - Små skridt kan skabe store bevægelser',
    description: 'Små skridt kan skabe store bevægelser - lad os begynde med en gratis telefonsamtale. Kontakt mig for at aftale en indledende samtale eller stille spørgsmål om priser og praktik.',
    images: [
      {
        url: `${siteUrl}/images/picture-8.png`,
        width: 1200,
        height: 630,
        alt: 'Marie Louise Stokholm - Kontakt',
      }
    ],
    type: 'website',
    url: `${siteUrl}/kontakt`,
    siteName: 'Marie Louise Stokholm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tag kontakt til mig - Små skridt kan skabe store bevægelser',
    description: 'Små skridt kan skabe store bevægelser - lad os begynde med en gratis telefonsamtale.',
    images: [`${siteUrl}/images/picture-8.png`],
  },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

