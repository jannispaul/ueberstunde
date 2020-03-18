import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImage = styled(Img)`
  margin-bottom: 16px;
  box-shadow: 0 1px 11px 8px rgba(174, 174, 174, 0.12);
`

const BeyondTheObviousPodcastImage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "products/der-achte-tag-podcast.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 240) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.file.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          alt="Gelber Schriftzug 'Der Achte Tag' vor dem Brandenburger Tor bei Nacht."
        />
      )
    }}
  />
)
export default BeyondTheObviousPodcastImage
