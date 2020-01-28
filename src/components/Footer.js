import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import { device } from "../theme/breakpoints"
import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"

const StyledFooter = styled.footer`
  white-space: pre;
  padding: 24px 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #030203;
  color: white;
  & > div {
    width: 1256px;
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    @media ${device.mobileL} {
      flex-direction: row;
    }
    & > div:first-of-type {
      /* flex: 1 1 0; */
      flex-wrap: wrap;
      flex-direction: column;
      @media ${device.tablet} {
        flex-direction: row;
      }
    }
    & > div:last-of-type {
      flex: 1 1 0;
      margin-bottom: 1rem;
      @media ${device.tablet} {
        margin-bottom: 0;
      }
      /* flex-wrap: wrap; */
    }
    & > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      @media ${device.mobileL} {
        justify-content: flex-start;
        :last-of-type {
          justify-content: flex-end;
        }
      }
    }
  }
  span {
    opacity: 0.8;
  }
  /*Links in footer*/
  a {
    margin-right: 10px;
    text-decoration: undeline;
    text-decoration-color: rgba(0, 0, 0, 0);
    /* line-height: 2; */
    display: flex;

    :hover {
      text-decoration-color: rgba(255, 255, 255, 0.5);
    }
  }
`

const StyledIcon = styled.div`
  display: inline-block;
  margin-left: 10px;
  & > svg {
    width: 24px;
    fill: #fff;
    :hover {
      fill: #ff0045;
    }
  }
`
const Backlink = styled.div`
  display: flex;
`
const Footer = props => (
  <StyledFooter>
    <div>
      <div>
        <a
          href="https://mediapioneer.com/impressum/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link zum Impressum"
        >
          Impressum
        </a>
        <a
          href="https://mediapioneer.com/datenschutz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link zum Datenschutz"
        >
          Datenschutz
        </a>
        <Backlink>
          <span>Website: </span>
          <a
            href="https://pixel-pink.de"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link zur PixelPink-Website"
          >
            PixelPink
          </a>
        </Backlink>
        <Backlink>
          <span>Artwork: </span>
          <a
            href="https://amadeusamadeus.de/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link zu Amadeus Fronks Website"
          >
            Amadeus Fronk
          </a>
        </Backlink>
      </div>
      <div>
        <a
          href="https://www.instagram.com/media.pioneer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Media Pioneer on instagram"
        >
          <StyledIcon>
            <Icon icon={ICONS.INSTAGRAM} />
          </StyledIcon>
        </a>
        <a
          href="https://twitter.com/mediapioneercom"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Media Pioneer on twitter"
        >
          <StyledIcon>
            <Icon icon={ICONS.TWITTER} />
          </StyledIcon>
        </a>
        <a
          href="https://www.linkedin.com/company/media-pioneer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Media Pioneer on linkedIn"
        >
          <StyledIcon>
            <Icon icon={ICONS.LINKEDIN} />
          </StyledIcon>
        </a>
      </div>
    </div>
  </StyledFooter>
)
export default Footer
