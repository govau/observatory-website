/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const MDtemplate = path.resolve(`src/components/layouts/md-layout.tsx`);
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { createPage: { eq: true } } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: MDtemplate,
      context: {}, // additional data can be passed via context
    });
  });
};
