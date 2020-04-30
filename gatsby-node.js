const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// to add the slug field on each establishment
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    })

    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(12)}`,
    })
  }
}

// create establishment page based on its slug
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/establishment.js'),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
