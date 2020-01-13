import React from "react"
import { StaticQuery, graphql } from "gatsby"
import EpisodeLink from "./EpisodeLink"

export default () => (
  <StaticQuery
    query={graphql`
      query AllEpisodesQuery {
        allContentfulPost(limit: 1000) {
          edges {
            node {
              id
              title
              slug
              podcastSlug
              description {
                description
              }
              image {
                sizes(maxWidth: 800) {
                  ...GatsbyContentfulSizes_withWebp
                }
                description
              }

              createdAt(formatString: "DD. MMMM YYYY", locale: "de-DE")
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{ padding: "0 16px" }}>
        {data.allContentfulPost.edges.map(({ node }) => (
          <EpisodeLink
            key={node.id}
            slug={node.slug}
            date={node.createdAt}
            title={node.title}
            excerpt={node.description.description.substring(0, 105) + " ..."}
            image={node.image}
            podcastSlug={node.podcastSlug}
          ></EpisodeLink>
        ))}
      </div>
    )}
  />
)
