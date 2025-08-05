"use client";
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

const ApproachItem = ({ Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <Icon className="h-6 w-6 flex-shrink-0 text-gray-900 mt-1" aria-hidden="true" />
    <div>
      <p>
        <strong>{title}</strong> {children}
      </p>
    </div>
  </div>
);

export default function Home() {
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
            <br />– eller burde være det
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">Samtaler, der skaber retning. Med dig – og for dig.</p>
        </div>
      </section>



      {/* Leadership Section Inspired by antoinettedalehenderson.com */}
      <section className="py-24 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="/images/profil.jpg" alt="Leadership session" className="w-full h-auto rounded shadow-md object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">
              For at komme videre skal vi turde stoppe op – og vælge bevidst
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Når dit arbejdsliv forandrer sig, har du brug for klarhed, ikke flere krav. Vi støtter dig i at finde fodfæste, styrke og retning – indefra og ud.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Med dyb faglighed og respekt for kompleksiteten i moderne arbejdsliv, skaber vi samtaler, der gør en forskel. Du får støtte til at sætte ord på det svære – og mod til at handle.
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition"
            >
              Book en gratis samtale
            </a>
          </div>
        </div>
      </section>

            <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <p className="text-center text-sm text-gray-500">Jeg har hjulpet medarbejdere hos blandt andre:</p>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />

      <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
    </div>
  </div>
</div>

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
            Et arbejdsliv i bevægelse
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Måske mærker du, at noget ikke længere passer. Måske længes du efter klarhed og retning – eller bare ro i kroppen.
          </p>
          
          <div className="text-center">
            <CalendlyPopup buttonText="Book samtale" />
          </div>
        </div>
      </section>

      {/* Det kan være, at du */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Det kan være, at du:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-gray-700">
            <li>Er leder og står i krydspres mellem resultater, relationer og dig selv.</li>
            <li>Er medarbejder og længes efter mening, energi eller bevægelse.</li>
            <li>Er på vej videre – frivilligt eller ufrivilligt – og tvivler på næste skridt.</li>
          </ul>
          <p className="text-lg leading-relaxed text-gray-700">
            Det handler om mere end dit arbejde. Det handler om, hvordan du trives, træffer valg og finder fodfæste i det arbejdsliv, du står midt i.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Hos Movement Matters møder du en erfaren erhvervscoach, der skaber samtaler med bevægelse. Retning, der føles rigtig.
          </p>
          <a href="/kontakt" className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition">
            Book en gratis og uforpligtende samtale
          </a>
        </div>
        <div>
          <img src="/images/MarieLouise10027847.jpg" alt="Marie Louise i samtale" className="rounded-xl shadow-md w-full object-cover" />
        </div>
      </section>

      {/* Samtalen er centrum */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <img src="/images/index-portrait.jpg" alt="Marie Louise i samtale" className="rounded-xl shadow-md w-full object-cover" />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Samtalen er centrum</h2>
          <p className="text-lg leading-relaxed text-gray-700">Hos Movement Matters er samtalen ikke bare et redskab – det er et arbejdsrum. Et sted, hvor vi undersøger situationen, du står i, og begynder at skabe klarhed i det, der fylder i dit arbejdsliv.</p>
          <p className="text-lg leading-relaxed text-gray-700">Vi taler om det konkrete – og det, der ligger bag. Det, der presser sig på i hverdagen. Det, du måske ikke har sat ord på endnu.</p>
          <p className="text-lg leading-relaxed text-gray-700">Du får en samtalepartner med dyb erfaring i arbejdslivets kompleksitet. Ikke en metode på skinner, men en erfaren coach med organisatorisk indsigt, psykologisk forståelse – og blik for både det, der bremser, og det, der kan bringe dig videre.</p>
          <p className="text-lg leading-relaxed text-gray-700">Det gælder, uanset om du er leder, medarbejder – eller står et sted, hvor dit arbejdsliv kalder på forandring.</p>
          <p className="font-semibold text-blue-700 text-lg">Du skal ikke præstere. Du skal bare møde op.</p>
        </div>
      </section>

      <section className="py-20 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xl italic text-gray-700">
            “Du skal ikke præstere. Du skal bare møde op.”
          </p>
        </div>
      </section>

      {/* Min tilgang */}
      <section className="py-24 px-6 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight mb-12 text-center">Min tilgang – kort fortalt</h2>
          <div className="grid lg:grid-cols-3 gap-x-12 gap-y-10 text-lg leading-relaxed">
            <ApproachItem Icon={UserGroupIcon} title="Samtaler med respekt og realitetssans.">
              Udvikling sker ikke med standardløsninger – men i ligeværdig dialog.
            </ApproachItem>
            <ApproachItem Icon={MapIcon} title="Klarhed frem for quickfix.">
              Vi stiller de spørgsmål, der skaber mening, retning og bevægelse.
            </ApproachItem>
            <ApproachItem Icon={ChatBubbleBottomCenterTextIcon} title="Sproget som løftestang.">
              Vi undersøger, hvordan dine fortællinger former dine valg – og hvordan de kan gentænkes.
            </ApproachItem>
            <ApproachItem Icon={AcademicCapIcon} title="Erfaring fra virkeligheden.">
              Du møder en coach med +25 års erfaring i ledelse, HR og organisatorisk udvikling.
            </ApproachItem>
            <ApproachItem Icon={HandRaisedIcon} title="Ikke en metode – men en relation.">
              Jeg møder dig med nærvær, ærlighed og respekt – og uden præstationskrav.
            </ApproachItem>
            <ApproachItem Icon={LightBulbIcon} title="Mod til forandring.">
              Forandring starter med bevidsthed – og med viljen til at handle anderledes.
            </ApproachItem>
          </div>
          <div className="text-center mt-12">
            <a href="/kontakt" className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition">
              Start med en afklarende samtale – uforpligtende og gratis
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
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-black/5 p-6 rounded shadow">
              <Image
                src="/images/profil.jpg"
                alt="Testimonial portrait"
                width={300}
                height={160}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="italic text-gray-700">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.”</p>
              <p className="mt-4 font-semibold">– Navn Navnesen</p>
            </div>
            <div className="bg-black/5 p-6 rounded shadow">
              <Image
                src="/images/profil.jpg"
                alt="Testimonial portrait"
                width={300}
                height={160}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="italic text-gray-700">“Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</p>
              <p className="mt-4 font-semibold">– Person Eksempel</p>
            </div>
            <div className="bg-black/5 p-6 rounded shadow">
              <Image
                src="/images/profil.jpg"
                alt="Testimonial portrait"
                width={300}
                height={160}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="italic text-gray-700">“Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
              <p className="mt-4 font-semibold">– Bruger Citat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hvad jeg tilbyder */}
      {/* Hvad jeg tilbyder */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight">Hvad jeg tilbyder</h2>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">Fire forløb til klarhed og retning – skabt til dig og dit arbejdsliv.</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <article className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img src="/images/index-portrait.jpg" alt="" className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
              </div>
              <div className="max-w-xl">
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">1. Stå ved dit lederskab</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Når du vil kunne lede – med retning, mod og menneskelighed.
                </p>
                <ul className="list-disc list-inside mt-2 text-lg leading-relaxed text-gray-700">
                  <li>Ny i rollen – ønsker at sætte retning fra dag ét</li>
                  <li>Balancerer mellem bestyrelse, medarbejdere og egne værdier</li>
                  <li>Længes efter ny mening eller energi</li>
                  <li>Udfordringer du ikke kan dele internt</li>
                </ul>
                {/* Link fjernet efter ønske */}
              </div>
            </article>

            <article className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img src="/images/om-mig-cover.jpg" alt="" className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
              </div>
              <div className="max-w-xl">
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">2. Tænk højt – og få sparring</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Når du har brug for at vende tankerne med én, der lytter og udfordrer.
                </p>
                <ul className="list-disc list-inside mt-2 text-lg leading-relaxed text-gray-700">
                  <li>Du står i et vigtigt valg</li>
                  <li>Du føler dig alene i din rolle</li>
                  <li>Du er kørt fast og søger nye muligheder</li>
                  <li>Du ønsker ærlig feedback</li>
                </ul>
                {/* Link fjernet efter ønske */}
              </div>
            </article>

            <article className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img src="/images/foran-whiteboard.jpg" alt="" className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
              </div>
              <div className="max-w-xl">
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">3. Gentænk din retning</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Når arbejdet ikke længere passer til den, du er – eller den, du er ved at blive.
                </p>
                <ul className="list-disc list-inside mt-2 text-lg leading-relaxed text-gray-700">
                  <li>Drænet i nuværende job</li>
                  <li>Vil finde et nyt ståsted efter sygemelding</li>
                  <li>Nyt sted i livet – ønsker et arbejdsliv der matcher</li>
                  <li>Vil videre på en måde der passer til dig</li>
                </ul>
                <p className="mt-4">
                  <a href="/kontakt" className="text-blue-600 underline hover:text-blue-800">
                    Start med en ærlig samtale →
                  </a>
                </p>
              </div>
            </article>

            <article className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img src="/images/MarieLouise10027847.jpg" alt="" className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
              </div>
              <div className="max-w-xl">
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">4. Kom videre – efter en opsigelse</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Når du skal videre – og vil tage dig selv med i processen.
                </p>
                <ul className="list-disc list-inside mt-2 text-lg leading-relaxed text-gray-700">
                  <li>Opsagt og søger ny retning</li>
                  <li>Har selv sagt op – og mærker det kræver mere</li>
                  <li>Mistet troen på egne evner</li>
                  <li>Har brug for hjælp til CV, LinkedIn eller præsentation</li>
                </ul>
                <p className="mt-4">
                  <a href="/kontakt" className="text-blue-600 underline hover:text-blue-800">
                    Book en gratis og uforpligtende samtale →
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="py-24 px-6 bg-blue-50 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900">Klar til at tage næste skridt?</h3>
          <p className="text-lg leading-relaxed text-gray-700">Book en gratis og uforpligtende samtale.</p>
          <CalendlyPopup />
        </div>
      </section>
    </main>
  );
}