import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/Templates/Starter/layout";
import SEO from  "../../components/Templates/Starter/seo";

// Components
const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
      <Layout>
      <h1 className="mt-5">{tagHeader}</h1>
      <SEO title="Home" />
      {edges.map(({ node }) => {
          console.log(node);
              return (
                <div className="bg-white border border-gray-400 p-5 mt-2" style={{width:'100%'}}>
                  <Link to={`/blog/post${node.fields.slug}index`}>
                  <span className="text-xs text-gray-700">{node.frontmatter.date}</span>
                  <h3>{node.excerpt}</h3>
                  </Link>
                  <div className="flex">
                    <div>
                        {
                            node.frontmatter.tags.map( (tag, i) => {
                                console.log(tag);
                                return (
                                <span className={"text-gray-700 text-sm " + (i!==0 ? "ml-3" : "")}><Link to={`/tags/${tag}`}>#{tag}</Link></span>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-1">
                      <p className="text-right text-xs text-gray-600" style={{width:'100%'}}>6 min read</p>
                    </div>
    
                  </div>
                </div>
              )
            })}
    </Layout>
  )
}

export default Tags;


export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
            excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`