import React from "react"

const Footer = () => (
  <footer
    css={`
      background: #000;
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
      justify-content: space-between;
      display: grid;
      grid-template-columns: 1fr;

      @media (min-width: 800px) {
        padding-left: calc((100vw - 800px) / 2);
        padding-right: calc((100vw - 800px) / 2);
        grid-template-columns: 1fr 1fr;
      }
    `}
  >
    <div
      css={`
        padding-top: 0.5rem;
        padding-left: 0.5rem;
      `}
    >
      stworzył <a href="http://bartekpacia.github.io">Bartek Pacia</a>
    </div>
    <div
      css={`
        padding-top: 0.5rem;
        padding-left: 0.5rem;
      `}
    >
      <a href="https://odkryjrudy.pl/polityka_prywatnosci.pdf">
        Polityka prywatności
      </a>
    </div>
  </footer>
)

export default Footer
