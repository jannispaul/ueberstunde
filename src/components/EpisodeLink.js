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
`
const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 16px auto;
  grid-row-gap: 20px;
  margin-bottom: 16px;
  align-items: center;

  & > picture {
    margin-right: 16px;
    margin-bottom: 16px;
  }
`
const Excerpt = styled.div`
  grid-column: ${props => (props.podcast ? "1/4" : "3/4")};
  & > p {
    /* margin-top: 20px; */
    margin-bottom: 20px;
  }
`
const StyledH3Link = styled(Link)`
  text-decoration: none;
  & > h3 {
    margin-bottom: 20px;
  }
`

const StyledLink = styled(Link)`
  font-size: 19px;
  color: #7300dc;
  /* text-transform: uppercase; */
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
      <Excerpt podcast={props.podcastSlug}>
        <p>{props.excerpt}</p>
        <StyledLink to={props.slug}>Mehr erfahren</StyledLink>
      </Excerpt>
    </PlayerContainer>
  </Episode>
)

export default EpisodeLink
