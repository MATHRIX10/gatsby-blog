module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title:"my first blog",
    description:"this is an amzing blog about mathematics"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-graphviz`, // graphviz before prismjs
          `gatsby-remark-prismjs`,
          `gatsby-remark-katex`,
        ],
      },
    },












    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
        ],
        extensions: [".mdx", ".md"],
      },
    },
  ],
}
