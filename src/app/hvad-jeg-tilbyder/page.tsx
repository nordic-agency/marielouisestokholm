import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, LightBulbIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function HvadJegTilbyder() {
  return (
    <main className="bg-gray-50 space-y-16">
      {/* Full-width Header Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <Image
          src="/images/picture-6.png"
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
          <p className="text-xl md:text-2xl font-sans font-bold mb-8">
            Din virkelighed. Din retning. Dit næste skridt.
          </p>
          <p className="text-xl md:text-2xl font-sans font-bold mb-8">
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
          <div className="space-y-6 text-lg font-sans leading-relaxed text-gray-700 max-w-3xl mx-auto">
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
          <p className="text-xl md:text-2xl font-sans font-bold text-white leading-relaxed mb-4">
            Vil du vide mere om min baggrund og tilgang?
          </p>
          <p className="text-lg font-sans text-white/90 mb-6">
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
          <h2 className="text-2xl font-sans font-semibold text-gray-900 tracking-tight">1. Stå ved dit lederskab</h2>
          <p className="text-base font-sans text-gray-700 font-sans leading-relaxed">Når du vil lede med retning, mod og menneskelighed. Som leder skal du levere, involvere og udvikle — og helst på én gang med overblik og nærvær. Hos mig får du et fortroligt rum til at tænke højt, finde ro og stå stærkt i dit lederskab.</p>
          <p className="font-sans font-sans font-medium mb-3 text-base">Det kan handle om:</p>
          <ul className="list-disc list-inside text-base font-sans text-gray-700 font-sans leading-relaxed space-y-1">
            <li>At være ny i rollen og ville sætte en tydelig kurs.</li>
            <li>At balancere mellem bestyrelse, medarbejdere og egne værdier.</li>
            <li>At længes efter ny energi eller mening i lederrollen.</li>
            <li>At have udfordringer, du ikke kan dele internt.</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white/90 backdrop-blur shadow-sm border border-gray-200/50 rounded-lg shadow p-6 space-y-4 transition hover:shadow-lg hover:-translate-y-1">
          <Image src="/images/om-mig-cover.jpg" alt="Forløb" width={600} height={300} className="rounded-md object-cover w-full h-64 mb-4" />
          <h2 className="text-2xl font-sans font-semibold text-gray-900 tracking-tight">2. Tænk højt – og få sparring</h2>
          <p className="text-base font-sans text-gray-700 font-sans leading-relaxed">
            Når du har brug for en samtalepartner, der både lytter, forstår og udfordrer. Mange står alene med et stort ansvar. Når det larmer, kan det være svært at høre sig selv. Her kan du i et fortroligt rum dele det svære, få nye perspektiver og mærke klarhed.
          </p>
          <p className="font-sans font-medium mb-3 text-base">Det kan handle om:</p>
          <ul className="list-disc list-inside text-base font-sans text-gray-700 font-sans leading-relaxed space-y-1">
            <li>At stå i et valg og ville tænke det igennem strategisk.</li>
            <li>At mangle en sparringspartner i rollen.</li>
            <li>At være kørt fast og have brug for nye muligheder.</li>
            <li>At ønske ærlig feedback — uden filtre eller hensyn.</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white/90 backdrop-blur shadow-sm border border-gray-200/50 rounded-lg shadow p-6 space-y-4 transition hover:shadow-lg hover:-translate-y-1">
          <Image src="/images/foran-whiteboard.jpg" alt="Forløb" width={600} height={300} className="rounded-md object-cover w-full h-64 mb-4" />
          <h2 className="text-2xl font-sans font-semibold text-gray-900 tracking-tight">3. Gentænk dit arbejdsliv</h2>
          <p className="text-base font-sans text-gray-700 font-sans leading-relaxed">Når jobbet ikke længere matcher den, du er — eller den, du er ved at blive. Det, der engang gav mening, gør det måske ikke længere. Vi undersøger sammen, hvad du længes efter, og hvilke muligheder der ligger foran dig — en lille justering eller et større skifte.</p>
          <p className="font-sans font-medium mb-3 text-base">Det kan handle om:</p>
          <ul className="list-disc list-inside text-base font-sans text-gray-700 font-sans leading-relaxed space-y-1">
            <li>At stå et nyt sted i livet og ville have arbejdslivet til at følge med.</li>
            <li>At ville videre — på egne præmisser.</li>
            <li>At føle dig drænet eller utilfreds i dit nuværende job.</li>
            <li>At vende tilbage efter en sygemelding og finde et nyt udgangspunkt.</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="bg-white/90 backdrop-blur shadow-sm border border-gray-200/50 rounded-lg shadow p-6 space-y-4 transition hover:shadow-lg hover:-translate-y-1">
          <Image src="/images/MarieLouise10027847.jpg" alt="Forløb" width={600} height={300} className="rounded-md object-cover w-full h-64 mb-4" />
          <h2 className="text-2xl font-sans font-semibold text-gray-900 tracking-tight">4. Kom videre – efter en opsigelse</h2>
          <p className="text-base font-sans text-gray-700 font-sans leading-relaxed">Når du skal videre — og vil tage dig selv med i processen. En opsigelse kan ryste både identitet og selvtillid. Det kan føles som frihed, som tomrum — eller begge dele. Hos mig får både sårbarhed og strategi plads, så du kan finde fodfæste og retning.</p>
          <p className="font-sans font-medium mb-3 text-base">Det kan handle om:</p>
          <ul className="list-disc list-inside text-base font-sans text-gray-700 font-sans leading-relaxed space-y-1">
            <li>At bruge en opsigelse til at finde ny retning.</li>
            <li>At opdage, at det kræver mere end forventet at sige op selv.</li>
            <li>At genfinde troen på egne evner og et nyt ståsted.</li>
            <li>At få hjælp til at formulere din profil — fx CV og LinkedIn.</li>
          </ul>
        </div>
      </section>

      {/* Dit udgangspunkt – din virkelighed */}
      <section className="py-24 px-6 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-8 text-center">
            Dit udgangspunkt – din virkelighed
          </h2>
          
          <div className="space-y-6 text-lg font-sans leading-relaxed text-gray-700 mb-12 text-center">
            <p>Måske genkender du dig selv i én af situationerne.</p>
            <p>Måske står du et helt andet sted.</p>
            <p>Uanset hvad, tager vi udgangspunkt i din virkelighed – og finder det forløb, der passer til dig.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vil du tage næste skridt? */}
            <div className="bg-white border border-gray-200 p-6 text-center">
              <ArrowRightIcon className="w-10 h-10 text-[#8B4513] mx-auto mb-4" />
              <h3 className="text-xl font-sans font-bold text-gray-900 mb-4">Vil du tage næste skridt?</h3>
              <div className="text-gray-700 font-sans leading-relaxed space-y-3">
                <p>
                  Læs mere om rammerne på <Link href="/praktik-og-priser" className="text-[#8B4513] hover:text-[#A0522D] font-semibold underline decoration-2 underline-offset-2">Praktik og priser</Link>
                </p>
                <p>
                  Eller tag kontakt her: <Link href="/kontakt" className="text-[#8B4513] hover:text-[#A0522D] font-semibold underline decoration-2 underline-offset-2">Kontakt</Link>.
                </p>
              </div>
            </div>

            {/* Lyst til inspiration? */}
            <div className="bg-white border border-gray-200 p-6 text-center">
              <LightBulbIcon className="w-10 h-10 text-[#8B4513] mx-auto mb-4" />
              <h3 className="text-xl font-sans font-bold text-gray-900 mb-4">Lyst til inspiration?</h3>
              <div className="text-gray-700 font-sans leading-relaxed space-y-3">
                <p>
                  Læs mere på min blog – måske indlægget
                </p>
                <p>
                  <Link href="/blog" className="text-[#8B4513] hover:text-[#A0522D] font-semibold underline decoration-2 underline-offset-2">Vi har rødder – men har vi også fødder</Link>
                </p>
              </div>
            </div>

            {/* Sådan starter vi */}
            <div className="bg-white border border-gray-200 p-6 text-center">
              <ChatBubbleLeftRightIcon className="w-10 h-10 text-[#8B4513] mx-auto mb-4" />
              <h3 className="text-xl font-sans font-bold text-gray-900 mb-4">Sådan starter vi</h3>
              <div className="text-gray-700 font-sans leading-relaxed space-y-3">
                <p>
                  Første skridt er en uforpligtende samtale.
                </p>
                <p>
                  Vi ser, om der er et match – det er vigtigt, at det føles rigtigt for dig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}