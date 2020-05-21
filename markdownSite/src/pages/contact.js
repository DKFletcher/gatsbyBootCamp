import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h2>Contact Me</h2>
      <p>Get me at dFletcher@MADFullStack.com</p>
      <p>
        <a href="https://www.whatmotivateslearning.com" target="_blank">
          Here
        </a>{" "}
        is a good example of my work.
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
