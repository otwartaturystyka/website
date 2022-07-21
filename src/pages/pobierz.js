import React from "react"
import Layout from "../layout/Layout"
import PlayStoreBadge from "../components/PlayStoreBadge"
import AppStoreBadge from "../components/AppStoreBadge"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const Divider = styled.div`
  height: 3em;
  width: 0;

  @media (min-width: 600px) {
    width: 2em;
    height: 0;
  }
`

const DownloadPage = () => (
  <Layout>
    <StyledWrapper>
      <a href="https://play.google.com/store/apps/details?id=pl.baftek.discoverrudy&hl=pl">
        <PlayStoreBadge />
      </a>
      <Divider />
      <a href="https://apps.apple.com/app/id1528404703">
        <AppStoreBadge />
      </a>
    </StyledWrapper>
  </Layout>
)

export default DownloadPage
