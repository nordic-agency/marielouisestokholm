"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FeaturedPosts from "@/components/FeaturedPosts";


// Example usage for a dynamic blog post page:
// export default function BlogPost({ params }: Props) {
//   const { slug } = params;
//   // ...
// }

export default function Home() {
  const testimonials = [
    {
      quote: "Et regulært energiboost … skarp, intuitiv og psykologisk indsigtsfuld. Udfordrer og støtter på én gang - og omsætter idéer til handling.",
      name: "Frederikke Abildstrup, Senior Legal Counsel",
      image: "/images/testomonials/Frederikke Abildstrup, Senior Legal Counsel.jpeg"
    },
    {
      quote: "Skræddersyet perfekt til mig … taget seriøst, forstået og godt klædt på. Over al forventning.",
      name: "Lasse Holst Christensen, Fund Manager",
      image: "/images/testomonials/Lasse Holst Christensen.jpeg"
    },
    {
      quote: "Hun så mig og min situation - tog coachingen i mit tempo, improviserede og udfordrede. Jeg voksede af det.",
      name: "Anne Brusberg, Contracts and Proposals Director",
      image: "/images/testomonials/Anne Westergaard.jpeg"
    },
    {
      quote: "Hun var i mit ringhjørne - til stede, empatisk, motiverende og knivskarp. Medvirkende til at jeg starter virksomhed.",
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
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <Image
          src="/images/picture-1.png"
          alt="Marie Louise Stokholm forsidebillede"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 max-w-4xl space-y-6 text-white">
          <h1 className="text-3xl md:text-5xl leading-normal text-white font-medium px-8 py-6 inline-block">
            Erhvervscoach med indsigt i både
            <br />mennesket og organisationen
          </h1>
        </div>
      </section>

      {/* Leadership Section Inspired by antoinettedalehenderson.com */}
      <section className="py-24 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/images/picture-2.jpg"
              alt="Leadership session"
              width={800}
              height={600}
              className="w-full h-auto rounded shadow-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">
              Når noget i dit arbejdsliv er i bevægelse - eller måske burde være det
            </h2>
            <p className="text-lg font-sans leading-relaxed text-gray-700">
              Jeg hedder Marie Louise Stokholm og har mere end 25 års erfaring som leder og HR-direktør med udvikling af ledere, medarbejdere og organisationer.
            </p>
            <p className="text-lg font-sans leading-relaxed text-gray-700">
              I dag driver jeg min egen virksomhed, hvor jeg coacher, rådgiver og fungerer som sparringspartner.
            </p>
            <p className="text-lg font-sans leading-relaxed text-gray-700">
              Mit fokus er at skabe klarhed, mod og handlekraft - gennem samtaler, der forbinder indsigt med handling.
            </p>
            <Link
              href="/om-mig"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-sans font-semibold py-3 px-6 rounded transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e9dccb] focus:ring-offset-2"
            >
              Læs mere om mig
            </Link>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="w-full px-6 pt-2 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-10">Jeg har hjulpet medarbejdere ansat hos blandt andre</p>
          <div className="overflow-hidden relative w-full">
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
                  sizes="158px"
                  loading="lazy"
                />
              ))}
            </div>
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
            Dit arbejdsliv forandrer sig<br />- eller står stille
          </h2>
          <p className="text-lg md:text-xl font-sans leading-relaxed text-white/90">
            Måske mærker du uro, tvivl eller en stille fornemmelse af, at noget ikke længere passer.
          </p>
        </div>
      </section>

      {/* Det kan være, at du */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="p-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Det kan være, at du:</h2>
          <ul className="list-disc list-outside space-y-2 text-lg font-sans leading-relaxed text-gray-700 ml-6">
            <li>Er leder og står i krydspres mellem resultater, relationer og dig selv</li>
            <li>Er medarbejder og længes efter mening, energi eller bevægelse</li>
            <li>Er på vej videre - frivilligt eller ufrivilligt - og tvivler på næste skridt</li>
          </ul>
          <p className="text-lg font-sans leading-relaxed text-gray-700">
            Det handler om mere end dit arbejde. Det handler om, hvordan du trives, træffer valg og finder fodfæste i det arbejdsliv, du står midt i.
          </p>
          <p className="text-lg font-sans leading-relaxed text-gray-700">
            En lille bevægelse kan blive begyndelsen på noget større.
          </p>
          <Link href="/kontakt" className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-sans font-semibold py-3 px-6 rounded transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e9dccb] focus:ring-offset-2">
            Lad os tage den første samtale
          </Link>
        </div>
        <div>
          <Image
            src="/images/picture-4.png"
            alt="Marie Louise i samtale"
            width={800}
            height={600}
            className="rounded-xl shadow-md w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
      </section>


      {/* Jeg tilbyder */}
      <section className="bg-white pt-6 pb-24 sm:pt-10 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Min tilgang - samtaler, der skaber bevægelse</h2>
            <p className="mt-6 text-lg font-sans leading-relaxed text-gray-700">
              Min tilgang bygger på seks grundprincipper, der tilsammen afspejler, hvordan jeg arbejder - og hvad du kan forvente af et samarbejde. De handler om respekt, klarhed, erfaring og mod til forandring.
            </p>
          </div>


          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
            {/* 1. Samtaler med respekt */}
            <div className="bg-[#f8f8f8] rounded-lg p-6 border-l-4 border-[#e9dccb]">
              <h3 className="text-xl font-sans font-semibold text-gray-900 mb-3">Samtaler med respekt</h3>
              <p className="text-gray-700 text-base font-sans leading-relaxed">Udvikling sker i ligeværdig dialog - ikke gennem standardløsninger.</p>
            </div>

            {/* 2. Klarhed frem for quickfix */}
            <div className="bg-[#f8f8f8] rounded-lg p-6 border-l-4 border-[#d4e6f1]">
              <h3 className="text-xl font-sans font-semibold text-gray-900 mb-3">Klarhed frem for quickfix</h3>
              <p className="text-gray-700 text-base font-sans leading-relaxed">Samtaler og spørgsmål, der skaber mening, retning og bevægelse.</p>
            </div>

            {/* 3. Sproget som løftestang */}
            <div className="bg-[#f8f8f8] rounded-lg p-6 border-l-4 border-[#e8f5e8]">
              <h3 className="text-xl font-sans font-semibold text-gray-900 mb-3">Sproget som løftestang</h3>
              <p className="text-gray-700 text-base font-sans leading-relaxed">Dine fortællinger former dine valg - og kan altid gentænkes.</p>
            </div>

            {/* 4. Erfaring fra virkeligheden */}
            <div className="bg-[#f8f8f8] rounded-lg p-6 border-l-4 border-[#ffeaa7]">
              <h3 className="text-xl font-sans font-semibold text-gray-900 mb-3">Erfaring fra virkeligheden</h3>
              <p className="text-gray-700 text-base font-sans leading-relaxed">Mere end 25 års erfaring i ledelse, HR og organisatorisk udvikling.</p>
            </div>

            {/* 5. Ikke en metode - men en relation */}
            <div className="bg-[#f8f8f8] rounded-lg p-6 border-l-4 border-[#e9dccb]">
              <h3 className="text-xl font-sans font-semibold text-gray-900 mb-3">Ikke en metode - men en relation</h3>
              <p className="text-gray-700 text-base font-sans leading-relaxed">Nærvær, ærlighed og respekt - uden præstationskrav.</p>
            </div>

            {/* 6. Mod til forandring */}
            <div className="bg-[#f8f8f8] rounded-lg p-6 border-l-4 border-[#d4e6f1]">
              <h3 className="text-xl font-sans font-semibold text-gray-900 mb-3">Mod til forandring</h3>
              <p className="text-gray-700 text-base font-sans leading-relaxed">Forandring starter med bevidsthed og med viljen til at handle anderledes.</p>
            </div>
          </div>

          {/* CTA knapper */}
          <div className="mt-16 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/ydelser"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e9dccb] focus:ring-offset-2"
            >
              Her kan du læse mere om, hvad jeg tilbyder
            </Link>
            <Link 
              href="/praktik-og-priser" 
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e9dccb] focus:ring-offset-2"
            >
              Se alle detaljer om priser og praktik
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pt-12 pb-24 px-6 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-4">Det siger andre</h2>
          <p className="text-lg font-sans text-gray-700 mb-12">Mennesker, jeg har arbejdet sammen med - deres oplevelser og resultater.</p>
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
                      sizes="64px"
                      loading="lazy"
                    />
                  </div>
                )}
                <p className="italic text-gray-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold text-sm text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
          {visibleCount < testimonials.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount(visibleCount + 3)}
                className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-2 px-4 rounded transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e9dccb] focus:ring-offset-2"
              >
                Vis flere udtalelser
              </button>
            </div>
          )}
          
          {/* CTA til testimonials side */}
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e9dccb] focus:ring-offset-2"
            >
              Find flere referencer her
            </Link>
          </div>
        </div>
      </section>

      {/* Blog & Inspiration */}
      <section className="py-24 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Besøg min blog</h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
              Her deler jeg refleksioner om arbejdsliv og forandring - om det, der rører os - og det, der hjælper os videre.
            </p>
          </div>
          
          {/* Blog post cards */}
          <FeaturedPosts />

          {/* CTA knap */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e9dccb] focus:ring-offset-2"
            >
              Læs flere indlæg på bloggen
            </Link>
              </div>
              </div>
      </section>

      {/* Afslutning - Kontakt / Call to Action */}
      <section className="pt-24 pb-12 px-6 bg-blue-50 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Det starter her</h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-700">Du behøver ikke have styr på alt for at komme i gang.</p>
            <p className="text-lg leading-relaxed text-gray-700">Ét møde kan åbne døren til nye muligheder.</p>
            <p className="text-lg leading-relaxed text-gray-700">Du skal bare møde op.</p>
          </div>
          <div className="pt-4">
            <Link
              href="/kontakt"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-8 rounded transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e9dccb] focus:ring-offset-2 text-lg"
            >
              Kontakt mig for en uforpligtende samtale
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}