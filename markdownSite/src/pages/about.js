import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h2>About Me</h2>
      <h2>Mr Career change</h2>
      <p>
        Go to the <Link to={"./contact"}>Contact Page</Link> to reach me.
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
