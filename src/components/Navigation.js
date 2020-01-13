import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../content/images/wsw-logo.svg"
import { device } from "../theme/breakpoints"
import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"

const StyledNav = styled.header`
  width: 100%;
  height: 142px;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
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
    grid-template-rows: 142px;

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

  @media ${device.laptop} {
    grid-column: 2;
    margin: auto;
  }
  grid-row: 1;
  display: flex;
  align-items: center;
  height: 100%;

  & > img {
    width: 105px;
    height: auto;
    @media ${device.laptop} {
      width: 175px;
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
  font-family: Oswald, "Open Sans", -apple-system, BlinkMacSystemFont, Arial,
    sans-serif;
  letter-spacing: 0.73px;
  font-size: 24px;
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
          <Link to="/#episoden">Episoden</Link>
          <Link to="/#host">Host</Link>
        </StyledLinks>

        <StyledLogo to="/">
          <img src={Logo} alt="Wall Street Weekly Logo in Serifenschrift" />
        </StyledLogo>

        <SocialLinks>
          <a
            href="https://instagram.com/sophiesnews"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sophie Schimansky on instagram"
          >
            <StyledIcon>
              <Icon icon={ICONS.INSTAGRAM} />
            </StyledIcon>
          </a>
          <a
            href="https://twitter.com/soschimansky"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sophie Schimansky on twitter"
          >
            <StyledIcon>
              <Icon icon={ICONS.TWITTER} />
            </StyledIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/sophie-schimansky-88436158/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sophie Schimansky on linkedIn"
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
