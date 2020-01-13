import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Button from "../components/Button"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Nicht gefunden" index="noindex" />
    <h1>Diese Seite konnte leider nicht gefunden werden.</h1>
    <br />
    <Button to="/">Zur Startseite</Button>
  </Layout>
)

export default NotFoundPage
