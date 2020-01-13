import { graphql } from "gatsby"

export const query = graphql`
  fragment SiteInfo on Site {
    siteMetadata {
      title
      description
      siteUrl
    }
  }
  fragment PodcastSlug on ContentfulPost {
    podcastSlug
  }
`
