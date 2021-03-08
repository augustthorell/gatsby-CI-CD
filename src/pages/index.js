import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p>This is a test project to understand TravicCI</p>
    <p>Lets cross our fingers that it works well</p>

  </Layout>
)

export default IndexPage
