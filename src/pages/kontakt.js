import React from "react"
import Layout from "../layout/Layout"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;

  padding-top: 1em;
  padding-left: 1em;
`

const DownloadPage = () => (
  <Layout>
    <StyledWrapper>
      <p
        css={`
          margin: 0;
          font-size: 1.5em;
        `}
      >
        Bartek Pacia
      </p>
      <p
        css={`
          margin: 0;
          font-size: 1.2em;
        `}
      >
        barpac02@gmail.com
      </p>
    </StyledWrapper>
  </Layout>
)

export default DownloadPage
