import React from "react"
import { graphql } from "gatsby"

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
        <div className="post-container" key={document.node.permalink}>
          <AniLink cover direction="left" bg="#161631" to={`/${document.node.permalink}`}>
          <Img fluid={document.node.image.childImageSharp.fluid}/>
          <h2 className="post-title">
           {document.node.name}
          </h2>
          <p className="date">{document.node.published}</p>
          <ReactMarkdown source={document.node.text.substring(0,150).concat("...")}/>
          </AniLink>
        <hr/>
        </div>
        
      ))}
    </section>
   
  </Layout>
)

export default IndexPage

export const pageQuery = graphql `  
  query IndexQuery {
    allStrapiNtpost (sort: {fields: strapiId, order: DESC}) {
      edges {
        node {
          strapiId
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