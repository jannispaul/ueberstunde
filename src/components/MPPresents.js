import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import MPPresents from "../content/images/mp-presents.svg"

const PresentedBy = styled.a`
  height: 55px;
  background: #2c2c2c;
  /* padding-top: 25px; */
  display: flex;
  justify-content: center;
  align-content: center;
`
const StyledImage = styled.img`
  max-width: 100%;
  width: 200px;
  @media ${device.tablet} {
    margin-top: 2px;
  }
`

const MyStatelessComponent = props => (
  <PresentedBy
    href="https://mediapioneer.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Link to mediapioneer.com"
  >
    <StyledImage src={MPPresents} alt="Mediapioneer presents Schriftzug" />
  </PresentedBy>
)

export default MyStatelessComponent
