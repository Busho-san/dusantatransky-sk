// Homepage: hero + sekcie. Hero preberá pôvodný úvod (avatar, glitch fotka,
// zvislé meno), sekcie používajú bloky z blocks.js.
import React from "react"
import styled from "styled-components"

import GlitchImage from "./glitchImage"
import { LinkedInIcon } from "./burger"
import {
  PageShell,
  Section,
  BlokRight,
  Rule,
  Tag,
  Buttons,
  Button,
  UnderLink,
  ProofStrip,
  Contact,
} from "./blocks"
import { LINKS } from "../data/links"
import upcoming from "../data/upcoming.json"

import dusanstvo_landing from "../images/dusanstvo_landing.jpg"
import dusanstvo_sluzby from "../images/dusanstvo_sluzby.jpg"
import dusanstvo_omne from "../images/dusanstvo_omne.jpg"

/* ---------- hero (z pôvodného layout.js) ---------- */

const WelcomeWrapper = styled.header`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  align-items: center;
  background: var(--white);
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    min-height: 0;
  }
`

const HeroText = styled.div`
  position: relative;
  z-index: 3;
  width: 50%;
  padding: 200px 50px 120px 260px;
  .eyebrow {
    margin-bottom: 30px;
  }
  h1.headlines {
    text-align: left;
    font-size: 90px;
    margin-bottom: 40px;
  }
  .lead {
    font-size: 18px;
    line-height: 1.8;
    max-width: 560px;
  }
  .roles {
    margin-top: 24px;
    font-weight: 900;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1.9;
    max-width: 560px;
  }
  @media (min-width: 1600px) {
    h1.headlines {
      font-size: 130px;
    }
  }
  @media (max-width: 1300px) {
    padding-left: 120px;
    h1.headlines {
      font-size: 72px;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    padding: 180px 25px 60px;
    h1.headlines {
      font-size: 15vw;
    }
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  width: 50%;
  left: 50%;
  animation: slide_in 0.3s ease-out;
  overflow: hidden;
  @keyframes slide_in {
    0% {
      left: 100%;
    }
    100% {
      left: 50%;
    }
  }
  @media (max-width: 800px) {
    position: relative;
    left: 0;
    width: 100%;
    height: 440px;
    animation: none;
  }
`

const Hero = () => (
  <WelcomeWrapper>
    <p className="name" aria-hidden="true" style={{ position: "absolute" }}>
      Dušan Tatranský
    </p>
    <HeroText>
      <h3 className="eyebrow">Košice · Budapešť · online</h3>
      <h1 className="headlines">Marketing. Kreativita. AI.</h1>
      <p className="lead">
        Som Dušan Tatranský. V marketingu som viac ako 15 rokov a mám za sebou
        vyše 100 značiek. Posledné roky AI študujem, používam a učím. Pomáham
        tímom pracovať s AI tak, aby pri tom neprestali rozmýšľať.
      </p>
      <p className="roles">
        Creative &amp; Strategy Director v Promiseo · lektor AI · tvorca
        vlastných produktov
      </p>
      <Buttons>
        <Button href="#workshopy">Pozrieť workshopy →</Button>
        <Button href={LINKS.substack} ghost external>
          Čítať Marketing Circus
        </Button>
        <UnderLink
          href={LINKS.linkedin}
          target="_blank"
          rel="me noopener noreferrer"
        >
          <LinkedInIcon /> LinkedIn →
        </UnderLink>
      </Buttons>
    </HeroText>
    <ImageWrapper>
      <GlitchImage url={dusanstvo_landing} />
    </ImageWrapper>
  </WelcomeWrapper>
)

/* ---------- Workshopy ---------- */

const SectionImage = styled.div`
  width: 100%;
  margin: 0 0 60px;
`

