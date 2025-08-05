// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12 py-10 text-sm text-center text-gray-700">
      <div className="max-w-4xl mx-auto px-6 space-y-2">
        <p className="text-lg font-semibold text-gray-900">Movement Matters</p>
        <p className="text-gray-700 italic">Samtaler, der skaber bevægelse. Retning, der føles rigtig.</p>
        <p className="text-gray-700">
          📧 Marie Louise Stokholm &lt;mlstokholm@hotmail.com&gt; | 📞 51 51 37 55 | CVR: 40063870
        </p>
        <p className="text-gray-700">📍 Jagtvej 202, 1. tv. · 2100 København Ø</p>
        <p className="text-gray-600 space-x-4">
          <a href="#" className="text-blue-600 hover:underline">🔗 Privatlivspolitik</a>
          <a href="#" className="text-blue-600 hover:underline">🔗 LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}