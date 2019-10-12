
import React from 'react'
import {  graphql } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card'
import Img from 'gatsby-image'
import SEO from "../components/seo"
const AuthorTemplate = ({ data }) => (
    <Layout>
     <SEO title={`Escritos - ${data.strapiNtauthor.name} `} />
    <div className="author-info">
    <div className="profile">
<Img className="" fluid={data.strapiNtauthor.profile.childImageSharp.fluid}/>
    </div>
      <h1>{data.strapiNtauthor.name}</h1>
    </div>
    <hr/>
      <div className="flex-grid">
        {data.strapiNtauthor.posts.map(post => (
         
            
          <Card key={post.id} permalink={post.permalink} name={post.name} date={post.published} image={post.image.childImageSharp.fluid}></Card>
         
        ))}
      </div>
    </Layout>
  )
  
export default AuthorTemplate

export const query = graphql`
  query AuthorTemplate($id: String!) {
    strapiNtauthor(id: { eq: $id }) {
      id
      name
      profile {
        childImageSharp{
          fluid(maxWidth:300){
            ...GatsbyImageSharpFluid
          }
        }
      }
      posts {
        id
        permalink
        published(formatString: "MMMM DD, YYYY")
        name
        image {
          childImageSharp {
              fluid(maxWidth:1200){
                  ...GatsbyImageSharpFluid
              }
          }
      }
      }
    }
  }
` 