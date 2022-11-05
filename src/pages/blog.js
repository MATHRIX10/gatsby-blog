import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { useStaticQuery,graphql } from 'gatsby'

const BlogPage = ({data}) => {
const names = data.allFile.nodes

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
            names.map(node=>(
                <li key = {node.name}>{node.name}</li>
            ))
        }
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />
export const query = graphql`
query {
    allFile {
      nodes {
        name
      }
    }
  }
  
`


export default BlogPage



