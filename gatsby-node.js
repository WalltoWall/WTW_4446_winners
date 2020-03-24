const path = require('path')
const slug = require('slug')

exports.createPages = gatsbyContext => {
  const { actions, getNodesByType } = gatsbyContext
  const { createPage } = actions

  for (const node of getNodesByType('AirtableEntry')) {
    if (!node.data.name) continue
    const nodeSlug = slug(node.data.name.toLowerCase())
    createPage({
      path: `/entries/${nodeSlug}-${node.recordId}/`,
      component: path.resolve(__dirname, 'src/templates/entry.tsx'),
      context: { recordId: node.recordId },
    })
  }

  for (const node of getNodesByType('AirtableEntrant')) {
    if (!node.data.name) continue
    const nodeSlug = slug(node.data.name.toLowerCase())
    createPage({
      path: `/entrants/${nodeSlug}/`,
      component: path.resolve(__dirname, 'src/templates/entrant.tsx'),
      context: { recordId: node.recordId },
    })
  }
}
