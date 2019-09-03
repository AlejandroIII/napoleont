
import React from 'react'
import {  graphql } from 'gatsby'
import Layout from '../components/layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const AuthorTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiNtauthor.name}</h1>
      <ul>
        {data.strapiNtauthor.posts.map(post => (
          <li key={post.id}>
            <h2>
              <AniLink cover direction="left" bg="#161631" to={`/${post.permalink}`}>{post.name}</AniLink>
            </h2>
            
          </li>
        ))}
      </ul>
    </Layout>
  )
  
export default AuthorTemplate

export const query = graphql`
  query AuthorTemplate($id: String!) {
    strapiNtauthor(id: { eq: $id }) {
      id
      name
      posts {
        id
        name
        permalink
      }
    }
  }
` 