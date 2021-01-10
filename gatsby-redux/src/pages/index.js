import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Counter from "../components/Counter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Counter />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/never-exists/">Go to 404 page</Link> <br />
  </Layout>
)

export default IndexPage
