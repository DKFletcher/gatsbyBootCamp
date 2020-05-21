import React from 'react'
import {Link} from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
const IndexPage = () => {
  return (
    <div>
      <Header/>
      <h2>Hi I'm Donald</h2>
      <h2>I am a full stack developer.</h2>
      <h3>I live in Glasgow</h3>
      <p>
        Need a developer? <Link to={"./contact"}>Contact me</Link>
      </p>
      <Footer/>
    </div>
  )
}

export default IndexPage