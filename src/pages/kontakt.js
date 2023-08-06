import React from "react"
import Layout from "../layout/Layout"
import styled from "styled-components"

const StyledWrapper = styled.div`
  padding-top: 1em;

  max-width: 800px;
  line-height: 1.5;
`

const DownloadPage = () => (
  <Layout>
    <StyledWrapper>
      <p>
        Masz pomysł, jak mogę ulepszyć Otwartą Turystykę? Znalazłeś błąd? A może
        uważasz, że brakuje jakiegoś miejsca? Przyszła Tobie na myśl ciekawa
        funkcjonalność, którą mógłbym dodać? Z chęcią odpowiem na Twoje pytania
        i krytykę.
      </p>
      <p
        css={`
          padding: 1em 0;
        `}
      >
        Napisz maila na{" "}
        <a href="mailto:barpac02@gmail.com">barpac02@gmail.com</a>, a na pewno
        się do Ciebie odezwę.
      </p>
    </StyledWrapper>
  </Layout>
)

export default DownloadPage
