import React from "react"
import styled from "styled-components"
import discoverRudy from "../images/appicon.png"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: normal;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
`

const Header = () => (
  <header
    css={`
      background: #000;
      display: flex;
      justify-content: space-between;
      padding: 0.7rem;

      @media (min-width: 800px) {
        padding-left: calc((100vw - 800px) / 2);
        padding-right: calc((100vw - 800px) / 2);
      }
    `}
  >
    <div
      css={`
        display: flex;
        align-items: center;
      `}
    >
      <img
        alt="Logo icon"
        css={`
          height: 3rem;
          margin-right: 0.5rem;
        `}
        src={discoverRudy}
      />
      <NavLink
        css={`
          font-weight: bold;
          font-size: 1.4rem;
        `}
        to={"/"}
      >
        Otwarta Turystyka
      </NavLink>
    </div>
    <nav
      css={`
        display: flex;
        align-items: center;
      `}
    >
      <NavLink to={"/pobierz"}>Pobierz</NavLink>
      <NavLink to={"/kontakt"}>Kontakt</NavLink>
    </nav>
  </header>
)

export default Header
