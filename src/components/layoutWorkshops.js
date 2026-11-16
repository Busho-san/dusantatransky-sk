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

import workshopy_portret from "../images/workshopy_portret.jpg"
import one from "../images/1.svg"
import two from "../images/2.svg"
import three from "../images/3.svg"

const Intro = styled.header`
  background: var(--white);
  padding: 170px 0 64px;
  .inner {
    width: 900px;
    margin: 0 auto;
  }
  h1.headlines {
    text-align: left;
    font-size: 90px;
    margin-bottom: 24px;
  }
  .lead {
    font-size: 20px;
    line-height: 1.8;
    max-width: 700px;
  }
  @media (max-width: 1000px) {
    padding: 150px 0 48px;
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

const Leader = styled.div`
  display: grid;
  grid-template-columns: 34% 1fr;
  gap: 40px;
  align-items: start;
  img {
    max-height: 520px;
    object-fit: cover;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 24px;
    img {
      max-height: 420px;
      object-position: 50% 20%;
    }
  }
`

const Steps = styled.ol`
  list-style: none;
  li {
    position: relative;
    padding: 14px 0 14px 84px;
    font-size: 22px;
    line-height: 1.4;
    min-height: 84px;
    &:before {
      position: absolute;
      left: 0;
      top: 12px;
      width: 60px;
      height: 60px;
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
      padding-left: 68px;
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
          Prakticky, po slovensky, u vás vo firme alebo online. Vedie ich
          kreatívny riaditeľ, ktorý AI používa každý deň a stále rozmýšľa vlastnou hlavou.
        </p>
        <Buttons>
          <Button href={LINKS.emailWorkshop}>Dohodnúť workshop →</Button>
        </Buttons>
      </div>
    </Intro>

    <Section id="ai-v-praci" tone="dark">
      <Rule>
      <h2 className="outline">AI v práci</h2>
      <h3 className="meta">3 hodiny · 4–10 ľudí · u vás alebo online</h3>
      <BlokRight>
        <p>
          Pre celé tímy: administratíva, obchod, marketing, HR, zákaznícka
          podpora, manažment. Zvyčajne ho objednáva HR, firemné vzdelávanie
          alebo employer branding.
        </p>
        <h3 style={{ marginBottom: 12 }}>Čo si účastníci vyskúšajú:</h3>
        <List>
          <li>
            Rešerš a overovanie faktov s AI a ako spoznať, keď si AI vymýšľa
          </li>
          <li>E-maily, dokumenty, prezentácie a reporty za kratší čas</li>
          <li>
            Brainstorming a riešenie problémov s AI ako sparingpartnerom
          </li>
          <li>
            Vlastný profesionálny hlas na LinkedIne, z ktorého rastú oni aj
            firma
          </li>
          <li>Employer branding, ktorý neznie ako tlačová správa</li>
          <li>Čo do AI nástroja nikdy nevkladať</li>
        </List>
        <p style={{ paddingTop: 12 }}>
          Cvičenia pripravím podľa úloh, ktoré váš tím naozaj rieši.
        </p>
      </BlokRight>
      </Rule>
    </Section>

    <Section id="ai-pre-marketing" tone="light">
      <Rule>
      <h2 className="outline">AI pre marketing</h2>
      <h3 className="meta">4 hodiny · 3–8 ľudí · u vás alebo online</h3>
      <BlokRight>
        <p>
          Pre interné marketingové tímy. Zvyčajne ho objednáva marketingový
          riaditeľ, CMO alebo majiteľ firmy.
        </p>
        <h3 style={{ marginBottom: 12 }}>Jeden reálny brief od začiatku do konca:</h3>
        <List>
          <li>Brief</li>
          <li>Rešerš</li>
          <li>Stratégia</li>
          <li>Nápady</li>
          <li>Hodnotenie</li>
          <li>Texty</li>
          <li>Vizuály a prototypy</li>
          <li>Testovanie</li>
          <li>Postup, ktorý zopakujete</li>
        </List>
        <p style={{ paddingTop: 12 }}>
          Nejde o to, ako používať AI. Ide o to, ako s ňou robiť lepší marketing.
        </p>
        <p>Pre väčšie tímy pripravím rozšírenú verziu.</p>
      </BlokRight>
      </Rule>
    </Section>

    <Section id="ako-to-prebieha" tone="orange">
      <h2>Ako to prebieha</h2>
      <Steps>
        <li className="one">Krátky hovor o vašom tíme a jeho práci.</li>
        <li className="two">Cvičenia prispôsobím vašim reálnym úlohám.</li>
        <li className="three">
          Workshop. Otvorené notebooky, skutočná práca pod mojím vedením.
        </li>
      </Steps>
      <Rule style={{ marginTop: 24 }}>
        <h3>Cena</h3>
        <BlokRight>
          <p>Pilotné ceny platia do februára 2027. Kto skôr napíše, ten skôr vie.</p>
          <Buttons style={{ marginTop: 0 }}>
            <Button href={LINKS.emailWorkshop}>Dohodnite si workshop →</Button>
          </Buttons>
        </BlokRight>
      </Rule>
    </Section>

    <Section id="kto-ho-vedie" tone="light">
      <h2>Kto vedie workshop</h2>
      <Leader>
        <img loading="lazy" src={workshopy_portret} alt="Dušan Tatranský v oranžových okuliaroch" />
        <div>
        <p>
          MBA so špecializáciou na AI mám od roku 2026. S pracovnou skupinou ADMA sme navrhli predmet o AI v marketingovej komunikácii pre Univerzitu Komenského. Na festivale UMELINA sedím v zakladajúcej porote a som odborným garantom kategórie Reklama a branded content.
        </p>
        <UnderLink
          href={LINKS.linkedin}
          target="_blank"
          rel="me noopener noreferrer"
        >
          Celé moje CV na LinkedIne →
        </UnderLink>
        </div>
      </Leader>
    </Section>
    <ProofStrip />
    <Contact />
  </PageShell>
)

export default LayoutWorkshops
