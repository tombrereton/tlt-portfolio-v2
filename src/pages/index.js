import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={sunStyles}>
      <Image />
    </div>
    <p><span style={{color: '#ffffff'}}>Tom</span> is a web developer and software architect based in <span style={{color: '#ffffff'}}>London</span>.</p>
    <p>My specialties range from building websites for restaurants to complex cloud solutions.</p>
    <h1 style={{ color: '#EB4C49' }}>PROJECTS</h1>
    <p>projects placeholder</p>
    <h1 style={{ color: '#E03D5B' }}>WORK</h1>
    <p>work placeholder</p>
    <h1 style={{ color: '#C54F81' }}>CONTACT</h1>
    <p>tom@tomlewis.tech</p>
    <p><a href="https://www.linkedin.com/in/tbrereton/">LinkedIn</a></p>
    <p><a href=" https://github.com/tombrereton">Github</a></p>
  </Layout>
)

var sunStyles = {
  // display: 'flex',
  // justifyContent: 'center',
  width: `250px`,
  margin: 'auto',
  marginBottom: '2em'
}


export default IndexPage
