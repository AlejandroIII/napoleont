/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const makeRequest = (graphql, request)=> new Promise((resolve, reject)=> {
    //query4 nodes in creating pages
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }

            return result;
        })
    )
});

//gatsby api create pagess from data

exports.createPages = ({ actions, graphql}) => {
    const { createPage } = actions;

    const getPosts = makeRequest(graphql, `
    {
        allStrapiNtpost {
            edges 
            {
                node {
                    id
                    permalink
                }
            }
        }
    }
    `).then(result=>{
        //pages from each aarticle
        result.data.allStrapiNtpost.edges.forEach(({node}) => {
            createPage({
                path: `/${node.permalink}`,
                component: path.resolve(`src/templates/post.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });

    const getAuthors = makeRequest(graphql,`
    {
        allStrapiNtauthor {
            edges
            {
                node {
                    id
                    permalink
                }
            }
        }
    }
    `).then(result => {
        //pages 4 each author
        result.data.allStrapiNtauthor.edges.forEach(({node}) => {
            createPage({
                path: `/${node.permalink}`,
                component:path.resolve(`src/templates/author.js`),
                context: {
                    id:node.id,
                },
            })
        })
    });
    const getCats = makeRequest(graphql,`
    {
        allStrapiNtcat {
            edges
            {
                node {
                    id
                    catpermalink
                }
            }
        }
    }
    `).then(result => {
        //pages 4 each author
        result.data.allStrapiNtcat.edges.forEach(({node}) => {
            createPage({
                path: `/${node.catpermalink}`,
                component:path.resolve(`src/templates/cat.js`),
                context: {
                    id:node.id,
                },
            })
        })
    });
    //query 4 posts to use in creatin pages
    return Promise.all([
       getAuthors,
        getPosts,
        getCats,
    ])
};
