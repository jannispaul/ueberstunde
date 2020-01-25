import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

const StyledSmall = styled.small`
  margin-bottom: 8px;
  color: ${props => (props.color ? props.color : "#575757")};
  letter-spacing: 1.33px;
  @media ${device.tablet} {
    color: ${props => (props.tabletColor ? props.tabletColor : "#575757")};
  }
`

const SmallLable = props => (
  <StyledSmall color={props.color} tabletColor={props.tabletColor}>
    {props.children}
  </StyledSmall>
)

export default SmallLable
