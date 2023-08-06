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
  const image1 = useImage().demo1
  const image2 = useImage().demo2
  const image3 = useImage().demo3
  const image4 = useImage().demo4
  const image5 = useImage().demo5
  const image6 = useImage().demo6

  let images = [image1, image2, image3, image4, image5, image6]

  return (
    <div
      css={`
        display: flex;
        flex-wrap: wrap;
        padding: 2em 0;
        justify-content: center;
        row-gap: 1em;
        column-gap: 1em;
      `}
    >
      {images.map(image => (
        <GatsbyImage
          key={image.name}
          image={image.childImageSharp.gatsbyImageData}
          alt=""
        />
      ))}
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <StyledWrapper>
      <H1
        css={`
          font-weight: bold;
          padding-top: 0.5em;
          padding-bottom: 0.3em;
        `}
        isBig
      >
        Otwarta Turystyka
      </H1>
      <p
        css={`
          padding-bottom: 0.5em;
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
