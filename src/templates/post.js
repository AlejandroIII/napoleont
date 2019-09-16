import React from 'react'
import { graphql}  from 'gatsby'
import  Img from 'gatsby-image'
import Layout from '../components/layout' 
import ReactMarkdown from "react-markdown"
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const PostTemplate=({data}) =>  (

    
    <Layout >
    <div className={data.strapiNtpost.ntcat.catname}>

        <Img fluid={data.strapiNtpost.image.childImageSharp.fluid} style={{marginBottom:"3rem"}}/>
        <h1>{data.strapiNtpost.name}</h1>
        <AniLink cover direction="left" bg="#161631" to={`/${data.strapiNtpost.author.permalink}`} >{data.strapiNtpost.author.name}</AniLink>
        <br/>
        <br/>

        <ReactMarkdown source={data.strapiNtpost.text} />
    </div>
    </Layout>
);


export default PostTemplate

export const query = graphql`
query PostTemplate($id: String!){    strapiNtpost(id: {eq: $id}) {
        
        published(formatString: "MMMM DD, YYYY")
        name
        text
        permalink
        image {
            childImageSharp {
                fluid(maxWidth:1200){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        author {
            id
            name
            permalink

        }
        ntcat {
            id
            catname
        }
    }
}
`