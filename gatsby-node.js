/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const pageData = [
  {
    query: `  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }`,
    layout: "src/components/layouts/blog-layout.tsx",
  },
  {
    query: `{
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "standard"}}}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }`,
    layout: "src/components/layouts/content-layout.tsx",
  },
];
exports.createPages = async ({ actions, graphql, reporter }) => {
  for (const page of pageData) {
    const { createPage } = actions;
    const MDtemplate = path.resolve(page.layout);
    const result = await graphql(page.query);
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
  }
};
