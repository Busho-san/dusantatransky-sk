// Homepage: hero + sekcie. Hero preberá pôvodný úvod (avatar, glitch fotka,
// zvislé meno), sekcie používajú bloky z blocks.js.
import React from "react"
import styled from "styled-components"
import { withPrefix } from "gatsby"

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
import workshopy_home from "../images/workshopy_home.jpg"
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
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    min-height: 0;
  }
`

const HeroText = styled.div`
  position: relative;
  z-index: 3;
  width: 50%;
  padding: 170px 50px 80px 260px;
  .eyebrow {
    margin-bottom: 30px;
  }
  h1.headlines {
    text-align: left;
    font-size: 90px;
    margin-bottom: 20px;
  }
  .subtitle {
    color: var(--orange);
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
  @media (max-width: 1100px) {
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
  @media (max-width: 1100px) {
    position: relative;
    left: 0;
    width: 100%;
    height: 440px;
    animation: none;
  }
`

const Hero = () => (
  <WelcomeWrapper>
    <HeroText>
      <h3 className="eyebrow">Košice · Budapešť · online</h3>
      <h1 className="headlines">Marketing. Kreativita. AI.</h1>
      <h3 className="subtitle">Beriem to osobne.</h3>
      <p className="lead">
        Som Dušan. Už vyše pätnásť rokov sa živím marketingom a rukami mi prešlo vyše 100 značiek. Umelú inteligenciu študujem, používam a učím o nej. Firmám ukazujem, ako s ňou pracovať a neodovzdať jej pritom aj svoju dušu.
      </p>
      <p className="roles">
        Creative &amp; Strategy Director v Promiseo · lektor AI · zakladateľ Destinion a Fatal Recall
      </p>
      <Buttons>
        <Button href="#workshopy">Workshopy →</Button>
        <Button href={LINKS.substack} ghost external>
          Čítať Marketing Circus →
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
  margin: 0 0 36px;
  img {
    max-height: 460px;
    object-fit: cover;
  }
`

const Workshopy = () => (
  <Section id="workshopy" tone="dark">
    <h3 className="eyebrow">Workshopy</h3>
    <h2>ChatGPT má dnes každý. Výsledky nie.</h2>
    <p className="lead">
      Pre firmy ponúkam dva workshopy. Po slovensky, u vás alebo online. Na úrovni, akú potrebujete. Pracujeme na tom, čo váš tím aktuálne rieši a dokáže hneď využiť.
    </p>
    <SectionImage style={{ marginTop: 40 }}>
      <img src={workshopy_home} alt="Dušan Tatranský na workshope" />
    </SectionImage>
    <Rule>
      <h2 className="outline">AI v práci</h2>
      <h3>Robotom robotu. Rozum si nechajte.</h3>
      <BlokRight>
        <p>
          Pre kohokoľvek vo firme, od fakturácie po obchod. Objednáva ho väčšinou HR.
        </p>
        <p>
          Rešerše, maily, prezentácie, reporty, brainstorming. Employer branding plus to, čo iné AI školenia vynechávajú: ako si s AI vybudovať vlastný hlas na LinkedIne a nestať sa chodiacim firemným billboardom. A kedy stroje nepočúvať na slovo.
        </p>
        <p className="meta">3 hodiny · 4–10 ľudí</p>
      </BlokRight>
    </Rule>
    <Rule>
      <h2 className="outline">AI pre marketing</h2>
      <h3>Od briefu po kampaň za jedno dopoludnie.</h3>
      <BlokRight>
        <p>
          Pre interné marketingové tímy. Zvyčajne ho objednáva marketingový
          riaditeľ alebo majiteľ firmy.
        </p>
        <p>
          Toto nie je kurz ChatGPT. Váš tím prevedie jeden skutočný brief cez rešerš, stratégiu, nápady, texty a vizuály až po prototyp kampane. Potom ho rozoberiem tak, ako to robím v agentúre. Bez rukavičiek.
        </p>
        <p className="meta">4 hodiny · 3–8 ľudí</p>
      </BlokRight>
    </Rule>
    <Rule>
      <p className="lead">
        Neučím teóriu. Učím to, čo bežne robím pre klientov. Prvé termíny: začiatok 2027.
      </p>
      <Buttons>
        <Button href={LINKS.emailWorkshop}>Objednať workshop →</Button>
        <UnderLink href={withPrefix("/workshopy")}>Viac o workshopoch</UnderLink>
      </Buttons>
    </Rule>
  </Section>
)

/* ---------- O mne ---------- */

const OMne = () => (
  <Section id="o-mne" tone="light">
    <h3 className="eyebrow">O mne</h3>
    <h2>Tri roboty, jedna hlava.</h2>
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
          Vediem kreatívu a stratégiu v Promiseo, jednej z najväčších nezávislých digitálnych agentúr na Slovensku. Veríme, že kampaň nemusí stáť iba na rozpočte. Dôležitejšie sú značka a nápad.
        </p>
      </BlokRight>
    </Rule>
    <Rule>
      <h3>Lektor AI</h3>
      <BlokRight>
        <p>
          MBA so špecializáciou na AI mám od roku 2026. S pracovnou skupinou ADMA sme navrhli predmet o AI v marketingovej komunikácii pre Univerzitu Komenského. Na festivale UMELINA sedím v zakladajúcej porote a som odborným garantom kategórie Reklama a branded content.
        </p>
      </BlokRight>
    </Rule>
    <Rule>
      <h3>Vlastné produkty</h3>
      <BlokRight>
        <p>
          Staviam vlastné produkty, aby som videl, čo AI zvládne mimo
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
          Zistite, čo si ľudia z vašej reklamy pamätajú aj o týždeň. Na publiku, ktoré simuluje AI. Nepáľte peniaze na kreatívach, ktoré si nikto nezapamätá.
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
          Digitálny domov pre spomienky na ľudí a zvieratá. AI pomáha s textami, vizuálmi aj webom. Spomienky ostávajú výhradne ľudské.
        </p>
      </BlokRight>
    </Rule>
    <Rule>
      <p>
        Tiež: podpredseda správnej rady <a className="textLink" href={LINKS.adma} target="_blank" rel="noopener noreferrer">ADMA</a> pre stratégiu a komunikáciu · člen hodnotiacej komisie MBA na <a className="textLink" href={LINKS.digitalnaUniverzita} target="_blank" rel="noopener noreferrer">Digitálnej univerzite</a> · porotca <a className="textLink" href={LINKS.zlatyKlinec} target="_blank" rel="noopener noreferrer">Zlatý klinec</a> a <a className="textLink" href={LINKS.digitalPie} target="_blank" rel="noopener noreferrer">Digital PIE</a> · hosťujúci lektor na <a className="textLink" href={LINKS.uniba} target="_blank" rel="noopener noreferrer">Univerzite Komenského</a>, <a className="textLink" href={LINKS.tuke} target="_blank" rel="noopener noreferrer">TUKE</a>, <a className="textLink" href={LINKS.ebmi} target="_blank" rel="noopener noreferrer">EBMI</a> a <a className="textLink" href={LINKS.ceib} target="_blank" rel="noopener noreferrer">CEIB</a>.
      </p>
      <Buttons>
        <UnderLink
          href={LINKS.linkedin}
          target="_blank"
          rel="me noopener noreferrer"
        >
          Zobraziť moje CV a profil na LinkedIne →
        </UnderLink>
      </Buttons>
    </Rule>
  </Section>
)

/* ---------- Čo si myslím (layout sekcie O tebe) ---------- */

const CoSiMyslim = () => (
  <Section id="co-si-myslim" tone="dark">
    <h3 className="eyebrow">Čomu verím</h3>
    <Rule>
      <h2>Buď si vás zapamätajú, alebo vás nahradia.</h2>
      <BlokRight>
        <p>
          Kúpená pozornosť sa minie s rozpočtom. Čo ľuďom utkvie v pamäti, z toho profitujete. O tom a o mojom netradičnom pohľade na súčasný marketing píšem v{" "}
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
      <h2>Nástroje má každý. Vkus nie.</h2>
      <BlokRight>
        <p>
          Rozdiel robí úsudok: čo sa opýtať, čo si
          nechať a čo zahodiť. To robím a to aj{" "}
          <a className="textLink" href="#workshopy">
            učím
          </a>
          .
        </p>
      </BlokRight>
    </Rule>
    <Rule>
      <p className="lead">
        AI vás dostane do pamäti ľudí rýchlejšie. Alebo sa z nej rýchlejšie vyparíte.
      </p>
    </Rule>
  </Section>
)

/* ---------- Kde ma bolo vidieť (layout sekcie Klienti) ---------- */

const EventList = styled.ul`
  list-style: none;
  li {
    border-top: 1px solid currentColor;
    padding: 14px 0;
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
      <h2 className="outline" style={{ marginBottom: 28 }}>
        Dušan naživo
      </h2>
      {next.length > 0 && (
        <>
          <h3 className="eyebrow">Najbližšie</h3>
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
      <Rule style={{ marginTop: 36 }}>
        <h3>Médiá a pódiá</h3>
        <BlokRight>
          <p>TV Markíza · konferencia HN Stratégie · Pecha Kucha Night Prešov · IGNITE</p>
        </BlokRight>
      </Rule>
      <Rule>
        <h3>Univerzity a biznis školy</h3>
        <BlokRight>
          <p>
            <a className="textLink" href={LINKS.uniba} target="_blank" rel="noopener noreferrer">Univerzita Komenského</a> (Fakulta managementu · Katedra marketingovej komunikácie FiF) · <a className="textLink" href={LINKS.tuke} target="_blank" rel="noopener noreferrer">TUKE</a> · <a className="textLink" href={LINKS.ebmi} target="_blank" rel="noopener noreferrer">EBMI Praha</a> · <a className="textLink" href={LINKS.ceib} target="_blank" rel="noopener noreferrer">CEIB</a> · <a className="textLink" href={LINKS.digitalnaUniverzita} target="_blank" rel="noopener noreferrer">Digitálna univerzita</a>
          </p>
        </BlokRight>
      </Rule>
    </Section>
  )
}

/* ---------- Bushido (z layoutBushido.js) ---------- */

const BushidoRule = styled.div`
  border-top: 1px solid var(--black);
  padding: 18px 0;
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: baseline;
  h3.num {
    color: var(--orange) !important;
  }
  p.rule {
    padding-top: 0;
    font-size: 30px;
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
      font-size: 24px;
    }
  }
  @media (max-width: 440px) {
    p.rule {
      font-size: 20px;
    }
  }
`

const Motto = styled.p`
  margin-top: 36px;
  padding-top: 36px;
  border-top: 1px solid var(--black);
  font-family: "MyWebFont", sans-serif;
  font-size: 48px;
  line-height: 1.1;
  && {
    color: var(--black);
  }
  em {
    font: inherit;
    font-style: normal;
    background: linear-gradient(transparent 58%, var(--orange) 58%);
  }
  @media (max-width: 1000px) {
    font-size: 8vw;
  }
`

const bushido = [
  "Šťastný je ten, kto dosiahne poznanie a slobodu, nie slávu alebo bohatstvo.",
  "Úspešný je ten, kto so svojím časom môže naložiť tak, ako uzná za vhodné.",
  "Si tvor, a preto tvor, no tak, aby sa na to zabudnúť nedalo.",
  "Rob výhradne pre spriaznené duše, nervy tvoje ušetrí to.",
  "Sľúb menej, než splniť dokážeš. Urob viac, než sa od teba čaká.",
  "Nevezmeš meno klientovo nadarmo, lež ochraňovať budeš ho.",
  "Pozornosť cudziu ako vlastnú váž si a blížneho svojho nezaspamuješ.",
  "Krátka nech je zákazka, dlhý nech je vzťah.",
  "Stroju prácu zver, úsudok si ponechaj. AI je nástroj, vkus je remeslo.",
  "Menej je niekedy viac, uprednostňuj kvalitu pred kvantitou.",
]

const Bushido = () => (
  <Section id="bushido" tone="light">
    <h2 className="outline" style={{ marginBottom: 28 }}>
      Bushido
    </h2>
    {bushido.map((rule, i) => (
      <BushidoRule key={i}>
        <h3 className="num">{String(i + 1).padStart(2, "0")}</h3>        <p className="rule">{rule}</p>
      </BushidoRule>
    ))}
    <Motto>
      <em>Pozornosť sa dá kúpiť.</em>
      <br />
      <em>Pamäť si treba zaslúžiť.</em>
    </Motto>
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
