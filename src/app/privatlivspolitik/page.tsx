import Link from "next/link";

export default function Privatlivspolitik() {
  return (
    <main className="bg-white min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight tracking-tight mb-8">
          Privatlivspolitik
        </h1>
        
        <p className="text-lg font-sans text-gray-600 mb-8">
          Sidst opdateret: {new Date().toLocaleDateString('da-DK')}
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">1. Introduktion</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Marie Louise Stokholm (CVR: 40063870) respekterer dit privatliv og er forpligtet til at beskytte dine personlige oplysninger. Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger og beskytter dine personlige data i overensstemmelse med Databeskyttelsesforordningen (GDPR) og dansk lovgivning.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">2. Dataansvarlig</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              <strong>Marie Louise Stokholm</strong><br />
              CVR: 40063870<br />
              Jagtvej 202<br />
              2100 København Ø<br />
              Telefon: +45 51 51 37 55<br />
              E-mail: <a href="mailto:kontakt@marie-louise-stokholm.dk" className="text-[#8B4513] hover:text-[#A0522D] underline">kontakt@marie-louise-stokholm.dk</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">3. Hvilke personlige oplysninger indsamler vi?</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Vi kan indsamle og behandle følgende typer personlige oplysninger:
            </p>
            <ul className="list-disc list-inside text-lg font-sans text-gray-700 leading-relaxed space-y-2 ml-6">
              <li><strong>Identifikationsoplysninger:</strong> Navn, e-mailadresse, telefonnummer</li>
              <li><strong>Professionelle oplysninger:</strong> Jobtitel, arbejdsgiver, erhvervserfaring</li>
              <li><strong>Kommunikationsdata:</strong> Indhold af e-mails, beskeder og samtaler</li>
              <li><strong>Coachingdata:</strong> Notater fra coaching-sessioner og mål</li>
              <li><strong>Tekniske data:</strong> IP-adresse, browser type, besøgstider på hjemmesiden</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">4. Hvorfor indsamler vi dine oplysninger?</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Vi behandler dine personlige oplysninger på grundlag af:
            </p>
            <ul className="list-disc list-inside text-lg font-sans text-gray-700 leading-relaxed space-y-2 ml-6">
              <li><strong>Samtykke:</strong> Når du giver dit udtrykkelige samtykke til behandling</li>
              <li><strong>Kontraktopfyldelse:</strong> For at levere coaching- og konsulentydelser</li>
              <li><strong>Legitime interesser:</strong> For at forbedre vores ydelser og hjemmeside</li>
              <li><strong>Juridisk forpligtelse:</strong> For at overholde regnskabs- og momsregler</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">5. Hvordan bruger vi dine oplysninger?</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Vi bruger dine personlige oplysninger til:
            </p>
            <ul className="list-disc list-inside text-lg font-sans text-gray-700 leading-relaxed space-y-2 ml-6">
              <li>At levere coaching- og konsulentydelser</li>
              <li>At kommunikere med dig om aftaler og ydelser</li>
              <li>At følge op på coaching-forløb</li>
              <li>At sende relevante opdateringer og information</li>
              <li>At forbedre vores ydelser og hjemmeside</li>
              <li>At overholde juridiske forpligtelser</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">6. Deling af oplysninger</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Vi deler ikke dine personlige oplysninger med tredjeparter, medmindre:
            </p>
            <ul className="list-disc list-inside text-lg font-sans text-gray-700 leading-relaxed space-y-2 ml-6">
              <li>Du har givet dit udtrykkelige samtykke</li>
              <li>Det er nødvendigt for at levere ydelsen (f.eks. fakturering)</li>
              <li>Vi er juridisk forpligtet til det</li>
              <li>Det er nødvendigt for at beskytte vores legitime interesser</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">7. Opbevaring af oplysninger</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Vi opbevarer dine personlige oplysninger så længe det er nødvendigt for:
            </p>
            <ul className="list-disc list-inside text-lg font-sans text-gray-700 leading-relaxed space-y-2 ml-6">
              <li>At levere ydelsen til dig</li>
              <li>At overholde juridiske forpligtelser (regnskabsdata opbevares i 5 år)</li>
              <li>At beskytte vores legitime interesser</li>
            </ul>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mt-4">
              Coaching-notater og følsomme oplysninger slettes typisk efter 3 år, medmindre du ønsker længere opbevaring.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">8. Dine rettigheder</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Du har følgende rettigheder vedrørende dine personlige oplysninger:
            </p>
            <ul className="list-disc list-inside text-lg font-sans text-gray-700 leading-relaxed space-y-2 ml-6">
              <li><strong>Ret til indsigt:</strong> Du kan anmode om at se, hvilke oplysninger vi har om dig</li>
              <li><strong>Ret til berigtigelse:</strong> Du kan anmode om rettelse af forkerte oplysninger</li>
              <li><strong>Ret til sletning:</strong> Du kan anmode om sletning af dine oplysninger</li>
              <li><strong>Ret til begrænsning:</strong> Du kan anmode om begrænsning af behandlingen</li>
              <li><strong>Ret til dataportabilitet:</strong> Du kan anmode om at få dine data i et struktureret format</li>
              <li><strong>Ret til at trække samtykke tilbage:</strong> Du kan til enhver tid trække dit samtykke tilbage</li>
              <li><strong>Ret til indsigelse:</strong> Du kan gøre indsigelse mod behandlingen af dine data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">9. Cookies og tracking</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Vores hjemmeside bruger cookies til at forbedre brugeroplevelsen. Vi bruger:
            </p>
            <ul className="list-disc list-inside text-lg font-sans text-gray-700 leading-relaxed space-y-2 ml-6">
              <li><strong>Nødvendige cookies:</strong> For at hjemmesiden fungerer korrekt</li>
              <li><strong>Analytiske cookies:</strong> For at forstå, hvordan hjemmesiden bruges</li>
              <li><strong>Funktionelle cookies:</strong> For at huske dine præferencer</li>
            </ul>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mt-4">
              Du kan til enhver tid ændre dine cookie-indstillinger i din browser.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">10. Datasikkerhed</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Vi implementerer passende tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte dine personlige oplysninger mod:
            </p>
            <ul className="list-disc list-inside text-lg font-sans text-gray-700 leading-relaxed space-y-2 ml-6">
              <li>Uautoriseret adgang</li>
              <li>Ændring, offentliggørelse eller ødelæggelse</li>
              <li>Tab eller tyveri</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">11. Klageret</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Hvis du mener, at vi behandler dine personlige oplysninger i strid med gældende lovgivning, kan du klage til:
            </p>
            <p className="text-lg font-sans text-gray-700 leading-relaxed ml-6">
              <strong>Datatilsynet</strong><br />
              Borgergade 28, 5.<br />
              1300 København K<br />
              Telefon: 33 19 32 00<br />
              E-mail: dt@datatilsynet.dk<br />
              Website: <a href="https://www.datatilsynet.dk" className="text-[#8B4513] hover:text-[#A0522D] underline" target="_blank" rel="noopener noreferrer">www.datatilsynet.dk</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">12. Kontakt</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Hvis du har spørgsmål til denne privatlivspolitik eller ønsker at udøve dine rettigheder, kan du kontakte os på:
            </p>
            <p className="text-lg font-sans text-gray-700 leading-relaxed ml-6">
              E-mail: <a href="mailto:kontakt@marie-louise-stokholm.dk" className="text-[#8B4513] hover:text-[#A0522D] underline">kontakt@marie-louise-stokholm.dk</a><br />
              Telefon: +45 51 51 37 55<br />
              Adresse: Jagtvej 202, 2100 København Ø
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">13. Ændringer til privatlivspolitikken</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
              Vi kan opdatere denne privatlivspolitik fra tid til anden. Væsentlige ændringer vil blive kommunikeret til dig via e-mail eller på vores hjemmeside. Vi opfordrer dig til at gennemse denne side regelmæssigt for at holde dig opdateret.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-sans font-medium rounded-md transition-colors duration-200"
            >
              ← Tilbage til forsiden
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
