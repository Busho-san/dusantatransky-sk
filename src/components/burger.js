import { slide as Menu } from "react-burger-menu"
import React from "react"
import styled from "styled-components"
import { withPrefix } from "gatsby"


// import Social from "./social"

import burger from "../images/burger.svg"
import burger_hover from "../images/burger_hover.svg"
// import burger_close from "../images/burger_close.svg"
import hand from "../images/monkey_menu.gif"

const MenuWrapper = styled.div`
  .email_link {
    color: #f68848;
    margin-top: 24px;
  }
  .bm-burger-button {
    z-index: 1000;
    width: 40px;
    height: 20px;
    position: absolute;
    right: 60px;
    top: 90px;
    border-radius: 50%;
    span {
      display: block;
    }
   /* button {
      display: none;
      background: url(${burger}) !important;
      background-size: cover !important;
      background-repeat: no-repeat;
      width: 60% !important;
      height: 60% !important;
      left: 20% !important;
      top: 20% !important;
      &:hover {
        background: url(${burger_hover}) !important;
        background-size: cover !important;
        background-repeat: no-repeat;
      }
    }*/
  }
  @media (max-width: 700px) {
    .bm-burger-button {
    z-index: 1000;
    width: 25px;
    height: 15px;
    position: absolute;
    right: 50px;
    top: 50px;
  }
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.8) !important;
  }
  .bm-burger-bars {
    background: var(--black);
    /*background-image: linear-gradient(var(--black), var(--black));
    background-repeat: no-repeat;*/
    position:relative;
    overflow: hidden;
    &:before {
      display: block;
      content: '';
      background-image: linear-gradient(var(--orange), var(--orange));
      margin-left: -100%;
      transition: 0.2s;
      height: 100%;
      width: 100%;
    }
  }
  &:hover .bm-burger-bars:before {
      margin-left: 0;
  }
  &.burger_black {
    .bm-burger-bars {
      background-image: linear-gradient(var(--black), var(--black));
    }
  }
  .bm-cross-button {
    position: absolute;
    top: 70px !important;
    right: 70px !important;
    width: 50px !important;
    height: 50px !important;
    cursor: pointer !important;
    span {
      background: var(--white);
      display: block;
    }
  }
  .bm-burger-button:hover .bm-burger-bars {
    background: var(--orange);
    /* background-image: linear-gradient(var(--orange), var(--orange)); */
    opacity: 1 !important;
  }
  .bm-cross {
    margin-top: 2px;
    margin-left: -7px;
    background: var(--black);
    width: 5px !important;
    height: 40px !important;
    transition: 0.3s;
  }
  @media (max-width: 700px) {
    .bm-cross-button {
      position: absolute;
      top: 50px !important;
      right: 60px !important;
      width: 25px !important;
      height: 25px !important;
    }
    .bm-cross {
      margin-top: -5px;
      margin-left: 0px;
      height: 20px !important;
    }
  }
  .bm-cross-button:hover .bm-cross{
    background-image: linear-gradient(var(--orange), var(--orange));
  }
  .bm-item-list {
    height: auto !important;
    width: 100%;
    margin-top: 50px;
    margin-left: 200px;
  }
  .bm-menu-wrap {
    background: var(--black); 
    z-index: 999999999;
  }
  .bm-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${hand});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 200px;
  }
  .bm-item{
    text-align: left;
    text-decoration: none;
    padding: 5px 0;
  }
  div.bm-item {
    margin-top: 60px;
  }
  @media (max-width: 1000px) {
    .bm-menu {
      background: url(${hand});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left;
    }
  }
  @media (max-width: 550px) {
    .bm-item-list {
      height: auto !important;
      width: auto;
      margin-top: 50px;
      margin-left: 0;
    }
  }
  @media (max-width: 390px) {
    .bm-menu {
      background: url(${hand});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: -100px;
    }
  }
`
const MenuItem = styled.span`
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  color: var(--white) !important;
  font-size: 40px;
  text-align: left;
  cursor: pointer !important;
  &:hover {
    color: var(--orange) !important;
  }
  /* 
  font-family: 'Rubik Mono One', sans-serif; 
  font-weight: 900;
  text-transform: uppercase;
  */
  &.active_link {
    color: transparent !important;
    -webkit-text-stroke: 1px var(--white);
  }
  @media (max-width: 550px) {
    font-size: 32px;
  }
`
const TopActions = styled.div`
  position: absolute;
  right: 130px;
  top: 78px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1000;
  .icon_link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--orange);
    transition: 0.2s;
    svg {
      width: 18px;
      height: 18px;
      fill: var(--black);
    }
    &:hover {
      background: var(--black);
      svg {
        fill: var(--orange);
      }
    }
  }
  .nav_button {
    font-family: "Raleway", sans-serif;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--black);
    background: var(--orange);
    padding: 12px 20px;
    transition: 0.2s;
    &:hover {
      background: var(--black);
      color: var(--orange);
    }
  }
  @media (max-width: 700px) {
    right: 95px;
    top: 38px;
    gap: 8px;
    .icon_link {
      width: 32px;
      height: 32px;
      svg {
        width: 14px;
        height: 14px;
      }
    }
    .nav_button {
      font-size: 11px;
      letter-spacing: 2px;
      padding: 9px 12px;
    }
  }
  @media (max-width: 400px) {
    .nav_button {
      display: none;
    }
  }
`

export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
)

export const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.54 8.25H1.46V5.4h21.08v2.85zM1.46 10.8V24L12 18.11 22.54 24V10.8H1.46zM22.54 0H1.46v2.84h21.08V0z" />
  </svg>
)

const links = [
  { href: withPrefix("/") + "#workshopy", label: "Workshopy" },
  { href: withPrefix("/") + "#o-mne", label: "O mne" },
  { href: withPrefix("/") + "#co-si-myslim", label: "Čomu verím" },
  { href: withPrefix("/") + "#kde-ma-bolo-vidiet", label: "Dušan naživo" },
  { href: withPrefix("/") + "#bushido", label: "Bushido" },
]

class Burger extends React.Component {
  constructor() {
    super()
    this.state = { isOpen: false }
    this.close = this.close.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
  }
  handleStateChange(state) {
    this.setState({ isOpen: state.isOpen })
  }
  close() {
    this.setState({ isOpen: false })
  }
  render() {
    return (
      <MenuWrapper className={this.props.burger_color}>
        <TopActions>
          <a
            className="icon_link"
            href="https://www.linkedin.com/in/dusantatransky/"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            className="icon_link"
            href="https://marketingcircus.substack.com"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="Substack"
          >
            <SubstackIcon />
          </a>
          <a className="nav_button" href={withPrefix("/") + "#workshopy"}>
            Workshopy
          </a>
        </TopActions>
        <Menu
          right
          width={"100%"}
          isOpen={this.state.isOpen}
          onStateChange={this.handleStateChange}
        >
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={this.close}>
              <MenuItem>{link.label}</MenuItem>
            </a>
          ))}
        </Menu>
      </MenuWrapper>
    )
  }
}

export default Burger
