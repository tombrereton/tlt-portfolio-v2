import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={sunStyles}>
      <Image />
    </div>
    <p>Hi, I'm <span style={{ color: '#ffffff' }}>Tom</span>. I'm a web developer and software architect based in <span style={{ color: '#ffffff' }}>London</span>.</p>
    <p>My specialties range from building websites for restaurants to complex cloud solutions.</p>
    <h1 style={{ color: '#EB4C49' }}>PROJECTS</h1>
    <div style={projectShelfStyles}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
    <h1 style={{ color: '#E03D5B' }}>WORK</h1>
    <p>work placeholder</p>
    <h1 style={{ color: '#C54F81' }}>CONTACT</h1>
    <p>tom@tomlewis.tech</p>
    <p><a href="https://www.linkedin.com/in/tbrereton/">LinkedIn</a></p>
    <p><a href=" https://github.com/tombrereton">Github</a></p>
  </Layout>
)

var sunStyles = {
  width: `250px`,
  margin: 'auto',
  marginBottom: '2em'
}

var projectShelfStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflowX: "auto",
  padding: "1em 0 1em 0",
  height: "auto",
}


export default IndexPage
