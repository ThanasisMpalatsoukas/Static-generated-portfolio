import React from "react"
import {graphql, Link} from "gatsby"
import '../../css/index.css';

import Layout from "../../components/Templates/Starter/layout";
import SEO from  "../../components/Templates/Starter/seo";
import {Pagination} from "../../components/Templates/Starter/Pagination"

export default class BlogPost extends React.Component  {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const {numPages, currentPage} = this.props.pageContext;
    return (
      <Layout>
      <SEO title="Home" />
        {posts.map(({ node }) => {
          return (
            <div style={{width:'100%'}}>
              <div className="bg-white border border-gray-400 p-5 mt-5">
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
                    <p className="text-right text-xs text-gray-600" style={{width:'100%'}}>{node.timeToRead} min read</p>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
        <Pagination numPages={numPages} currentPage={currentPage} />
    </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`

