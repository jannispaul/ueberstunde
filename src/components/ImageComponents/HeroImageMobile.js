import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  height: 100%;
  @media ${device.laptop} {
    display: none;
  }
`

const mobileHeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        mobileHeroImage: file(relativePath: { eq: "hero-mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.mobileHeroImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: "cover", objectPosition: "100% 100%" }}
        />
      )
    }}
  />
)
export default mobileHeroImage
