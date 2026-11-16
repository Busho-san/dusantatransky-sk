import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { homeJsonLd } from "../data/schema"

import "../styles/global.css"


const IndexPage = () => (
  <>
    <SEO
      title="Dušan Tatranský | Marketing, kreativita a AI školenia pre firmy"
      description="Creative & Strategy Director v Promiseo, 15+ rokov v marketingu. Praktické AI workshopy pre firmy a marketingové tímy na Slovensku, u vás vo firme alebo online."
      path="/"
      jsonLd={homeJsonLd}
    />
    <Layout />
  </>
)

export default IndexPage
