import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../content/images/ueberstunde-logo.svg"
import { device } from "../theme/breakpoints"
import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"

const StyledNav = styled.header`
  width: 100%;
  height: 100px;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
  position: relative;
  z-index: 100;
  @media ${device.tablet} {
    height: 142px;
  }
  @media ${device.laptop} {
    height: 165px;
  }

  & > div {
    padding: 0 24px;
    max-width: 100%;
    width: 1256px;
    margin: auto;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    /* Desktop Grid */
    @media ${device.laptop} {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 165px;
    }
  }
  & a {
    text-decoration: none;
  }
`

const StyledLogo = styled(Link)`
  grid-column: 1;

  grid-row: 1;
  display: flex;
  align-items: center;
  height: 100%;

  @media ${device.laptop} {
    grid-column: 2;
    margin: auto;
  }
  & > img {
    width: 140px;
    height: auto;
    @media ${device.tablet} {
      width: 180px;
    }
    @media ${device.laptop} {
      width: 250px;
    }
    @media ${device.laptopL} {
      width: 320px;
    }
  }
`

const SocialLinks = styled.div`
  grid-column: 3;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  & > a:not(:last-of-type) {
    margin-right: 4px;
    @media ${device.mobileL} {
      margin-right: 16px;
    }
  }
`

const StyledLinks = styled.div`
  display: none;

  @media ${device.laptop} {
    display: inline-block;
  }
  /* font-family: Oswald, "Open Sans", -apple-system, BlinkMacSystemFont, Arial,
    sans-serif; */
  letter-spacing: 0.73px;
  font-size: 20px;
  font-weight: 400;
  color: #030203;
  grid-column: 1/3;
  grid-row: 1;

  & > a:not(:last-of-type) {
    margin-right: 46px;
  }
  & > a:hover {
    color: #ff0045;
  }
`
const StyledIcon = styled.div`
  display: inline-block;
  margin-left: 10px;
  & > svg {
    width: 24px;
    fill: #030203;
    :hover {
      fill: #ff0045;
    }
  }
`

const Navigation = props => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <StyledNav>
      <div>
        <StyledLinks>
          <Link to="/">Podcast</Link>
          <Link to="/#beitraege">Beiträge</Link>
          <Link to="/#hosts">Hosts</Link>
        </StyledLinks>

        <StyledLogo to="/">
          <img src={Logo} alt="Wall Street Weekly Logo in Serifenschrift" />
        </StyledLogo>

        <SocialLinks>
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
        </SocialLinks>
      </div>
    </StyledNav>
  )
}

export default Navigation
