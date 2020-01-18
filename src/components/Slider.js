// import SingleProject from "../components/SingleProject"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { StaticQuery, graphql } from "gatsby"

import React from "react"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"
import "../theme/carousel.css"

const Slider = props => (
  <Carousel
    autoPlay={false}
    showThumbs={false}
    showArrows={true}
    useKeyboardArrows={false}
    showStatus={false}
    emulateTouch={true}
    infiniteLoop={true}
  >
    {props.images.map(image => (
      <Img sizes={image.sizes} alt={image.description} key={image.id} />
    ))}
  </Carousel>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "work/qvsta.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <Slider data={data} {...props} />}
  />
)
