"use client";
import { useState } from "react";
import Image from "next/image";

type Testimonial = {
  id: number;
  quote: string;
  fullQuote: string;
  name: string;
  role: string;
  image?: string;
};

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Flatten all testimonials into a single array
  const allTestimonials = [
    // Gruppe 1
    {
      id: 1,
      quote: "Et regulært energiboost … skarp, intuitiv og psykologisk indsigtsfuld. Udfordrer og støtter på én gang – og omsætter idéer til handling.",
      fullQuote: "Jeg har den store glæde at være i forløb hos Marie Louise – og det er et regulært energiboost. Hun er skarp, intuitiv og psykologisk indsigtsfuld, samtidig med at hun er oprigtig, empatisk og usædvanligt direkte på den gode måde. Hun formår at udfordre og støtte på én gang – og hun sikrer, at der ikke kun skabes idéer, men også fremdrift og handling. Marie Louise er et nuanceret menneske, der møder mig med både humor, nysgerrighed og tilstedeværelse. Jeg værdsætter især, at vores samtaler aldrig bliver bundet op på generiske modeller eller skemaer, men tager form i nu'et – med en coach, der virkelig ser, lytter og taler ind i det, der betyder noget. Forløbet har gjort en markant forskel for mig, og jeg ved allerede nu, at jeg vil sende flere mennesker i hendes retning – fordi det hun kan, er sjældent og værdifuldt",
      name: "Frederikke Abildstrup",
      role: "Senior Legal Counsel",
      image: "/images/testomonials/Frederikke Abildstrup, Senior Legal Counsel.jpeg"
    },
    {
      id: 2,
      quote: "Relevante og inspirerende samtaler – jeg gik derfra fyldt med energi og motivation.",
      fullQuote: "Marie Louise har professionelt evnet at tilrettelægge vores samtaler, så de blev både relevante og inspirerende. Jeg er gået fra vores samtaler fyldt med energi, og motiveret til det videre arbejde.",
      name: "Christian Haines",
      role: "Human Resources Business Partner",
      image: "/images/testomonials/Christian Haines.jpeg"
    },
    {
      id: 3,
      quote: "Mødte mig med nærvær og respekt midt i krisen … byggede mig op i mit tempo. I dag er jeg stærkere og afklaret.",
      fullQuote: "Jeg var meget i tvivl, da jeg fik tilbuddet om et forløb. Skulle jeg takke ja? I dag er jeg inderligt glad for, at min nysgerrighed vandt, og at jeg sagde ja tak. Ikke nok med, at jeg havde mistet mit arbejde, en stor del af min identitet og passion, så stod jeg samtidig midt i en personlig krise. Min mor blev diagnosticeret med uhelbredelig kræft og kort tid efter erklæret terminal. Det var en periode præget af stor sorg. Midt i alt dette mødte jeg Marie Louise, som blev min rådgiver. Fra første møde formåede hun at møde mig præcis dér, hvor jeg var, med ægte nærvær, respekt og stor forståelse for min situation. Hun så hele mig, ikke bare en kandidat i et forløb. Hun lyttede, gav plads og udviste en mærkbar evne til at balancere støtte og professionel sparring. Gennem vores samtaler opstod der en relation, som kom til at danne fundamentet for mine langsigtede beslutninger. Langsomt, og i mit tempo, blev jeg bygget op igen. Mine faglige kompetencer og menneskelige værdier blev tydelige for mig, og jeg begyndte at mærke troen på mig selv vende tilbage. Den professionelle rådgivning, ærlige sparring og varme støtte, jeg har modtaget fra Marie Louise, har gjort en stor forskel for mig. I dag føler jeg mig stærkere, afklaret og vigtigst af alt har jeg genvundet ejerskabet over mine beslutninger og min retning i livet. Marie Louise har haft en helt særlig betydning for mig i en sårbar livssituation. Jeg kan på det varmeste anbefale hende som rådgiver, hun besidder både høj faglighed og en menneskelig styrke, der gør en reel forskel.",
      name: "Marianne Bergholt Schmidt",
      role: "Director - Global safety regions",
      image: "/images/testomonials/Marianne Bergholt Schmidt.jpeg"
    },
    {
      id: 4,
      quote: "Mødt med stor forståelse og ærlige refleksioner – en stærk sparringspartner, som jeg vil savne.",
      fullQuote: "Marie Louise har været helt fantastisk! Lige fra første møde blev jeg mødt med en stor forståelse og ønske om at ville hjælpe mig bedst muligt. Det har været utrolig dejligt at høre Marie Louises refleksioner og ærlige syn på sagen og bruge hende som sparringspartner. Jeg vil i den grad savne vores samtaler.",
      name: "Anne Falk Konnild",
      role: "Senior Global Project Manager",
      image: "/images/testomonials/Anne Falk Konnild.jpeg"
    },
    {
      id: 5,
      quote: "Superprofessionel, ærlig og transparent – en ekstremt god sparringspartner. Store anbefalinger.",
      fullQuote: "Marie Louise har været superprofessionel, ærlig og transparent igennem hele forløbet. Har været en ekstrem god sparringspartner på alle slags spørgsmål og tanker omkring min situation. Kan kun give store anbefalinger til hende.",
      name: "Kasper Erbo Mortensen",
      role: "Executive Advisor to CEO and Head of Executive Office",
      image: "/images/testomonials/Kasper Erbo Mortensen.jpeg"
    },
    {
      id: 6,
      quote: "Hun mødte mig dér, hvor jeg var i processen – og tilpassede rådgivning og sparring.",
      fullQuote: "Jeg har været rigtig glad for mine samtaler med Marie Louise, som jeg oplevede, mødte mig på det stadie af processen, jeg var - og tilpassede sin rådgivning og sparring derefter.",
      name: "Kaja Tengbjerg",
      role: "Chief Consultant",
      image: "/images/testomonials/Kaja Tengbjerg.jpeg"
    },
    // Gruppe 2
    {
      id: 7,
      quote: "Skræddersyet perfekt til mig … taget seriøst, forstået og godt klædt på. Over al forventning.",
      fullQuote: "Forløbet blev skræddersyet perfekt til mig. Mine overvejelser og bekymringer blev taget meget seriøst. Føler mig forstået og godt klædt på til det videre forløb. Helt klart over al forventning.",
      name: "Lasse Holst Christensen",
      role: "Fund Manager",
      image: "/images/testomonials/Lasse Holst Christensen.jpeg"
    },
    {
      id: 8,
      quote: "Perfekt sparringspartner til opstart som selvstændig – skabte overblik, fremdrift og idéer.",
      fullQuote: "Jeg meldte fra dag 1, at mit behov handler om at starte som selvstændig og ikke søge job. Marie Louise var perfekt til at gå ind i netop det behov som sparringspartner med relevant viden i at starte som selvstændig. Jeg har været rigtig glad for den løbende sparring. Kunne se med andre øjne, hvor jeg var langt i processen, og hvad der manglede fremdrift. Marie Louise bidrog med ideer og brainstorm ift. udvikling af virksomhed.",
      name: "Lars Thostrup",
      role: "Coach",
      image: "/images/testomonials/Lars Thostrup.jpeg"
    },
    {
      id: 9,
      quote: "Kæmpe engagement … samtalerne var et boost. Hun så mit potentiale og investerede tid i mig.",
      fullQuote: "Har oplevet et stort engagement fra Marie Louise. De personlige samtaler føltes som et kæmpe boost, hvor jeg oplevede, at Marie Louise så mit potentiale og investererede tid i mig.",
      name: "Sarah Lakhani",
      role: "Senior Compliance Officer – Control Testing",
      image: "/images/testomonials/Sarah Lakhani.jpeg"
    },
    {
      id: 10,
      quote: "Ærlig og direkte sparring – afgørende for at bekræfte retning og komme på rette vej.",
      fullQuote: "Marie Louise har bidraget med ærlig og direkte sparring som har været afgørende for at bekræfte mig i min situation, men også at få mig på rette vej, hvis jeg var på vej i en ikke hensigtsmæssig retning. Dygtig sparringspartner!",
      name: "Morten Schou",
      role: "Software Consultant",
      image: "/images/testomonials/Morten Schou.jpeg"
    },
    {
      id: 11,
      quote: "Nærvær og faglig dygtighed gjorde en stor forskel – værdifulde redskaber. Varm anbefaling.",
      fullQuote: "I mit forløb har Marie Louises nærvær og faglige dygtighed gjort en stor forskel for mig. Hun har været en fantastisk sparringspartner, som både har lyttet og givet mig værdifulde redskaber. Jeg kan kun varmt anbefale hende.",
      name: "Anette Møller",
      role: "Privatkundedirektør",
      image: "/images/testomonials/Anette Møller.jpeg"
    },
    {
      id: 12,
      quote: "Følte mig set og forstået … skarpe spørgsmål gav afklaring og næste skridt i min karriere.",
      fullQuote: "Marie Louise har været en fantastisk coach og sparringspartner, hvor jeg har følt mig set og forstået. Marie Louise har stillet skarpe og relevante spørgsmål, der har fået mig til at reflektere og blive mere afklaret omkring mine kompetencer, mine ønsker for fremtiden og hvad det næste skridt i min karriere skulle være. Jeg har følt mig set og mødt præcis der, hvor jeg var i min proces, og jeg har oplevet en rød tråd i hele forløbet. Hendes empati og evne til at forstå mine behov har gjort en stor forskel for mig. Jeg føler mig nu langt bedre rustet til at tage næste skridt i min karriere. Jeg vil varmt anbefale dette forløb til andre, der ønsker professionel og nærværende sparring i deres karriereudvikling. Det har været et meget værdifuld forløb for mig.",
      name: "Sofie Mürer",
      role: "Business Consultant",
      image: "/images/testomonials/Sofie Mürer.jpeg"
    },
    // Gruppe 3
    {
      id: 13,
      quote: "Hun så mig og min situation – tog coachingen i mit tempo, improviserede og udfordrede. Jeg voksede af det.",
      fullQuote: "Jeg føler virkelig, at Marie Louise så mig og min situation. Hun gennemgik ikke bare en rutine, men tog coachingen i mit tempo, var i stand til at improvisere og skifte emne, hvis det var nødvendigt i en session. Og hun udfordrede mig, hvilket ikke var let i øjeblikket, men hjalp mig med at vokse undervejs, supertilfreds med hele coachingoplevelsen. Jeg kan varmt anbefale Marie Louise til dem, der har behov for en dygtig coach.",
      name: "Anne Brusberg",
      role: "Contracts and Proposals Director"
    },
    {
      id: 14,
      quote: "Rykkede mig på flere niveauer for at komme godt videre – meget taknemmelig for støtten.",
      fullQuote: "Marie Louise har som min rådgiver og coach formået at rykke mig på flere niveauer ift. at komme godt videre. Jeg er utrolig glad og taknemmelig for den støtte jeg har fået. Jeg kan kun give Marie Louise de bedste anbefalinger.",
      name: "Jari Due Jessen",
      role: "IT og Digitaliseringschef",
      image: "/images/testomonials/Jari Due Jessen.jpeg"
    },
    {
      id: 15,
      quote: "Above and beyond – løftede både jobsøgning og selvværd. Kunne ikke ønske mig en bedre coach.",
      fullQuote: "Marie Louise gik above and beyond for at hjælpe mig videre ind i en god stilling. Marie Louise hjalp mig ikke kun med at finde jobs og forberede mig til samtaler, hun hjalp mig også med at løfte mit selvværd. Jeg har haft nogle helt utroligt givende samtaler, og hendes engagement i min fremtid har været tydelig. Jeg kunne ikke have ønsket mig en bedre coach til mit forløb. Jeg behøvede ikke andet.",
      name: "Asta Meehan",
      role: "Technical Sales Representative",
      image: "/images/testomonials/Asta Meehan.jpeg"
    },
    {
      id: 16,
      quote: "Udgangspunkt i mig og hvor jeg var – dygtig coach med situationsfornemmelse, der tydeliggjorde mine styrker.",
      fullQuote: "Forløbet med Marie Louise har været medudgangspunkt i mig, og hvor jeg var mit liv, uden at 'pådutte' mig hendes egne holdninger. Hun er en rigtig dygtig coach - både som jobcoach, men har også en situationsfornemmelse i forhold til, hvor man er privat og psykisk, der forstod mig og bakkede mig op, når det var svært og samtidig gjorde mig opmærksom på mine styrker.",
      name: "Merete Friis",
      role: "Erhvervsdirektør",
      image: "/images/testomonials/Merete Friis.jpeg"
    },
    {
      id: 17,
      quote: "Trygt rum og taktiske tilgange til vellykket jobsøgning – fleksibel og velforberedt.",
      fullQuote: "Marie Louise er en meget erfaren coach og vejleder, der meget hurtigt satte sig ind i mine kompetencer og forbedringsområder. Hun skabte et trygt rum, hvor jeg kunne åbne op og diskutere mine overvejelser åbent. Hun gav vejledning og tryghed samt taktiske tilgange til en vellykket jobsøgning. Generelt har hun gennem hele vores interaktion været fleksibel, velforberedt og velinformeret om arbejdsmarkedet, hvilket er vigtigt, når man søger specialiserede stillinger.",
      name: "Dimitra Maria Anastasiadou",
      role: "Project Manager",
      image: "/images/testomonials/Dimitra Maria Anastasiadou.jpeg"
    },
    {
      id: 18,
      quote: "Samtalerne skaber retning og resultater – de bedste anbefalinger.",
      fullQuote: "Tusinde tak for rigtig god sparring og coaching. Du har været en stor hjælp. Jeg kan kun give Marie Louise de bedste anbefalinger, hvis man har brug for en dygtig coach og sparringspartner, hvor samtalerne skaber retning og resultater.",
      name: "Martin Christensen Fandrup",
      role: "Konsulent og programchef",
      image: "/images/testomonials/Martin Christensen Fandrup.jpeg"
    },
    // Gruppe 4
    {
      id: 19,
      quote: "Hun var i mit ringhjørne – til stede, empatisk, motiverende og knivskarp. Medvirkende til at jeg starter virksomhed.",
      fullQuote: "Marie Louise har været en virkelig god rådgiver fra starten af mit forløb. Jeg har virkelig følt, at hun er i mit ringhjørne og ikke andre steder. Hun er til stede, meget alsidig, empatisk, motiverende og knivskarp. Hun er en af grundene til, at jeg er dér hvor jeg i nu og er ved at opstarte egen mindre virksomhed. Jeg kan varmt anbefale Marie Louise som rådgiver. Jeg sætter pris på den meget personlige rådgivning og sparring jeg har fået af Marie Louise.",
      name: "Michael Sonnested",
      role: "Global Product Manager",
      image: "/images/testomonials/Michael Sonnested.png"
    },
    {
      id: 20,
      quote: "She coached at my pace, improvised when needed, and challenged me – I grew from it. Super happy with the experience.",
      fullQuote: "I really feel that Marie Louise saw me and my situation. She didn't just go through a routine but took the coaching in my tempo, was able to improvise and switch topics if that was needed in a session. and she challenged me, which was not easy in the moment but helped me grow along the way , super happy with the whole coaching experience.",
      name: "Ilary Ranalli",
      role: "Senior Manager, Supply Chain Decarbonisation",
      image: "/images/testomonials/ Ilary Ranalli.jpeg"
    },
    {
      id: 21,
      quote: "Følte mig set, forstået og udfordret på den rigtige måde – vil til enhver tid anbefale.",
      fullQuote: "Jeg vil virkelig gerne takke dig for din støtte, inspiration og gode råd under mit forløb! Jeg havde hele tiden følelsen af at blive set og forstået, og udfordret på den helt rigtige måde. Synes jeg var heldig som fik dig som rådgiver, og ville til en hver tid anbefale dig!",
      name: "Eva Englund",
      role: "Senior Advisor",
      image: "/images/testomonials/Eva Englund.jpeg"
    },
    {
      id: 22,
      quote: "Professionel, kompetent, nærværende og forstående – jeg følte mig tryg og hørt.",
      fullQuote: "Marie Louise har været en fantastisk coach og rådgiver, intet mindre. Professionel, kompetent, nærværende og forstående. Har følt mig meget tryg og hørt i mit forløb.",
      name: "Kristina Thaulow Pedersen",
      role: "Teknisk Manager",
      image: "/images/testomonials/Kristina Thaulow Pedersen.jpeg"
    },
    {
      id: 23,
      quote: "Fik sat de rigtige tanker i gang og skabt system … jeg ville gerne have haft endnu flere møder.",
      fullQuote: "Det har været meget givende at tale med Marie Louise. Hun fik sat de rigtige tanker i gang, og fik sat system i det. Eneste ting der tæller ned og kaster en skygge på mit forløb - jeg havde for få møder med Marie Louise, kunne have brugt 10 🥰",
      name: "Mette Gjørtler",
      role: "Project Consultant"
    },
    {
      id: 24,
      quote: "Målrettet rådgivning og spørgsmål, der gjorde valget mere bevidst – inspirerende og givende.",
      fullQuote: "Marie Louises rådgivning i mit forløb har været meget målrettet og hendes spørgsmål hjalp mig til at træffe et mere bevist valg. Fantastisk rådgivning, meget inspirerende og givende! Herfra de allerbedste anbefalinger.",
      name: "Ekatarina Christensen",
      role: "Head of Tech Governance"
    },
    // Gruppe 5
    {
      id: 25,
      quote: "Så og læste mig fra dag 1 … trygt sted, der guidede mig tilbage til mit selvsikre jeg. Mine allerbedste anbefalinger.",
      fullQuote: "Jeg har været MEGET tilfreds med Marie Louise. Hun har fra dag 1 set og læst mig meget bedre, end jeg selv kunne. Hun har været et trygt sted for mig i min situation - og jeg er sikker på at hun har været mit største aktiv i denne proces. Hun har formået at guide mig, så jeg er kommet tilbage til mit selvsikre jeg. Skulle jeg komme til at stå i en udfordrende situation igen, så vil jeg helt sikkert række ud til Marie Louise. Marie Louise får mine allerbedste anbefalinger.",
      name: "Trine Terp",
      role: "Salgskonsulent",
      image: "/images/testomonials/Trine Terp.jpeg"
    },
    {
      id: 26,
      quote: "Værdifuld sparring og støtte – især når tingene blev svære. Uvurderlig hjælp.",
      fullQuote: "Stor tak Marie Louise for et givende og professionelt forløb. Du har ydet masser af værdifuld sparring og støtte, især når tingene blev svære. Du har været en uvurderlig hjælp især med opbakning, når jeg tvivlede på mig selv.",
      name: "Christina Fangel Ovesen",
      role: "PA",
      image: "/images/testomonials/Christina Fangel Ovesen.jpeg"
    },
    {
      id: 27,
      quote: "Man føler sig velkommen og taget alvorligt – givende og inspirerende samtaler.",
      fullQuote: "I et forløb hos Marie Louise føler man sig velkommen og bliver taget alvorligt. Mine samtaler med Marie Louise har været givende og inspirerende. Marie Louise er en dygtig coach. Herfra mine bedste anbefalinger.",
      name: "Anders Saron Dalsgaard",
      role: "Senior Manager, Enterprise Partnerships",
      image: "/images/testomonials/Anders Saron Dalsgaard.jpeg"
    },
    {
      id: 28,
      quote: "Gik fra møder sprængfyldt med idéer, energi og selvtillid – stærke værktøjer til mit videre forløb.",
      fullQuote: "Jeg oplever, at Marie Louise har formidlet en viden til mig og givet mig værktøjer til mit videre forløb, som har været helt fantastisk. Jeg har sat stor pris på de personlige samtaler med Marie Louise, hvor jeg gik fra møder sprængfyldt med idéer, energi og selvtillid.",
      name: "Connie Svendsen",
      role: "HSE- partner",
      image: "/images/testomonials/Connie Svendsen.jpeg"
    },
    {
      id: 29,
      quote: "Felt seen, heard and understood – she individualized her communication to my program.",
      fullQuote: "Very happy with my coach/mentor/therapist Marie-Louise. She made me feel seen, heard and understood and was individulizing her communications to my program.",
      name: "Josefin Ittichai",
      role: "Head of Digital & Data Management",
      image: "/images/testomonials/Josefin Ittichai.jpeg"
    },
    {
      id: 30,
      quote: "Rigtig god dialog gennem hele forløbet – jeg kan kun anbefale Marie Louise.",
      fullQuote: "Rigtig god dialog gennem hele forløbet. Tak for det! Jeg kan kun anbefale Marie Louise",
      name: "Finn Kirkegaard Nathan",
      role: "Investeringsrådgiver",
      image: "/images/testomonials/Finn Kirkegaard Nathan.jpeg"
    },
    // Gruppe 6
    {
      id: 31,
      quote: "Så og læste mig fra dag 1 … trygt sted, der guidede mig tilbage til mit selvsikre jeg. Mine allerbedste anbefalinger.",
      fullQuote: "Jeg har været MEGET tilfreds med Marie Louise. Hun har fra dag 1 set og læst mig meget bedre, end jeg selv kunne. Hun har været et trygt sted for mig i min situation - og jeg er sikker på at hun har været mit største aktiv i denne proces. Hun har formået at guide mig, så jeg er kommet tilbage til mit selvsikre jeg. Skulle jeg komme til at stå i en udfordrende situation igen, så vil jeg helt sikkert række ud til Marie Louise. Marie Louise får mine allerbedste anbefalinger.",
      name: "Trine Terp",
      role: "Salgskonsulent",
      image: "/images/testomonials/Trine Terp.jpeg"
    },
    {
      id: 32,
      quote: "SÅ glad for vejledning og råd – det gør det meget lettere at være mig.",
      fullQuote: "Mange tak for rigtig gode samtaler. Jeg har været SÅ glad for din vejledning og råd. Det gør det ret meget lettere at være mig. De bedste anbefalinger, hvis du får behov for en coach og samtalepartner.",
      name: "Trine Boe",
      role: "Communication Consultant",
      image: "/images/testomonials/Trine Boe.jpeg"
    },
    {
      id: 33,
      quote: "Imødekommende, forstående og kompetent – forløbet blev tilpasset min situation. Allerbedste anbefalinger.",
      fullQuote: "Jeg har været heldig med Marie Louise - en meget imødekommende, forstående og kompetent rådgiver. Der var god kemi og dermed tillid fra første møde. Marie Louise har været rigtig god til at tilpasse forløbet til min aktuelle situation. Marie Louise får mine allerbedste anbefalinger",
      name: "Jane Christensen",
      role: "Senior Coordintor",
      image: "/images/testomonials/Jane Christensen.jpeg"
    },
    {
      id: 34,
      quote: "Stor forståelse for situation, strategi og ønsker – gav givende feedback og tips.",
      fullQuote: "Marie Louise er en dygtig og erfaren coach og havde stor forståelse for situationen, strategi, ønskemål og gav gode og givende feedback og tips.",
      name: "Magnus Green",
      role: "Senior Analytical Professional",
      image: "/images/testomonials/Magnus Green.jpeg"
    },
    {
      id: 35,
      quote: "Virkelig hjulpet mig godt videre – jeg følte mig grebet gennem hele forløbet.",
      fullQuote: "Marie Louise har været helt fantastisk og har virkelig hjulpet mig så godt videre. Jeg er så lykkelig for at det netop har været hende som jeg har været min coach og tør næsten ikke forestille mig hvis jeg havde fået en anden end hende. Det har været et virkelig godt forløb og jeg føler mig virkelig grebet.",
      name: "Marie Kjær",
      role: "Specialkonsulent DTU",
      image: "/images/testomonials/Marie Kjær.jpeg"
    },
    {
      id: 36,
      quote: "Altid interesseret i mig og min situation – udfordrede mig til nye tanker. Stor værdi i sparringen.",
      fullQuote: "Jeg har været meget tilfreds med Marie Louise. Han har altid virket interesseret i mig og min situation. Hun har også formået at udfordre mig, så jeg kunne tænke nye og andre tanker om mig selv. Jeg har sat stor pris på Marie Louise som rådgiver og sparringspartner og vores samtaler.",
      name: "Stine Lindhardt",
      role: "Operation and Sales Coordinator",
      image: "/images/testomonials/Stine Lindhardt.jpeg"
    },
    // Gruppe 7
    {
      id: 37,
      quote: "Stiller de rigtige spørgsmål på rette tid … dyb indsigt i arbejdsmarkedet. Hjalp mig til klarhed og retning.",
      fullQuote: "Gennem mit forløb har Marie Louise været en utrolig empatisk og konstruktiv støtte. Hun formår at stille de rigtige spørgsmål på de rigtige tidspunkter, hvilket har hjulpet mig til at finde min egen vej og opnå en dybere afklaring omkring mine valg. Hendes store indsigt i arbejdsmarkedet og de mekanismer der driver ledere og ansættelsesudvalg, hendes menneskelige forståelse, kombineret med en dyb respekt for min proces, har gjort en stor forskel for mig. Marie Louise har været uundværlig og har hjulpet mig til at tænke kreativt omkring min situation og finde retning, og jeg er meget taknemmelig for hendes støtte og vejledning.",
      name: "Anders Tornøe",
      role: "Digital Learning Consultant",
      image: "/images/testomonials/Anders Tornøe.jpeg"
    },
    {
      id: 38,
      quote: "Meget personlig og dygtig rådgivning – skræddersyet til mine behov.",
      fullQuote: "I forløbet hos Marie Louise har fået meget personlig og dygtig rådgivning. Et skræddersyet forløb, der passede til mine behov. Marie Louise får de bedste anbefalinger fra mig.",
      name: "Mayasa Mohidin",
      role: "HR Specialist",
      image: "/images/testomonials/Mayasa Mohidin.jpeg"
    },
    {
      id: 39,
      quote: "Very attentive and easy to talk to – excellent advice, both professional and personal.",
      fullQuote: "Marie Louise was very attentive and so easy to have conversations with. She gave excellent advice, was both professional and personal and went out of her way to make things comfortable and positive.",
      name: "Dean Just",
      role: "Principal Laboratory Technician",
      image: "/images/testomonials/Dean Just.jpeg"
    },
    {
      id: 40,
      quote: "Styrkede min selvtillid og gav præcis den opbakning, jeg havde brug for … hun læste mit behov.",
      fullQuote: "Marie Louise har været en fantastisk hjælp lige fra start til slut, hun fik styrket min selvtillid og gav mig lige de råd og opbakning, som jeg havde brug for 👍😊 Hun er bare fantastisk. Det bedste ved forløbet var, at det foregik efter mine behov og Marie Louise helt kunne 'læse' hvad det var, som jeg havde behov for.",
      name: "Mette Keil Sørensen",
      role: "Kundeservice, Receptionist og Frontoffice",
      image: "/images/testomonials/Mette Keil Sørensen.jpeg"
    },
    {
      id: 41,
      quote: "Direkte og opmuntrende – ærlig, fleksibel og meget kompetent rådgivning.",
      fullQuote: "Marie Louises meget direkte og opmuntrende facon. Hun har igennem hele forløbet været meget ærlig, udvist fleksibilitet og hun er meget kompetent i hendes rådgivning.",
      name: "Anders Munch Marstrand",
      role: "AML & Fraud Analyst",
      image: "/images/testomonials/Anders Munch Marstrand.jpeg"
    },
    {
      id: 42,
      quote: "Personlig dialog med fokus på min situation – stor støtte som sparringspartner og coach.",
      fullQuote: "Jeg oplevede i forløbet at have en rigtig god og personlig dialog med fokus på min situation, og oplevede Marie Louise som en stor støtte som sparringspartner og coach.",
      name: "Birgitte Andersen",
      role: "Director of Products and Optimization"
    },
    // Gruppe 8
    {
      id: 43,
      quote: "Vi fandt hurtigt kemien – Marie Louise har været meget værdifuld i min proces.",
      fullQuote: "Jeg oplevede, at vi hurtigt fandt kemien, og det var supergodt. Marie Louise har været meget værdifuld i min proces.",
      name: "Annette Bastidas",
      role: "Senior Analytiker",
      image: "/images/testomonials/Annette Bastidas.jpeg"
    },
    {
      id: 44,
      quote: "Følte mig rummet og forstået … blev primet til samtale og fik jobbet – ro, tro og stærke input.",
      fullQuote: "Allerede fra det første møde med Marie Louise følte jeg mig rummet, forstået og mødt i den situation jeg var i. Efter hver eneste samtale gik jeg derfra med en følelse af empowerment og nye anderledes ideer til min tilgang som jobsøgende. Marie Louise er ikke længere væk end en SMS og er der når jeg har haft brug for det. Det har været en fantastisk dejlig sikkerhed at have, især da jeg skulle til jobsamtale (med meget kort frist) nåede vi at finde tid til et møde, så jeg kunne blive primet og klar. Jeg fik jobbet (hurrrraaa) - takket være Marie Louise og hendes input, roen hun satte i mig og troen på mig! TAK, Marie Louise! :o)",
      name: "Jeanne Jensen",
      role: "Front Desk Manager",
      image: "/images/testomonials/Jeanne Jensen.jpeg"
    },
    {
      id: 45,
      quote: "God sparringspartner om strategi og muligheder – også når jeg var træt af situationen.",
      fullQuote: "Det har været et rigtig godt forløb. Det har været rigtig godt at have en sparringspartner, man kunne snakke med om strategi, muligheder og ind imellem til at lytte når man var træt af situationen.",
      name: "Morten Trolle",
      role: "International Business Baccalaureate Mathematics Teacher",
      image: "/images/testomonials/Morten Trolle.jpeg"
    },
    {
      id: 46,
      quote: "En tid med udvikling – samtalerne har været en stor del af det. Tak.",
      fullQuote: "Forløbet har været en meget spændende tid, som jeg ikke lige havde set komme. En tid som har givet mig meget, og hvor jeg har udviklet mig. Vores samtaler har været en stor del af det - så tak for det.",
      name: "Susanne Mortensen",
      role: "Uddannelseschef",
      image: "/images/testomonials/Susanne Mortensen.jpeg"
    },
    {
      id: 47,
      quote: "Samtaler, der hjalp med at eliminere gamle barrierer – tak for det.",
      fullQuote: "Marie Louise og jeg har haft nogle virkelig gode samtaler, hvor hun har evnet at belyse og eliminerer nogle af de 'lig' i lasten jeg har båret med mig gennem mange år. Marie Louise tak for det.",
      name: "Bo Rejnholt Jensen",
      role: "Head of Consulting and Service",
      image: "/images/testomonials/Bo Rejnholt Jensen.jpeg"
    },
    {
      id: 48,
      quote: "Professionel, personlig og engageret – gav et stort boost og tydeliggjorde mine værdier og kompetencer.",
      fullQuote: "Marie Louise har været meget professionel, personlig og engageret. Hun har været et fantastisk match til mig, og jeg har så meget jeg tager med mig videre fra Marie Louise. Det har været et super godt forløb og det har givet mig et boost i mit arbejdsliv, men også i den grad i forhold til sparring og fremhævelse af mine værdier og kompetencer.",
      name: "Hanne Rytter Arnsted",
      role: "Driftskoordinator"
    },
    // Gruppe 9
    {
      id: 49,
      quote: "Tilpasset forløb uden kvalitetstab – skarpere på kompetencer og stærke jobsøgningsværktøjer.",
      fullQuote: "Hele forløbet har været tilpasset og tilrettelagt efter mine behov uden, at der er gået på kompromis med kvaliteten af forløbet. Marie Louise har hjulpet mig med at blive skarpere på mine kompetencer og samtidig givet mig en masse værktøjer, som har hjulpet mig - meget - til at gribe jobsøgningsprocessen an.",
      name: "Mikkel Brilner Lund",
      role: "Idrætskonsulent"
    },
    {
      id: 50,
      quote: "Stor hjælp i en hektisk overgang – så behov og skubbede venligt i den rigtige retning.",
      fullQuote: "Marie Louise har været til stor hjælp i en hektisk overgang. Hun hjalp med støtte og gode råd i hele perioden og har været god til, at se hvad der var behov for og venligt skubbe mig i den rigtige retning.",
      name: "Anja Werborg",
      role: "Key Account Manager",
      image: "/images/testomonials/Anja Werborg.jpeg"
    },
    {
      id: 51,
      quote: "Høj tilgængelighed og tilpasning – hjalp mig til ro og proaktiv, rationel tænkning.",
      fullQuote: "I mit forløb med Marie Louise oplevede jeg super god tilgængelighed, forberedelse og relevant tilpasning. Det var fedt, at du bare gik ind i min egen tilgang til det (som var fuld gas), men samtidigt hjalp med at trække tempoet lidt ud igen, så jeg kunne følge med. Det var ultra værdifuldt i forhold til at få ro på, og tænke rationelt (og pro-aktivt) i den givne situation. Marie Louise har været en uundværlig sparringspartner at lufte tingene med, så jeg er blevet helt bevidst om min situation.",
      name: "Frederik von Sperling",
      role: "Organisationskonsulent",
      image: "/images/testomonials/Frederik von Sperling.jpeg"
    },
    {
      id: 52,
      quote: "Tak for coachingen, som hjalp mig på de svære dage.",
      fullQuote: "Tak for coaching, som har hjulpet mig på de mere svære dage.",
      name: "Vicki Kaare Aamand",
      role: "Senior Marketing Project Manager",
      image: "/images/testomonials/Vicki Kaare Aamand.jpeg"
    },
    {
      id: 53,
      quote: "Var der 100% for mig – mine bedste anbefalinger.",
      fullQuote: "Marie Louise har som coach og rådgiver været der 100% for mig. Jeg kan kun give hende mine bedste anbefalinger.",
      name: "Helle Østerby Teilmann",
      role: "Customer Engagement Specialist",
      image: "/images/testomonials/Helle Østerby Teilmann.jpeg"
    },
    {
      id: 54,
      quote: "Følte mig set og hørt – identificerede mine behov og var altid på sidelinjen.",
      fullQuote: "Jeg har følt mig set og hørt. Marie Louise var god til at identificere, hvor jeg var og mine behov og var altid på sidelinjen.",
      name: "Susan Skovgård",
      role: "Business Analyst",
      image: "/images/testomonials/Susan Skovgård.jpeg"
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

      {/* Testimonials Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8 text-left text-gray-800">
          {allTestimonials.slice(0, visibleCount).map((testimonial) => {
            return (
              <div key={testimonial.id} className="bg-white p-6 rounded shadow border">
                {/* Profile image */}
                <div className="flex items-center mb-4">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-gray-600 font-semibold text-base">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="italic text-gray-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <button
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className="text-[#8B4513] hover:text-[#A0522D] font-semibold text-sm underline decoration-2 underline-offset-2 transition-colors duration-200"
                >
                  Læs mere
                </button>
              </div>
            );
          })}
        </div>
        
        {/* Vis flere udtalelser knap */}
        {visibleCount < allTestimonials.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="inline-block bg-[#e9dccb] hover:bg-[#d7c3ad] text-gray-900 font-semibold py-3 px-6 rounded transition"
            >
              Vis flere udtalelser
            </button>
          </div>
        )}
      </section>

      {/* Modal Popup */}
      {selectedTestimonial && (
        <div 
          className="fixed inset-0 bg-gray-100 bg-opacity-5 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div 
            className="bg-white bg-opacity-95 backdrop-blur-md rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {selectedTestimonial.image ? (
                    <Image
                      src={selectedTestimonial.image}
                      alt={selectedTestimonial.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-gray-600 font-semibold text-xl">
                        {selectedTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{selectedTestimonial.name}</h3>
                    <p className="text-gray-600">{selectedTestimonial.role}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              {/* Quote */}
              <div className="mb-6">
                <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                  &ldquo;{selectedTestimonial.quote}&rdquo;
                </blockquote>
              </div>
              
              {/* Full quote */}
              <div className="border-t pt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Fuld udtalelse:</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedTestimonial.fullQuote}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
