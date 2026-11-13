// Podstránka /workshopy. Rovnaké bloky ako homepage,
// číslovaný postup preberá ikonky 1–3 zo stránky Služby.
import React from "react"
import styled from "styled-components"

import {
  PageShell,
  Section,
  BlokRight,
  Rule,
  Buttons,
  Button,
  UnderLink,
  ProofStrip,
  Contact,
} from "./blocks"
import { LINKS } from "../data/links"

import dusanstvo_sluzby_2 from "../images/dusanstvo_sluzby_2.jpg"
import one from "../images/1.svg"
import two from "../images/2.svg"
import three from "../images/3.svg"

const Intro = styled.header`
  background: var(--white);
  padding: 220px 0 120px;
  .inner {
    width: 900px;
    margin: 0 auto;
  }
  h1.headlines {
    text-align: left;
    font-size: 90px;
    margin-bottom: 40px;
  }
  .lead {
    font-size: 20px;
    line-height: 1.8;
    max-width: 700px;
  }
  @media (max-width: 1000px) {
    padding: 180px 0 80px;
    .inner {
      width: 100%;
      padding: 0 25px;
    }
    h1.headlines {
      font-size: 14vw;
    }
  }
`

const List = styled.ul`
  list-style: none;
  li {
    position: relative;
    padding: 0 0 14px 28px;
    line-height: 1.8;
    &:before {
      content: "·";
      position: absolute;
      left: 0;
      color: var(--orange);
      font-weight: 900;
    }
  }
`

const Chain = styled.p`
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  line-height: 2.2 !important;
`

const Steps = styled.ol`
  list-style: none;
  li {
    position: relative;
    padding: 30px 0 30px 120px;
    font-size: 24px;
    line-height: 1.4;
    min-height: 140px;
    &:before {
      position: absolute;
      left: 0;
      top: 30px;
      width: 80px;
      height: 80px;
      content: "";
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.one:before {
      background-image: url(${one});
    }
    &.two:before {
      background-image: url(${two});
    }
    &.three:before {
      background-image: url(${three});
    }
  }
  @media (max-width: 600px) {
    li {
      padding-left: 80px;
      font-size: 18px;
      &:before {
        width: 56px;
        height: 56px;
      }
    }
  }
`

const LayoutWorkshops = () => (
  <PageShell>
    <Intro data-tone="light">
      <div className="inner">
        <h1 className="headlines">AI workshopy pre firmy</h1>
        <p className="lead">
          Prakticky, po slovensky, u vás vo firme alebo online. Vedie ich
          kreatívny riaditeľ, ktorý AI používa každý deň a stále rozmýšľa sám.
        </p>
        <Buttons>
          <Button href={LINKS.emailWorkshop}>Napíšte mi o workshope →</Button>
        </Buttons>
      </div>
    </Intro>

    <Section id="ai-v-praci" tone="dark">
      <h2 className="outline">AI v práci</h2>
      <p className="meta" style={{ fontWeight: 900, letterSpacing: 3, textTransform: "uppercase", fontSize: 14, color: "var(--orange)" }}>
        3 hodiny · 4–10 ľudí · u vás alebo online
      </p>
      <BlokRight>
        <p>
          Pre celé tímy: administratíva, obchod, marketing, HR, zákaznícka
          podpora, manažment. Zvyčajne ho objednáva HR, firemné vzdelávanie
          alebo employer branding.
        </p>
        <h3 style={{ marginBottom: 20 }}>Čo si účastníci vyskúšajú:</h3>
        <List>
          <li>
            Rešerš a overovanie faktov s AI, a ako spoznať, keď si AI vymýšľa
          </li>
          <li>E-maily, dokumenty, prezentácie a reporty za kratší čas</li>
          <li>
            Brainstorming a riešenie problémov s AI ako sparing partnerom
          </li>
          <li>
            Vlastný profesionálny hlas na LinkedIne, z ktorého rastú oni aj
            firma
          </li>
          <li>Employer branding, ktorý neznie ako tlačová správa</li>
          <li>Čo do AI nástroja nikdy nevkladať</li>
        </List>
        <p style={{ paddingTop: 20 }}>
          Cvičenia pripravím podľa úloh, ktoré váš tím naozaj robí.
        </p>
      </BlokRight>
    </Section>

    <Section id="ai-pre-marketing" tone="light">
      <h2 className="outline">AI pre marketingové tímy</h2>
      <p style={{ fontWeight: 900, letterSpacing: 3, textTransform: "uppercase", fontSize: 14, color: "var(--orange)" }}>
        4 hodiny · 3–8 ľudí · u vás alebo online
      </p>
      <BlokRight>
        <p>
          Pre interné marketingové tímy. Zvyčajne ho objednáva marketingový
          riaditeľ, CMO alebo majiteľ firmy.
        </p>
        <h3 style={{ marginBottom: 20 }}>Jeden reálny brief od začiatku do konca:</h3>
        <Chain>
          Brief · Rešerš · Stratégia · Nápady · Hodnotenie · Texty · Vizuály a
          prototypy · Testovanie · Postup, ktorý zopakujete
        </Chain>
        <p style={{ paddingTop: 20 }}>
          Neučím len používať AI. Učím používať AI na lepší marketing.
        </p>
        <p>Pre väčšie tímy pripravím rozšírenú verziu.</p>
      </BlokRight>
    </Section>

    <Section id="ako-to-prebieha" tone="orange">
      <h2>Ako to prebieha</h2>
      <Steps>
        <li className="one">Krátky hovor o vašom tíme a jeho práci.</li>
        <li className="two">Cvičenia prispôsobím vašim reálnym úlohám.</li>
        <li className="three">
          Workshop. Otvorené notebooky, skutočná práca na stole.
        </li>
      </Steps>
      <Rule style={{ marginTop: 40 }}>
        <h3>Cena</h3>
        <BlokRight>
          <p>Pilotné ceny do februára 2027. Napíšte mi.</p>
          <Buttons style={{ marginTop: 0 }}>
            <Button href={LINKS.emailWorkshop}>Napíšte mi o workshope →</Button>
          </Buttons>
        </BlokRight>
      </Rule>
    </Section>

    <Section id="kto-ho-vedie" tone="light">
      <h2>Kto ho vedie</h2>
      <div style={{ margin: "40px 0" }}>
        <img src={dusanstvo_sluzby_2} alt="Dušan Tatranský" />
      </div>
      <BlokRight>
        <p>
          V roku 2026 som dokončil MBA v špecializácii Mastery in AI (Edu
          Effective). V rámci pracovnej skupiny ADMA som pomáhal navrhnúť
          vysokoškolský predmet o AI v marketingovej komunikácii na Univerzite
          Komenského v Bratislave.
        </p>
        <UnderLink
          href={LINKS.linkedin}
          target="_blank"
          rel="me noopener noreferrer"
        >
          Celá moja práca na LinkedIne →
        </UnderLink>
      </BlokRight>
    </Section>
    <ProofStrip />
    <Contact />
  </PageShell>
)

export default LayoutWorkshops
