import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
// import { device } from "../../theme/breakpoints"

/**
 * This component is built using `gatsby-background-image` to automatically
 * serve optimized background-images with lazy loading and reduced file sizes
 * as well as a `gatsby-image` for comparison.
 * The image is loaded using a `StaticQuery`, which allows us to load the image
 * from directly within this component, rather than having to pass
 * the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-background-image`: https://github.com/timhagn/gatsby-background-image
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const StyledImage = styled(Img)`
  margin-bottom: 16px;
  box-shadow: 0 1px 11px 8px rgba(174, 174, 174, 0.12);
  /* width: 200px !important;
  height: 200px !important; */
`

const MBNewsletterImage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "products/morning-briefing-newsletter.jpg" }) {
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
          alt="Illustration eines Mannes mit Brille und dem Schriftzug Gabor Steingart – Das Morning Briefing"
        />
      )
    }}
  />
)
export default MBNewsletterImage
