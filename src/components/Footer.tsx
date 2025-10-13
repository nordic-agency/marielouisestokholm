import Link from "next/link";

// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12 py-10 text-sm text-center text-gray-700">
      <div className="max-w-4xl mx-auto px-6 space-y-2">
        <p className="text-lg font-serif font-semibold text-gray-900">Movement Matters</p>
        <p className="text-gray-700 font-sans italic">Samtaler, der skaber bevægelse. Retning, der føles rigtig.</p>
        <p className="text-gray-700 font-sans">
          📧 Marie Louise Stokholm &lt;kontakt@marie-louise-stokholm.dk&gt; | 📞 51 51 37 55 | CVR: 40063870
        </p>
        <p className="text-gray-700 font-sans">📍 Jagtvej 202 · 2100 København Ø</p>
        <p className="text-gray-600 font-sans space-x-4">
          <Link href="/privatlivspolitik" className="text-[#8B4513] hover:text-[#A0522D] underline">🔗 Privatlivspolitik</Link>
          <a href="#" className="text-[#8B4513] hover:text-[#A0522D] underline">🔗 LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}