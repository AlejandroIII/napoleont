
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ children }) => (
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
        padding: `1.25rem 1.0875rem`,
      }}
    >
      
        <AniLink cover direction="right" bg="#161631" 
          to="/">
          {children}
        </AniLink>
     
    </div>
  </header>
)





export default Header
