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
    <p>Tom is a web developer and software architect based in London.</p>
    <p>My specialties range from building websites for restaurants to complex cloud solutions.</p>
    <h1 style={{color:'#EB4C49'}}>PROJECTS</h1>
    <h1 style={{color:'#E03D5B'}}>WORK</h1>
    <h1 style={{color:'#C54F81'}}>CONTACT</h1>
  </Layout>
)

var sunStyles = {
  // display: 'flex',
  // justifyContent: 'center',
  width: `250px`,
}


export default IndexPage
