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
  ],
}
