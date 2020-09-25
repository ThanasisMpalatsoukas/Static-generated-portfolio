/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const THEME = "Starter";
const fs = require('fs');
var files = fs.readdirSync(`./src/components/Templates/${THEME}/Pages`);

exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions
  const allTags = await graphql(`
  {
    postsRemark: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              excerpt
              timeToRead
              internal {
                  content
              }
              frontmatter {
                title
                date
                tags
                featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 1500) {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                      }
                    }
                  }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )


  // Create basic pages
  files.map( file => {
    console.log(file.split('.')[0]);
    createPage({
      path: `/${file.split('.')[0]}`,
      component: path.resolve(`./src/components/Templates/${THEME}/Pages/${file}`)
    })
  });

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // ...

  // Create blog-list pages
  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  const tags = allTags.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: path.resolve(`./src/templates/${THEME}/tag.js`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // Create single blog pages
  for (let i=0;i<posts.length;i++) {
      createPage({
          path: `/blog/post${posts[i].node.fields.slug}index`,
          component: path.resolve(`./src/templates/${THEME}/single-post.js`),
          context: {
              post: posts[i]
          }
      })
  }
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/blog/${i}`,
      component: path.resolve(`./src/templates/${THEME}/blog-post.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node, 
      value,
    })
  }
}