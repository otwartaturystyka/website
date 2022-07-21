import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Button from "../components/Button"
import H1 from "../components/H1"
import Layout from "../layout/Layout"
import useImage from "../hooks/useImage"

const StyledWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const DemoImages = () => {
  const image1 = useImage().demo1.childImageSharp.gatsbyImageData
  const image2 = useImage().demo2.childImageSharp.gatsbyImageData
  const image3 = useImage().demo3.childImageSharp.gatsbyImageData
  const image4 = useImage().demo4.childImageSharp.gatsbyImageData
  const image5 = useImage().demo5.childImageSharp.gatsbyImageData
  const image6 = useImage().demo6.childImageSharp.gatsbyImageData

  return (
    <>
      <div
        css={`
          display: flex;
          flex-wrap: wrap;
          margin-top: 1em;
          justify-content: center;
        `}
      >
        <GatsbyImage
          image={image1}
          css={`
            margin: 0.5em;
          `}
        />
        <GatsbyImage
          image={image2}
          css={`
            margin: 0.5em;
          `}
        />
        <GatsbyImage
          image={image3}
          css={`
            margin: 0.5em;
          `}
        />
      </div>
      <div
        css={`
          display: flex;
          flex-wrap: wrap;
          margin-top: 1em;
          justify-content: center;
        `}
      >
        <GatsbyImage
          image={image4}
          css={`
            margin: 0.5em;
          `}
        />
        <GatsbyImage
          image={image5}
          css={`
            margin: 0.5em;
          `}
        />
        <GatsbyImage
          image={image6}
          css={`
            margin: 0.5em;
          `}
        />
      </div>
    </>
  )
}

const IndexPage = () => (
  <Layout>
    <StyledWrapper>
      <H1
        css={`
          font-weight: bold;
          padding-top: 0.5em;
          padding-bottom: 0.5em;
        `}
        isBig
      >
        Otwarta Turystyka
      </H1>
      <p
        css={`
          text-align: center;
          padding-top: 1em;
          padding-bottom: 1em;
          font-size: 2em;
        `}
      >
        Mobilna aplikacja turystyczna
      </p>
      <Button as={Link} to="/pobierz">
        Pobierz
      </Button>
    </StyledWrapper>
    <DemoImages />
  </Layout>
)

export default IndexPage
