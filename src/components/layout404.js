import React from "react"

import { PageShell, Section, Buttons, Button, Contact } from "./blocks"
import not_found from "../images/404_opt.gif"

const Layout404 = () => (
  <PageShell>
    <Section tone="light">
      <h2 style={{ paddingTop: 120 }}>Ooops! Stránka sa nenašla</h2>
      <img src={not_found} alt="" style={{ maxWidth: 500 }} />
      <Buttons>
        <Button href="/">Späť na úvod →</Button>
      </Buttons>
    </Section>
    <Contact />
  </PageShell>
)

export default Layout404
