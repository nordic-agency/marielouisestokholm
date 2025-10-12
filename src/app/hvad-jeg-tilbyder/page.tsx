import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function HvadJegTilbyder() {
  return (
    <main className="bg-gray-50 space-y-16">
      {/* Hero Section */}
      <section className="w-full bg-white pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">
            Jeg tilbyder
          </h1>
          
          {/* Photo placeholder */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-gray-500 font-medium">Foto: (peger...siger se med...)</p>
                <p className="text-sm text-gray-400 mt-1">Tagline med retning</p>
              </div>
            </div>
          </div>
          
          {/* Taglines */}
          <div className="space-y-4">
            <p className="text-xl font-bold text-gray-900">
              Din virkelighed. Din retning. Dit næste skridt.
            </p>
            <p className="text-xl font-bold text-gray-900">
              Samtaler, der skaber retning – med dig og for dig.
            </p>
          </div>

          {/* Main content */}
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
            <p>
              Jeg hjælper dig med at finde klarhed, mod og handlekraft, når arbejdslivet kalder på forandring.
            </p>
            <p>
              Som coach og sparringspartner skaber jeg et fortroligt rum, hvor du kan tænke højt, se nyt – og handle på det, der betyder noget for dig.
            </p>
            <p>
              Mit udgangspunkt er altid <strong>dig og din virkelighed</strong>. Ingen standardløsninger. Nogle forløb er korte og fokuserede. Andre længere og mere dybdegående. Det kan handle om dig eller om en konkret udfordring, du står midt i.
            </p>
            <p>
              Vil du vide mere om min baggrund og tilgang? Læs videre på siden <Link href="/om-mig" className="text-[#8B4513] hover:text-[#A0522D] font-semibold underline decoration-2 underline-offset-2">Om mig</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Forløb Cards */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 pb-20">
        {/* Card 1 */}
        <div className="bg-white/90 backdrop-blur shadow-sm border border-gray-200/50 rounded-lg shadow p-6 space-y-4 transition hover:shadow-lg hover:-translate-y-1">
          <div className="bg-gray-200 rounded-md w-full h-64 mb-4 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl mb-2">📸</div>
              <p className="text-gray-500 text-sm">Foto placeholder</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">1. Stå ved dit lederskab</h2>
          <p className="text-base text-gray-700 leading-relaxed">Når du vil kunne lede – med retning, mod og menneskelighed.</p>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-1">
            <li>Ny i rollen – ønsker at sætte retning fra dag ét</li>
            <li>Balancerer mellem bestyrelse, medarbejdere og egne værdier</li>
            <li>Længes efter ny mening eller energi</li>
            <li>Udfordringer du ikke kan dele internt</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white/90 backdrop-blur shadow-sm border border-gray-200/50 rounded-lg shadow p-6 space-y-4 transition hover:shadow-lg hover:-translate-y-1">
          <div className="bg-gray-200 rounded-md w-full h-64 mb-4 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl mb-2">📸</div>
              <p className="text-gray-500 text-sm">Foto placeholder</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">2. Tænk højt – og få sparring</h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Når du har brug for at vende tankerne med én, der lytter og udfordrer.
          </p>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-1 mt-2">
            <li>Du står i et vigtigt valg</li>
            <li>Du føler dig alene i din rolle</li>
            <li>Du er kørt fast og søger nye muligheder</li>
            <li>Du ønsker ærlig feedback</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white/90 backdrop-blur shadow-sm border border-gray-200/50 rounded-lg shadow p-6 space-y-4 transition hover:shadow-lg hover:-translate-y-1">
          <div className="bg-gray-200 rounded-md w-full h-64 mb-4 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl mb-2">📸</div>
              <p className="text-gray-500 text-sm">Foto placeholder</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">3. Gentænk din retning</h2>
          <p className="text-base text-gray-700 leading-relaxed">Når arbejdet ikke længere passer til den, du er – eller den, du er ved at blive.</p>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-1">
            <li>Drænet i nuværende job</li>
            <li>Vil finde et nyt ståsted efter sygemelding</li>
            <li>Nyt sted i livet – ønsker et arbejdsliv der matcher</li>
            <li>Vil videre på en måde der passer til dig</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="bg-white/90 backdrop-blur shadow-sm border border-gray-200/50 rounded-lg shadow p-6 space-y-4 transition hover:shadow-lg hover:-translate-y-1">
          <div className="bg-gray-200 rounded-md w-full h-64 mb-4 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl mb-2">📸</div>
              <p className="text-gray-500 text-sm">Foto placeholder</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">4. Kom videre – efter en opsigelse</h2>
          <p className="text-base text-gray-700 leading-relaxed">Når du skal videre – og vil tage dig selv med i processen.</p>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-1">
            <li>Opsagt og søger ny retning</li>
            <li>Har selv sagt op – og mærker det kræver mere</li>
            <li>Mistet troen på egne evner</li>
            <li>Har brug for hjælp til CV, LinkedIn eller præsentation</li>
          </ul>
        </div>
      </section>
    </main>
  );
}