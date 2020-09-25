/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */


import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from './Sidebar'
import profile from '../../../images/profile.jpg';
import {Profile} from './Profile';
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container mx-auto grid grid-cols-12">
        {/* Left sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="grid col-span-7 ml-5">{children}</main>
        
        {/* Right sidebar */}
        <div className="grid col-span-2 mt-5">  
          <div>
            <Profile profile={profile} />
          </div>
        </div>
      </div>
        <footer style={{
          marginTop: `2rem`
        }}>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
