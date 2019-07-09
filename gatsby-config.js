const { isNil } = require(`lodash`)

const mapPagesUrls = {
    index: `/`,
}

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.alkemyinc.com`,
        title: `Alkemy, Inc.`,
        description: `Make your next Web Development, Design, eCommerce, or Marketing project a success with Alkemy. Well Crafted, Pixel Perfect, Conversion Optimized Results.`,
        keywords: `
            Web Design Company, 
            Web Design and Development, 
            custom software development company, 
            Wordpress website design,
            web design agency,
            responsive web design,
            Web Development Company, 
            Digital Marketing Agency, 
            Digital Marketing services, 
            Best Website Design,
            web application development
            `,
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
                name: `author`,
                path: `${__dirname}/src/content/authors/`,
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
            resolve: `gatsby-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1035,
                            sizeByPixelDensity: true,
                            showCaptions: true,
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: `language-`,
                            inlineCodeMarker: null,
                            aliases: {},
                        },
                    },
                    {
                        resolve: `gatsby-remark-external-links`,
                        options: {
                            target: null,
                            rel: `nofollow noopener noreferrer external`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-slug`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Alkemy, Inc.`,
                short_name: `alkemyinc`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#2bb3e5`,
                description: `Make your next Web Development, Design, eCommerce, or Marketing project a success with Alkemy. Well Crafted, Pixel Perfect, Conversion Optimized Results.`,
                lang: `en`,
                display: `standalone`,
                icon: `src/assets/images/favicons/favicon-32x32.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                sitemapSize: 5000,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
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
                stages: [`develop`],
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
                    Mdx: {
                        title: node => node.frontmatter.title,
                        tags: node => node.frontmatter.tags,
                        path: node => node.frontmatter.path,
                        excerpt: node => node.frontmatter.excerpt,
                        cover: node => (node, getNode) =>
                            getNode(node.featuredImage___NODE),
                    },
                },
                // // Optional filter to limit indexed nodes
                filter: (node, getNode) => node.frontmatter.tags !== `exempt`,
                // For any node of type Asset, this is how BlogPost featuredImage is resolved
                Asset: {
                    fileUrl: node => node.file && node.file.url,
                },
            },
        },
    ],
}