const Workshopy = () => (
  <Section id="workshopy" tone="dark">
    <h3 className="eyebrow">Workshopy</h3>
    <h2>AI sa používa ľahko. Dobre už ťažšie.</h2>
    <p className="lead">
      Dva praktické workshopy pre firmy. Po slovensky, u vás vo firme alebo
      online. Tím pracuje na reálnych úlohách, nie na slajdoch o budúcnosti.
    </p>
    <SectionImage style={{ marginTop: 80 }}>
      <img src={dusanstvo_sluzby} alt="Dušan Tatranský" />
    </SectionImage>
    <Rule>
      <h2 className="outline">AI v práci</h2>
      <h3>Pracujte múdrejšie. Tvorte lepšie. S AI.</h3>
      <BlokRight>
        <p>
          Pre celé tímy z akéhokoľvek oddelenia. Zvyčajne ho objednáva HR alebo
          firemné vzdelávanie.
        </p>
        <p>
          Rešerše, e-maily, prezentácie, reporty, brainstorming. A časť, ktorú
          väčšina AI školení vynecháva: ako si ľudia s pomocou AI budujú vlastný
          profesionálny hlas na LinkedIne a inde, bez toho, aby sa z nich stali
          firemné billboardy. A kedy stroju neveriť.
        </p>
        <p className="meta">3 hodiny · 4–10 ľudí</p>
      </BlokRight>
    </Rule>
    <Rule>
      <h2 className="outline">AI pre marketingové tímy</h2>
      <h3>Od briefu po kampaň. S AI.</h3>
      <BlokRight>
        <p>
          Pre interné marketingové tímy. Zvyčajne ho objednáva marketingový
          riaditeľ alebo majiteľ firmy.
        </p>
        <p>
          Žiadny kurz ChatGPT. Tím prevedie jeden reálny brief cez rešerš,
          stratégiu, nápady, texty a vizuály až po kreatívny prototyp. Potom ho
          posúdime tak, ako by to urobil kreatívny riaditeľ.
        </p>
        <p className="meta">4 hodiny · 3–8 ľudí</p>
      </BlokRight>
    </Rule>
    <Rule>
      <p className="lead">
        Učím to, čo sám robím. Prvé termíny na Slovensku: začiatok roka 2027.
      </p>
      <Buttons>
        <Button href={LINKS.emailWorkshop}>Napíšte mi o workshope →</Button>
        <UnderLink href="/workshopy">Podrobnosti o workshopoch</UnderLink>
      </Buttons>
    </Rule>
  </Section>
)

/* ---------- O mne ---------- */

