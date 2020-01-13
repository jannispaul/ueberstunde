import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import styled from "styled-components"
import "../theme/font-face.css"
import "../theme/styles.css"

import MPPresents from "./MPPresents"
import Navigation from "./Navigation"
import Footer from "./Footer"
import CookieNotice from "../components/CookieNotice"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <CookieNotice></CookieNotice>
      <MPPresents></MPPresents>
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
