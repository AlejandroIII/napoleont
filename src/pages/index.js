import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import Img from 'gatsby-image'
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
   
    <ul>
      {data.allStrapiPost.edges.map(document => (
        <li key={document.node.id}>
          <Img fluid={document.node.image.childImageSharp.fluid}/>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.name}</Link>
          </h2>
          <p style={pStyle}>{document.node.text}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
var pStyle = {
  whiteSpace: 'pre-wrap'
};
export default IndexPage

export const pageQuery = graphql `  
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
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