const OMne = () => (
  <Section id="o-mne" tone="light">
    <h3 className="eyebrow">O mne</h3>
    <h2>Tri úlohy, jedna hlava.</h2>
    <SectionImage>
      <img src={dusanstvo_omne} alt="Dušan Tatranský" />
    </SectionImage>
    <Rule>
      <h3>
        <a
          className="textLink"
          href={LINKS.promiseo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Creative &amp; Strategy Director, Promiseo
        </a>
      </h3>
      <BlokRight>
        <p>
          V Promiseo, jednej z najväčších nezávislých digitálnych agentúr na
          Slovensku, vediem kreatívu a stratégiu. V marketingu som viac ako 15
          rokov a pracoval som pre vyše 100 značiek. Naša filozofia: sila je v
          nápade, nie v objeme.
        </p>
      </BlokRight>
    </Rule>
    <Rule>
      <h3>Lektor AI</h3>
      <BlokRight>
        <p>
          V roku 2026 som dokončil MBA v špecializácii Mastery in AI (Edu
          Effective). V rámci pracovnej skupiny ADMA som pomáhal navrhnúť
          vysokoškolský predmet o AI v marketingovej komunikácii na Univerzite
          Komenského v Bratislave. Som v zakladajúcej porote festivalu AI tvorby
          UMELINA, kde mám na starosti kategóriu Reklama a branded content a jej
          hodnotiace kritériá.
        </p>
      </BlokRight>
    </Rule>
    <Rule>
      <h3>Tvorca vlastných produktov</h3>
      <BlokRight>
        <p>
          Stavám vlastné produkty, aby som videl, čo AI zvládne mimo
          prezentácie.
        </p>
        <p>
          <a
            className="textLink"
            href={LINKS.fatalRecall}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Fatal Recall</strong>
          </a>
          <Tag>AI-native</Tag>
          <Tag>Beta</Tag>
          <br />
          Testuje, čo si ľudia z reklamy po čase naozaj zapamätajú, pomocou
          publika simulovaného cez AI.
        </p>
        <p>
          <a
            className="textLink"
            href={LINKS.destinion}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Destinion</strong>
          </a>
          <br />
          Zakladateľ a CEO. Digitálny domov pre spomienky na ľudí a zvieratá. AI
          mi pomáha s textami, vizuálmi, ukážkovými profilmi, promom a dizajnom
          webu. Spomienky ostávajú ľudské.
        </p>
      </BlokRight>
    </Rule>
    <Rule>
      <p>
        Tiež: podpredseda správnej rady ADMA pre stratégiu a komunikáciu · člen
        hodnotiacej komisie MBA na Digitálnej univerzite · porotca Zlatý klinec
        a Digital PIE · hosťujúci lektor na Univerzite Komenského, TUKE, EBMI a
        CEIB.
      </p>
      <Buttons>
        <UnderLink
          href={LINKS.linkedin}
          target="_blank"
          rel="me noopener noreferrer"
        >
          Celá moja práca na LinkedIne →
        </UnderLink>
      </Buttons>
    </Rule>
  </Section>
)

/* ---------- Čo si myslím (layout sekcie O tebe) ---------- */

const CoSiMyslim = () => (
  <Section id="co-si-myslim" tone="dark">
    <h3 className="eyebrow">Čo si myslím</h3>
    <Rule>
      <h2>Značky si ľudia zapamätajú. Alebo ich nahradia.</h2>
      <BlokRight>
        <p>
          Pozornosť si len prenajímate. Pamäť si musíte zaslúžiť. O tom píšem v{" "}
          <a
            className="textLink"
            href={LINKS.substack}
            target="_blank"
            rel="noopener noreferrer"
          >
            newsletteri Marketing Circus
          </a>
          .
        </p>
      </BlokRight>
    </Rule>
    <Rule>
      <h2>AI sa používa ľahko. Dobre už ťažšie.</h2>
      <BlokRight>
        <p>
          Nástroje má dnes každý. Rozdiel robí úsudok: čo sa opýtať, čo si
          nechať a čo zahodiť. To robím a to aj{" "}
          <a className="textLink" href="#workshopy">
            učím
          </a>
          .
        </p>
      </BlokRight>
    </Rule>
    <Rule>
      <p className="lead">
        Cieľom je stále pamäť. AI vás k nej dovedie rýchlejšie. Alebo
        rýchlejšie upadnete do zabudnutia.
      </p>
    </Rule>
  </Section>
)

/* ---------- Kde ma bolo vidieť (layout sekcie Klienti) ---------- */

const EventList = styled.ul`
  list-style: none;
  li {
    border-top: 1px solid currentColor;
    padding: 24px 0;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 8px 24px;
  }
  .date {
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  @media (max-width: 700px) {
    li {
      grid-template-columns: 1fr;
    }
  }
`

const KdeMaBoloVidiet = () => {
  const today = new Date().toISOString().slice(0, 10)
  const next = upcoming.filter(item => item.date >= today)
  return (
    <Section id="kde-ma-bolo-vidiet" tone="orange">
      <h3 className="eyebrow">Kde ma bolo vidieť</h3>
      {next.length > 0 && (
        <>
          <h2 className="outline">Čo ma čaká</h2>
          <EventList>
            {next.map(item => (
              <li key={item.date + item.event}>
                <span className="date">{item.label}</span>
                <span>
                  <a
                    className="textLink"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>{item.event}</strong>
                  </a>{" "}
                  · {item.text}
                </span>
              </li>
            ))}
          </EventList>
        </>
      )}
      <Rule style={{ marginTop: 60 }}>
        <h3>Médiá a pódiá</h3>
        <BlokRight>
          <p>TV Markíza · konferencia HN Stratégie · Pecha Kucha Night Prešov · IGNITE</p>
        </BlokRight>
      </Rule>
      <Rule>
        <h3>Univerzity a biznis školy</h3>
        <BlokRight>
          <p>
            Univerzita Komenského (Fakulta managementu · Katedra marketingovej
            komunikácie FiF) · TUKE · EBMI Praha · CEIB · Digitálna univerzita
          </p>
        </BlokRight>
      </Rule>
    </Section>
  )
}

/* ---------- Bushido (z layoutBushido.js) ---------- */

const BushidoRule = styled.div`
  border-top: 1px solid var(--black);
  padding: 40px 0;
  h3.num {
    color: var(--orange) !important;
    margin-bottom: 10px;
  }
  p.rule {
    padding-top: 0;
    font-size: 40px;
    line-height: 1.17;
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 1px var(--black);
    transition: 0.2s;
  }
  &:hover p.rule {
    color: var(--black);
    -webkit-text-stroke: 0px;
  }
  @media (max-width: 1000px) {
    p.rule {
      font-size: 28px;
    }
  }
  @media (max-width: 440px) {
    p.rule {
      font-size: 22px;
    }
  }
`

const bushido = [
  "Šťastný je ten, kto dosiahne poznanie a slobodu, nie slávu alebo bohatstvo.",
  "Úspešný je ten, kto so svojím časom môže naložiť tak, ako uzná za vhodné.",
  "Kvalita pred kvantitou. Menej, ale zapamätateľne.",
  "Rob výhradne pre spriaznené duše, nervy tvoje ušetrí to.",
  "Urob viac, ako sa od teba čaká. Sľúb menej, ako dokážeš splniť.",
  "Nevezmeš meno klientovo nadarmo, lež ochraňovať budeš ho.",
  "Váž si pozornosť, svoju aj cudziu. Nikdy nespamuj.",
  "Buduj dlhodobé vzťahy, aj keď je práca krátkodobá.",
  "Používaj stroje, ponechaj si úsudok. AI je nástroj, vkus je remeslo.",
  "Tvor veci, ktoré prežijú algoritmus.",
]

const Bushido = () => (
  <Section id="bushido" tone="light">
    <h2 className="outline" style={{ marginBottom: 60 }}>
      Bushido
    </h2>
    {bushido.map((rule, i) => (
      <BushidoRule key={i}>
        <h3 className="num">{String(i + 1).padStart(2, "0")}</h3>
        <p className="rule">{rule}</p>
      </BushidoRule>
    ))}
  </Section>
)

/* ---------- stránka ---------- */

const Layout = () => (
  <PageShell>
    <Hero />
    <ProofStrip />
    <Workshopy />
    <OMne />
    <CoSiMyslim />
    <KdeMaBoloVidiet />
    <Bushido />
    <Contact />
  </PageShell>
)

export default Layout
