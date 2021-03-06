/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Header from "./header"
import "./layout.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Layout = ({ children} ) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      
      logo: file(relativePath: {eq:"logo.png"}) {
        childImageSharp {
          fixed(width:200){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Header>

      <Img fixed={data.logo.childImageSharp.fixed} />
      <div className="navbar" > <AniLink cover direction="left" bg="#161631" to="/poemas">Poemas</AniLink> &nbsp; <AniLink cover direction="left" bg="#161631" to="/escritos">Escritos</AniLink> </div>
      </Header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1000,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by <a href="https://alejandro.at">Alejandro Tercero</a> with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> {` `}&  {` `}
          <a href="https://www.strapi.io">Strapi</a> 
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
