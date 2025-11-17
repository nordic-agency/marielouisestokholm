import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marielouisestokholm.dk'

export const metadata: Metadata = {
  title: 'Om mig - Jeg drives af at se mennesker finde fodfæste og styrke midt i forandring',
  description: 'Jeg hedder Marie Louise Stokholm og har mere end 25 års erfaring som leder og HR-direktør med udvikling af ledere, medarbejdere og organisationer - fra beslutningsbordet til den enkelte medarbejders virkelighed.',
  openGraph: {
    title: 'Om mig - Jeg drives af at se mennesker finde fodfæste og styrke midt i forandring',
    description: 'Jeg hedder Marie Louise Stokholm og har mere end 25 års erfaring som leder og HR-direktør med udvikling af ledere, medarbejdere og organisationer - fra beslutningsbordet til den enkelte medarbejders virkelighed.',
    images: [
      {
        url: `${siteUrl}/images/picture-3.png`,
        width: 1200,
        height: 630,
        alt: 'Marie Louise Stokholm - Om mig',
      }
    ],
    type: 'website',
    url: `${siteUrl}/om-mig`,
    siteName: 'Marie Louise Stokholm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om mig - Jeg drives af at se mennesker finde fodfæste og styrke midt i forandring',
    description: 'Jeg hedder Marie Louise Stokholm og har mere end 25 års erfaring som leder og HR-direktør.',
    images: [`${siteUrl}/images/picture-3.png`],
  },
}

export default function OmMigLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

