'use client';

import { useState } from 'react';
import { PopupModal } from 'react-calendly';

export default function CalendlyPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition"
      >
        👉 Book samtale
      </button>

      {isOpen && typeof window !== 'undefined' && (
        <PopupModal
          url="https://calendly.com/mads-nordic-agency/30min"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={typeof document !== 'undefined' ? document.body : undefined}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '4d5055',
            textColor: '000000',
          }}
          styles={{
            height: 'calc(100vh - 40px)',
            width: '95vw',
            minWidth: '320px',
            maxHeight: '90vh',
            overflow: 'auto',
          }}
        />
      )}
    </div>
  );
}