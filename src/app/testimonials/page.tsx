"use client";
import { useState } from "react";

export default function Testimonials() {
  const [expandedGroup, setExpandedGroup] = useState(null);

  const testimonialGroups = [
    {
      id: 1,
      title: "Gruppe 1: Karriereudvikling og jobsøgning",
      featured: {
        quote: "Jeg har været utrolig glad for mit forløb... Jeg føler mig nu langt bedre rustet til at tage næste skridt i min karriere.",
        fullQuote: "Jeg har været utrolig glad for mit forløb med Marie Louise. Hun har været en fantastisk coach og sparringspartner, hvor jeg har følt mig set og forstået. Marie Louise har stillet skarpe og relevante spørgsmål, der har fået mig til at reflektere og blive mere afklaret omkring mine kompetencer, mine ønsker for fremtiden og hvad det næste skridt i min karriere skulle være. Jeg har følt mig set og mødt præcis der, hvor jeg var i min proces, og jeg har oplevet en rød tråd i hele forløbet. Hendes empati og evne til at forstå mine behov har gjort en stor forskel for mig. Jeg føler mig nu langt bedre rustet til at tage næste skridt i min karriere.",
        name: "Sofie Mürer",
        role: "Business Consultant"
      },
      others: [
        {
          quote: "Relevante og inspirerende samtaler — jeg gik derfra fyldt med energi og motivation.",
          fullQuote: "Marie Louise har professionelt evnet at tilrettelægge vores samtaler, så de blev både relevante og inspirerende. Jeg er gået fra vores samtaler fyldt med energi, og motiveret til det videre arbejde.",
          name: "Christian Haines",
          role: "Human Resources Business Partner"
        },
        {
          quote: "Mødte mig med stor forståelse og ærlige refleksioner — en stærk sparringspartner, som jeg vil savne.",
          fullQuote: "Marie Louise har været helt fantastisk! Lige fra første møde blev jeg mødt med en stor forståelse og ønske om at ville hjælpe mig bedst muligt. Det har været utrolig dejligt at høre Marie Louises refleksioner og ærlige syn på sagen og bruge hende som sparringspartner. Jeg vil i den grad savne vores samtaler.",
          name: "Anne Falk Konnild",
          role: "Senior Global Project Manager"
        },
        {
          quote: "Superprofessionel, ærlig og transparent — en ekstremt god sparringspartner. Store anbefalinger.",
          fullQuote: "Marie Louise har været superprofessionel, ærlig og transparent igennem hele forløbet. Har været en ekstrem god sparringspartner på alle slags spørgsmål og tanker omkring min situation. Kan kun give store anbefalinger til hende.",
          name: "Kasper Erbo Mortensen",
          role: "Executive Advisor to CEO and Head of Executive Office"
        },
        {
          quote: "Hun mødte mig dér, hvor jeg var i processen — og tilpassede rådgivning og sparring.",
          fullQuote: "Jeg har været rigtig glad for mine samtaler med Marie Louise, som jeg oplevede, mødte mig på det stadie af processen, jeg var - og tilpassede sin rådgivning og sparring derefter.",
          name: "Kaja Tengbjerg",
          role: "Chief Consultant"
        },
        {
          quote: "Et regulært energiboost … skarp, intuitiv og psykologisk indsigtsfuld. Udfordrer og støtter på én gang — og omsætter idéer til handling.",
          fullQuote: "Jeg har den store glæde at være i forløb hos Marie Louise – og det er et regulært energiboost. Hun er skarp, intuitiv og psykologisk indsigtsfuld, samtidig med at hun er oprigtig, empatisk og usædvanligt direkte på den gode måde. Hun formår at udfordre og støtte på én gang – og hun sikrer, at der ikke kun skabes idéer, men også fremdrift og handling. Marie Louise er et nuanceret menneske, der møder mig med både humor, nysgerrighed og tilstedeværelse. Jeg værdsætter især, at vores samtaler aldrig bliver bundet op på generiske modeller eller skemaer, men tager form i nu'et – med en coach, der virkelig ser, lytter og taler ind i det, der betyder noget. Forløbet har gjort en markant forskel for mig, og jeg ved allerede nu, at jeg vil sende flere mennesker i hendes retning – fordi det hun kan, er sjældent og værdifuldt",
          name: "Frederikke Abildstrup",
          role: "Senior Legal Counsel"
        }
      ]
    },
    {
      id: 2,
      title: "Gruppe 2: Virksomhedsopstart og entreprenørskab",
      featured: {
        quote: "Marie Louise har været en virkelig god rådgiver... Hun er en af grundene til, at jeg er dér hvor jeg er nu.",
        fullQuote: "Marie Louise har været en virkelig god rådgiver fra starten af mit forløb. Jeg har virkelig følt, at hun er i mit ringhjørne og ikke andre steder. Hun er til stede, meget alsidig, empatisk, motiverende og knivskarp. Hun er en af grundene til, at jeg er dér hvor jeg i nu og er ved at opstarte egen mindre virksomhed. Jeg kan varmt anbefale Marie Louise som rådgiver. Jeg sætter pris på den meget personlige rådgivning og sparring jeg har fået af Marie Louise.",
        name: "Michael Sonnested",
        role: "Global Product Manager"
      },
      others: [
        {
          quote: "Perfekt sparringspartner til opstart som selvstændig — skabte overblik, fremdrift og idéer.",
          fullQuote: "Jeg meldte fra dag 1, at mit behov handler om at starte som selvstændig og ikke søge job. Marie Louise var perfekt til at gå ind i netop det behov som sparringspartner med relevant viden i at starte som selvstændig. Jeg har været rigtig glad for den løbende sparring. Kunne se med andre øjne, hvor jeg var langt i processen, og hvad der manglede fremdrift. Marie Louise bidrog med ideer og brainstorm ift. udvikling af virksomhed.",
          name: "Lars Thostrup",
          role: "Coach"
        },
        {
          quote: "She coached at my pace, improvised when needed, and challenged me — I grew from it. Super happy with the experience.",
          fullQuote: "I really feel that Marie Louise saw me and my situation. She didn't just go through a routine but took the coaching in my tempo, was able to improvise and switch topics if that was needed in a session. and she challenged me, which was not easy in the moment but helped me grow along the way , super happy with the whole coaching experience.",
          name: "Ilary Ranalli",
          role: "Senior Manager, Supply Chain Decarbonisation"
        },
        {
          quote: "Følte mig set, forstået og udfordret på den rigtige måde — vil til enhver tid anbefale.",
          fullQuote: "Jeg vil virkelig gerne takke dig for din støtte, inspiration og gode råd under mit forløb! Jeg havde hele tiden følelsen af at blive set og forstået, og udfordret på den helt rigtige måde. Synes jeg var heldig som fik dig som rådgiver, og ville til en hver tid anbefale dig!",
          name: "Eva Englund",
          role: "Senior Advisor"
        },
        {
          quote: "Professionel, kompetent, nærværende og forstående — jeg følte mig tryg og hørt.",
          fullQuote: "Marie Louise har været en fantastisk coach og rådgiver, intet mindre. Professionel, kompetent, nærværende og forstående. Har følt mig meget tryg og hørt i mit forløb.",
          name: "Kristina Thaulow Pedersen",
          role: "Teknisk Manager"
        },
        {
          quote: "Målrettet rådgivning og spørgsmål, der gjorde valget mere bevidst — inspirerende og givende.",
          fullQuote: "Marie Louises rådgivning i mit forløb har været meget målrettet og hendes spørgsmål hjalp mig til at træffe et mere bevist valg. Fantastisk rådgivning, meget inspirerende og givende! Herfra de allerbedste anbefalinger.",
          name: "Ekatarina Christensen",
          role: "Head of Tech Governance"
        }
      ]
    },
    {
      id: 3,
      title: "Gruppe 3: Personlig udvikling og støtte",
      featured: {
        quote: "Allerede fra det første møde følte jeg mig rummet... Jeg gik derfra med empowerment og nye idéer – og jeg fik jobbet!",
        fullQuote: "Allerede fra det første møde med Marie Louise følte jeg mig rummet, forstået og mødt i den situation jeg var i. Efter hver eneste samtale gik jeg derfra med en følelse af empowerment og nye anderledes ideer til min tilgang som jobsøgende. Marie Louise er ikke længere væk end en SMS og er der når jeg har haft brug for det. Det har været en fantastisk dejlig sikkerhed at have, især da jeg skulle til jobsamtale (med meget kort frist) nåede vi at finde tid til et møde, så jeg kunne blive primet og klar. Jeg fik jobbet (hurrrraaa) - takket være Marie Louise og hendes input, roen hun satte i mig og troen på mig! TAK, Marie Louise! :o)",
        name: "Jeanne Jensen",
        role: "Front Desk Manager"
      },
      others: [
        {
          quote: "Rykkede mig på flere niveauer for at komme godt videre — meget taknemmelig for støtten.",
          fullQuote: "Marie Louise har som min rådgiver og coach formået at rykke mig på flere niveauer ift. at komme godt videre. Jeg er utrolig glad og taknemmelig for den støtte jeg har fået. Jeg kan kun give Marie Louise de bedste anbefalinger.",
          name: "Jari Due Jessen",
          role: "IT og Digitaliseringschef"
        },
        {
          quote: "Hun så mig og min situation — tog coachingen i mit tempo, improviserede og udfordrede. Jeg voksede af det.",
          fullQuote: "Jeg føler virkelig, at Marie Louise så mig og min situation. Hun gennemgik ikke bare en rutine, men tog coachingen i mit tempo, var i stand til at improvisere og skifte emne, hvis det var nødvendigt i en session. Og hun udfordrede mig, hvilket ikke var let i øjeblikket, men hjalp mig med at vokse undervejs, supertilfreds med hele coachingoplevelsen. Jeg kan varmt anbefale Marie Louise til dem, der har behov for en dygtig coach.",
          name: "Anne Brusberg",
          role: "Contracts and Proposals Director"
        },
        {
          quote: "Above and beyond — løftede både jobsøgning og selvværd. Kunne ikke ønske mig en bedre coach.",
          fullQuote: "Marie Louise gik above and beyond for at hjælpe mig videre ind i en god stilling. Marie Louise hjalp mig ikke kun med at finde jobs og forberede mig til samtaler, hun hjalp mig også med at løfte mit selvværd. Jeg har haft nogle helt utroligt givende samtaler, og hendes engagement i min fremtid har været tydelig. Jeg kunne ikke have ønsket mig en bedre coach til mit forløb. Jeg behøvede ikke andet.",
          name: "Asta Meehan",
          role: "Technical Sales Representative"
        },
        {
          quote: "Udgangspunkt i mig og hvor jeg var — dygtig coach med situationsfornemmelse, der tydeliggjorde mine styrker.",
          fullQuote: "Forløbet med Marie Louise har været medudgangspunkt i mig, og hvor jeg var mit liv, uden at 'pådutte' mig hendes egne holdninger. Hun er en rigtig dygtig coach - både som jobcoach, men har også en situationsfornemmelse i forhold til, hvor man er privat og psykisk, der forstod mig og bakkede mig op, når det var svært og samtidig gjorde mig opmærksom på mine styrker.",
          name: "Merete Friis",
          role: "Erhvervsdirektør"
        },
        {
          quote: "Trygt rum og taktiske tilgange til vellykket jobsøgning — fleksibel og velforberedt.",
          fullQuote: "Marie Louise er en meget erfaren coach og vejleder, der meget hurtigt satte sig ind i mine kompetencer og forbedringsområder. Hun skabte et trygt rum, hvor jeg kunne åbne op og diskutere mine overvejelser åbent. Hun gav vejledning og tryghed samt taktiske tilgange til en vellykket jobsøgning. Generelt har hun gennem hele vores interaktion været fleksibel, velforberedt og velinformeret om arbejdsmarkedet, hvilket er vigtigt, når man søger specialiserede stillinger.",
          name: "Dimitra Maria Anastasiadou",
          role: "Project Manager"
        }
      ]
    },
    {
      id: 4,
      title: "Gruppe 4: Lederskab og udvikling",
      featured: {
        quote: "Forløbet med Marie Louise har givet mig større indsigt i mine styrker og mod til at gå nye veje.",
        fullQuote: "Forløbet med Marie Louise har givet mig større indsigt i mine styrker og mod til at gå nye veje. Hun har hjulpet mig med at se mine kompetencer i et nyt lys og givet mig tilliden til at træffe de valg, der passer til mig.",
        name: "Lars Birk",
        role: "Teamleder"
      },
      others: [
        {
          quote: "Hun formår at stille de spørgsmål, der gør en reel forskel — og som skaber varig udvikling.",
          fullQuote: "Hun formår at stille de spørgsmål, der gør en reel forskel – og som skaber varig udvikling. Marie Louise har en unik evne til at trænge til kernen af udfordringer og hjælpe med at finde løsninger, der holder i længden.",
          name: "Mette Holm",
          role: "HR Partner"
        },
        {
          quote: "Jeg blev mødt med forståelse og ægte engagement — det har været uvurderligt for min udvikling.",
          fullQuote: "Jeg blev mødt med forståelse og ægte engagement – det har været uvurderligt for min udvikling. Marie Louise forstår kompleksiteten i moderne ledelse og giver støtte, der virkelig gør en forskel.",
          name: "Jonas Bech",
          role: "Projektleder"
        },
        {
          quote: "Kæmpe engagement … samtalerne var et boost. Hun så mit potentiale og investerede tid i mig.",
          fullQuote: "Har oplevet et stort engagement fra Marie Louise. De personlige samtaler føltes som et kæmpe boost, hvor jeg oplevede, at Marie Louise så mit potentiale og investererede tid i mig.",
          name: "Sarah Lakhani",
          role: "Senior Compliance Officer – Control Testing"
        },
        {
          quote: "Ærlig og direkte sparring — afgørende for at bekræfte retning og komme på rette vej.",
          fullQuote: "Marie Louise har bidraget med ærlig og direkte sparring som har været afgørende for at bekræfte mig i min situation, men også at få mig på rette vej, hvis jeg var på vej i en ikke hensigtsmæssig retning. Dygtig sparringspartner!",
          name: "Morten Schou",
          role: "Software Consultant"
        },
        {
          quote: "Nærvær og faglig dygtighed gjorde en stor forskel — værdifulde redskaber. Varm anbefaling.",
          fullQuote: "I mit forløb har Marie Louises nærvær og faglige dygtighed gjort en stor forskel for mig. Hun har været en fantastisk sparringspartner, som både har lyttet og givet mig værdifulde redskaber. Jeg kan kun varmt anbefale hende.",
          name: "Anette Møller",
          role: "Privatkundedirektør"
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
        },
        {
          quote: "Imødekommende, forstående og kompetent — forløbet blev tilpasset min situation. Allerbedste anbefalinger.",
          fullQuote: "Jeg har været heldig med Marie Louise - en meget imødekommende, forstående og kompetent rådgiver. Der var god kemi og dermed tillid fra første møde. Marie Louise har været rigtig god til at tilpasse forløbet til min aktuelle situation. Marie Louise får mine allerbedste anbefalinger",
          name: "Jane Christensen",
          role: "Senior Coordintor"
        },
        {
          quote: "Stor forståelse for situation, strategi og ønsker — gav givende feedback og tips.",
          fullQuote: "Marie Louise er en dygtig og erfaren coach og havde stor forståelse for situationen, strategi, ønskemål og gav gode og givende feedback og tips.",
          name: "Magnus Green",
          role: "Senior Analytical Professional"
        },
        {
          quote: "Virkelig hjulpet mig godt videre — jeg følte mig grebet gennem hele forløbet.",
          fullQuote: "Marie Louise har været helt fantastisk og har virkelig hjulpet mig så godt videre. Jeg er så lykkelig for at det netop har været hende som jeg har været min coach og tør næsten ikke forestille mig hvis jeg havde fået en anden end hende. Det har været et virkelig godt forløb og jeg føler mig virkelig grebet.",
          name: "Marie Kjær",
          role: "Specialkonsulent DTU"
        },
        {
          quote: "Altid interesseret i mig og min situation — udfordrede mig til nye tanker. Stor værdi i sparringen.",
          fullQuote: "Jeg har været meget tilfreds med Marie Louise. Han har altid virket interesseret i mig og min situation. Hun har også formået at udfordre mig, så jeg kunne tænke nye og andre tanker om mig selv. Jeg har sat stor pris på Marie Louise som rådgiver og sparringspartner og vores samtaler.",
          name: "Stine Lindhardt",
          role: "Operation and Sales Coordinator"
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
        },
        {
          quote: "Very attentive and easy to talk to — excellent advice, both professional and personal.",
          fullQuote: "Marie Louise was very attentive and so easy to have conversations with. She gave excellent advice, was both professional and personal and went out of her way to make things comfortable and positive.",
          name: "Dean Just",
          role: "Principal Laboratory Technician"
        },
        {
          quote: "Styrkede min selvtillid og gav præcis den opbakning, jeg havde brug for … hun læste mit behov.",
          fullQuote: "Marie Louise har været en fantastisk hjælp lige fra start til slut, hun fik styrket min selvtillid og gav mig lige de råd og opbakning, som jeg havde brug for 👍😊 Hun er bare fantastisk. Det bedste ved forløbet var, at det foregik efter mine behov og Marie Louise helt kunne 'læse' hvad det var, som jeg havde behov for.",
          name: "Mette Keil Sørensen",
          role: "Kundeservice, Receptionist og Frontoffice"
        },
        {
          quote: "Direkte og opmuntrende — ærlig, fleksibel og meget kompetent rådgivning.",
          fullQuote: "Marie Louises meget direkte og opmuntrende facon. Hun har igennem hele forløbet været meget ærlig, udvist fleksibilitet og hun er meget kompetent i hendes rådgivning.",
          name: "Anders Munch Marstrand",
          role: "AML & Fraud Analyst"
        },
        {
          quote: "Personlig dialog med fokus på min situation — stor støtte som sparringspartner og coach.",
          fullQuote: "Jeg oplevede i forløbet at have en rigtig god og personlig dialog med fokus på min situation, og oplevede Marie Louise som en stor støtte som sparringspartner og coach.",
          name: "Birgitte Andersen",
          role: "Director of Products and Optimization"
        }
      ]
    },
    {
      id: 7,
      title: "Gruppe 7: Samtaler og kommunikation",
      featured: {
        quote: "Vi fandt hurtigt kemien — Marie Louise har været meget værdifuld i min proces.",
        fullQuote: "Jeg oplevede, at vi hurtigt fandt kemien, og det var supergodt. Marie Louise har været meget værdifuld i min proces.",
        name: "Annette Bastidas",
        role: "Senior Analytiker"
      },
      others: [
        {
          quote: "Samtaler, der hjalp med at eliminere gamle barrierer — tak for det.",
          fullQuote: "Marie Louise og jeg har haft nogle virkelig gode samtaler, hvor hun har evnet at belyse og eliminerer nogle af de 'lig' i lasten jeg har båret med mig gennem mange år. Marie Louise tak for det.",
          name: "Bo Rejnholt Jensen",
          role: "Head of Consulting and Service"
        },
        {
          quote: "Professionel, personlig og engageret — gav et stort boost og tydeliggjorde mine værdier og kompetencer.",
          fullQuote: "Marie Louise har været meget professionel, personlig og engageret. Hun har været et fantastisk match til mig, og jeg har så meget jeg tager med mig videre fra Marie Louise. Det har været et super godt forløb og det har givet mig et boost i mit arbejdsliv, men også i den grad i forhold til sparring og fremhævelse af mine værdier og kompetencer.",
          name: "Hanne Rytter Arnsted",
          role: "Driftskoordinator"
        },
        {
          quote: "Tilpasset forløb uden kvalitetstab — skarpere på kompetencer og stærke jobsøgningsværktøjer.",
          fullQuote: "Hele forløbet har været tilpasset og tilrettelagt efter mine behov uden, at der er gået på kompromis med kvaliteten af forløbet. Marie Louise har hjulpet mig med at blive skarpere på mine kompetencer og samtidig givet mig en masse værktøjer, som har hjulpet mig - meget - til at gribe jobsøgningsprocessen an.",
          name: "Mikkel Brilner Lund",
          role: "Idrætskonsulent"
        },
        {
          quote: "Stor hjælp i en hektisk overgang — så behov og skubbede venligt i den rigtige retning.",
          fullQuote: "Marie Louise har været til stor hjælp i en hektisk overgang. Hun hjalp med støtte og gode råd i hele perioden og har været god til, at se hvad der var behov for og venligt skubbe mig i den rigtige retning.",
          name: "Anja Werborg",
          role: "Key Account Manager"
        },
        {
          quote: "Høj tilgængelighed og tilpasning — hjalp mig til ro og proaktiv, rationel tænkning.",
          fullQuote: "I mit forløb med Marie Louise oplevede jeg super god tilgængelighed, forberedelse og relevant tilpasning. Det var fedt, at du bare gik ind i min egen tilgang til det (som var fuld gas), men samtidigt hjalp med at trække tempoet lidt ud igen, så jeg kunne følge med. Det var ultra værdifuldt i forhold til at få ro på, og tænke rationelt (og pro-aktivt) i den givne situation. Marie Louise har været en uundværlig sparringspartner at lufte tingene med, så jeg er blevet helt bevidst om min situation.",
          name: "Frederik von Sperling",
          role: "Organisationskonsulent"
        }
      ]
    },
    {
      id: 8,
      title: "Gruppe 8: Støtte og motivation",
      featured: {
        quote: "Tak for coachingen, som hjalp mig på de svære dage.",
        fullQuote: "Tak for coaching, som har hjulpet mig på de mere svære dage.",
        name: "Vicki Kaare Aamand",
        role: "Senior Marketing Project Manager"
      },
      others: [
        {
          quote: "Var der 100% for mig — mine bedste anbefalinger.",
          fullQuote: "Marie Louise har som coach og rådgiver været der 100% for mig. Jeg kan kun give hende mine bedste anbefalinger.",
          name: "Helle Østerby Teilmann",
          role: "Customer Engagement Specialist"
        },
        {
          quote: "Følte mig set og hørt — identificerede mine behov og var altid på sidelinjen.",
          fullQuote: "Jeg har følt mig set og hørt. Marie Louise var god til at identificere, hvor jeg var og mine behov og var altid på sidelinjen.",
          name: "Susan Skovgård",
          role: "Business Analyst"
        },
        {
          quote: "Man føler sig velkommen og taget alvorligt — givende og inspirerende samtaler.",
          fullQuote: "I et forløb hos Marie Louise føler man sig velkommen og bliver taget alvorligt. Mine samtaler med Marie Louise har været givende og inspirerende. Marie Louise er en dygtig coach. Herfra mine bedste anbefalinger.",
          name: "Anders Saron Dalsgaard",
          role: "Senior Manager, Enterprise Partnerships"
        },
        {
          quote: "Gik fra møder sprængfyldt med idéer, energi og selvtillid — stærke værktøjer til mit videre forløb.",
          fullQuote: "Jeg oplever, at Marie Louise har formidlet en viden til mig og givet mig værktøjer til mit videre forløb, som har været helt fantastisk. Jeg har sat stor pris på de personlige samtaler med Marie Louise, hvor jeg gik fra møder sprængfyldt med idéer, energi og selvtillid.",
          name: "Connie Svendsen",
          role: "HSE- partner"
        },
        {
          quote: "Felt seen, heard and understood — she individualized her communication to my program.",
          fullQuote: "Very happy with my coach/mentor/therapist Marie-Louise. She made me feel seen, heard and understood and was individulizing her communications to my program.",
          name: "Josefin Ittichai",
          role: "Head of Digital & Data Management"
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

            {/* Other testimonials in group - only show first 2 by default */}
            <div className="grid md:grid-cols-2 gap-6">
              {group.others.slice(0, expandedGroup === group.id ? group.others.length : 2).map((testimonial, index) => (
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
            {group.others.length > 2 && (
              <div className="text-center mt-8">
                <button 
                  onClick={() => setExpandedGroup(expandedGroup === group.id ? null : group.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded transition"
                >
                  {expandedGroup === group.id ? 'Vis færre referencer' : 'Find flere referencer her'}
                </button>
              </div>
            )}
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
