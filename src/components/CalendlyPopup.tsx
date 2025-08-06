'use client';

import { useState } from 'react';
import { PopupModal } from 'react-calendly';

type CalendlyPopupProps = {
  buttonText: string;
};

export default function CalendlyPopup({ buttonText }: CalendlyPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition"
      >
        {buttonText}
      </button>

      {isOpen && typeof document !== 'undefined' && (
        <PopupModal
          url="https://calendly.com/mads-nordic-agency/30min"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.body}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '4d5055',
            textColor: '000000',
          }}
        />
      )}
    </div>
  );
}