'use client';

import Link from "next/link";
import Image from "next/image";

export default function KontaktPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section with Tagline */}
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
            Tag kontakt til mig
          </h1>
          <p className="text-lg md:text-xl font-bold mb-8">
            Små skridt kan skabe store bevægelser – lad os begynde med en gratis telefonsamtale.
          </p>
        </div>
      </section>

      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200" aria-hidden="true">
                  <defs>
                    <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" strokeWidth="0" fill="white" />
                  <svg x="100%" y="-1" className="overflow-visible fill-gray-50">
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth="0" />
                  </svg>
                  <rect width="100%" height="100%" strokeWidth="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                </svg>
              </div>
              
              {/* New Content Section */}
              <div className="space-y-8">
                <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                  <p>
                    Hvis du er nysgerrig på, hvordan et forløb kan se ud for dig – eller blot har spørgsmål – er du meget velkommen til at tage kontakt.
                  </p>
                  <p>
                    Vi starter altid med en gratis og uforpligtende samtale. Her får du mulighed for at afklare dine behov og undersøge, om vi er et godt match. Du kan læse mere om rammer, forløb og priser <Link href="/praktik-og-priser" className="text-[#8B4513] hover:text-[#A0522D] font-semibold underline decoration-2 underline-offset-2">her</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Sådan kan du kontakte mig:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Udfyld formularen her på siden</li>
                    <li>• Skriv en mail til: <a className="text-[#8B4513] hover:text-[#A0522D] font-semibold" href="mailto:kontakt@marie-louise-stokholm.dk">kontakt@marie-louise-stokholm.dk</a></li>
                    <li>• Eller ring på: <a className="text-[#8B4513] hover:text-[#A0522D] font-semibold" href="tel:+4551513755">+45 51 51 37 55</a></li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700">
                  Jeg glæder mig til at høre fra dig og vender tilbage hurtigst muligt.
                </p>
              </div>
            </div>
          </div>
          <form action="#" method="POST" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">Fornavn</label>
                  <div className="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">Efternavn</label>
                  <div className="mt-2.5">
                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email</label>
                  <div className="mt-2.5">
                    <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">Telefonnummer</label>
                  <div className="mt-2.5">
                    <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Besked</label>
                  <div className="mt-2.5">
                    <textarea name="message" id="message" rows={4} className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-[#efe8df] px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-[#e8e0d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8cfc5]"
                >
                  Send besked
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}