import PropTypes from "prop-types"
import React from "react"
import logo from '../../../images/logo.png';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {HeaderData} from './Header/header-info';
import {Link} from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-white border border-gray-400">
    <div className="container mx-auto">
      <nav className="flex bg-white p-6 flex-wrap">
        <div className="flex-initial text-white mr-6 flex-wrap sm:hidden md:block">
          <Link to="/"><img className="mb-0 sm:hidden md:block" src={logo} alt={logo}/></Link>
        </div>
        <HeaderData icon={faPhone} info="6988711872" />
        <HeaderData icon={faEnvelope} info="thanasismpalatsoukas@gmail.com" />
        
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
