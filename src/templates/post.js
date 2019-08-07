import React from 'react'
import {Link, graphql}  from 'gatsby'
import  Img from 'gatsby-image'
import Layout from '../components/layout' 


const PostTemplate=({data}) =>  (

    
    <Layout>
        <h1>{data.strapiPost.name}</h1>
        <p><Link to={`/auth/Auth_${data.strapiPost.auth.id}`}>{data.strapiPost.auth.name}</Link></p>
        <Img fluid={data.strapiPost.image.childImageSharp.fluid}/>
        <p style={pStyle}>{data.strapiPost.text}</p>
    </Layout>
);

var pStyle ={
   whiteSpace: 'pre-wrap'
};

export default PostTemplate

export const query = graphql`
query PostTemplate($id: String!){
    strapiPost(id: {eq: $id}) {
        name
        text
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