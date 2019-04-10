const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
var md = require('markdown-it');
var fa = require('markdown-it-fontawesome');
var shell = require('shelljs');

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
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content/posts` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
  if (node.internal.type === `Json`) {
    const slug = createFilePath({ node, getNode, basePath: `content/pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

const getTemplate = ()=>{
  return path.resolve(`./src/templates/blog-post.js`);
}


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const tagTemplate = path.resolve("src/templates/tags.js");

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fileAbsolutePath
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
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {

        createPage({
          path: node.frontmatter.path,
          component: getTemplate(node.fileAbsolutePath),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
      const posts = result.data.allMarkdownRemark.edges;
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
    });
  });
};
