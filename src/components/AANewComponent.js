import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
// import deezer from "../content/images/providers/deezer.svg"
import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"

const StyledIcon = styled.div`
  & > svg {
    width: 24px;
    fill: #fff;
  }
`

const MyStatelessComponent = props => (
  <div>
    {props.name}
    <StyledIcon>
      <Icon icon={ICONS.RSS} />
    </StyledIcon>
  </div>
)

export default MyStatelessComponent
