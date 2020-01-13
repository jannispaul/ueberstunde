import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

const StyledImage = styled(Img)`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  border-radius: 3.98px;
  margin-bottom: 16px;

  @media ${device.tablet} {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    border-radius: 9px;
  }
`

const ContentfulRichTextImage = props => (
  <StyledImage
    alt={props.node.data.target.fields.title["de"]}
    sizes={{
      aspectRatio:
        props.node.data.target.fields.file["de"].details.image.width /
        props.node.data.target.fields.file["de"].details.image.height,
      src:
        `${props.node.data.target.fields.file["de"].url}?w=${props.richTextImageWidth}&fm=webp&q=${props.richTextImageQuality}` +
        ",\n",
      sizes: `(max-width: ${props.richTextImageWidth}px) 100vw, ${props.richTextImageWidth}px`,
      srcSet:
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth / 4}&fm=jpg&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth / 4}w,\n` +
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth / 2}&fm=jpg&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth / 2}w,\n` +
        `${props.node.data.target.fields.file["de"].url}?w=${props.richTextImageWidth}&fm=jpg&q=${props.richTextImageQuality}` +
        ` ${props.richTextImageWidth}w,\n` +
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth * 1.5}&fm=jpg&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth * 1.5}w,\n` +
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth * 2}&fm=jpg&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth * 2}w,\n` +
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth * 3}&fm=jpg&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth * 3}w,\n` +
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth * 3.992}&fm=jpg&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth * 3.992}w`,
      srcSetWebp:
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth / 4}&fm=webp&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth / 4}w,\n` +
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth / 2}&fm=webp&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth / 2}w,\n` +
        `${props.node.data.target.fields.file["de"].url}?w=${props.richTextImageWidth}&fm=webp&q=${props.richTextImageQuality}` +
        ` ${props.richTextImageWidth}w,\n` +
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth * 1.5}&fm=webp&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth * 1.5}w,\n` +
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth * 2}&fm=webp&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth * 2}w,\n` +
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth * 3}&fm=webp&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth * 3}w,\n` +
        `${
          props.node.data.target.fields.file["de"].url
        }?w=${props.richTextImageWidth * 3.992}&fm=webp&q=${
          props.richTextImageQuality
        }` +
        ` ${props.richTextImageWidth * 3.992}w`,
    }}
  />
)

export default ContentfulRichTextImage
