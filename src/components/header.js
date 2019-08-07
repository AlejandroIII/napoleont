
import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#161631`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <AniLink cover direction="right" bg="#161631" 
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </AniLink>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
