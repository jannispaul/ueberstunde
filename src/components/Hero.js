import React from "react"
import styled from "styled-components"

import HeroImage from "./ImageComponents/HeroImage"
import ProviderLogos from "./ProviderLogos"
import { device } from "../theme/breakpoints"
import { Link } from "gatsby"
import arrowDown from "../content/images/arrow-down.svg"

const StyledHero = styled.section`
  position: relative;
  display: block;
  width: 100%;
  background: #090006;
`
const ContentContainer = styled.div`
  max-width: 1256px;
  margin: auto;
  position: relative;
  /* overflow-y: hidden; */
  overflow-x: visible;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 750px;
    /* grid-row: auto; */
    height: 750px;
    align-items: center;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 24px;
  max-width: 748px;
  margin: auto;
  & > p {
    color: #fff;
  }
  & > h1 {
    /* margin-bottom: 1rem; */
    color: #fff;
  }
  @media ${device.laptop} {
    grid-column: 1/3;
    grid-row: 1;
  }
`

const MoreLink = styled(Link)`
  color: #fff;
  display: flex;
  text-decoration: none;
  line-height: 1.3;
  align-items: center;
  & > img {
    margin-right: 16px;
  }
`

const Hero = props => (
  <StyledHero>
    <HeroImage></HeroImage>
    <ContentContainer>
      <HeroContent>
        <h1>Der Feierabend-Talk mit Marina Weisband und Michael Bröcker</h1>
        <p>
          In dem Podcast direkt aus der Hauptstadt sprechen
          Pioneer-Chefredakteur Michael Bröcker und die frühere
          Piraten-Geschäftsführerin Marina Weisband mit einem Gast aus Politik,
          Wirtschaft oder Gesellschaft eine Stunde über ein Thema, das diese
          Person besonders ausmacht.
        </p>

        <ProviderLogos></ProviderLogos>
        <MoreLink to="#episoden">
          <img src={arrowDown} alt="Pfeil nach unten" />
          Jetzt
          <br />
          anhören
        </MoreLink>
      </HeroContent>
    </ContentContainer>
  </StyledHero>
)

export default Hero
