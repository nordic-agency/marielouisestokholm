"use client";
import { useState } from "react";

export default function Testimonials() {
  const [expandedGroup, setExpandedGroup] = useState(null);

  const testimonialGroups = [
    {
      id: 1,
      title: "Gruppe 1: Lederskab og udvikling",
      featured: {
        quote: "Et regulært energiboost … skarp, intuitiv og psykologisk indsigtsfuld. Udfordrer og støtter på én gang — og omsætter idéer til handling.",
        fullQuote: "Jeg har den store glæde at være i forløb hos Marie Louise – og det er et regulært energiboost. Hun er skarp, intuitiv og psykologisk indsigtsfuld, samtidig med at hun er oprigtig, empatisk og usædvanligt direkte på den gode måde. Hun formår at udfordre og støtte på én gang – og hun sikrer, at der ikke kun skabes idéer, men også fremdrift og handling. Marie Louise er et nuanceret menneske, der møder mig med både humor, nysgerrighed og tilstedeværelse. Jeg værdsætter især, at vores samtaler aldrig bliver bundet op på generiske modeller eller skemaer, men tager form i nu'et – med en coach, der virkelig ser, lytter og taler ind i det, der betyder noget. Forløbet har gjort en markant forskel for mig, og jeg ved allerede nu, at jeg vil sende flere mennesker i hendes retning – fordi det hun kan, er sjældent og værdifuldt",
        name: "Frederikke Abildstrup",
        role: "Senior Legal Counsel"
      },
      others: [
        {
          quote: "Relevante og inspirerende samtaler — jeg gik derfra fyldt med energi og motivation.",
          fullQuote: "Marie Louise har professionelt evnet at tilrettelægge vores samtaler, så de blev både relevante og inspirerende. Jeg er gået fra vores samtaler fyldt med energi, og motiveret til det videre arbejde.",
          name: "Christian Haines",
          role: "Human Resources Business Partner"
        }
      ]
    },
    {
      id: 2,
      title: "Gruppe 2: Karriereskift og opsigelse",
      featured: {
        quote: "Skræddersyet perfekt til mig … taget seriøst, forstået og godt klædt på. Over al forventning.",
        fullQuote: "Forløbet blev skræddersyet perfekt til mig. Mine overvejelser og bekymringer blev taget meget seriøst. Føler mig forstået og godt klædt på til det videre forløb. Helt klart over al forventning.",
        name: "Lasse Holst Christensen",
        role: "Fund Manager"
      },
      others: [
        {
          quote: "Perfekt sparringspartner til opstart som selvstændig — skabte overblik, fremdrift og idéer.",
          fullQuote: "Jeg meldte fra dag 1, at mit behov handler om at starte som selvstændig og ikke søge job. Marie Louise var perfekt til at gå ind i netop det behov som sparringspartner med relevant viden i at starte som selvstændig. Jeg har været rigtig glad for den løbende sparring. Kunne se med andre øjne, hvor jeg var langt i processen, og hvad der manglede fremdrift. Marie Louise bidrog med ideer og brainstorm ift. udvikling af virksomhed.",
          name: "Lars Thostrup",
          role: "Coach"
        }
      ]
    },
    {
      id: 3,
      title: "Gruppe 3: Personlig udvikling og støtte",
      featured: {
        quote: "Hun så mig og min situation — tog coachingen i mit tempo, improviserede og udfordrede. Jeg voksede af det.",
        fullQuote: "Jeg føler virkelig, at Marie Louise så mig og min situation. Hun gennemgik ikke bare en rutine, men tog coachingen i mit tempo, var i stand til at improvisere og skifte emne, hvis det var nødvendigt i en session. Og hun udfordrede mig, hvilket ikke var let i øjeblikket, men hjalp mig med at vokse undervejs, supertilfreds med hele coachingoplevelsen. Jeg kan varmt anbefale Marie Louise til dem, der har behov for en dygtig coach.",
        name: "Anne Brusberg",
        role: "Contracts and Proposals Director"
      },
      others: [
        {
          quote: "Rykkede mig på flere niveauer for at komme godt videre — meget taknemmelig for støtten.",
          fullQuote: "Marie Louise har som min rådgiver og coach formået at rykke mig på flere niveauer ift. at komme godt videre. Jeg er utrolig glad og taknemmelig for den støtte jeg har fået. Jeg kan kun give Marie Louise de bedste anbefalinger.",
          name: "Jari Due Jessen",
          role: "IT og Digitaliseringschef"
        }
      ]
    },
    {
      id: 4,
      title: "Gruppe 4: Virksomhedsopstart og entreprenørskab",
      featured: {
        quote: "Hun var i mit ringhjørne — til stede, empatisk, motiverende og knivskarp. Medvirkende til at jeg starter virksomhed.",
        fullQuote: "Marie Louise har været en virkelig god rådgiver fra starten af mit forløb. Jeg har virkelig følt, at hun er i mit ringhjørne og ikke andre steder. Hun er til stede, meget alsidig, empatisk, motiverende og knivskarp. Hun er en af grundene til, at jeg er dér hvor jeg i nu og er ved at opstarte egen mindre virksomhed. Jeg kan varmt anbefale Marie Louise som rådgiver. Jeg sætter pris på den meget personlige rådgivning og sparring jeg har fået af Marie Louise.",
        name: "Michael Sonnested",
        role: "Global Product Manager"
      },
      others: [
        {
          quote: "She coached at my pace, improvised when needed, and challenged me — I grew from it. Super happy with the experience.",
          fullQuote: "I really feel that Marie Louise saw me and my situation. She didn't just go through a routine but took the coaching in my tempo, was able to improvise and switch topics if that was needed in a session. and she challenged me, which was not easy in the moment but helped me grow along the way , super happy with the whole coaching experience.",
          name: "Ilary Ranalli",
          role: "Senior Manager, Supply Chain Decarbonisation"
        }
      ]
    },
    {
      id: 5,
      title: "Gruppe 5: Selvtillid og personlig styrke",
      featured: {
        quote: "Så og læste mig fra dag 1 … trygt sted, der guidede mig tilbage til mit selvsikre jeg. Mine allerbedste anbefalinger.",
        fullQuote: "Jeg har været MEGET tilfreds med Marie Louise. Hun har fra dag 1 set og læst mig meget bedre, end jeg selv kunne. Hun har været et trygt sted for mig i min situation - og jeg er sikker på at hun har været mit største aktiv i denne proces. Hun har formået at guide mig, så jeg er kommet tilbage til mit selvsikre jeg. Skulle jeg komme til at stå i en udfordrende situation igen, så vil jeg helt sikkert række ud til Marie Louise. Marie Louise får mine allerbedste anbefalinger.",
        name: "Trine Terp",
        role: "Salgskonsulent"
      },
      others: [
        {
          quote: "SÅ glad for vejledning og råd — det gør det meget lettere at være mig.",
          fullQuote: "Mange tak for rigtig gode samtaler. Jeg har været SÅ glad for din vejledning og råd. Det gør det ret meget lettere at være mig. De bedste anbefalinger, hvis du får behov for en coach og samtalepartner.",
          name: "Trine Boe",
          role: "Communication Consultant"
        }
      ]
    },
    {
      id: 6,
      title: "Gruppe 6: Karrierevejledning og jobsøgning",
      featured: {
        quote: "Stiller de rigtige spørgsmål på rette tid … dyb indsigt i arbejdsmarkedet. Hjalp mig til klarhed og retning.",
        fullQuote: "Gennem mit forløb har Marie Louise været en utrolig empatisk og konstruktiv støtte. Hun formår at stille de rigtige spørgsmål på de rigtige tidspunkter, hvilket har hjulpet mig til at finde min egen vej og opnå en dybere afklaring omkring mine valg. Hendes store indsigt i arbejdsmarkedet og de mekanismer der driver ledere og ansættelsesudvalg, hendes menneskelige forståelse, kombineret med en dyb respekt for min proces, har gjort en stor forskel for mig. Marie Louise har været uundværlig og har hjulpet mig til at tænke kreativt omkring min situation og finde retning, og jeg er meget taknemmelig for hendes støtte og vejledning.",
        name: "Anders Tornøe",
        role: "Digital Learning Consultant"
      },
      others: [
        {
          quote: "Meget personlig og dygtig rådgivning — skræddersyet til mine behov.",
          fullQuote: "I forløbet hos Marie Louise har fået meget personlig og dygtig rådgivning. Et skræddersyet forløb, der passede til mine behov. Marie Louise får de bedste anbefalinger fra mig.",
          name: "Mayasa Mohidin",
          role: "HR Specialist"
        }
      ]
    }
  ];

  return (
    <main className="bg-gray-50 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="w-full bg-white pt-16 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug tracking-tight">
            Referencer & evalueringer — erfaringer fra virkeligheden
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Godkendte udtalelser fra kunder og klienter.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Udvalgte cases og citater, der viser både proces og effekt — menneskeligt, fagligt og konkret.
          </p>
        </div>
      </section>

      {/* Testimonials Groups */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        {testimonialGroups.map((group) => (
          <div key={group.id} className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              {group.title}
            </h2>
            
            {/* Featured testimonial */}
            <div className="bg-white rounded-lg shadow-sm border-l-4 border-red-500 p-8 mb-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">
                      {group.featured.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{group.featured.name}</h3>
                  <p className="text-sm text-gray-600">{group.featured.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed italic text-lg mb-4">
                "{group.featured.quote}"
              </blockquote>
              <button
                onClick={() => setExpandedGroup(expandedGroup === group.id ? null : group.id)}
                className="text-[#e9dccb] hover:text-[#d7c3ad] font-medium text-sm"
              >
                Læs mere
              </button>
              {expandedGroup === group.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {group.featured.fullQuote}
                  </p>
                </div>
              )}
            </div>

            {/* Other testimonials in group */}
            <div className="grid md:grid-cols-2 gap-6">
              {group.others.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-semibold text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h3>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic text-sm">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>

            {/* Find flere referencer knap */}
            <div className="text-center mt-8">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded transition">
                Find flere referencer her
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Klar til at opleve det selv?
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Book en gratis og uforpligtende samtale, hvor vi kan udforske, hvordan jeg kan hjælpe dig.
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition"
          >
            Book en samtale
          </a>
        </div>
      </section>
    </main>
  );
}
