'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Send email via API route (Resend)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Kunne ikke sende email');
      }

      setSubmitStatus({ type: 'success', message: data.message || 'Besked sendt! Du modtager en bekræftelse på email.' });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus({ type: 'error', message: 'Der opstod en fejl. Prøv venligst igen eller kontakt mig direkte via email.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section with Tagline */}
      <section className="relative w-full h-screen flex items-end justify-center border-b-8 border-white">
        <Image
          src="/images/picture-8.png"
          alt="Marie Louise Stokholm"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-6 pb-16 md:pb-24">
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight tracking-tight mb-6">
            Tag kontakt til mig
          </h1>
          <div className="text-lg md:text-xl font-bold">
            <p>Små skridt kan skabe store bevægelser</p>
            <p>- lad os begynde med en gratis telefonsamtale.</p>
          </div>
        </div>
      </section>

      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 lg:w-1/2">
              </div>
              
              {/* New Content Section */}
              <div className="space-y-8">
                <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                  <p>
                    Hvis du er nysgerrig på, hvordan et forløb kan se ud for dig - eller blot har spørgsmål - er du meget velkommen til at tage kontakt.
                  </p>
                  <p>
                    Vi starter altid med en gratis og uforpligtende telefonsamtale. Her får du mulighed for at afklare dine behov og undersøge, om vi er et godt match. Du kan læse mere om praktik og priser <Link href="/praktik-og-priser" className="text-[#8B4513] hover:text-[#A0522D] font-semibold underline decoration-2 underline-offset-2">her</Link>.
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
          <form onSubmit={handleSubmit} className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              {submitStatus.type && (
                <div className={`mb-6 rounded-md p-4 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900">Fornavn *</label>
                  <div className="mt-2.5">
                    <input 
                      type="text" 
                      name="firstName" 
                      id="firstName" 
                      autoComplete="given-name" 
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-900">Efternavn *</label>
                  <div className="mt-2.5">
                    <input 
                      type="text" 
                      name="lastName" 
                      id="lastName" 
                      autoComplete="family-name" 
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" 
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email *</label>
                  <div className="mt-2.5">
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      autoComplete="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" 
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-gray-900">Telefonnummer</label>
                  <div className="mt-2.5">
                    <input 
                      type="tel" 
                      name="phoneNumber" 
                      id="phoneNumber" 
                      autoComplete="tel" 
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" 
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Besked *</label>
                  <div className="mt-2.5">
                    <textarea 
                      name="message" 
                      id="message" 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-[#efe8df] px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-[#e8e0d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8cfc5] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sender...' : 'Send besked'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}