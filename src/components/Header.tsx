'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === '/blog') {
      return pathname === '/blog' || pathname.startsWith('/blog/');
    }
    return pathname === path;
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm fixed top-0 left-0 z-50">
      <Link href="/" className="text-gray-600 font-playfair">
        <span className="text-xl font-serif font-semibold tracking-tight">Marie Louise Stokholm</span>
      </Link>

      <div className="hidden md:flex items-center space-x-4">
               <nav className="space-x-6 text-gray-600 font-sans font-medium text-base tracking-wide">
                 <Link 
                   href="/om-mig"
                   className={`transition-colors duration-150 ${
                     isActive('/om-mig')
                       ? 'text-gray-900 font-semibold border-b-2 border-[#e9dccb] pb-1'
                       : 'hover:text-gray-900'
                   }`}
                 >
                   Om mig
                 </Link>
                 <Link 
                   href="/ydelser"
                   className={`transition-colors duration-150 ${
                     isActive('/ydelser')
                       ? 'text-gray-900 font-semibold border-b-2 border-[#e9dccb] pb-1'
                       : 'hover:text-gray-900'
                   }`}
                 >
                   Ydelser
                 </Link>
                 <Link 
                   href="/testimonials"
                   className={`transition-colors duration-150 ${
                     isActive('/testimonials')
                       ? 'text-gray-900 font-semibold border-b-2 border-[#e9dccb] pb-1'
                       : 'hover:text-gray-900'
                   }`}
                 >
                   Referencer
                 </Link>
                 <Link 
                   href="/blog"
                   className={`transition-colors duration-150 ${
                     isActive('/blog')
                       ? 'text-gray-900 font-semibold border-b-2 border-[#e9dccb] pb-1'
                       : 'hover:text-gray-900'
                   }`}
                 >
                   Min blog
                 </Link>
                 <Link 
                   href="/praktik-og-priser"
                   className={`transition-colors duration-150 ${
                     isActive('/praktik-og-priser')
                       ? 'text-gray-900 font-semibold border-b-2 border-[#e9dccb] pb-1'
                       : 'hover:text-gray-900'
                   }`}
                 >
                   Praktik og priser
                 </Link>
               </nav>
        <Link
          href="/kontakt"
          className="inline-block rounded-md bg-[#e9dccb] hover:bg-[#d7c3ad] px-4 py-2 text-gray-900 text-base font-sans font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e9dccb] focus:ring-offset-2"
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
                   className={`font-sans text-lg py-3 px-2 rounded-md transition-colors duration-150 ${
                     isActive('/om-mig')
                       ? 'text-gray-900 font-semibold bg-[#e9dccb]/30'
                       : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50'
                   }`}
                 >
                   Om mig
                 </Link>
                 <Link 
                   href="/ydelser" 
                   onClick={() => setMenuOpen(false)}
                   className={`font-sans text-lg py-3 px-2 rounded-md transition-colors duration-150 ${
                     isActive('/ydelser')
                       ? 'text-gray-900 font-semibold bg-[#e9dccb]/30'
                       : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50'
                   }`}
                 >
                   Ydelser
                 </Link>
                 <Link 
                   href="/testimonials" 
                   onClick={() => setMenuOpen(false)}
                   className={`font-sans text-lg py-3 px-2 rounded-md transition-colors duration-150 ${
                     isActive('/testimonials')
                       ? 'text-gray-900 font-semibold bg-[#e9dccb]/30'
                       : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50'
                   }`}
                 >
                   Referencer
                 </Link>
                 <Link 
                   href="/blog" 
                   onClick={() => setMenuOpen(false)}
                   className={`font-sans text-lg py-3 px-2 rounded-md transition-colors duration-150 ${
                     isActive('/blog')
                       ? 'text-gray-900 font-semibold bg-[#e9dccb]/30'
                       : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50'
                   }`}
                 >
                   Min blog
                 </Link>
                 <Link 
                   href="/praktik-og-priser" 
                   onClick={() => setMenuOpen(false)}
                   className={`font-sans text-lg py-3 px-2 rounded-md transition-colors duration-150 ${
                     isActive('/praktik-og-priser')
                       ? 'text-gray-900 font-semibold bg-[#e9dccb]/30'
                       : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-50'
                   }`}
                 >
                   Praktik og priser
                 </Link>
                 <div className="pt-4 mt-2 border-t border-gray-200">
                   <Link
                     href="/kontakt"
                     onClick={() => setMenuOpen(false)}
                     className="inline-block w-full text-center rounded-md bg-[#e9dccb] hover:bg-[#d7c3ad] px-6 py-3 text-gray-900 text-base font-sans font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e9dccb] focus:ring-offset-2"
                   >
                     Kontakt
                   </Link>
                 </div>
               </div>
             )}
    </header>
  );
}