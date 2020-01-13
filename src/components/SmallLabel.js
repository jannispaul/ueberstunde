import React from "react"
import styled from "styled-components"

const StyledSmall = styled.small`
  margin-bottom: 8px;
  color: #575757;
  letter-spacing: 1.33px;
`

const SmallLable = props => (
  <StyledSmall color={props.color}>{props.children}</StyledSmall>
)

export default SmallLable
