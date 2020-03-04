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
import loadScript from "../components/loadScript"
import ContentfulRichTextImage from "../components/ContentfulRichTextImage"
import KeepInTouch from "../components/KeepInTouch"
import SmallLabel from "../components/SmallLabel"
import Slider from "../components/Slider"
import EpisodeHeroImage from "../components/ImageComponents/EpisodeHeroImage"

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
      gallery {
        id
        sizes(maxWidth: 1920) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
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
  padding: 36px 24px 0;
  align-items: center;

  @media ${device.tablet} {
    padding: 0;
    display: grid;
    grid-template-columns: auto 425px 425px auto;
    overflow: hidden;
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
  margin-top: 2rem;
  & > h1 {
    color: #000;

    @media ${device.tablet} {
      color: #fff;
    }
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
  /* font-size: 15px; */
  @media ${device.mobileL} {
    font-size: 21.6px;
  }
  color: #ff0045;
  letter-spacing: 0.34px;
  text-align: center;
  margin-top: 48px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  & a {
    margin-left: 20px;
  }
  & > span {
    width: 100%;
    @media ${device.mobileL} {
      width: auto;
    }
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

// const EpisodeTemplate = { data: { podcast, ogimage, site }, location }
class EpisodeTemplate extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     loadViovendiPlayer: false,
  //   }
  // }
  // componentDidMount() {
  //   this.loadViovendiScript()
  //   // var evt = document.createEvent("Event")
  //   // evt.initEvent("load", false, false)
  //   // window.dispatchEvent(evt)
  // }
  // loadViovendiScript() {
  //   // load  scripts when the component was mounted
  //   const script = document.createElement("script")
  //   script.src = "https://doo.net/viovendi-embed.js"
  //   script.async = false
  //   document.body.appendChild(script)
  // }

  componentDidMount() {
    if (!window.viovendi) {
      this.loadViovendiScript()
    } else if (!window.viovendi) {
      this.loadViovendiScript()
    } else {
      this.setState({ apiLoaded: true })
    }
  }

  loadViovendiScript() {
    // Load the google maps api script when the component is mounted.

    loadScript("https://doo.net/viovendi-embed.js")
      .then(script => {
        // Grab the script object in case it is ever needed.
        this.viovendiScript = script
        this.setState({ apiLoaded: true })
      })
      .catch(err => {
        console.error(err.message)
      })
  }
  render() {
    return (
      <Layout>
        <SEO
          title={this.props.data.podcast.title}
          ogimage={this.props.data.ogimage.edges[0].node.resize.src}
          description={this.props.data.podcast.description.description}
        />
        <StyledHero>
          <EpisodeHeroImage></EpisodeHeroImage>
          <CoverImage
            sizes={this.props.data.podcast.image.sizes}
            alt={this.props.data.podcast.image.description}
          />
          <ContentContainer>
            <SmallLabel color="" tabletColor="#fff">
              {this.props.data.podcast.createdAt}
            </SmallLabel>
            <h1>{this.props.data.podcast.title}</h1>
            <PodigeePlayer
              source={this.props.data.podcast.podcastSlug}
            ></PodigeePlayer>
          </ContentContainer>
        </StyledHero>
        <StyledContent>
          <div>
            {documentToReactComponents(this.props.data.podcast.body.json, {
              renderMark: {
                [MARKS.CODE]: embedded => {
                  if (embedded.includes("docs.google.com")) {
                    return (
                      <div dangerouslySetInnerHTML={{ __html: embedded }} />
                    )
                  } else if (embedded.includes("viovendi")) {
                    return (
                      <span dangerouslySetInnerHTML={{ __html: embedded }} />
                    )
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
          {this.props.data.podcast.gallery ? (
            <Slider images={this.props.data.podcast.gallery}></Slider>
          ) : (
            ""
          )}
          <SocialContainer>
            <span>Share:</span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon>
                <Icon icon={ICONS.FACEBOOK} />
              </StyledIcon>
            </a>
            <a
              href={`
          https://www.linkedin.com/shareArticle?mini=true&url=${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon>
                <Icon icon={ICONS.LINKEDIN} />
              </StyledIcon>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=Diese Überstunde machen wir freiwillig. Der Podcast-Talk mit Marina Weisband und Michael Bröcker: ${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon>
                <Icon icon={ICONS.TWITTER} />
              </StyledIcon>
            </a>
            <a
              href={`whatsapp://send?text=${this.props.data.podcast.title} – Diese Überstunde machen wir freiwillig. Der Podcast-Talk mit Marina Weisband und Michael Bröcker: ${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`}
              dataaction="share/whatsapp/share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon>
                <Icon icon={ICONS.WHATSAPP} />
              </StyledIcon>
            </a>
            <a
              href={`mailto:?&subject=${this.props.data.podcast.title}&body=Diese Überstunde machen wir freiwillig. Der Podcast-Talk mit Marina Weisband und Michael Bröcker:%0D%0A${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`}
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
}

export default EpisodeTemplate
