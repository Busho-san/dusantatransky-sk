import React from "react"

import Layout from "../components/layoutWorkshops"
import SEO from "../components/seo"
import { LINKS } from "../data/links"
import { workshopsJsonLd } from "../data/schema"

import "../styles/global.css"

const WorkshopyPage = () => (
  <>
    <SEO
      title="AI školenia a workshopy pre firmy | Dušan Tatranský"
      description="Praktické AI workshopy po slovensky pre celé tímy aj marketingové oddelenia. AI v práci a AI pre marketing."
      path="/workshopy"
      enUrl={LINKS.enWorkshops}
      jsonLd={workshopsJsonLd}
    />
    <Layout />
  </>
)

export default WorkshopyPage
