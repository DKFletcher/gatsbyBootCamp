import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
    <Head title='Contact'/>
      <h2>Contact Me</h2>
      <p>Get me at dFletcher@MADFullStack.com</p>
      <p>
        <a href="https://www.whatmotivateslearning.com" target="_blank" rel="noreferrer">
          Here
        </a>{" "}
        is a good example of my work.
      </p>
    </Layout>
  )
}

export default ContactPage
