
import React from 'react'
import {  graphql } from 'gatsby'
import Layout from '../components/layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const CatTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiNtcat.catname}</h1>
      <ul>
        {data.strapiNtcat.ntposts.map(post => (
          <li key={post.id}>
            <h2>
              <AniLink cover direction="left" bg="#161631" to={`/${post.permalink}`}>{post.name}</AniLink>
            </h2>
            
          </li>
        ))}
      </ul>
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
        name
        permalink
      }
    }
  }
` 