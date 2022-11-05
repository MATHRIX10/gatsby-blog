import * as React from 'react'
import { Link } from 'gatsby'
import Layoutc from '../components/Layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
  
        <Layoutc pageTitle="About me">
    
      
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layoutc>
    
  )
}

export const Head = () => <Seo title="about us"/>





export default AboutPage