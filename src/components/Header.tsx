'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm fixed top-0 left-0 z-50">
      <Link href="/" className="text-gray-600 font-playfair">
        <span className="text-xl font-serif font-semibold tracking-tight">Marie Louise Stokholm</span>
      </Link>

      <div className="hidden md:flex items-center space-x-4">
               <nav className="space-x-6 text-gray-600 font-sans font-medium text-base tracking-wide">
                 <Link href="/om-mig">Om mig</Link>
                 <Link href="/services">Services</Link>
                 <Link href="/testimonials">Referencer</Link>
                 <Link href="/blog">Min blog</Link>
                 <Link href="/praktik-og-priser">Praktik og priser</Link>
               </nav>
        <Link
          href="/kontakt"
          className="inline-block rounded-md bg-[#e9dccb] hover:bg-[#d7c3ad] px-4 py-2 text-gray-900 text-base font-sans font-medium transition"
        >
          Kontakt
        </Link>
      </div>

      <button
        className="md:hidden text-gray-600 text-4xl px-4 py-3 font-bold"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

             {isClient && menuOpen && (
               <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-6 py-6 flex flex-col space-y-4 items-start text-gray-600 font-sans font-medium md:hidden z-40 shadow-md">
                 <Link href="/om-mig" onClick={() => setMenuOpen(false)}>Om mig</Link>
                 <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                 <Link href="/testimonials" onClick={() => setMenuOpen(false)}>Referencer</Link>
                 <Link href="/blog" onClick={() => setMenuOpen(false)}>Min blog</Link>
                 <Link href="/praktik-og-priser" onClick={() => setMenuOpen(false)}>Praktik og priser</Link>
                 <Link
                   href="/kontakt"
                   onClick={() => setMenuOpen(false)}
                   className="inline-block rounded-md bg-[#e9dccb] hover:bg-[#d7c3ad] px-4 py-2 text-gray-900 text-base font-sans font-medium transition"
                 >
                   Kontakt
                 </Link>
               </div>
             )}
    </header>
  );
}