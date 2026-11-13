import React from "react"

import Layout from "../components/layout404"
import SEO from "../components/seo"

import "../styles/global.css"

const NotFoundPage = () => (
  <>
    <SEO title="Stránka sa nenašla | Dušan Tatranský" path="/404" noindex />
    <Layout />
  </>
)

export default NotFoundPage
