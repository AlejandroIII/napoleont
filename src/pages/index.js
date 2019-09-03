import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import Img from 'gatsby-image'
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
   
    <section>
     
      {data.allStrapiNtpost.edges.map(document => (
        <div key={document.node.permalink}>
          <AniLink cover direction="left" bg="#161631" to={`/${document.node.permalink}`}><Img fluid={document.node.image.childImageSharp.fluid}/></AniLink>
          <h2>
            <Link to={`/${document.node.permalink}`}>{document.node.name}</Link>
          </h2>
          <p>{document.node.published}</p>
          <ReactMarkdown source={document.node.text.substring(0,400).concat("...")}/>
         
        </div>
      ))}
    </section>
   
  </Layout>
)

export default IndexPage

export const pageQuery = graphql `  
  query IndexQuery {
    allStrapiNtpost {
      edges {
        node {
          id
          permalink
          published(formatString: "MMMM DD, YYYY")
          name
          text
          image {
            childImageSharp {
             fluid(maxWidth: 960) {
               ...GatsbyImageSharpFluid
             }
            }
          }
        }
      }
    }
  }
`