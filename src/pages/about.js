import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const AboutPage = () => {
  return (
  
        <Layout pageTitle="About me">
    
      
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    
  )
}

export const Head = () => (

<>
<title>About Me and my blog</title>
<meta name="description" content="this is a very fast ssg site"/>
</>

)

export default AboutPage