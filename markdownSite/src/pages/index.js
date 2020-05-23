import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const IndexPage = () => {
  return (
    <Layout>
      <h2>Hi I'm Donald</h2>
      <h2>I am a full stack developer.</h2>
      <h3>I live in Glasgow</h3>
      <p>
        Need a developer? <Link to={"/contact"}>Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
