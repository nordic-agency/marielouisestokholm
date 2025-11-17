import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marielouisestokholm.dk'

export const metadata: Metadata = {
  title: 'Priser og praktik - Rammerne for dit første skridt',
  description: 'Forandring sker i bevægelsen - her finder du rammerne for dit første skridt. Vi starter med en gratis og uforpligtende telefonsamtale for at afklare, hvordan jeg bedst kan støtte processen, og om samarbejdet føles rigtigt.',
  openGraph: {
    title: 'Priser og praktik - Rammerne for dit første skridt',
    description: 'Forandring sker i bevægelsen - her finder du rammerne for dit første skridt. Vi starter med en gratis og uforpligtende telefonsamtale for at afklare, hvordan jeg bedst kan støtte processen, og om samarbejdet føles rigtigt.',
    images: [
      {
        url: `${siteUrl}/images/picture-3.png`,
        width: 1200,
        height: 630,
        alt: 'Marie Louise Stokholm - Priser og praktik',
      }
    ],
    type: 'website',
    url: `${siteUrl}/praktik-og-priser`,
    siteName: 'Marie Louise Stokholm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priser og praktik - Rammerne for dit første skridt',
    description: 'Forandring sker i bevægelsen - her finder du rammerne for dit første skridt.',
    images: [`${siteUrl}/images/picture-3.png`],
  },
}

export default function PraktikOgPriser() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-end justify-center">
        <Image
          src="/images/picture-7.jpg"
          alt="Marie Louise Stokholm"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-6 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl leading-relaxed text-white font-medium px-8 pb-2 inline-block">
              Priser og praktik
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white font-medium px-8 pt-0 py-6 inline-block">
              Forandring sker i bevægelsen - her finder du rammerne for dit første skridt.
            </p>
          </div>
        </div>
      </section>

      {/* Sådan begynder vi */}
      <section className="w-full bg-white pt-24 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-8">
              Sådan begynder vi
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
              <p>
                Vi starter med en gratis og uforpligtende telefonsamtale for at afklare, hvordan jeg bedst kan støtte processen, og om samarbejdet føles rigtigt. Tillid og god kontakt er grundlaget for et meningsfuldt forløb. En enkelt samtale kan give indsigt, men de største forandringer sker oftest gennem et forløb over flere møder, hvor der er tid til at afprøve, reflektere og omsætte erfaringer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rammer for samarbejdet */}
      <section className="w-full bg-white pt-4 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-8">
              Rammer for samarbejdet
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
              <p>
                Når vi vælger at fortsætte efter den indledende samtale, tilpasses forløbet den aktuelle situation og det, der ønskes forandret. Rammen fastlægges i fællesskab - antal møder, hyppighed, fokus og om samtalerne skal foregå personligt eller online. Der er altid mulighed for justeringer undervejs, så forløbet forbliver relevant og meningsfuldt i takt med udviklingen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Samarbejdsaftale */}
      <section className="w-full bg-gray-50 pt-8 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-8 text-center mt-8">
            Samarbejdsaftale
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Privat</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Der er fleksibilitet til at ændre eller afslutte forløbet efter behov.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Samtalerne foregår i et fortroligt rum med fokus på klarhed, retning og personlig udvikling.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Erhverv</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Formålet afklares fra begyndelsen, og der skabes et trygt og fortroligt rum for udvikling.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Forløbet understøtter trivsel, retning og resultater - til gavn for både medarbejder og organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Samtaleforløb og priser */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-8 text-center">
            Samtaleforløb og priser
          </h2>
          <p className="text-lg font-sans text-gray-700 text-center mb-12">
            Det skal være enkelt og nemt at komme i gang. Her finder du alt det praktiske - priser, forløb og hvordan vi starter samarbejdet. Du betaler kun for den tid, du har brug for.
          </p>
          
          {/* Pricing Table */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-50 overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-16 py-6 text-left text-lg font-sans font-semibold text-gray-800 tracking-wide">Forløb / samtale</th>
                    <th className="px-16 py-6 text-right text-lg font-sans font-semibold text-gray-800 tracking-wide">Pris</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50 hover:bg-gray-25 transition-colors duration-200">
                    <td className="px-16 py-5 text-lg font-sans text-gray-700 font-medium">Første samtale (1,5 time)</td>
                    <td className="px-16 py-5 text-xl font-serif font-bold text-[#8B4513] text-right">1.800 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-50 hover:bg-gray-25 transition-colors duration-200">
                    <td className="px-16 py-5 text-lg font-sans text-gray-700 font-medium">Forløb á 3 samtaler</td>
                    <td className="px-16 py-5 text-xl font-serif font-bold text-[#8B4513] text-right">4.500 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-50 hover:bg-gray-25 transition-colors duration-200">
                    <td className="px-16 py-5 text-lg font-sans text-gray-700 font-medium">Forløb á 5 samtaler</td>
                    <td className="px-16 py-5 text-xl font-serif font-bold text-[#8B4513] text-right">7.300 kr.</td>
                  </tr>
                  <tr className="border-b border-gray-50 hover:bg-gray-25 transition-colors duration-200">
                    <td className="px-16 py-5 text-lg font-sans text-gray-700 font-medium">Forløb á 7 samtaler</td>
                    <td className="px-16 py-5 text-xl font-serif font-bold text-[#8B4513] text-right">10.000 kr.</td>
                  </tr>
                  <tr className="hover:bg-gray-25 transition-colors duration-200">
                    <td className="px-16 py-5 text-lg font-sans text-gray-700 font-medium">Efterfølgende samtaler</td>
                    <td className="px-16 py-5 text-xl font-serif font-bold text-[#8B4513] text-right">1.300 kr.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <p className="text-sm font-sans text-gray-600 text-center mb-16">
            Priser er inkl. moms for private og ekskl. moms for erhverv.
          </p>
        </div>
      </section>

      {/* Praktik */}
      <section className="w-full bg-gray-50 pt-16 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-8 text-center">
            Praktik
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Betaling</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Privat:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Løbende betaling via MobilePay eller bankoverførsel.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Erhverv:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Betaling via bankoverførsel ved opstart af aftalte forløb.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lokaler og fortrolighed</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mødelokaler:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Adgang til mødelokaler i København. Online-møder tilbydes også.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fortrolighed:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Jeg arbejder efter{" "}
                    <a 
                      href="https://www.icfdanmark.dk/wp-content/uploads/icfs-etiske-retningslinjer-juli-2025.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8B4513] hover:text-[#6B3410] underline"
                    >
                      ICF&apos;s etiske retningslinjer
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-8">
            Har du fået lyst til at tage næste skridt?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Det første telefonmøde er altid gratis og uforpligtende, så du kan mærke efter, om forløbet er det rette for dig.
          </p>
          <p className="text-gray-700 mb-6">
            Kontakt mig her for at aftale en indledende samtale eller stille spørgsmål
          </p>
          <Link 
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-900 bg-[#e9dccb] hover:bg-[#d7c3ad] transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e9dccb] focus:ring-offset-2"
          >
            Jeg glæder mig til at høre fra dig.
          </Link>
        </div>
      </section>
    </main>
  );
}
