import React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Todo from "../components/Todo/Todo.component"

const SecondPage: React.FC<PageProps> = ({ path }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Current Path: {path}</p>
    <Todo />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
