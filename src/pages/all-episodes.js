import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import AllEpisodes from "../components/AllEpisodes"
import About from "../components/About"
import KeepInTouch from "../components/KeepInTouch"
import MPProducts from "../components/MPProducts"

// import { device } from "../theme/breakpoints"

const StyledH1 = styled.h1`
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 48px;
  z-index: 2;
  position: relative;
`

const AllEpisodesPage = () => (
  <Layout logocolor="#69d9c2">
    <SEO title="Alle Episoden" />
    <StyledH1>Alle Episoden</StyledH1>

    <AllEpisodes></AllEpisodes>
    <About></About>
    <KeepInTouch></KeepInTouch>
    <MPProducts></MPProducts>
  </Layout>
)

export default AllEpisodesPage
