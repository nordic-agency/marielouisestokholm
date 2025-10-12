import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function HvadJegTilbyder() {
  return (
    <main className="bg-gray-50 space-y-16">
      {/* Full-width Header Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <Image
          src="/images/om-mig-cover.jpg"
          alt="Marie Louise Stokholm"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-tight mb-6">
            Jeg tilbyder
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-8">
            Din virkelighed. Din retning. Dit næste skridt.
          </p>
          <p className="text-lg md:text-xl mb-8">
            Samtaler, der skaber retning – med dig og for dig.
          </p>
          <p className="text-sm text-white/80 italic">
            Foto: (peger...siger se med...)
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
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
          </div>
        </div>
      </section>

      {/* Banner sektion med billede */}
      <section className="relative py-24 px-6">
        <Image
          src="/images/foran-whiteboard.jpg"
          alt="Banner billede"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-4">
            Vil du vide mere om min baggrund og tilgang?
          </p>
          <p className="text-lg text-white/90 mb-6">
            Læs videre på siden <Link href="/om-mig" className="text-[#e9dccb] hover:text-[#d7c3ad] font-semibold underline decoration-2 underline-offset-2">Om mig</Link>.
          </p>
          <div className="text-sm text-white/80 italic">
            Foto: (peger...siger se med...)
          </div>
        </div>
      </section>

      {/* Forløb Cards */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 pb-20">
        {/* Card 1 */}
        <div className="bg-white/90 backdrop-blur shadow-sm border border-gray-200/50 rounded-lg shadow p-6 space-y-4 transition hover:shadow-lg hover:-translate-y-1">
          <Image src="/images/index-portrait.jpg" alt="Forløb" width={600} height={300} className="rounded-md object-cover w-full h-64 mb-4" />
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
          <Image src="/images/om-mig-cover.jpg" alt="Forløb" width={600} height={300} className="rounded-md object-cover w-full h-64 mb-4" />
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
          <Image src="/images/foran-whiteboard.jpg" alt="Forløb" width={600} height={300} className="rounded-md object-cover w-full h-64 mb-4" />
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
          <Image src="/images/MarieLouise10027847.jpg" alt="Forløb" width={600} height={300} className="rounded-md object-cover w-full h-64 mb-4" />
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