import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/global.css"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dusantatransky.sk/#webpage",
      url: "https://www.dusantatransky.sk/",
      inLanguage: "sk",
      name: "Dušan Tatranský | Marketing, kreativita a AI školenia pre firmy",
      about: { "@id": "https://dusantatransky.com/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://dusantatransky.com/#person",
      name: "Dušan Tatranský",
      url: "https://dusantatransky.com/",
      jobTitle: "Creative & Strategy Director",
      worksFor: {
        "@type": "Organization",
        name: "Promiseo",
        url: "https://promiseo.com",
      },
      sameAs: [
        "https://www.dusantatransky.sk/",
        "https://www.linkedin.com/in/dusantatransky/",
        "https://marketingcircus.substack.com",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.dusantatransky.sk/workshopy#ai-v-praci",
      name: "AI v práci",
      serviceType: "Firemný AI workshop",
      provider: { "@id": "https://dusantatransky.com/#person" },
      areaServed: "Slovakia",
      availableLanguage: "sk",
      url: "https://www.dusantatransky.sk/workshopy#ai-v-praci",
    },
    {
      "@type": "Service",
      "@id": "https://www.dusantatransky.sk/workshopy#ai-pre-marketing",
      name: "AI pre marketingové tímy",
      serviceType: "AI workshop pre marketingové tímy",
      provider: { "@id": "https://dusantatransky.com/#person" },
      areaServed: "Slovakia",
      availableLanguage: "sk",
      url: "https://www.dusantatransky.sk/workshopy#ai-pre-marketing",
    },
  ],
}

const IndexPage = () => (
  <>
    <SEO
      title="Dušan Tatranský | Marketing, kreativita a AI školenia pre firmy"
      description="Creative & Strategy Director v Promiseo, 15+ rokov v marketingu. Praktické AI workshopy pre firmy a marketingové tímy na Slovensku, u vás vo firme alebo online."
      path="/"
      jsonLd={jsonLd}
    />
    <Layout />
  </>
)

export default IndexPage
