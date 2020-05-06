import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { slide as Menu } from 'react-burger-menu'

import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header style={styles}>
    <div style={{ width: `40px` }}>
      <Logo />
    </div>
    <div style={{ width: `40px` }}>
      <Menu disableAutoFocus right styles={menuStyles}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    </div>
  </header>
)

var styles = {
  position: 'fixed',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '20px',
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingBottom: '10px',
  backgroundColor: '#131313',
  width: '100vw',
  boxShadow: '0 20px 20px #131313'
}

var menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    right: '20px',
    top: '26px'
  },
  bmBurgerBars: {
    background: '#959595',
    height: '2px'
  },
  bmCross: {
    background: '#ffffff'
  },
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
