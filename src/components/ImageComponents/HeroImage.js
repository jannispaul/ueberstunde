import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  display: none;

  @media ${device.laptop} {
    display: block;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    position: absolute !important;
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
          imgStyle={{ objectFit: "cover", objectPosition: "100% 100%" }}
          alt="Sophie Schimansky vor den Wolkenkratzern der Wall Street"
        />
      )
    }}
  />
)
export default HeroImage
