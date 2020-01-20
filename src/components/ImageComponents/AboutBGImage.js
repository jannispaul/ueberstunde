import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
// import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  position: absolute !important;
  bottom: 0;
  width: 100%;
  opacity: 0.4;
`

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "about-bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 50) {
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
          imgStyle={{ objectFit: "cover", objectPosition: "100% 100%" }}
          alt="Sonnenuntergang über Berlin"
        />
      )
    }}
  />
)
export default HeroImage
