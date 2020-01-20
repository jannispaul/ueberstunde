import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import Icon from "../components/Icon"
import AboutBGImage from "../components/ImageComponents/AboutBGImage"
import { ICONS } from "../theme/Icons"
import { device } from "../theme/breakpoints"

const StyledAbout = styled.section`
  position: relative;
  width: 100%;
  padding: 64px 24px 64px;
  background: #090006;
  overflow: hidden;
  & p,
  h2 {
    color: #fff;
  }
  @media ${device.tablet} {
    padding: 64px 24px 16px;
  }
`
const FlexContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  & > div:first-of-type {
    margin-bottom: 4rem;
  }
  @media ${device.tablet} {
    margin: auto;
    flex-direction: row;
    justify-content: space-around;
    & > div:first-of-type {
      margin-right: 4rem;
    }
  }
`

const SocialContainer = styled.div`
  font-size: 21.6px;
  font-weight: 600;
  color: #ff0045;
  letter-spacing: 0.34px;
  margin-top: 16px;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`

const StyledIcon = styled.div`
  display: inline-block;
  margin-left: 16px;
  @media ${device.mobileM} {
    margin-left: 24px;
  }
  & > svg {
    fill: #ff0045;
    width: 24px;
  }
`

const About = props => (
  <StyledAbout>
    <FlexContainer>
      <div>
        <h2>Über Marina</h2>
        <p>
          Sophie Schimansky ist Volkswirtin und Journalistin und berichtet seit
          Jahren aus der Welt der Finanzen und Wirtschaft – für TV, Print und
          Radio. Sie lebt seit 2015 in New York und fühlt sich besonders auf dem
          Börsenparkett der Wall Street zu Hause.
        </p>
        <SocialContainer>
          Folgen:
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
        </SocialContainer>
      </div>
      <div>
        <h2>Über Michael</h2>
        <p>
          Sophie Schimansky ist Volkswirtin und Journalistin und berichtet seit
          Jahren aus der Welt der Finanzen und Wirtschaft – für TV, Print und
          Radio. Sie lebt seit 2015 in New York und fühlt sich besonders auf dem
          Börsenparkett der Wall Street zu Hause.
        </p>
        <SocialContainer>
          Folgen:
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
        </SocialContainer>
      </div>
    </FlexContainer>
    <AboutBGImage></AboutBGImage>
  </StyledAbout>
)

export default About
