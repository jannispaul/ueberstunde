import React from "react"
import { StaticQuery, graphql } from "gatsby"
import EpisodeLinkNoPlayer from "./EpisodeLinkNoPlayer"
import styled from "styled-components"
import headlineBG from "../content/images/headline-bg-2.png"

import { device } from "../theme/breakpoints"

const StyledRecentEpisodes = styled.section`
  padding: 0 24px;
  position: relative;
`

const ContentContainer = styled.div`
  max-width: 1256px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledHeadline = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 48px;
  & > h2,
  & > h3 {
    color: #7000c0;
  }
  & img {
    display: none;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    user-drag: none;
    user-select: none;
    left: 0;
    right: 0;
    top: 8px;
    @media ${device.tablet} {
      display: block;
      max-width: 430px;
    }
    @media ${device.laptop} {
      max-width: 100%;
      top: 14px;
    }
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query MoreEpisodesQuery {
        allContentfulPost(limit: 3, skip: 1) {
          edges {
            node {
              title
              body {
                json
              }
              description {
                description
              }
              slug
              updatedAt(formatString: "DD. MMMM YYYY", locale: "de-DE")
              image {
                sizes(maxWidth: 800) {
                  ...GatsbyContentfulSizes_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledRecentEpisodes>
        <StyledHeadline>
          <h2>Mehr Wall Street Weekly</h2>
          <img src={headlineBG} alt="Airplanes flying away from headline" />
        </StyledHeadline>
        <ContentContainer>
          {data.allContentfulPost.edges.map(({ node }) => (
            <EpisodeLinkNoPlayer
              key={node.id}
              slug={node.slug}
              title={node.title}
              image={node.image}
            ></EpisodeLinkNoPlayer>
          ))}
        </ContentContainer>
      </StyledRecentEpisodes>
    )}
  />
)
