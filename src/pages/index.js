// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layoutc from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (

      <Layoutc pageTitle="Home Page">
      <h1>Welcome to my Gatsby site!</h1>
    
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/doggy.png"
      />

{/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/banner.png"
      /> */}

      
      
      </Layoutc>
   
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page Seo"/>

// Step 3: Export your component
export default IndexPage