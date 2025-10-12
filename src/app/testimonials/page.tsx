import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Marie Louise har hjulpet mig med at finde klarhed i min ledelsesrolle. Hendes tilgang kombinerer faglig dybde med menneskelig forståelse på en måde, der virkelig gør en forskel.",
      name: "Sarah Nielsen",
      role: "Afdelingsleder, Novo Nordisk",
      image: "/images/testimonials/sarah.jpg"
    },
    {
      quote: "Samtalerne med Marie Louise har givet mig modet til at tage nye valg i mit arbejdsliv. Hun skaber et trygt rum til at udforske både udfordringer og muligheder.",
      name: "Michael Andersen",
      role: "Projektleder, COWI",
      image: "/images/testimonials/michael.jpg"
    },
    {
      quote: "Jeg blev mødt med forståelse og ægte engagement – det har været uvurderligt for min udvikling. Marie Louise forstår kompleksiteten i moderne ledelse.",
      name: "Jonas Bech",
      role: "Projektleder, LEGO",
      image: "/images/testimonials/jonas.jpg"
    },
    {
      quote: "Efter en opsigelse følte jeg mig fortabt. Marie Louise hjalp mig med at finde retning og genopbygge selvtilliden. Nu har jeg fundet et job, der passer til mig.",
      name: "Anna Larsen",
      role: "Marketing Manager, Pandora",
      image: "/images/testimonials/anna.jpg"
    },
    {
      quote: "Marie Louise's tilgang til coaching er anderledes. Hun stiller de rigtige spørgsmål og hjælper mig med at se mine egne løsninger. Det er magisk at opleve.",
      name: "Thomas Hansen",
      role: "HR-direktør, Nordea",
      image: "/images/testimonials/thomas.jpg"
    },
    {
      quote: "Som ny leder var jeg usikker på min rolle. Marie Louise hjalp mig med at finde min egen ledelsesstil og bygge tillid til mine evner.",
      name: "Lisa Pedersen",
      role: "Teamleder, Nets",
      image: "/images/testimonials/lisa.jpg"
    }
  ];

  return (
    <main className="bg-gray-50 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="w-full bg-white pt-16 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug tracking-tight">
            Hvad siger andre?
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Her kan du læse om, hvordan jeg har hjulpet andre med at finde klarhed og retning i deres arbejdsliv.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
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
