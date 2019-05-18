/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const _ = require('lodash');
 const { createFilePath } = require(`gatsby-source-filesystem`);
 const path = require("path");
 var md = require('markdown-it');
 var fa = require('markdown-it-fontawesome');
 var shell = require('shelljs');

 let activeEnv =
   process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

 require("dotenv").config({
   path: `.env.${activeEnv}`,
 })

 md().use(fa);

 exports.onPostBootstrap = (pages) => {
   if(!shell.test('-d', 'public/images')){
     shell.mkdir("public/images")
   }else{
     shell.cp("-r", "src/assets/images/*", "public/images")
   }

   if(shell.test('-f', 'src/pages/netlifyneedsthis.html')) shell.cp("-r", "src/pages/netlifyneedsthis.html", "public")
   if(shell.test('-f', 'src/assets/.nojekyll')) shell.cp("-r", "src/assets/.nojekyll", "public")
   if(shell.test('-f', 'src/assets/.gitignore')) shell.cp("-r", "src/assets/.gitignore", "public")
   if(shell.test('-f', 'src/assets/.gitignore')) shell.cp("-r", "src/assets/.well-known", "public")
   shell.continue;
 }

 exports.onCreateNode = ({ node, getNode, actions }) => {
   const { createNodeField } = actions

   if (node.internal.type === `MarkdownRemark`) {
     const value = createFilePath({ node, getNode, basePath: `./src/content/posts` })
     createNodeField({
       node,
       name: `slug`,
       value,
     });
   }
   if (node.internal.type === `Json`) {
     const value = createFilePath({ node, getNode, basePath: `./src/content/pages` })
     createNodeField({
       node,
       name: `slug`,
       value,
     });
   }
 };

 exports.createPages = ({ actions, graphql }) => {
   const { createPage } = actions
   const blogPost = path.resolve("./src/templates/blog-post.js")
   const tagTemplate = path.resolve("./src/templates/tags.js")

   return graphql(`
     {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter{
              path
              date
              title
              tags
              excerpt
              cover
            }
            children {
              id
            }
          }
        }
      }
    }
     `).then(result => {
        if (result.errors) {
          throw result.errors
        }

        const posts = result.data.allMarkdownRemark.edges

        posts.forEach((post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        // Tag pages:
        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags);
          }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        });

        return null
    })
}
