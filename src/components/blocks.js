// Spoločné stavebné bloky stránok. Štýly sú prevzaté z pôvodných
// layoutov (Služby, Klienti, Bushido, pätička), aby vzhľad ostal rovnaký.
import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Burger, { LinkedInIcon, SubstackIcon } from "./burger"
import Avatar from "./avatar"
import { LINKS } from "../data/links"
import hand from "../images/hand.gif"

/* ---------- rámec stránky ---------- */

const BurgerWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 30px;
  top: 0;
  right: 0;
  z-index: 99999;
`

const AvatarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`

// Prepína farbu burgera podľa toho, či je pod ním tmavá sekcia.
const NavColor = () => {
  useEffect(() => {
    const update = () => {
      const x = window.innerWidth - 60
      const els = document.elementsFromPoint
        ? document.elementsFromPoint(x, 100)
        : []
      const section = els
        .map(el => el.closest && el.closest("[data-tone]"))
        .find(Boolean)
      const dark = section && section.getAttribute("data-tone") === "dark"
      document.body.classList.toggle("on-dark", !!dark)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])
  return null
}

export const PageShell = ({ children }) => (
  <div style={{ width: "100%", overflowX: "hidden", position: "relative" }}>
    <NavColor />
    <BurgerWrapper>
      <Burger />
    </BurgerWrapper>
    <AvatarWrapper>
      <Link to="/" aria-label="Domov">
        <Avatar />
      </Link>
    </AvatarWrapper>
    {children}
  </div>
)

/* ---------- sekcie ---------- */

const tones = {
  dark: { bg: "var(--black)", fg: "var(--white)", stroke: "var(--white)" },
  light: { bg: "var(--white)", fg: "var(--black)", stroke: "var(--black)" },
  orange: { bg: "var(--orange)", fg: "var(--black)", stroke: "var(--black)" },
}

const SectionWrapper = styled.section`
  width: 100%;
  background: ${p => tones[p.tone].bg};
  padding: 150px 0 150px;
  position: relative;
  * {
    color: ${p => tones[p.tone].fg};
  }
  h2 {
    padding-top: 0;
    margin: 0 0 40px;
  }
  .outline {
    font-family: "MyWebFont", sans-serif;
    font-weight: normal;
    line-height: 0.95;
    font-size: 90px;
    letter-spacing: 0;
    color: transparent;
    -webkit-text-stroke: 1px ${p => tones[p.tone].stroke};
  }
  .eyebrow {
    margin-bottom: 30px;
  }
  .lead {
    font-size: 20px;
    line-height: 1.8;
    max-width: 700px;
  }
  a.textLink {
    background-image: linear-gradient(
      120deg,
      var(--orange) 0%,
      var(--orange) 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 7%;
    background-position: 0 100%;
    transition: 0.3s linear;
    &:hover {
      background-size: 100% 20%;
    }
  }
  @media (max-width: 1000px) {
    padding: 100px 0;
    .outline {
      font-size: 12vw;
    }
  }
`

const Inner = styled.div`
  width: 900px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 25px;
  }
`

export const Section = ({ id, tone = "light", children }) => (
  <SectionWrapper id={id} tone={tone} data-tone={tone === "dark" ? "dark" : "light"}>
    <Inner>{children}</Inner>
  </SectionWrapper>
)

// Pravý blok so šírkou 70 % (z layoutu Služby)
export const BlokRight = styled.div`
  position: relative;
  width: 70%;
  margin-left: 30%;
  padding: 40px 0;
  p {
    padding: 0 25px 25px 0;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0;
    padding: 25px 0;
    p {
      padding: 0 0 25px 0;
    }
  }
`

// Riadok s horným okrajom (z layoutu Bushido)
export const Rule = styled.div`
  border-top: 1px solid currentColor;
  padding: 50px 0;
  h3 {
    margin-bottom: 20px;
  }
  .meta {
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--orange) !important;
  }
  p {
    padding-bottom: 20px;
  }
`

export const Tag = styled.span`
  display: inline-block;
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid currentColor;
  padding: 2px 8px;
  margin-left: 10px;
  vertical-align: middle;
`

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 28px;
  margin-top: 40px;
`

const ButtonLink = styled.a`
  display: inline-block;
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 16px 26px;
  background: var(--orange);
  color: var(--black) !important;
  transition: 0.2s;
  &:hover {
    background: var(--black);
    color: var(--orange) !important;
  }
  &.ghost {
    background: transparent;
    box-shadow: inset 0 0 0 2px currentColor;
    color: inherit !important;
  }
  &.ghost:hover {
    background: var(--orange);
    color: var(--black) !important;
    box-shadow: none;
  }
`

export const Button = ({ href, ghost, children, external }) => (
  <ButtonLink
    href={href}
    className={ghost ? "ghost" : ""}
    {...(external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {})}
  >
    {children}
  </ButtonLink>
)

// Podčiarknutý textový link (z pätičky homepage)
export const UnderLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
  &:before {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    background-color: currentColor;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--orange);
    transform: scaleX(0);
    transition: all 0.2s ease-in-out 0s;
    transform-origin: 0% 0%;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`

/* ---------- pás dôkazov ---------- */

const Strip = styled.div`
  background: var(--black);
  padding: 28px 50px;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px 0;
  }
  li {
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--white);
    a {
      color: var(--white);
      font-size: inherit;
      letter-spacing: inherit;
    }
    a:hover {
      color: var(--orange);
    }
    &:not(:last-child):after {
      content: "·";
      color: var(--orange);
      margin: 0 18px;
    }
  }
  @media (max-width: 700px) {
    padding: 24px 25px;
    ul {
      flex-direction: column;
      align-items: flex-start;
    }
    li {
      font-size: 12px;
      letter-spacing: 2px;
      &:not(:last-child):after {
        content: none;
      }
      &:before {
        content: "· ";
        color: var(--orange);
      }
    }
  }
`

export const ProofStrip = () => (
  <Strip data-tone="dark">
    <ul>
      <li>15+ rokov · 100+ značiek</li>
      <li>MBA v špecializácii Mastery in AI</li>
      <li>Spolutvorba predmetu o AI na Univerzite Komenského</li>
      <li>
        <a href={LINKS.umelina} target="_blank" rel="noopener noreferrer">
          Zakladajúca porota festivalu UMELINA
        </a>
      </li>
    </ul>
  </Strip>
)

/* ---------- kontakt + pätička (z footer.js) ---------- */

const ContactWrapper = styled.section`
  display: block;
  width: 100%;
  padding: 150px 50px 0 50px;
  overflow: hidden;
  position: relative;
  background: var(--black);
  * {
    color: var(--white);
  }
  .inner {
    width: 900px;
    margin: 0 auto;
  }
  h2 {
    padding-top: 0;
  }
  .footer_mail {
    color: var(--black);
    -webkit-text-stroke: 1px var(--white);
    margin-top: 80px;
    margin-bottom: 40px;
    word-break: break-word;
    &:hover {
      color: var(--orange);
      -webkit-text-stroke: 1px var(--black);
    }
  }
  .socials {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 100px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #2c2c2c;
    padding: 20px 0;
    font-size: 14px;
    color: #a9a9a9;
  }
  .hand_gif {
    width: 60px;
  }
  @media (max-width: 1000px) {
    padding: 100px 25px 0 25px;
    .inner {
      width: 100%;
    }
  }
`

export const Contact = () => (
  <ContactWrapper id="kontakt" data-tone="dark">
    <div className="inner">
      <h2>Poďme dať AI do práce. Poriadne.</h2>
      <p className="lead">
        Napíšte mi o workshope, prednáške alebo niečom zvláštnejšom.
      </p>
    </div>
    <a className="footer_mail" href={LINKS.emailWorkshop}>
      dusan@tatransky.sk
    </a>
    <div className="socials">
      <UnderLink href={LINKS.linkedin} target="_blank" rel="me noopener noreferrer">
        <LinkedInIcon /> LinkedIn
      </UnderLink>
      <UnderLink href={LINKS.substack} target="_blank" rel="me noopener noreferrer">
        <SubstackIcon /> Substack
      </UnderLink>
    </div>
    <div className="inner bottom">
      <span>© {new Date().getFullYear()} Dušan Tatranský</span>
      <UnderLink href={LINKS.en} hrefLang="en" lang="en">
        English version
      </UnderLink>
      <img className="hand_gif" src={hand} alt="" />
    </div>
  </ContactWrapper>
)
