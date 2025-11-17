import Link from "next/link";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t py-10 text-sm text-center text-gray-700">
      <div className="max-w-4xl mx-auto px-6 space-y-2">
        <p className="text-lg font-serif font-semibold text-gray-900">Marie Louise Stokholm</p>
        <p className="text-gray-700 font-sans italic">Samtaler, der skaber bevægelse. Retning, der føles rigtig.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-700 font-sans">
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="w-4 h-4" />
            <a href="mailto:kontakt@marie-louise-stokholm.dk" className="hover:text-[#8B4513]">
              kontakt@marie-louise-stokholm.dk
            </a>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-4 h-4" />
            <a href="tel:+4551513755" className="hover:text-[#8B4513]">
              51 51 37 55
            </a>
          </div>
          <span className="hidden sm:inline">|</span>
          <span>CVR: 40063870</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-700 font-sans">
          <MapPinIcon className="w-4 h-4" />
          <span>Jagtvej 202 · 2100 København Ø</span>
        </div>
        <p className="text-gray-600 font-sans space-x-4">
          <Link href="/privatlivspolitik" className="text-[#8B4513] hover:text-[#A0522D] underline">Privatlivspolitik</Link>
          <a href="https://www.linkedin.com/in/marielouisestokholm/" className="text-[#8B4513] hover:text-[#A0522D] underline">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}