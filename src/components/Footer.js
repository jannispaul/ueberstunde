import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import { device } from "../theme/breakpoints"
import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"

const StyledFooter = styled.footer`
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

  /*Links in footer*/
  a {
    margin: 10px;
    text-decoration: undeline;
    text-decoration-color: rgba(0, 0, 0, 0);
    line-height: 2;
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
      </div>
      <div>
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
      </div>
    </div>
  </StyledFooter>
)
export default Footer
