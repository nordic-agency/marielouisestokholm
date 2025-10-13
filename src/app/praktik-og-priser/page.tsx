import Link from "next/link";
import Image from "next/image";

export default function PraktikOgPriser() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
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
            Praktik og priser
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-8">
            Forandring sker i bevægelsen – her finder du rammerne for dit første skridt.
          </p>
        </div>
      </section>

      {/* Sådan begynder vi */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-8">
              Sådan begynder vi
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
              <p>
                Vi starter med en gratis og uforpligtende samtale. Her afklarer vi, hvordan jeg bedst kan hjælpe dig, og om kemi og tillid er på plads – de vigtigste forudsætninger for et godt forløb.
              </p>
              <p>
                En enkelt samtale kan give indsigt, men de største forandringer sker typisk i et forløb over flere møder, hvor du får mulighed for at afprøve, reflektere og vende erfaringerne i næste samtale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Samarbejdsaftale */}
      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-8 text-center">
            Samarbejdsaftale
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Privat</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Du har fuld fleksibilitet og kan til enhver tid ændre eller afslutte forløbet.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vi aftaler altid rammerne sammen: antal møder, varighed, fokus og om samtalerne skal være personlige eller online.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Erhverv</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vi tydeliggør en fælles målsætning for forløbet og sikrer fuld fortrolighed mellem medarbejder og mig – tryghed og tillid er afgørende for udvikling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Samtaleforløb og priser */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-10 text-center">
            Samtaleforløb og priser
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Samtalerne varer 1 time og foregår enten i København eller online.
          </p>
          
          {/* Pricing Cards */}
          <div className="grid gap-6 mb-16">
            {/* Første samtale */}
            <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Første samtale</h3>
                  <p className="text-gray-600">1,5 time • Uforpligtende</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[#8B4513]">1.800 kr.</div>
                  <p className="text-sm text-gray-500">inkl. moms</p>
                </div>
              </div>
            </div>

            {/* Forløb */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-sm font-medium opacity-90 mb-2">FORLØB</div>
                  <h3 className="text-2xl font-bold mb-2">3 samtaler</h3>
                  <div className="text-4xl font-bold mb-2">4.500 kr.</div>
                  <p className="text-sm opacity-90">1.500 kr. per samtale</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-[#8B4513] px-4 py-1 rounded-full text-sm font-semibold">POPULÆR</span>
                </div>
                <div className="text-center pt-4">
                  <div className="text-sm font-medium opacity-90 mb-2">FORLØB</div>
                  <h3 className="text-2xl font-bold mb-2">5 samtaler</h3>
                  <div className="text-4xl font-bold mb-2">7.300 kr.</div>
                  <p className="text-sm opacity-90">1.460 kr. per samtale</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-sm font-medium opacity-90 mb-2">FORLØB</div>
                  <h3 className="text-2xl font-bold mb-2">7 samtaler</h3>
                  <div className="text-4xl font-bold mb-2">10.000 kr.</div>
                  <p className="text-sm opacity-90">1.429 kr. per samtale</p>
                </div>
              </div>
            </div>

            {/* Efterfølgende samtaler */}
            <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Efterfølgende samtaler</h3>
                  <p className="text-gray-600">1 time • Fleksibel opfølgning</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[#8B4513]">1.300 kr.</div>
                  <p className="text-sm text-gray-500">inkl. moms</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-base text-gray-600 text-center mb-16">
            Priser er inkl. moms for private og ekskl. moms for erhverv.
          </p>
        </div>
      </section>

      {/* Praktisk */}
      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-8 text-center">
            Praktisk
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Betaling</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Privat:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Betaling via MobilePay eller bankoverførsel pr. samtale. Faktura/kvittering sendes på mail.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Erhverv:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Fakturering ved aftaleindgåelse med betalingsvilkår angivet på faktura.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lokaler og fortrolighed</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mødelokaler:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Adgang til mødelokaler i København via Regus A/S. Online-møder tilbydes også.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fortrolighed:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Jeg arbejder efter ICF's etiske retningslinjer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-8">
            Har du fået lyst til at tage næste skridt?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Det første telefonmøde er altid gratis og uforpligtende, så du kan mærke efter, om forløbet er det rette.
          </p>
          <p className="text-gray-700 mb-6">
            Kontakt mig her for at aftale en indledende samtale eller stille spørgsmål
          </p>
          <Link 
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-900 bg-[#e9dccb] hover:bg-[#d7c3ad] transition-colors duration-300"
          >
            – jeg glæder mig til at høre fra dig.
          </Link>
        </div>
      </section>
    </main>
  );
}
