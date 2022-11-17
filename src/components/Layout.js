import * as React from 'react'
import { Link,useStaticQuery,graphql } from 'gatsby'
import * as styles from './layout.module.css'



const LayoutComp = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const {title} = data.site.siteMetadata;
  return (
    <div className={styles.container}>
      
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}><Link to="/" className={styles.navLinkText}>Home</Link></li>
          <li className={styles.navLinkItem}><Link to="/about" className={styles.navLinkText}>About</Link></li>
          <li className={styles.navLinkItem}><Link to="/blog" className={styles.navLinkText}>Blog</Link></li>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.heading}>{pageTitle}</h1>
        {children}
      </main>

    </div>
  )
}

export default LayoutComp