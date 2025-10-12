import Link from "next/link";
import Image from "next/image";

export default function PraktikOgPriser() {
  return (
    <main className="bg-gray-50 space-y-16">
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
            Transparente rammer for dit forløb
          </p>
          <p className="text-lg md:text-xl mb-8">
            Ingen skjulte omkostninger. Klare aftaler. Fokus på dig.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Sådan fungerer det
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Alle forløb er skræddersyet til dig og din situation. Her er de grundlæggende rammer og priser.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Enkeltstående session */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enkeltstående session</h3>
              <div className="text-3xl font-bold text-[#8B4513] mb-6">1.200 kr.</div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Perfekt til at få et nyt perspektiv eller arbejde med en konkret udfordring.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li>• 90 minutter</li>
                <li>• Fokus på en konkret udfordring</li>
                <li>• Uforpligtende</li>
                <li>• Kan bookes efter behov</li>
              </ul>
            </div>

            {/* 3-sessioner pakke */}
            <div className="bg-white border-2 border-[#8B4513] rounded-lg p-8 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#8B4513] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Mest populær
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3-sessioner pakke</h3>
              <div className="text-3xl font-bold text-[#8B4513] mb-2">3.200 kr.</div>
              <div className="text-sm text-gray-500 mb-6">Spar 400 kr.</div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ideelt til at skabe momentum og arbejde systematisk med din udvikling.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li>• 3 × 90 minutter</li>
                <li>• Systematisk tilgang</li>
                <li>• Mellem-session opfølgning</li>
                <li>• Gælder 6 måneder</li>
              </ul>
            </div>

            {/* 6-sessioner pakke */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6-sessioner pakke</h3>
              <div className="text-3xl font-bold text-[#8B4513] mb-2">5.800 kr.</div>
              <div className="text-sm text-gray-500 mb-6">Spar 1.400 kr.</div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dybdegående forløb til omfattende udvikling og varig forandring.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li>• 6 × 90 minutter</li>
                <li>• Dybdegående forløb</li>
                <li>• Personlig udviklingsplan</li>
                <li>• Gælder 12 måneder</li>
              </ul>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Vigtige detaljer</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Inkluderet i alle pakker:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Forberedelse før hver session</li>
                  <li>• Noter og opfølgning efter session</li>
                  <li>• Email support mellem sessioner</li>
                  <li>• Tilpasning til din situation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Betalingsbetingelser:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Betales forud for første session</li>
                  <li>• Ingen binding eller abonnement</li>
                  <li>• Alle priser inkl. moms</li>
                  <li>• Faktura sendes elektronisk</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Klar til at komme i gang?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Første skridt er en uforpligtende samtale, hvor vi finder ud af, hvad der passer bedst til dig.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#8B4513] hover:bg-[#A0522D] transition-colors duration-300"
              >
                Book samtale
              </Link>
              <Link 
                href="/hvad-jeg-tilbyder"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#8B4513] text-base font-medium rounded-full text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all duration-300"
              >
                Læs mere om tilgangen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
