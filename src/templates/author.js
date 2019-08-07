
import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const AuthorTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiAuth.name}</h1>
      <ul>
        {data.strapiAuth.posts.map(post => (
          <li key={post.id}>
            <h2>
              <Link to={`/Post_${post.id}`}>{post.name}</Link>
            </h2>
            
          </li>
        ))}
      </ul>
    </Layout>
  )
  
export default AuthorTemplate

export const query = graphql`
  query AuthorTemplate($id: String!) {
    strapiAuth(id: { eq: $id }) {
      id
      name
      posts {
        id
        name
      }
    }
  }
` 