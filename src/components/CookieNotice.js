import React from "react"
import CookieConsent from "react-cookie-consent"
// import { Link } from "gatsby"
import styled from "styled-components"

const StyledContainer = styled.div`
  & > div {
    display: flex;
    align-items: center !important;
  }
`

const CookieNotice = () => (
  <StyledContainer>
    <CookieConsent
      debug={false}
      location="bottom"
      buttonText="Verstanden"
      cookieName="WallStreetWeeklyCookieNoticeAccepted"
      style={{
        background: "#e8edfa",
        color: "black",
        position: "relative",
        zIndex: "200",
        display: "flex",
      }}
      buttonStyle={{
        background: "black",
        color: "#e8edfa",
        fontWeight: "600",
        fontSize: "18px",
        padding: "18px",
        border: "none",
        cursor: "pointer",
      }}
      expires={365}
    >
      Diese Website nutzt Cookies um Ihr Erlebnis zu verbessern.{" "}
      <a
        href="https://mediapioneer.com/datenschutz"
        style={{ color: "black" }}
        aria-label="Link zum Datenschutz"
      >
        Mehr erfahren
      </a>
    </CookieConsent>
  </StyledContainer>
)

export default CookieNotice
