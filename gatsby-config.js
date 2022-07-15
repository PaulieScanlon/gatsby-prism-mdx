module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [[require('remark-prism'), { transformInlineCode: true }]]
      }
    }
  ]
};
