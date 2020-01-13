import React from "react"
import styled from "styled-components"
// import { device } from "../theme/breakpoints"
import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"

const StyledButton = styled.a`
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 14px 10px rgba(174, 174, 174, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms transform ease;
  text-decoration: none;
  & > span {
    font-weight: 500;
    margin-bottom: -2px;
    opacity: 0.5;
    font-size: 16px;
    transition: 200ms opacity ease;
    color: #000;
  }
  :hover {
    transform: scale(1.05);
    transition: 200ms transform ease;
    cursor: pointer;
    & > span {
      opacity: 1;
      transition: 200ms opacity ease;
    }
  }
  & > svg {
    width: 16px;
    fill: #ff0045;
    margin-right: 8px;
  }
`

const RSSButton = props => (
  <StyledButton href="https://wall-street-weekly.podigee.io/feed/mp3">
    <Icon icon={ICONS.RSS} />
    <span>RSS Feed</span>
  </StyledButton>
)
export default RSSButton
