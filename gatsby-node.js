const path = require('path')
const slug = require('slug')

exports.createPages = (gatsbyContext) => {
  const { actions, getNodesByType } = gatsbyContext
  const { createPage } = actions

  const entryNodes = getNodesByType('AirtableEntry')
  for (let i = 0; i < entryNodes.length; i++) {
    const node = entryNodes[i]
    const previousNode = entryNodes[i - 1]
    const nextNode = entryNodes[i + 1]
    if (!node.data.name) continue
    createPage({
      path: node.fields.url,
      component: path.resolve(__dirname, 'src/templates/entry.tsx'),
      context: {
        recordId: node.recordId,
        previousRecordId: previousNode ? previousNode.recordId : undefined,
        nextRecordId: nextNode ? nextNode.recordId : undefined,
      },
    })
  }

  const entrantNodes = getNodesByType('AirtableEntrant')
  for (let i = 0; i < entrantNodes.length; i++) {
    const node = entrantNodes[i]
    const previousNode = entrantNodes[i - 1]
    const nextNode = entrantNodes[i + 1]
    if (!node.data.name) continue
    createPage({
      path: node.fields.url,
      component: path.resolve(__dirname, 'src/templates/entrant.tsx'),
      context: {
        recordId: node.recordId,
        previousRecordId: previousNode ? previousNode.recordId : undefined,
        nextRecordId: nextNode ? nextNode.recordId : undefined,
      },
    })
  }

  const adPersonNodes = getNodesByType('AirtableAdPerson')
  for (let i = 0; i < adPersonNodes.length; i++) {
    const node = adPersonNodes[i]
    const previousNode = adPersonNodes[i - 1]
    const nextNode = adPersonNodes[i + 1]
    if (!node.data.name) continue
    createPage({
      path: node.fields.url,
      component: path.resolve(__dirname, 'src/templates/person.tsx'),
      context: {
        recordId: node.recordId,
        previousRecordId: previousNode ? previousNode.recordId : undefined,
        nextRecordId: nextNode ? nextNode.recordId : undefined,
      },
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

      const tags = node.data.tags
      createNodeField({
        node,
        name: 'tags',
        value: tags.map((tag) => ({
          tag,
          url: `/tags/${slug(tag.toLowerCase())}/`,
        })),
      })

      break
    }

    case 'AirtableAdPerson': {
      const url = `/ad-people/${airtableNodeToSlug(node)}/`
      createNodeField({ node, name: 'url', value: url })
      break
    }
  }
}
