import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImage = styled(Img)`
  margin-bottom: 16px;
  box-shadow: 0 1px 11px 8px rgba(174, 174, 174, 0.12);
`

const MBPodcastImage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "products/morning-briefing-podcast.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
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
          alt="Illustration eines Mannes mit Kopfhörern und dem Schriftzug Gabor Steingart – Das Morning Briefing"
        />
      )
    }}
  />
)
export default MBPodcastImage
