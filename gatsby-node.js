const path = require('path')
const slug = require('slug')
const dlv = require('dlv')
const {
  createPaginatedCollectionNodes,
} = require('gatsby-plugin-paginated-collection')
const {
  writePaginatedCollectionJSONFiles,
} = require('gatsby-paginated-collection-json-files')

const PAGINATED_COLLECTION_DIRECTORY = path.resolve(
  __dirname,
  'public',
  'paginated-collections',
)

const processPaginationCollection = ({
  collection,
  name,
  pageSize = 8,
  createNode,
  createNodeId,
  createContentDigest,
  getNode,
}) => {
  const nodeInput = createPaginatedCollectionNodes({
    collection,
    name,
    pageSize,
    createNode,
    createNodeId,
    createContentDigest,
  })
  const node = getNode(nodeInput.id)

  writePaginatedCollectionJSONFiles({
    node,
    directory: PAGINATED_COLLECTION_DIRECTORY,
    expand: ['collection', 'nextPage'],
    getNode,
  })
}

const normalizeEntryNode = (node) => ({
  url: node.fields.url,
  name: node.data.name,
  award: node.data.award.toLowerCase(),
  category: dlv(node, ['data', 'category', 0, 'data']),
  image: dlv(node, [
    'data',
    'images',
    'localFiles',
    0,
    'childCloudinaryAsset',
    'fluid',
  ]),
})

exports.createPages = async (gatsbyContext) => {
  const {
    actions,
    createNodeId,
    createContentDigest,
    getNode,
    getNodesByType,
    store,
    graphql,
  } = gatsbyContext
  const { createNode, createPage } = actions
  const { program } = store.getState()

  /***
   * Create paginated collections for each category.
   */

  const queryResult = await graphql(`
    query {
      allAirtableEntry {
        nodes {
          fields {
            url
          }
          data {
            name
            award
            category {
              id
              data {
                line_1
                line_2
              }
            }
            images {
              localFiles {
                childCloudinaryAsset {
                  fluid(maxWidth: 800) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  processPaginationCollection({
    collection: queryResult.data.allAirtableEntry.nodes.map(normalizeEntryNode),
    name: 'entries',
    createNode,
    createNodeId,
    createContentDigest,
    getNode,
  })

  const categoryNodes = getNodesByType('AirtableCategory')
  const categoryMap = categoryNodes.reduce((acc, curr) => {
    const line1 = curr.data.line_1
    if (!acc[line1]) acc[line1] = new Set()
    acc[line1].add(curr.id)
    return acc
  }, {})

  for (const category in categoryMap) {
    const collection = queryResult.data.allAirtableEntry.nodes
      .filter(
        (node) =>
          node.data.category.filter((cat) => categoryMap[category].has(cat.id))
            .length > 0,
      )
      .map(normalizeEntryNode)
    if (collection.length < 1) continue

    processPaginationCollection({
      collection,
      name: `entries/${category}`,
      createNode,
      createNodeId,
      createContentDigest,
      getNode,
    })
  }

  /***
   * Create pages.
   */

  const entryNodes = getNodesByType('AirtableEntry')
  for (let i = 0; i < entryNodes.length; i++) {
    const node = entryNodes[i]
    const previousNode = entryNodes[i - 1]
    const nextNode = entryNodes[i + 1]
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
  for (const node of entrantNodes)
    createPage({
      path: node.fields.url,
      component: path.resolve(__dirname, 'src/templates/entrant.tsx'),
      context: { recordId: node.recordId },
    })
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
