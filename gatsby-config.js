module.exports = {
  siteMetadata: {
    title: 'Alkemy, Inc. | Web Design, Development, eCommerce, and Marketing',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prettier`,
            options: {
              usePrettierrc: true,
              prettierOptions: {}
            },
          },
          `gatsby-remark-prismjs`,
        ],
      }
    },
    'gatsby-plugin-offline',

  ],
}
