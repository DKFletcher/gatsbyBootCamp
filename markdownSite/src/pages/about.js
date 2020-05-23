import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const AboutPage = () => {
  return (
    <Layout>
      <h2>About Me</h2>
      <h2>Mr Career change</h2>
      <p>
        Go to the <Link to={"/contact"}>Contact Page</Link> to reach me.
      </p>
    </Layout>
  )
}

export default AboutPage
