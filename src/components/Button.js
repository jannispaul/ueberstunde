import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledButton = styled(Link)`
  display: block;
  margin: auto;
  font-family: Oswald, "Open Sans", -apple-system, BlinkMacSystemFont, Arial,
    sans-serif;
  font-size: 18px;
  color: #7300dc;
  border: 2px solid #7300dc;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.28px;

  width: 250px;
  max-width: 100%;
  user-select: none;
  cursor: pointer;
  position: relative;
  padding: 14px 0 13px 0;
  margin-bottom: 40px;

  transform: translateY(0);
  transition: all var(--time-fast);

  :hover {
    transform: translateY(-1px);
    transition: all var(--time-fast);
  }
  :active {
    transform: translateY(1px);
  }
`

const Button = props => (
  <StyledButton
    fullwidth={props.fullwidth}
    primary={props.primary}
    to={props.to}
    type={props.type}
  >
    {props.children}
  </StyledButton>
)

export default Button
