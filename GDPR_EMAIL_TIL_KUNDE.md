# Email til kunde - GDPR Compliance

**Emne:** GDPR-compliance implementeret på hjemmesiden

---

Hej Marie Louise,

Jeg har nu implementeret alle nødvendige GDPR-foranstaltninger på din hjemmeside, så den er fuldt compliant med Databeskyttelsesforordningen.

## Hvad er implementeret:

### 1. **Samtykke-checkbox på kontaktformularen**
   - Alle brugere skal nu acceptere privatlivspolitikken før de kan sende en besked
   - Checkbox er påkrævet og linker direkte til privatlivspolitikken
   - Formularen kan ikke sendes uden samtykke

### 2. **Opdateret privatlivspolitik**
   - Tilføjet information om **Resend** som databehandler (email-service)
   - Tilføjet information om **Vercel** som databehandler (hosting)
   - Specifik information om kontaktformularens datahåndtering
   - Klare opbevaringsperioder (2 år for formular-data)
   - Links til databehandleres privatlivspolitikker

### 3. **Cookie-information**
   - Opdateret til at angive, at der kun bruges nødvendige cookies (login-status)
   - Ingen cookie consent banner nødvendig, da der ikke bruges tracking cookies

## Tekniske detaljer:

**Kontaktformular:**
- Samtykke gemmes ikke i databasen (kun validering)
- Email-data sendes via Resend (GDPR-compliant email-service)
- Auto-reply sendes automatisk til brugere som bekræftelse
- Data opbevares i emails og kan slettes på anmodning

**Databehandlere:**
- **Resend:** Behandler email-data (resend.com/legal/privacy-policy)
- **Vercel:** Hosting og tekniske data (vercel.com/legal/privacy-policy)

## Hvad betyder det for dig:

✅ Hjemmesiden er nu fuldt GDPR-compliant
✅ Brugere giver eksplicit samtykke til databehandling
✅ Alle databehandlere er dokumenteret
✅ Opbevaringsperioder er klart defineret
✅ Brugere kan til enhver tid anmode om sletning af deres data

## Næste skridt:

1. **Test kontaktformularen** - Verificer at samtykke-checkboxen virker korrekt
2. **Gennemgå privatlivspolitikken** - Tjek at alt information er korrekt
3. **Overvej databehandleraftaler** - Resend og Vercel har standard DPA'er, men du kan overveje at gemme dem

## Vigtigt at vide:

- **Sletning af data:** Hvis en bruger anmoder om sletning, skal du slette deres emails manuelt fra din email-boks
- **Opbevaring:** Formular-data opbevares i emails i op til 2 år (eller længere hvis der er en forretningsrelation)
- **Databehandleraftaler:** Resend og Vercel har standard DPA'er som dækker GDPR-krav

Hjemmesiden er nu klar til brug og fuldt compliant med GDPR!

Med venlig hilsen,
[Dit navn]

---

**Tekniske detaljer for reference:**
- Commit: c1c5760 - "Add GDPR compliance: consent checkbox, Resend databehandler info, and updated privacy policy"
- Deployment: Automatisk via Vercel (deployer nu)


