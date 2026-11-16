import { withPrefix } from "gatsby"
import React from "react"

import { PageShell, Section, Buttons, Button, Contact } from "./blocks"
import not_found from "../images/404_opt.gif"

const Layout404 = () => (
  <PageShell>
    <Section tone="light">
      <h1 className="headlines" style={{ paddingTop: 120, textAlign: "left", marginBottom: 24 }}>Stránka sa nenašla</h1>
      <img src={not_found} alt="" style={{ maxWidth: 500 }} />
      <Buttons>
        <Button href={withPrefix("/")}>Späť na úvod →</Button>
      </Buttons>
    </Section>
    <Contact />
  </PageShell>
)

export default Layout404
