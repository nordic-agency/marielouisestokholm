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

      {/* Om mig + billede */}
      <section className="bg-gray-50 border-b py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_600px] gap-12 items-center">
          <div className="prose prose-lg text-gray-700 text-lg leading-relaxed space-y-4">
            <p>Jeg har over 25 års erfaring med ledelse, HR og organisationsudvikling – og har været med hele vejen fra beslutningsbordet til den enkelte medarbejders virkelighed.</p>
            <p>I dag bruger jeg min erfaring som psykolog, erhvervscoach og stifter af Movement Matters – med fokus på det, der bevæger os.</p>
            <p>Samtalerne tager afsæt i din kontekst – og møder dig, der hvor du står.</p>
          </div>
          <div>
            <Image
              src="/images/foran-whiteboard.jpg"
              alt="Marie Louise Stokholm"
              className="rounded-lg shadow-md object-cover w-full h-auto"
              width={600}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* Faglighed */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-10">Faglighed med dybde og bredde</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-gray-800">
            <div className="bg-gray-50 rounded-xl shadow-md px-6 pb-6 pt-6">
              <p className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-4 text-center">Psykologisk fundament</p>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed text-center">
                <p>ICF-certificeret coach (+500 timers praksis)</p>
                <p>Eksistentiel psykologi og fænomenologisk metode</p>
                <p>Eksistentielle samtaler i arbejdslivet</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-md px-6 pb-6 pt-6">
              <p className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-4 text-center">Organisatorisk erfaring</p>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed text-center">
                <p>25+ år i ledelse, HR og forandringsprocesser</p>
                <p>Master i ledelsespsykologi (AAU)</p>
                <p>HD i organisation (CBS)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citat */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <div>
          <blockquote className="text-xl md:text-2xl italic text-gray-800 leading-relaxed font-serif text-center max-w-2xl mx-auto">
            “Jeg tror ikke på hurtige svar. Jeg tror på det, vi undersøger sammen – ærligt, nysgerrigt og med respekt for din virkelighed.”
          </blockquote>
          <p className="mt-4 text-gray-500">– Marie Louise Stokholm</p>
        </div>
      </section>

      {/* Priser */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-6">Samtaler og forløb</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Samtaler varer typisk 60–75 minutter og foregår fysisk i København eller online. Du starter med en gratis, uforpligtende afklaringssamtale.
          </p>
          <table className="w-full mt-4 border text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-4 text-base text-left uppercase tracking-wide text-gray-600">Forløb</th>
                <th className="px-4 py-4 text-base text-left uppercase tracking-wide text-gray-600">Pris</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-4 text-base text-gray-800">Afklaringssamtale (30 min)</td>
                <td className="px-4 py-4 text-base text-gray-800">Gratis</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-base text-gray-800">1 samtale</td>
                <td className="px-4 py-4 text-base text-gray-800">1.500 kr.</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-base text-gray-800">3 samtaler</td>
                <td className="px-4 py-4 text-base text-gray-800">4.200 kr.</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-base text-gray-800">6 samtaler</td>
                <td className="px-4 py-4 text-base text-gray-800">7.800 kr.</td>
              </tr>
            </tbody>
          </table>
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
