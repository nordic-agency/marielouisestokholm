"use client";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl mx-auto text-gray-900 tracking-tight mb-6">
            Om mig – min tilgang
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-gray-700 font-medium">
            Jeg drives af at se mennesker finde fodfæste og styrke midt i forandring.
          </p>
        </div>
      </section>

      {/* Foto sektion */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/foran-whiteboard.jpg"
              alt="Marie Louise Stokholm"
              className="rounded-lg shadow-md object-cover w-full max-w-2xl mx-auto h-auto"
              width={800}
              height={600}
            />
          </div>
          <p className="text-lg text-gray-700 italic">
            klarhed, mod og <span className="underline decoration-[#e9dccb] decoration-2 underline-offset-4">handlekraft</span>
          </p>
        </div>
      </section>

      {/* Erhvervscoach med blik for både mennesket og organisationen */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-8 text-center">
            Erhvervscoach med blik for både mennesket og organisationen
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Jeg har over 25 års erfaring med ledelse, HR og organisationsudvikling – og har været med hele vejen fra beslutningsbordet til den enkelte medarbejders virkelighed. Denne baggrund giver mig en unik forståelse for de komplekse dynamikker, der spiller ind, når mennesker skal finde deres plads og retning i arbejdslivet.
            </p>
            <p>
              I dag bruger jeg min erfaring som psykolog, erhvervscoach og stifter af Movement Matters – med fokus på det, der bevæger os. Mine samtaler tager afsæt i din kontekst og møder dig, der hvor du står, med respekt for både det menneskelige og det organisatoriske perspektiv.
            </p>
          </div>
        </div>
      </section>

      {/* Min tilgang */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-8 text-center">
            Min tilgang
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Min tilgang bygger på den overbevisning, at ægte forandring og udvikling sker gennem ærlige, dybe samtaler. Jeg tror ikke på hurtige svar eller standardløsninger, men på det, vi undersøger sammen – med respekt for din virkelighed og dine unikke udfordringer.
            </p>
            <p>
              <span className="font-semibold text-gray-900">Den</span> samtale er i centrum. Den er det sted, hvor vi skaber rum til refleksion, hvor vi udfordrer hinanden, og hvor nye perspektiver kan opstå. Det er her, vi finder klarhed og retning sammen.
            </p>
            <p>
              Jeg møder dig med nysgerrighed, empati og den faglige ballast, der kommer fra mange års erfaring med både det menneskelige og det organisatoriske aspekt af forandring. Du skal ikke præstere – du skal bare møde op.
            </p>
          </div>
        </div>
      </section>

      {/* Fremhævet statement */}
      <section className="bg-[#e9dccb] py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">👋</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
            Du skal ikke præstere – du skal bare møde op.
          </p>
        </div>
      </section>

      {/* Sådan arbejder jeg */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-8 text-center">
            Sådan arbejder jeg:
          </h2>
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">1. Vi starter med at mødes, hvor du er</h3>
              <p>Første samtale handler om at forstå din situation, dine udfordringer og dine ønsker. Der er ingen forventninger til, at du skal have styr på alt – vi undersøger sammen, hvad der bevæger sig.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">2. Vi skaber rum til refleksion og nye perspektiver</h3>
              <p>Gennem ærlige samtaler og skarpe spørgsmål hjælper jeg dig med at se din situation fra nye vinkler. Det handler ikke om at fortælle dig, hvad du skal gøre, men om at hjælpe dig med at finde dine egne svar.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">3. Vi omsætter indsigt til handling</h3>
              <p>Samtalerne skal føre til konkret bevægelse. Vi finder de næste skridt, der giver mening for dig, og jeg støtter dig i at tage dem – med den hastighed og den tilgang, der passer til din situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tre byggesten i mit ståsted */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-12 text-center">
            Tre byggesten i mit ståsted
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Udvalgt uddannelse */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🎓</span>
                <h3 className="text-xl font-semibold text-gray-900">Udvalgt uddannelse</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Master i Ledelses- og organisationspsykologi (AU)</li>
                <li>• Bestyrelsesuddannelse (CBS/Børsen)</li>
                <li>• Certificeret coach (ICF & EMCC)</li>
                <li>• HD i Organisation og Ledelse (CBS)</li>
                <li>• HA-studiet (SDU)</li>
              </ul>
            </div>

            {/* Udvalgt erfaring */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">💼</span>
                <h3 className="text-xl font-semibold text-gray-900">Udvalgt erfaring</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Group HR Director, Plus Pack</li>
                <li>• Group Head of HR, Babcock & Wilcox</li>
                <li>• Group HR Manager, Uhrenholt</li>
                <li>• HR-chef, Syddansk Erhvervsskole</li>
                <li>• +25 års ledelseserfaring fra både private og offentlige organisationer</li>
              </ul>
            </div>

            {/* Praksis */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🌱</span>
                <h3 className="text-xl font-semibold text-gray-900">Praksis</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Speciale i at forbinde organisatorisk indsigt med psykologisk forståelse</li>
                <li>• Arbejder dialogisk og fænomenologisk - med afsæt i, hvad der fylder nu, og hvad der skal fylde fremover</li>
                <li>• Fokus på at skabe bevægelse - både i relationer, værdier og beslutninger</li>
                <li>• +1000 timers dokumenteret coaching og rådgivning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Samtaler, der skaber bevægelse */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-8">
            Samtaler, der skaber bevægelse
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Hos mig får du ikke et quickfix – men et trygt og professionelt rum, hvor vi kan undersøge, hvad der giver mening for dig.
            </p>
            <p>
              Jeg hjælper dig med at skabe klarhed og træffe valg, der føles rigtige – ikke bare i forhold til opgaver og ansvar, men også når det gælder relationer, værdier, mod og mening.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="bg-blue-50 py-16 px-6 flex justify-center items-center">
        <div className="max-w-xl w-full mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Book en samtale</h2>
          <p className="text-base text-gray-700 leading-relaxed">Det første skridt er ikke et commitment – det er en begyndelse.</p>
          <div className="text-gray-700">
            kontakt@movementmatters.dk <br /> 51 37 37 51
          </div>
          <Link
            href="/kontakt"
            className="inline-block mt-4 bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold px-6 py-3 rounded transition"
          >
            Book en afklarende samtale
          </Link>
        </div>
      </section>
    </div>
  );
}
