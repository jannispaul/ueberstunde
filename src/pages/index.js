import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import RecentEpisodes from "../components/RecentEpisodes"
import Hero from "../components/Hero"
import About from "../components/About"
import MPProducts from "../components/MPProducts"
import KeepInTouch from "../components/KeepInTouch"
import ScrollAnchor from "../components/ScrollAnchor"

const IndexPage = () => (
  <Layout>
    <SEO
      // title="Wall Street Weekly – Podcast mit Sophie Schimansky "
      lang="de"
    />
    <Hero></Hero>
    <ScrollAnchor id="episoden"></ScrollAnchor>
    <RecentEpisodes></RecentEpisodes>
    <ScrollAnchor id="host"></ScrollAnchor>
    <About></About>
    <KeepInTouch></KeepInTouch>
    <MPProducts></MPProducts>
  </Layout>
)

export default IndexPage
