/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import styled from "styled-components"
import Footer from "./Footer"

const Layout = ({ children }) => {
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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <StyledLayout>
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </>
  )
}

const StyledLayout = styled.div`
  width: 100%;
  color: white;
  margin-top: 60px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
