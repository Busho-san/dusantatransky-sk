// Štruktúrované dáta (JSON-LD) pre vyhľadávače a AI asistentov.
// Osoba má rovnaké @id ako na dusantatransky.com, aby ju Google spojil do jednej entity.
const SK = "https://www.dusantatransky.sk"
export const PERSON_ID = "https://dusantatransky.com/#person"

export const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Dušan Tatranský",
  honorificPrefix: "Mgr.",
  honorificSuffix: "MBA",
  url: "https://dusantatransky.com/",
  image: SK + "/dusan-tatransky.jpg",
  jobTitle: "Creative & Strategy Director",
  description:
    "Creative & Strategy Director v Promiseo a lektor AI. Viac ako 15 rokov v marketingu, vyše 100 značiek. Vedie praktické AI workshopy pre firmy na Slovensku.",
  worksFor: {
    "@type": "Organization",
    name: "Promiseo",
    url: "https://www.promiseo.sk",
  },
  memberOf: {
    "@type": "Organization",
    name: "ADMA",
    url: "https://adma.sk",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Univerzita Komenského v Bratislave",
    url: "https://uniba.sk",
  },
  knowsAbout: [
    "Marketing",
    "Kreativita",
    "Umelá inteligencia",
    "AI v marketingu",
    "Generatívna AI vo firmách",
    "Stratégia značky",
    "Marketingová komunikácia",
  ],
  sameAs: [
    SK + "/",
    "https://www.linkedin.com/in/dusantatransky/",
    "https://marketingcircus.substack.com",
  ],
}

export const website = {
  "@type": "WebSite",
  "@id": SK + "/#website",
  url: SK + "/",
  name: "Dušan Tatranský",
  inLanguage: "sk",
  publisher: { "@id": PERSON_ID },
}

export const services = [
  {
    "@type": "Service",
    "@id": SK + "/workshopy#ai-v-praci",
    name: "AI v práci",
    serviceType: "Firemný AI workshop",
    description:
      "Trojhodinový praktický workshop pre 4–10 ľudí z akéhokoľvek oddelenia: rešerše, e-maily, prezentácie, reporty, brainstorming, vlastný hlas na LinkedIne a bezpečné používanie AI.",
    provider: { "@id": PERSON_ID },
    areaServed: { "@type": "Country", name: "Slovensko" },
    availableLanguage: "sk",
    url: SK + "/workshopy#ai-v-praci",
  },
  {
    "@type": "Service",
    "@id": SK + "/workshopy#ai-pre-marketing",
    name: "AI pre marketing",
    serviceType: "AI workshop pre marketingové tímy",
    description:
      "Štvorhodinový workshop pre 3–8 ľudí z interného marketingového tímu: jeden reálny brief cez rešerš, stratégiu, nápady, texty a vizuály až po prototyp kampane.",
    provider: { "@id": PERSON_ID },
    areaServed: { "@type": "Country", name: "Slovensko" },
    availableLanguage: "sk",
    url: SK + "/workshopy#ai-pre-marketing",
  },
]

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    website,
    {
      "@type": "WebPage",
      "@id": SK + "/#webpage",
      url: SK + "/",
      inLanguage: "sk",
      name: "Dušan Tatranský | Marketing, kreativita a AI školenia pre firmy",
      isPartOf: { "@id": SK + "/#website" },
      about: { "@id": PERSON_ID },
    },
    person,
    ...services,
  ],
}

export const workshopsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    website,
    {
      "@type": "WebPage",
      "@id": SK + "/workshopy#webpage",
      url: SK + "/workshopy",
      inLanguage: "sk",
      name: "AI školenia a workshopy pre firmy | Dušan Tatranský",
      isPartOf: { "@id": SK + "/#website" },
      about: services.map(s => ({ "@id": s["@id"] })),
      breadcrumb: { "@id": SK + "/workshopy#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": SK + "/workshopy#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Dušan Tatranský", item: SK + "/" },
        { "@type": "ListItem", position: 2, name: "AI workshopy pre firmy", item: SK + "/workshopy" },
      ],
    },
    person,
    ...services,
  ],
}
