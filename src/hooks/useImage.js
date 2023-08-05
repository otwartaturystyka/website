import { graphql, useStaticQuery } from "gatsby"

const useImage = () => {
  const data = useStaticQuery(graphql`
    {
      demo1: file(relativePath: { eq: "demo1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 310, layout: FIXED)
        }
        name
      }
      demo2: file(relativePath: { eq: "demo2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 310, layout: FIXED)
        }
        name
      }
      demo3: file(relativePath: { eq: "demo3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 310, layout: FIXED)
        }
        name
      }
      demo4: file(relativePath: { eq: "demo4.png" }) {
        childImageSharp {
          gatsbyImageData(width: 310, layout: FIXED)
        }
        name
      }
      demo5: file(relativePath: { eq: "demo5.png" }) {
        childImageSharp {
          gatsbyImageData(width: 310, layout: FIXED)
        }
        name
      }
      demo6: file(relativePath: { eq: "demo6.png" }) {
        childImageSharp {
          gatsbyImageData(width: 310, layout: FIXED)
        }
        name
      }
    }
  `)

  return data
}

export default useImage
