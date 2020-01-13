import React from "react"
import styled from "styled-components"

import ShowCaseImage from "./ImageComponents/ShowCaseImage"
import ProviderLogos from "./ProviderLogos"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
  position: relative;
  display: block;
  width: 100%;
  background: #fff;
  padding-top: 16px;
  & > div {
    max-width: 1256px;
    margin: auto;
    @media ${device.tablet} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row: auto;
      height: 750px;
      overflow: visible;
      align-items: center;
    }
  }
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 24px;
  /* max-width: 560px; */
  a {
    color: #eb003f;
  }
  @media ${device.tablet} {
    grid-column: 3/5;
    grid-row: 1;
  }
`

const KeepInTouch = props => (
  <StyledSection>
    <div>
      <ShowCaseImage></ShowCaseImage>
      <ContentContainer>
        <h2>Jetzt abonnieren</h2>
        <p>
          Kostenlos, werbefrei und top-aktuell an jedem Montag: Abonnieren Sie
          Wall Street Weekly mit Sophie Schimansky bei Ihrem Streaming-Anbieter.
          Über Ihr Feedback freuen wir uns unter{" "}
          <a href="mailto:wallstreetweekly@mediapioneer.com">
            wallstreetweekly@mediapioneer.com
          </a>
        </p>

        <ProviderLogos></ProviderLogos>
      </ContentContainer>
    </div>
  </StyledSection>
)

export default KeepInTouch
