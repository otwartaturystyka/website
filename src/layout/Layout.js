import React from "react"
import Helmet from "react-helmet"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import Footer from "../components/Footer"
import Header from "../components/Header"
import useSiteMetadata from "../hooks/useSiteMetadata"

import "../components/reset.css"

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Helvetica, Arial sans-serif;
    color: white;
    background: ${({ theme }) => theme.colors.dark}
  }

  a, a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryDark}
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }  
  `

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.dark};
`

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    padding-left: calc((100vw - 1000px) / 2);
    padding-right: calc((100vw - 1000px) / 2);
  }
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <StyledWrapper>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </StyledWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
