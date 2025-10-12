import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, LightBulbIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function HvadJegTilbyder() {
  return (
    <main className="bg-gray-50 space-y-16">
      {/* Full-width Header Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <Image
          src="/images/cover-forsiden-2.jpg"
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
          <p className="text-base text-gray-700 leading-relaxed">Når du vil lede med retning, mod og menneskelighed. Som leder skal du levere, involvere og udvikle — og helst på én gang med overblik og nærvær. Hos mig får du et fortroligt rum til at tænke højt, finde ro og stå stærkt i dit lederskab.</p>
          <p className="font-medium mb-3 text-base">Det kan handle om:</p>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-1">
            <li>At være ny i rollen og ville sætte en tydelig kurs.</li>
            <li>At balancere mellem bestyrelse, medarbejdere og egne værdier.</li>
            <li>At længes efter ny energi eller mening i lederrollen.</li>
            <li>At have udfordringer, du ikke kan dele internt.</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white/90 backdrop-blur shadow-sm border border-gray-200/50 rounded-lg shadow p-6 space-y-4 transition hover:shadow-lg hover:-translate-y-1">
          <Image src="/images/om-mig-cover.jpg" alt="Forløb" width={600} height={300} className="rounded-md object-cover w-full h-64 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">2. Tænk højt – og få sparring</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Når du har brug for en samtalepartner, der både lytter, forstår og udfordrer. Mange står alene med et stort ansvar. Når det larmer, kan det være svært at høre sig selv. Her kan du i et fortroligt rum dele det svære, få nye perspektiver og mærke klarhed.
          </p>
          <p className="font-medium mb-3 text-base">Det kan handle om:</p>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-1">
            <li>At stå i et valg og ville tænke det igennem strategisk.</li>
            <li>At mangle en sparringspartner i rollen.</li>
            <li>At være kørt fast og have brug for nye muligheder.</li>
            <li>At ønske ærlig feedback — uden filtre eller hensyn.</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white/90 backdrop-blur shadow-sm border border-gray-200/50 rounded-lg shadow p-6 space-y-4 transition hover:shadow-lg hover:-translate-y-1">
          <Image src="/images/foran-whiteboard.jpg" alt="Forløb" width={600} height={300} className="rounded-md object-cover w-full h-64 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">3. Gentænk din retning</h2>
          <p className="text-base text-gray-700 leading-relaxed">Når jobbet ikke længere matcher den, du er — eller den, du er ved at blive. Det, der engang gav mening, gør det måske ikke længere. Vi undersøger sammen, hvad du længes efter, og hvilke muligheder der ligger foran dig — en lille justering eller et større skifte.</p>
          <p className="font-medium mb-3 text-base">Det kan handle om:</p>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-1">
            <li>At stå et nyt sted i livet og ville have arbejdslivet til at følge med.</li>
            <li>At ville videre — på egne præmisser.</li>
            <li>At føle dig drænet eller utilfreds i dit nuværende job.</li>
            <li>At vende tilbage efter en sygemelding og finde et nyt udgangspunkt.</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="bg-white/90 backdrop-blur shadow-sm border border-gray-200/50 rounded-lg shadow p-6 space-y-4 transition hover:shadow-lg hover:-translate-y-1">
          <Image src="/images/MarieLouise10027847.jpg" alt="Forløb" width={600} height={300} className="rounded-md object-cover w-full h-64 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">4. Kom videre – efter en opsigelse</h2>
          <p className="text-base text-gray-700 leading-relaxed">Når du skal videre — og vil tage dig selv med i processen. En opsigelse kan ryste både identitet og selvtillid. Det kan føles som frihed, som tomrum — eller begge dele. Hos mig får både sårbarhed og strategi plads, så du kan finde fodfæste og retning.</p>
          <p className="font-medium mb-3 text-base">Det kan handle om:</p>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-1">
            <li>At bruge en opsigelse til at finde ny retning.</li>
            <li>At opdage, at det kræver mere end forventet at sige op selv.</li>
            <li>At genfinde troen på egne evner og et nyt ståsted.</li>
            <li>At få hjælp til at formulere din profil — fx CV og LinkedIn.</li>
          </ul>
        </div>
      </section>

      {/* Dit udgangspunkt – din virkelighed */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Dit udgangspunkt – din virkelighed
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#e9dccb] to-[#8B4513] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Måske genkender du dig selv i én af situationerne. Måske står du et helt andet sted. 
              Uanset hvad, tager vi udgangspunkt i din virkelighed – og finder det forløb, der passer til dig.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vil du tage næste skridt? */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#e9dccb]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e9dccb] to-[#d7c3ad] rounded-t-2xl"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e9dccb] to-[#d7c3ad] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRightIcon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Vil du tage næste skridt?</h3>
                <div className="space-y-4">
                  <Link 
                    href="/hvad-jeg-tilbyder" 
                    className="block w-full bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-800 font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                  >
                    Praktik og priser
                  </Link>
                  <Link 
                    href="/kontakt" 
                    className="block w-full border-2 border-[#8B4513] hover:bg-[#8B4513] text-[#8B4513] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                  >
                    Tag kontakt
                  </Link>
                </div>
              </div>
            </div>

            {/* Lyst til inspiration? */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8B4513]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-t-2xl"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Lyst til inspiration?</h3>
                <div className="space-y-4">
                  <Link 
                    href="/blog" 
                    className="block w-full bg-[#8B4513] hover:bg-[#A0522D] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                  >
                    Læs min blog
                  </Link>
                  <p className="text-sm text-gray-500 italic">
                    Måske indlægget "Rødder og fødder"
                  </p>
                </div>
              </div>
            </div>

            {/* Sådan starter vi */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#A0522D]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A0522D] to-[#8B4513] rounded-t-2xl"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#A0522D] to-[#8B4513] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Sådan starter vi</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Første skridt er en uforpligtende samtale, hvor du fortæller om din situation – og vi ser, om der er et match.
                  </p>
                  <p className="font-medium text-gray-800">
                    Det er vigtigt, at det føles rigtigt for dig.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}