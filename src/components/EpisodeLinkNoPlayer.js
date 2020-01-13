import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { device } from "../theme/breakpoints"

const Episode = styled(Link)`
  max-width: 700px;
  margin: auto;
  text-align: left;
  text-decoration: none;
  display: block;
  padding: 32px 0;
  transition: background 0.2s;
  margin: 16px;
  max-width: 250px;
  & > h4 {
    margin: 16px auto;
    /* font-family: Avenir-Medium, "Open Sans", -apple-system, BlinkMacSystemFont,
      Arial, sans-serif; */
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.17px;
    line-height: 20px;
    @media ${device.tablet} {
      line-height: 30px;
      font-size: 20px;
      letter-spacing: 0.27px;
    }
    transition: 200ms transform ease;
  }
  :nth-of-type(2) {
    display: none;
  }
  @media ${device.tablet} {
    :nth-of-type(2) {
      display: inline-block;
    }
  }

  transition: 500ms transform ease;
  :hover {
    & div {
      transform: scale(1.03);
      transition: 200ms transform ease;
    }
  }
`

const EpisodeLink = props => (
  <Episode key={props.id} to={props.slug}>
    <Img sizes={props.image.sizes} alt={props.image.description} />
    <h4>{props.title}</h4>
  </Episode>
)

export default EpisodeLink
