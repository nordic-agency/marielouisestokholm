 "use client";
import { useState } from "react";
import Image from "next/image";
import CalendlyPopup from '@/components/CalendlyPopup';
import {
  UserGroupIcon,
  MapIcon,
  ChatBubbleBottomCenterTextIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

import type { ComponentType } from "react";

function ApproachItem({
  Icon,
  title,
  children,
}: {
  Icon: ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="h-6 w-6 flex-shrink-0 text-gray-900 mt-1" aria-hidden="true" />
      <div>
        <p>
          <strong>{title}</strong> {children}
        </p>
      </div>
    </div>
  );
}


// Example usage for a dynamic blog post page:
// export default function BlogPost({ params }: Props) {
//   const { slug } = params;
//   // ...
// }

export default function Home() {
  const testimonials = [
    {
      quote: "Et regulært energiboost … skarp, intuitiv og psykologisk indsigtsfuld. Udfordrer og støtter på én gang – og omsætter idéer til handling.",
      name: "Frederikke Abildstrup, Senior Legal Counsel",
      image: "/images/testomonials/Frederikke Abildstrup, Senior Legal Counsel.jpeg"
    },
    {
      quote: "Skræddersyet perfekt til mig … taget seriøst, forstået og godt klædt på. Over al forventning.",
      name: "Lasse Holst Christensen, Fund Manager",
      image: "/images/testomonials/Lasse Holst Christensen.jpeg"
    },
    {
      quote: "Hun så mig og min situation – tog coachingen i mit tempo, improviserede og udfordrede. Jeg voksede af det.",
      name: "Anne Brusberg, Contracts and Proposals Director"
    },
    {
      quote: "Hun var i mit ringhjørne – til stede, empatisk, motiverende og knivskarp. Medvirkende til at jeg starter virksomhed.",
      name: "Michael Sonnested, Global Product Manager",
      image: "/images/testomonials/Michael Sonnested.png"
    },
    {
      quote: "Så og læste mig fra dag 1 … trygt sted, der guidede mig tilbage til mit selvsikre jeg. Mine allerbedste anbefalinger.",
      name: "Trine Terp, Salgskonsulent",
      image: "/images/testomonials/Trine Terp.jpeg"
    },
    {
      quote: "Stiller de rigtige spørgsmål på rette tid … dyb indsigt i arbejdsmarkedet. Hjalp mig til klarhed og retning.",
      name: "Anders Tornøe, Digital Learning Consultant",
      image: "/images/testomonials/Anders Tornøe.jpeg"
    }
  ];
  const [visibleCount, setVisibleCount] = useState(6);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <Image
          src="/images/cover-forsiden-2.jpg"
          alt="Movement Matters forsidebillede"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 max-w-4xl space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Når noget i dit arbejdsliv er i bevægelse
            <br />— eller måske burde være det
          </h1>
          {/* Updated tagline with bold styling */}
          <p className="text-xl md:text-2xl leading-relaxed text-white font-bold">Samtaler, der skaber retning. Med dig – og for dig.</p>
        </div>
      </section>

      {/* Leadership Section Inspired by antoinettedalehenderson.com */}
      <section className="py-24 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/images/profil.jpg"
              alt="Leadership session"
              width={800}
              height={600}
              className="w-full h-auto rounded shadow-md object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">
              Erhvervscoach med indsigt i både mennesket og organisationen
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Jeg hedder Marie Louise Stokholm og har mere end 25 års erfaring som leder og HR-direktør med udvikling af ledere, medarbejdere og organisationer.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              I dag driver jeg min egen virksomhed, hvor jeg coacher, rådgiver og fungerer som sparringspartner — med fokus på at skabe klarhed, mod og handlekraft — gennem samtaler, der forbinder indsigt med handling.
            </p>
            <a
              href="/om-mig"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition"
            >
              Læs mere om mig
            </a>
          </div>
        </div>
      </section>


      {/* Intro */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/foran-whiteboard.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-6 max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-snug tracking-tight">
            Dit arbejdsliv forandrer sig<br />— eller står det stille
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Måske mærker du uro, tvivl eller en stille fornemmelse af, at noget ikke længere passer.
          </p>
        </div>
      </section>

      {/* Det kan være, at du */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Det kan være, at du:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-700">
            <li>er leder og står i krydspres mellem resultater, relationer og dig selv</li>
            <li>er medarbejder og længes efter mening, energi eller bevægelse</li>
            <li>er på vej videre — frivilligt eller ufrivilligt — og tvivler på næste skridt</li>
          </ul>
          <p className="text-lg leading-relaxed text-gray-700">
            Det handler om mere end dit arbejde. Det handler om, hvordan du trives, træffer valg og finder fodfæste i det arbejdsliv, du står midt i.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            En lille bevægelse kan blive begyndelsen på noget større.
          </p>
          <a href="/kontakt" className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition">
            Lad os tage den første samtale
          </a>
        </div>
        <div>
          <Image
            src="/images/MarieLouise10027847.jpg"
            alt="Marie Louise i samtale"
            width={800}
            height={600}
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      </section>


      {/* Jeg tilbyder */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Samtaleforløb til klarhed og retning</h2>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 font-medium">Vær modig. Stop op. Mærk efter.</p>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Jeg tilbyder samtaleforløb, der giver dig klarhed, mod og handlekraft — når du står et sted i arbejdslivet, hvor noget må ændres.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Måske genkender du dig selv i én af situationerne. Måske står du et helt andet sted. Uanset hvad, tager vi udgangspunkt i din virkelighed — og finder det forløb, der passer til dig.
            </p>
          </div>


          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
            {/* 1. Stå ved dit lederskab */}
            <div className="bg-[#f8f8f8] rounded-lg p-6 border-l-4 border-[#e9dccb]">
              <button
                onClick={() => setExpandedService(expandedService === 1 ? null : 1)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold text-gray-900">Stå ved dit lederskab</h3>
                <span className="text-2xl text-gray-600">
                  {expandedService === 1 ? '−' : '+'}
                </span>
              </button>
              <p className="mt-2 text-gray-700">Når du vil lede med retning, mod og menneskelighed. Som leder skal du levere, involvere og udvikle — og helst på én gang med overblik og nærvær. Hos mig får du et fortroligt rum til at tænke højt, finde ro og stå stærkt i dit lederskab.</p>
              {expandedService === 1 && (
                <div className="mt-4 text-gray-700">
                  <p className="font-medium mb-2">Det kan handle om:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>At være ny i rollen og ville sætte en tydelig kurs.</li>
                    <li>At balancere mellem bestyrelse, medarbejdere og egne værdier.</li>
                    <li>At længes efter ny energi eller mening i lederrollen.</li>
                    <li>At have udfordringer, du ikke kan dele internt.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* 2. Tænk højt – og få sparring */}
            <div className="bg-[#f8f8f8] rounded-lg p-6 border-l-4 border-[#d4e6f1]">
              <button
                onClick={() => setExpandedService(expandedService === 2 ? null : 2)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold text-gray-900">Tænk højt — og få sparring</h3>
                <span className="text-2xl text-gray-600">
                  {expandedService === 2 ? '−' : '+'}
                </span>
              </button>
              <p className="mt-2 text-gray-700">Når du har brug for en samtalepartner, der både lytter, forstår og udfordrer. Mange står alene med et stort ansvar. Når det larmer, kan det være svært at høre sig selv. Her kan du i et fortroligt rum dele det svære, få nye perspektiver og mærke klarhed.</p>
              {expandedService === 2 && (
                <div className="mt-4 text-gray-700">
                  <p className="font-medium mb-2">Det kan handle om:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>At stå i et valg og ville tænke det igennem strategisk.</li>
                    <li>At mangle en sparringspartner i rollen.</li>
                    <li>At være kørt fast og have brug for nye muligheder.</li>
                    <li>At ønske ærlig feedback — uden filtre eller hensyn.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* 3. Gentænk dit arbejdsliv */}
            <div className="bg-[#f8f8f8] rounded-lg p-6 border-l-4 border-[#e8f5e8]">
              <button
                onClick={() => setExpandedService(expandedService === 3 ? null : 3)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold text-gray-900">Gentænk dit arbejdsliv</h3>
                <span className="text-2xl text-gray-600">
                  {expandedService === 3 ? '−' : '+'}
                </span>
              </button>
              <p className="mt-2 text-gray-700">Når jobbet ikke længere matcher den, du er — eller den, du er ved at blive. Det, der engang gav mening, gør det måske ikke længere. Vi undersøger sammen, hvad du længes efter, og hvilke muligheder der ligger foran dig — en lille justering eller et større skifte.</p>
              {expandedService === 3 && (
                <div className="mt-4 text-gray-700">
                  <p className="font-medium mb-2">Det kan handle om:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>At stå et nyt sted i livet og ville have arbejdslivet til at følge med.</li>
                    <li>At ville videre — på egne præmisser.</li>
                    <li>At føle dig drænet eller utilfreds i dit nuværende job.</li>
                    <li>At vende tilbage efter en sygemelding og finde et nyt udgangspunkt.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* 4. Kom videre – efter en opsigelse */}
            <div className="bg-[#f8f8f8] rounded-lg p-6 border-l-4 border-[#ffeaa7]">
              <button
                onClick={() => setExpandedService(expandedService === 4 ? null : 4)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold text-gray-900">Kom videre — efter en opsigelse</h3>
                <span className="text-2xl text-gray-600">
                  {expandedService === 4 ? '−' : '+'}
                </span>
              </button>
              <p className="mt-2 text-gray-700">Når du skal videre — og vil tage dig selv med i processen. En opsigelse kan ryste både identitet og selvtillid. Det kan føles som frihed, som tomrum — eller begge dele. Hos mig får både sårbarhed og strategi plads, så du kan finde fodfæste og retning.</p>
              {expandedService === 4 && (
                <div className="mt-4 text-gray-700">
                  <p className="font-medium mb-2">Det kan handle om:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>At bruge en opsigelse til at finde ny retning.</li>
                    <li>At opdage, at det kræver mere end forventet at sige op selv.</li>
                    <li>At genfinde troen på egne evner og et nyt ståsted.</li>
                    <li>At få hjælp til at formulere din profil — fx CV og LinkedIn.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>


          {/* CTA knap */}
          <div className="text-center mt-12">
            <a
              href="/hvad-jeg-tilbyder"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition"
            >
              Her kan du læse mere om, hvad jeg tilbyder
            </a>
          </div>

          {/* Logo Cloud */}
          <div className="w-full px-0 mt-16">
    <p className="text-center text-sm text-gray-500">Jeg har hjulpet medarbejdere hos blandt andre:</p>
    <div className="overflow-hidden relative w-full mt-10">
      <div className="flex animate-slide whitespace-nowrap gap-16">
        {[
          "/images/logocloud/atea.png",
          "/images/logocloud/cowi.png",
          "/images/logocloud/dell.png",
          "/images/logocloud/lego-logo.png",
          "/images/logocloud/nets.png",
          "/images/logocloud/nordea.png",
          "/images/logocloud/novo-nordisk.png",
          "/images/logocloud/pandora.png",
          "/images/logocloud/topdanmark.png",
          "/images/logocloud/visma.png",
        ].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`logo-${i}`}
            width={158}
            height={48}
            className="h-24 w-auto object-contain grayscale opacity-70"
          />
        ))}
      </div>
    </div>
  </div>
        </div>
      </section>


      {/* Min tilgang */}
      <section className="py-24 px-6 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-4">Min tilgang — samtaler, der skaber bevægelse</h2>
            <p className="text-lg text-gray-700 font-medium">Mine grundprincipper.</p>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            Min tilgang bygger på seks grundprincipper, der tilsammen afspejler, hvordan jeg arbejder — og hvad du kan forvente af et samarbejde. De handler om respekt, klarhed, erfaring og mod til forandring.
          </p>
          <div className="grid lg:grid-cols-3 gap-x-12 gap-y-10 text-lg leading-relaxed">
            <ApproachItem Icon={UserGroupIcon} title="Samtaler med respekt og realitetssans">
              Udvikling sker i ligeværdig dialog — ikke gennem standardløsninger.
            </ApproachItem>
            <ApproachItem Icon={MapIcon} title="Klarhed frem for quickfix">
              Samtaler og spørgsmål, der skaber mening, retning og bevægelse.
            </ApproachItem>
            <ApproachItem Icon={ChatBubbleBottomCenterTextIcon} title="Sproget som løftestang">
              Dine fortællinger former dine valg — og kan altid gentænkes.
            </ApproachItem>
            <ApproachItem Icon={AcademicCapIcon} title="Erfaring fra virkeligheden">
              Mere end 25 års erfaring i ledelse, HR og organisatorisk udvikling.
            </ApproachItem>
            <ApproachItem Icon={HandRaisedIcon} title="Ikke en metode — men en relation">
              Nærvær, ærlighed og respekt — uden præstationskrav.
            </ApproachItem>
            <ApproachItem Icon={LightBulbIcon} title="Mod til forandring">
              Forandring starter med bevidsthed — og med viljen til at handle anderledes.
            </ApproachItem>
          </div>
          <div className="text-center mt-12">
            <a href="/kontakt" className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition">
              Start med en afklarende samtale — uforpligtende og gratis
            </a>
          </div>
        </div>
      </section>


      {/* Hvad du får */}
      <section className="py-24 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Hvad du får</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Hos mig får du ikke en model, du skal passe ind i – men en samtale, der tager afsæt i det, du står i. Du møder ikke en metode på skinner – men en erfaren erhvervscoach med dyb indsigt i både mennesker og arbejdsliv.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Jeg bygger min tilgang på mere end 25 års erfaring med ledelse, HR og organisationsudvikling – og på en certificeret coachuddannelse funderet i psykologi og praksis.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-700">
            <li>En samtale, hvor du ikke skal præstere – men hvor du bliver mødt ærligt og professionelt.</li>
            <li>Et skarpt blik på det, der holder dig tilbage – og hjælp til at se, hvor du faktisk kan rykke dig.</li>
            <li>Sparring, hvor du får gavn af både min erfaring med ledelse og min evne til at lytte og stille de rigtige spørgsmål – altid med udgangspunkt i din situation.</li>
            <li>En konkret samtalestruktur, hvor vi sammen skaber overblik og definerer næste skridt i dit arbejdsliv.</li>
          </ul>
          <a href="/kontakt" className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition">
            Start samtale
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-12">Det siger andre</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left text-gray-800">
            {testimonials
              .slice(0, visibleCount).map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded shadow border">
                {testimonial.image && (
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                )}
                <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-sm text-gray-900">– {testimonial.name}</p>
              </div>
            ))}
          </div>
          {visibleCount < testimonials.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount(visibleCount + 3)}
                className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-2 px-4 rounded transition"
              >
                Vis flere udtalelser
              </button>
            </div>
          )}
          
          {/* CTA til testimonials side */}
          <div className="mt-12 text-center">
            <a
              href="/testimonials"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition"
            >
              Find flere referencer her
            </a>
          </div>
        </div>
      </section>

      {/* Blog & Inspiration */}
      <section className="py-24 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Besøg min blog</h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">Indlæg og inspiration. Nye perspektiver.</p>
            <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
              Her deler jeg refleksioner om arbejdsliv, ledelse og forandring – om det, der bevæger os, og det, der bringer os videre.
            </p>
          </div>
          
          {/* Blog post cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <a href="/blog/nar-livet-kalder-pa-forandring" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/når-livet-kalder.jpg"
                  alt="Når livet kalder på forandring"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#8B4513] transition-colors">
                  Når livet kalder på forandring
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Refleksioner om at lytte til de signaler, der fortæller dig, at noget skal ændres – og hvordan du finder modet til at handle på dem.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog/midt-i-en-forandring-tydelighed-er-dit-kompas" className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/tavle.jpg"
                  alt="Midt i en forandring – tydelighed er dit kompas"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#8B4513] transition-colors">
                  Midt i en forandring – tydelighed er dit kompas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Når du står midt i en omstilling, er tydelighed afgørende. Om at navigere gennem usikkerhed med klarhed og retning.
                </p>
              </div>
            </a>
              </div>

          {/* CTA knap */}
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition"
            >
              Læs flere indlæg på bloggen
            </a>
              </div>
              </div>
      </section>

      {/* Praktik & Priser */}
      <section className="py-24 px-6 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Praktik og priser</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Det praktiske skal være enkelt. Her finder du information om priser, forløb og hvordan vi kommer i gang. Du betaler kun for den tid, du har brug for.
          </p>
          
          {/* CTA knap */}
          <div className="pt-6">
            <a
              href="/hvad-jeg-tilbyder"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition"
            >
              Læs mere om praktik og priser
            </a>
          </div>
        </div>
      </section>

      {/* Afslutning – Kontakt / Call to Action */}
      <section className="py-24 px-6 bg-blue-50 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Det starter her</h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-700">Du behøver ikke have styr på alt for at komme i gang.</p>
            <p className="text-lg leading-relaxed text-gray-700">Ét møde kan åbne døren til nye muligheder.</p>
            <p className="text-lg leading-relaxed text-gray-700">Du skal bare møde op.</p>
          </div>
          <div className="pt-4">
            <a
              href="/kontakt"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-8 rounded transition text-lg"
            >
              Kontakt mig for en uforpligtende samtale
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}