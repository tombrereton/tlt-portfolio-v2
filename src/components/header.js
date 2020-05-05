import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../components/logo"
import Menu from "../components/menu"

const Header = ({ siteTitle }) => (
  <header style={styles}>
    <div style={{ width: `40px` }}>
      <Logo />
    </div>
    <div style={{ width: `40px` }}>
      <Menu />
    </div>
  </header>
)

var styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px'

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
