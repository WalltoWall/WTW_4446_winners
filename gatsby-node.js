const path = require('path')
const slug = require('slug')

exports.createPages = (gatsbyContext) => {
  const { actions, getNodesByType } = gatsbyContext
  const { createPage } = actions

  for (const node of getNodesByType('AirtableEntry')) {
    if (!node.data.name) continue
    createPage({
      path: node.fields.url,
      component: path.resolve(__dirname, 'src/templates/entry.tsx'),
      context: { recordId: node.recordId },
    })
  }

  for (const node of getNodesByType('AirtableEntrant')) {
    if (!node.data.name) continue
    createPage({
      path: node.fields.url,
      component: path.resolve(__dirname, 'src/templates/entrant.tsx'),
      context: { recordId: node.recordId },
    })
  }

  for (const node of getNodesByType('AirtableAdPerson')) {
    if (!node.data.name) continue
    createPage({
      path: node.fields.url,
      component: path.resolve(__dirname, 'src/templates/person.tsx'),
      context: { recordId: node.recordId },
    })
  }
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  const airtableNodeToSlug = (node) =>
    node.data.name
      ? `${slug(node.data.name.toLowerCase())}-${node.recordId}`
      : node.recordId

  switch (node.internal.type) {
    case 'AirtableEntrant': {
      const url = `/entrants/${airtableNodeToSlug(node)}/`
      createNodeField({ node, name: 'url', value: url })
      break
    }

    case 'AirtableEntry': {
      const url = `/entries/${airtableNodeToSlug(node)}/`
      createNodeField({ node, name: 'url', value: url })
      break
    }

    case 'AirtableAdPerson': {
      const url = `/ad-people/${airtableNodeToSlug(node)}/`
      createNodeField({ node, name: 'url', value: url })
      break
    }
  }
}
