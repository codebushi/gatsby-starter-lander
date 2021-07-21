module.exports = {
  siteMetadata: {
    title: `Tanmu Project Management Services`,
    description: `Tanmu Project Management Services and Consultancy in Dubai and the Middle East`,
    author: `@DeviousLab`,
    keywords: `tanmu, project, management, services, engineering, construction, handover, consultant, dubai`
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    'gatsby-plugin-react-helmet',
  ]
};
