import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SmallLabel from "./SmallLabel"
import Img from "gatsby-image"
import PodigeePlayer from "./PodigeePlayer"

const Episode = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: left;
  text-decoration: none;
  display: block;
  padding: 32px 0;
  transition: background 0.2s;

  & > p {
    margin-bottom: 16px;
  }
`
const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 16px auto;
  margin-bottom: 16px;
  align-items: center;
  & > picture {
    margin-right: 16px;
  }
`
const StyledH3Link = styled(Link)`
  text-decoration: none;
`

const StyledLink = styled(Link)`
  /* font-family: Oswald, "Open Sans", -apple-system, BlinkMacSystemFont, Arial,
    sans-serif; */
  font-size: 16px;
  color: #ff0045;
  letter-spacing: 0.25px;
  text-transform: uppercase;
`

const EpisodeLink = props => (
  <Episode key={props.key}>
    <SmallLabel>{props.date}</SmallLabel>
    <StyledH3Link to={props.slug}>
      <h3>{props.title}</h3>
    </StyledH3Link>
    <PlayerContainer>
      <Img sizes={props.image.sizes} alt={props.image.description} />
      <div></div>
      <PodigeePlayer source={props.podcastSlug}></PodigeePlayer>
    </PlayerContainer>
    <p>{props.excerpt}</p>
    <StyledLink to={props.slug}>Mehr erfahren</StyledLink>
  </Episode>
)

export default EpisodeLink
