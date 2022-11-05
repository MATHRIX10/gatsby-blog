import * as React from 'react'
import Layoutc from '../components/Layout'
import Seo from '../components/seo'
import { useStaticQuery,graphql } from 'gatsby'
import 'katex/dist/katex.min.css'

const BlogPage = ({data}) => {

const html = data.allMarkdownRemark.nodes[0].html

  return (
    <Layoutc pageTitle="My Blog Posts">
    
    <div  dangerouslySetInnerHTML={{ __html: html }} />
    </Layoutc>
  )
}

export const Head = () => <Seo title="My Blog Posts" />
// export const query = graphql`
// query {
//     allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//       nodes {
//         frontmatter {
//           date(formatString: "MMMM D, YYYY")
//           title
//         }
//         id
//         excerpt
//       }
//     }
//   }
  
// `

export const query = graphql`
    query {
    allMarkdownRemark {
      nodes {
        html
      }
    }
  }
  
`
export default BlogPage



