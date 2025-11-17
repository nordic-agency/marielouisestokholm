"use client";
import Link from "next/link";
import Image from "next/image";
import { AcademicCapIcon, BriefcaseIcon, SparklesIcon, MagnifyingGlassIcon, ChatBubbleLeftRightIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section med billede og tekst overlay */}
      <section className="relative w-full h-[600px] md:h-[700px] -mx-6 md:-mx-8">
        <div className="absolute inset-0 w-full">
          <Image
            src="/images/picture-3.png"
            alt="Marie Louise Stokholm"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 h-full flex items-end justify-center px-6 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-4xl leading-relaxed text-white font-medium px-8 py-6 inline-block">
              Jeg drives af at se mennesker finde fodfæste<br className="md:hidden" /> og styrke midt i forandring.
            </p>
          </div>
        </div>
      </section>

      {/* Erhvervscoach med blik for både mennesket og organisationen */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/images/picture-5.jpg"
              alt="Marie Louise Stokholm"
              width={800}
              height={600}
              className="w-full h-auto rounded shadow-md object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">
              Erhvervscoach med blik for både mennesket og organisationen
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Jeg hedder <strong>Marie Louise Stokholm</strong> og har mere end 25 års erfaring som leder og HR-direktør med udvikling af ledere, medarbejdere og organisationer - fra beslutningsbordet til den enkelte medarbejders virkelighed.
              </p>
              <p>
                Jeg ved, hvor afgørende det er, at mennesker trives og finder retning - både for dem selv og for fællesskabet omkring dem. I dag driver jeg min egen virksomhed, hvor jeg coacher, rådgiver og fungerer som sparringspartner. Min motivation er at hjælpe mennesker med at skabe <strong>klarhed, mod og handlekraft</strong>, når arbejdslivet kalder på noget nyt.
              </p>
            </div>
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
              Efter mange år som leder og HR-direktør ved jeg, hvor meget der sker, når vi får mulighed for at standse op og tænke os om. Det er grundlaget for min tilgang i dag.
            </p>
            <p>
              Hos mig er samtalen centrum. Den er et arbejdsrum, hvor du kan tænke højt, få nye perspektiver og finde veje videre i dit arbejdsliv.
            </p>
            <p>
              Jeg møder dig med nærvær, ærlighed og solid erfaring - altid med afsæt i din virkelighed.
            </p>
          </div>
        </div>
      </section>

      {/* Fremhævet statement */}
      <section className="bg-[#e9dccb] py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
            Du skal ikke præstere - du skal bare møde op.
          </p>
        </div>
      </section>

      {/* Sådan arbejder jeg */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-12 text-center">
            Sådan arbejder jeg:
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#e9dccb] rounded-full flex items-center justify-center mx-auto mb-6">
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                Vi undersøger, hvad der holder dig tilbage - og hvor du faktisk kan rykke dig.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#e9dccb] rounded-full flex items-center justify-center mx-auto mb-6">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-700" />
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                Jeg lytter, stiller spørgsmål og deler mine erfaringer.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#e9dccb] rounded-full flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="w-6 h-6 text-gray-700" />
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                Sammen skaber vi overblik og definerer de næste skridt, der giver mening for dig.
              </p>
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
                <AcademicCapIcon className="w-8 h-8 text-gray-700 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Udvalgt uddannelse</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Master i Ledelses- og Organisationspsykologi (AAU)</li>
                <li>• Bestyrelsesuddannelse (CBS/Børsen)</li>
                <li>• Certificeret coach (ICF & EMCC)</li>
                <li>• HD i Organisation og Ledelse (CBS)</li>
                <li>• HA. Alm. (SDU)</li>
              </ul>
            </div>

            {/* Udvalgt erfaring */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="w-8 h-8 text-gray-700 mr-3" />
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
                <SparklesIcon className="w-8 h-8 text-gray-700 mr-3" />
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
              Hos mig får du ikke et quickfix - men et trygt og professionelt rum, hvor vi kan undersøge, hvad der giver mening for dig.
            </p>
            <p>
              Jeg hjælper dig med at skabe klarhed og træffe valg, der føles rigtige - ikke bare i forhold til opgaver og ansvar, men også når det gælder relationer, værdier, mod og mening.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action sektion */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-8 text-center">
            Er du nysgerrig på, hvad et samtaleforløb kan betyde for dig?
          </h2>
          <div className="text-center">
            <Link
              href="/kontakt"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-4 px-8 rounded transition text-lg"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
