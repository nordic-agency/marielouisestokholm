'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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
        className="md:hidden text-gray-600 px-4 py-3 hover:text-gray-900 transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <XMarkIcon className="w-7 h-7" />
        ) : (
          <Bars3Icon className="w-7 h-7" />
        )}
      </button>

             {isClient && menuOpen && (
               <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-6 py-8 flex flex-col space-y-1 md:hidden z-40 shadow-lg transition-all duration-300 ease-in-out">
                 <Link 
                   href="/om-mig" 
                   onClick={() => setMenuOpen(false)}
                   className="text-gray-700 font-sans font-medium text-lg py-3 px-2 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150"
                 >
                   Om mig
                 </Link>
                 <Link 
                   href="/services" 
                   onClick={() => setMenuOpen(false)}
                   className="text-gray-700 font-sans font-medium text-lg py-3 px-2 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150"
                 >
                   Services
                 </Link>
                 <Link 
                   href="/testimonials" 
                   onClick={() => setMenuOpen(false)}
                   className="text-gray-700 font-sans font-medium text-lg py-3 px-2 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150"
                 >
                   Referencer
                 </Link>
                 <Link 
                   href="/blog" 
                   onClick={() => setMenuOpen(false)}
                   className="text-gray-700 font-sans font-medium text-lg py-3 px-2 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150"
                 >
                   Min blog
                 </Link>
                 <Link 
                   href="/praktik-og-priser" 
                   onClick={() => setMenuOpen(false)}
                   className="text-gray-700 font-sans font-medium text-lg py-3 px-2 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150"
                 >
                   Praktik og priser
                 </Link>
                 <div className="pt-4 mt-2 border-t border-gray-200">
                   <Link
                     href="/kontakt"
                     onClick={() => setMenuOpen(false)}
                     className="inline-block w-full text-center rounded-md bg-[#e9dccb] hover:bg-[#d7c3ad] px-6 py-3 text-gray-900 text-base font-sans font-semibold transition-colors duration-150"
                   >
                     Kontakt
                   </Link>
                 </div>
               </div>
             )}
    </header>
  );
}