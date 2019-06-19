const { isNil } = require("lodash")

const mapPagesUrls = {
    index: "/",
}
module.exports = {
    siteMetadata: {
        title: `Alkemy, Inc.`,
        description: `Make your next Web Design or Software Development project a success with Alkemy!`,
        author: `@alkemydev`,
        company: `Alkemy, Inc.`,
        address: `9055 Wiles Road`,
        city: `Coral Springs`,
        state: `FL`,
        zip: `33067`,
        phone: `877-4ALKEMY (425-5369)`,
        phoneDial: `8774255369`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-react-helmet`,
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `page`,
                path: `${__dirname}/src/content/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/content/posts/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                publicPath: `${__dirname}/images/`,
            },
        },
        {
            resolve: `gatsby-transformer-json`,
        },
        {
            resolve: `gatsby-transformer-sharp`,
        },
        {
            resolve: `gatsby-plugin-sharp`,
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
                pathToConfigModule: `src/utils/typography.js`,
            },
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
                            aliases: { sh: `bash` },
                        },
                    },
                    {
                        resolve: `gatsby-remark-external-links`,
                        options: {
                            target: `_blank`,
                            rel: `nofollow`,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
        },
        {
            resolve: `gatsby-plugin-eslint`,
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ["develop"],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        {
            resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
            options: {
                // Fields to index
                fields: [`title`, `tags`, `excerpt`],
                // How to resolve each field`s value for a supported node type
                resolvers: {
                    // For any node of type MarkdownRemark, list how to resolve the fields` values
                    MarkdownRemark: {
                        title: node => node.frontmatter.title,
                        tags: node => node.frontmatter.tags,
                        path: node => node.frontmatter.path,
                        excerpt: node => node.frontmatter.excerpt,
                        cover: node => (node, getNode) =>
                            getNode(node.featuredImage___NODE),
                    },
                },
                // // Optional filter to limit indexed nodes
                filter: (node, getNode) => node.frontmatter.tags !== "exempt",
                // For any node of type Asset, this is how BlogPost featuredImage is resolved
                Asset: {
                    fileUrl: node => node.file && node.file.url,
                },
            },
        },
    ],
}
