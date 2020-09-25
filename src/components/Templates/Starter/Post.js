import React from "react"
import {Link} from 'gatsby';

import {FacebookShareButton, FacebookIcon, FacebookShareCount} from "react-share";

const Post = ({post}) => {

  return (

    <div className="bg-white border border-gray-400 p-5 mt-5" style={{width:'100%'}}>
         <span className="text-xs text-gray-700">{post.frontmatter.date}</span>
        <img style={{width:'100%', height: '280px', objectFit:'cover'}} alt="A big cover." src={post.frontmatter.featuredImage.childImageSharp.fluid.originalImg}/>
        <h3 className="mb-1">{post.frontmatter.title}</h3>
        <div className="flex">
            <div>
                {
                    post.frontmatter.tags.map( (tag, i) => {
                        return (
                        <span className={"text-gray-700 text-sm " + (i!==0 ? "ml-3" : "")}><Link to={`/tags/${tag}`}>#{tag}</Link></span>
                        )
                    })
                }
            </div>
            <div className="flex flex-1">
            <p className="text-right text-xs text-gray-600" style={{width:'100%'}}>{post.timeToRead} min read</p>
        </div>

        </div>
        <p className="mt-1 mb-3">{post.internal.content}</p>
        {/* <FacebookShareButton 
                url={window.location.href}
                quote={`Sakisbal - ${post.frontmatter.title}`}
                hashtag={post.frontmatter.tags[0].tag}
                >
                 <FacebookIcon size={36} />
              </FacebookShareButton> */}
    </div>
  )
}

export default Post;