
import React from 'react'
import {  graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
const CatTemplate = ({ data }) => (
    <Layout>
    <SEO title={`${data.strapiNtcat.catname}`} />
    <div className="author-info">

      <h1>{data.strapiNtcat.catname}</h1>
    </div>
      <div className="flex-grid">
        {data.strapiNtcat.ntposts.map(post => (
          
            <Card key={post.id} permalink={post.permalink} name={post.name} date={post.published} image={post.image.childImageSharp.fluid}></Card>
          
        ))}
      </div>
    </Layout>
  )
  
export default CatTemplate

export const query = graphql`
  query CatTemplate($id: String!) {
    strapiNtcat(id: { eq: $id }) {
      id
      catname
      ntposts {
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