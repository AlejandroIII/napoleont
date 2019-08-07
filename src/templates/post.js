import React from 'react'
import { graphql}  from 'gatsby'
import  Img from 'gatsby-image'
import Layout from '../components/layout' 
import ReactMarkdown from "react-markdown"

const PostTemplate=({data}) =>  (

    
    <Layout>
        <Img fluid={data.strapiPost.image.childImageSharp.fluid}/>
        <h1>{data.strapiPost.name}</h1>
        <p>{data.strapiPost.published}</p>

        <ReactMarkdown source={data.strapiPost.text}/>
    </Layout>
);


export default PostTemplate

export const query = graphql`
query PostTemplate($id: String!){    strapiPost(id: {eq: $id}) {
        
        published(formatString: "MMMM DD, YYYY")
        name
        text
        permalink
        image {
            childImageSharp {
                fluid(maxWidth: 960){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        auth {
            id
            name

        }
    }
}
`