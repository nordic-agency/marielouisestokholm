import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function HvadJegTilbyder() {
  return (
    <main className="bg-gray-50 space-y-16">
      {/* Hero Section */}
      <section className="w-full bg-blue-50 pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug tracking-tight">
            Hvad jeg tilbyder
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Fire forløb til klarhed og retning – skabt til dig og dit arbejdsliv.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Når dit arbejde skifter form – eller ikke længere føles rigtigt – har du behov for mere end gode råd. Du kan have behov for et sted at lægge kortene på bordet – og se dem i et nyt lys. Derfor har jeg udviklet fire forskellige forløb, som alle tager afsæt i din virkelighed og din arbejdssituation – med samme menneskelige og faglige tilgang.
          </p>
          <p>
            <Link href="/kontakt" className="text-blue-600 underline font-medium">
              Tag det første skridt med en afklarende samtale
              <ArrowRightIcon className="inline w-4 h-4 ml-1 text-blue-500" />
            </Link>
          </p>
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