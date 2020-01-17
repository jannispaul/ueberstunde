import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { MARKS, BLOCKS } from "@contentful/rich-text-types"
import styled from "styled-components"

import { device } from "../theme/breakpoints"
import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PodigeePlayer from "../components/PodigeePlayer"
import ContentfulRichTextImage from "../components/ContentfulRichTextImage"
import KeepInTouch from "../components/KeepInTouch"
// import MoreOfTheAmericans from "../components/MoreOfTheAmericans"
import SmallLabel from "../components/SmallLabel"
import EpisodeHeroImage from "../components/ImageComponents/EpisodeHeroImage"
// import Form from "../components/Form"
// import Fragments from "../components/Fragments"

export const query = graphql`
  query($slug: String!, $filename: String!) {
    podcast: contentfulPost(slug: { eq: $slug }) {
      body {
        json
      }
      description {
        description
      }
      image {
        file {
          url
        }
        sizes(maxWidth: 1000) {
          ...GatsbyContentfulSizes_withWebp
        }
        description
        resize(width: 900, quality: 60) {
          src
        }
      }
      title
      slug
      podcastSlug
      createdAt(formatString: "DD. MMMM YYYY", locale: "de-DE")
    }
    ogimage: allImageSharp(
      filter: { fixed: { originalName: { eq: $filename } } }
    ) {
      edges {
        node {
          resize {
            src
          }
        }
      }
    }
    site: site {
      ...SiteInfo
    }
  }
`
const StyledHero = styled.section`
  width: 100%;
  padding: 36px 24px;
  align-items: center;

  @media ${device.tablet} {
    padding: 0;
    display: grid;
    grid-template-columns: auto 425px 425px auto;
  }
  @media ${device.laptopL} {
    grid-template-columns: auto 625px 625px auto;
  }

  & p {
    font-size: 12px;
  }
`
const ContentContainer = styled.section`
  grid-row: 1/2;
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > h1 {
    color: #fff;
  }
  @media ${device.tablet} {
    padding: 36px 24px;
  }
`
const CoverImage = styled(Img)`
  grid-row: 1/2;
  grid-column: 3/4;
  max-width: 420px;
  margin: 16px auto;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  @media ${device.tablet} {
    border-radius: 9px;
    width: 350px;
    height: 350px;
  }
`
const StyledContent = styled.article`
  padding: 32px 24px;
  max-width: 740px;
  margin: auto;
  @media ${device.tablet} {
    padding: 100px 24px;
  }

  & figure {
    margin-bottom: 32px;
  }
  & figcaption {
    font-size: 12px;
    text-transform: uppercase;
  }
  & p {
    margin-bottom: 32px;
  }
`

const SocialContainer = styled.div`
  font-size: 21.6px;
  color: #ff0045;
  letter-spacing: 0.34px;
  text-align: center;
  margin-top: 16px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  & a {
    margin-left: 20px;
  }
`

const StyledIcon = styled.div`
  display: inline-block;
  & > svg {
    fill: #ff0045;
    width: 24px;
  }
`
const Seperator = styled.hr`
  width: 100%;
  height: 24px;
  background: #f7f2fb;
  border: none;
`

const IframeContainer = styled.span`
  padding-bottom: 56.25%;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`
// const HyperLink = styled.a`
//   display: inline;
// `

const EpisodeTemplate = ({ data: { podcast, ogimage, site }, location }) => {
  return (
    <Layout>
      <SEO
        title={podcast.title}
        ogimage={ogimage.edges[0].node.resize.src}
        description={podcast.description.description}
      />
      <StyledHero>
        <EpisodeHeroImage></EpisodeHeroImage>
        <CoverImage
          sizes={podcast.image.sizes}
          alt={podcast.image.description}
        />
        <ContentContainer>
          <SmallLabel color="white">{podcast.createdAt}</SmallLabel>
          <h1>{podcast.title}</h1>
          <PodigeePlayer source={podcast.podcastSlug}></PodigeePlayer>
        </ContentContainer>
      </StyledHero>
      <StyledContent>
        <div>
          {documentToReactComponents(podcast.body.json, {
            renderMark: {
              [MARKS.CODE]: embedded => {
                if (embedded.includes("docs.google.com")) {
                  return <div dangerouslySetInnerHTML={{ __html: embedded }} />
                } else if (embedded.includes("youtu")) {
                  return (
                    <IframeContainer>
                      <div dangerouslySetInnerHTML={{ __html: embedded }} />
                    </IframeContainer>
                  )
                }
              },
            },
            renderNode: {
              /* [INLINES.HYPERLINK]: node => {
                if (
                  !node.data.uri.includes("docs.google.com") &&
                  !node.data.uri.includes("youtu")
                ) {
                  return (
                    <HyperLink href={node.data.uri} target="_blank">
                      {node.content.value}
                    </HyperLink>
                  )
                } else if (node.data.uri.includes("docs.google.com")) {
                  return (
                    <iframe
                      src={node.data.uri}
                      width="640"
                      height="623"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                    >
                      Loading…
                    </iframe>
                  )
                } else if (
                  node.data.uri.includes("youtu.be") ||
                  node.data.uri.includes("youtube.com")
                ) {
                  return (
                    <IframeContainer>
                      <iframe
                        title="youtube 002"
                        src={node.data.uri}
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </IframeContainer>
                  )
                }
              }, */

              [BLOCKS.EMBEDDED_ASSET]: node => (
                <div>
                  <figure>
                    <ContentfulRichTextImage
                      node={node}
                      richTextImageWidth="740"
                      richTextImageQuality="60"
                    ></ContentfulRichTextImage>
                    <figcaption>
                      {node.data.target.fields.description["de"]}
                    </figcaption>
                  </figure>
                </div>
              ),
            },
          })}
        </div>
        <SocialContainer>
          Share:
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${site.siteMetadata.siteUrl}${location.pathname}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon>
              <Icon icon={ICONS.FACEBOOK} />
            </StyledIcon>
          </a>
          <a
            href={`
          https://www.linkedin.com/shareArticle?mini=true&url=${site.siteMetadata.siteUrl}${location.pathname}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon>
              <Icon icon={ICONS.LINKEDIN} />
            </StyledIcon>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=Jetzt die neue Podcast-Folge Wall Street Weekly anhören: ${site.siteMetadata.siteUrl}${location.pathname}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon>
              <Icon icon={ICONS.TWITTER} />
            </StyledIcon>
          </a>
          <a
            href={`whatsapp://send?text=${podcast.title} – Jetzt die neue Podcast-Folge Wall Street Weekly anhören: ${site.siteMetadata.siteUrl}${location.pathname}`}
            dataaction="share/whatsapp/share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon>
              <Icon icon={ICONS.WHATSAPP} />
            </StyledIcon>
          </a>
          <a
            href={`mailto:?&subject=${podcast.title}&body=Jetzt die neue Podcast-Folge Wall Street Weekly anhören:%0D%0A${site.siteMetadata.siteUrl}${location.pathname}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon>
              <Icon icon={ICONS.EMAIL} />
            </StyledIcon>
          </a>
        </SocialContainer>
      </StyledContent>
      <Seperator></Seperator>
      {/* <MoreOfTheAmericans></MoreOfTheAmericans> */}
      <KeepInTouch></KeepInTouch>
    </Layout>
  )
}

export default EpisodeTemplate
