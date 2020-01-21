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
          Marina Weisband ist Publizistin, Grünen-Mitglied und war politische
          Geschäftsführerin der Piratenpartei. Die 32-jährige Diplom-Psychologin
          wuchs als Kind einer jüdischen Familie in Kiew auf. 1994 zog sie mit
          ihrer Familie als Kontingentflüchting nach Deutschland. Weisband lebt
          in Münster und engagiert sich für ein Schülerbeteiligungsprojekt zur
          Vermittlung von Demokratie. Zeitgemäße Bildung ist ihr Herzensthema.
        </p>
        <SocialContainer>
          Folgen:
          <a
            href="https://www.linkedin.com/in/marina-weisband-20a499110/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Marina Weisband on linkedIn"
          >
            <StyledIcon>
              <Icon icon={ICONS.LINKEDIN} />
            </StyledIcon>
          </a>
          <a
            href="https://www.instagram.com/afelia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Marina Weisband on instagram"
          >
            <StyledIcon>
              <Icon icon={ICONS.INSTAGRAM} />
            </StyledIcon>
          </a>
          <a
            href="https://twitter.com/Afelia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Marina Weisband on twitter"
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
          Michael Bröcker ist Chefredakteur von ThePioneer. Der 42-jährige
          Diplom-Volkswirt und frühere Chefredakteur der Rheinischen Post ist
          Hauptstädter mit rheinischem Antlitz. Seine Leidenschaften gelten der
          Politik, den klassischen Dingen des Lebens (bei Autos, Opern und den
          alten Griechen) und dem digitalen Wandel in den Medien. In Gabor
          Steingarts Medien-Startup ist er zuständig für: 100 Prozent
          Journalismus.
        </p>
        <SocialContainer>
          Folgen:
          <a
            href="https://www.linkedin.com/in/michael-br%C3%B6cker-8a4a41155/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Michael Bröcker on linkedIn"
          >
            <StyledIcon>
              <Icon icon={ICONS.LINKEDIN} />
            </StyledIcon>
          </a>
          <a
            href="https://www.instagram.com/mickbroecker/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Michael Bröcker on instagram"
          >
            <StyledIcon>
              <Icon icon={ICONS.INSTAGRAM} />
            </StyledIcon>
          </a>
          <a
            href="https://twitter.com/MichaelBroecker"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Michael Bröcker on twitter"
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
