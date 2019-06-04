module.exports = {
  siteMetadata: {
    title: `Alkemy, Inc.`,
    description: `Make your next Web Design or Software Development project a success with Alkemy!`,
    author: `@alkemydev`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page`,
        path: `${__dirname}/src/content/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        publicPath: `${__dirname}/images/`
      },
    },
    {
      resolve: `gatsby-transformer-json`
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-plugin-sharp`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alkemy, Inc.`,
        short_name: `alkemyinc`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2bb3e5`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicons/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: `language-`,
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: { sh: `bash` }
            }
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow`
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-offline`
    }
  ]
}
