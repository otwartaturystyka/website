import React from "react"

const Footer = () => (
  <footer
    css={`
      background: #000;
      padding: 2em;
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
    <small>
      stworzył <a href="http://bartekpacia.github.io">Bartek Pacia</a>
    </small>
    <small>
      <a href="https://otwartaturystyka.pl/polityka_prywatnosci.txt">
        Polityka prywatności
      </a>
    </small>
  </footer>
)

export default Footer
