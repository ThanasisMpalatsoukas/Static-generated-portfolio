import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Tags from "./Sidebar/Tags";


const Sidebar = ({ siteTitle }) => {

    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark {
        group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
        }
        }
    }
    `);

  return (
    <div className="grid gap-2 col-span-3 mt-5">
        <div className="block">
            <Tags tags={data.allMarkdownRemark.group} />
        </div>
    </div>
  )
}

export default Sidebar;
