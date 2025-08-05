import Image from "next/image";

export default function Forside() {
  return (
    <main className="text-gray-800">
      <section className="relative w-full h-[60vh]">
        <Image
          src="/images/cover-forsiden.jpg"
          alt="Marie Louise Stokholm i samtale"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Når noget i dit arbejdsliv er i bevægelse
            </h1>
            <p className="text-lg md:text-xl mt-2 italic">
              Samtaler, der skaber retning. Med dig – og for dig.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <section className="space-y-4">
          <p>Dit arbejdsliv er ved at forandre sig. Det bevæger sig – måske frivilligt, måske mod din vilje. Eller også står det helt stille.</p>
          <p>
            Du mærker måske uro i kroppen, en snigende tvivl i hverdagen eller en stille fornemmelse af, at noget ikke længere passer.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Er leder og står i krydspres mellem resultater, relationer og dig selv.</li>
            <li>Er medarbejder og længes efter mening, energi eller bevægelse.</li>
            <li>Er på vej videre – frivilligt eller ufrivilligt – og tvivler på næste skridt.</li>
          </ul>
          <p>
            Det handler om mere end dit arbejde. Det handler om, hvordan du trives, træffer valg og finder fodfæste i det arbejdsliv, du står midt i.
          </p>
          <p>
            Hos Movement Matters møder du en erfaren erhvervscoach, der skaber samtaler med bevægelse. Retning, der føles rigtig.
          </p>
          <p className="font-medium">👉 Tag det første skridt. Book en gratis og uforpligtende samtale.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Samtalen er centrum</h2>
          <p>
            Hos Movement Matters er samtalen ikke bare et redskab – det er et arbejdsrum. Et sted, hvor vi undersøger situationen, du står i, og begynder at skabe klarhed i det, der fylder i dit arbejdsliv.
          </p>
          <p>
            Vi taler om det konkrete – og det, der ligger bag. Det, der presser sig på i hverdagen. Det, du måske ikke har sat ord på endnu.
          </p>
          <p>
            Du får en samtalepartner med dyb erfaring i arbejdslivets kompleksitet. Ikke en metode på skinner, men en erfaren coach med organisatorisk indsigt, psykologisk forståelse – og blik for både det, der bremser, og det, der kan bringe dig videre.
          </p>
          <p>
            Det gælder, uanset om du er leder, medarbejder – eller står et sted, hvor dit arbejdsliv kalder på forandring.
          </p>
          <p className="font-medium">👉 Du skal ikke præstere. Du skal bare møde op.</p>
        </section>
      </div>
    </main>
  );
}