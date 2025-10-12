'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm fixed top-0 left-0 z-50">
      <Link href="/" className="flex flex-col leading-snug text-gray-600 font-playfair">
        <span className="text-xl font-semibold tracking-tight">Marie Louise Stokholm</span>
        <span className="text-sm font-normal text-gray-400 tracking-wide">Movement Matters</span>
      </Link>

      <div className="hidden md:flex items-center space-x-4">
        <nav className="space-x-6 text-gray-600 font-medium text-sm tracking-wide">
          <Link href="/">Forside</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/hvad-jeg-tilbyder">Hvad jeg tilbyder</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/om-mig">Om mig</Link>
        </nav>
        <Link
          href="/kontakt"
          className="inline-block rounded-md bg-gray-900 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 transition"
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

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-6 py-6 flex flex-col space-y-4 items-start text-gray-600 font-medium md:hidden z-40 shadow-md">
          <Link href="/" onClick={() => setMenuOpen(false)}>Forside</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/hvad-jeg-tilbyder" onClick={() => setMenuOpen(false)}>Hvad jeg tilbyder</Link>
          <Link href="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
          <Link href="/om-mig" onClick={() => setMenuOpen(false)}>Om mig</Link>
          <Link
            href="/kontakt"
            onClick={() => setMenuOpen(false)}
            className="inline-block rounded-md bg-gray-900 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 transition"
          >
            Kontakt
          </Link>
        </div>
      )}
    </header>
  );
}