import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  display: block;
  position: relative;
  margin-top: -50px;
  margin-bottom: -100px;
  z-index: 0;

  @media ${device.laptop} {
    position: absolute !important;
    margin-top: 0;
    margin-bottom: -100px;
    top: 0;
    right: 0;
    left: 40%;
    max-height: 100%;
    max-height: 100%;
    max-width: 80%;
  }
`

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.heroImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: "cover" }}
          alt="Marina Weisband und Michael Bröcker über dem Sonnenuntergang in Berlin"
        />
      )
    }}
  />
)
export default HeroImage
