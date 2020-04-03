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

const normalizeWinnerNode = (node) => ({
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

const normalizeCollegeWinnerNode = (node) => ({
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

  const processPaginatedCollection = ({ collection, name, pageSize = 8 }) => {
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

  /***
   * Create paginated collections for each category.
   */

  const queryResult = await graphql(`
    query {
      allAirtableWinner {
        nodes {
          recordId
          fields {
            url
          }
          data {
            name
            award
            tags
            agency {
              id
            }
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
      allAirtableCollegeWinner {
        nodes {
          recordId
          fields {
            url
          }
          data {
            name
            award
            entrant_name
            school
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
  const winnerNodes = queryResult.data.allAirtableWinner.nodes
  const collegeWinnerNodes = queryResult.data.allAirtableCollegeWinner.nodes

  processPaginatedCollection({
    collection: winnerNodes.map(normalizeWinnerNode),
    name: 'winners',
    createNode,
    createNodeId,
    createContentDigest,
    getNode,
  })

  processPaginatedCollection({
    collection: collegeWinnerNodes.map(normalizeCollegeWinnerNode),
    name: 'collegeWinners',
    createNode,
    createNodeId,
    createContentDigest,
    getNode,
  })

  const winnerNodesByCategory = winnerNodes.reduce((acc, curr) => {
    const category = curr.data.category[0]
    const line1 = category.data.line_1
    acc[line1] = [...(acc[line1] || []), curr]
    return acc
  }, {})

  for (const category in winnerNodesByCategory) {
    const collection = winnerNodesByCategory[category].map(normalizeWinnerNode)
    if (collection.length < 1) continue
    processPaginatedCollection({ collection, name: `winners/${category}` })
  }

  const winnerNodesByTag = winnerNodes.reduce((acc, curr) => {
    for (const tag of curr.data.tags) acc[tag] = [...(acc[tag] || []), curr]
    return acc
  }, {})

  for (const tag in winnerNodesByTag) {
    const collection = winnerNodesByTag[tag].map(normalizeWinnerNode)
    if (collection.length < 1) continue
    processPaginatedCollection({ collection, name: `tags/${tag}` })
  }

  const winnerNodesByAgency = winnerNodes.reduce((acc, curr) => {
    for (const agency of curr.data.agency)
      acc[agency.id] = [...(acc[agency.id] || []), curr]
    return acc
  }, {})

  for (const agency in winnerNodesByAgency) {
    const collection = winnerNodesByAgency[agency].map(normalizeWinnerNode)
    if (collection.length < 1) continue
    processPaginatedCollection({ collection, name: `winners-agency/${agency}` })
  }

  /***
   * Create pages.
   */

  for (let i = 0; i < winnerNodes.length; i++) {
    const node = winnerNodes[i]
    const previousNode = winnerNodes[i - 1]
    const nextNode = winnerNodes[i + 1]
    createPage({
      path: node.fields.url,
      component: path.resolve(__dirname, 'src/templates/winner.tsx'),
      context: {
        recordId: node.recordId,
        previousRecordId: previousNode ? previousNode.recordId : undefined,
        nextRecordId: nextNode ? nextNode.recordId : undefined,
      },
    })
  }

  for (let i = 0; i < collegeWinnerNodes.length; i++) {
    const node = collegeWinnerNodes[i]
    const previousNode = collegeWinnerNodes[i - 1]
    const nextNode = collegeWinnerNodes[i + 1]
    createPage({
      path: node.fields.url,
      component: path.resolve(__dirname, 'src/templates/collegeWinner.tsx'),
      context: {
        recordId: node.recordId,
        previousRecordId: previousNode ? previousNode.recordId : undefined,
        nextRecordId: nextNode ? nextNode.recordId : undefined,
      },
    })
  }

  const agencyNodes = getNodesByType('AirtableAgency')
  for (const node of agencyNodes)
    createPage({
      path: node.fields.url,
      component: path.resolve(__dirname, 'src/templates/agency.tsx'),
      context: {
        recordId: node.recordId,
        paginatedCollectionName: `winners-agency/${node.id}`,
      },
    })

  const tags = winnerNodes.reduce((acc, curr) => {
    for (const tag of curr.data.tags) acc.add(tag)
    return acc
  }, new Set())
  for (const tag of tags)
    createPage({
      path: `/tags/${slug(tag.toLowerCase())}/`,
      component: path.resolve(__dirname, 'src/templates/tag.tsx'),
      context: { paginatedCollectionName: `tags/${tag}` },
    })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  const airtableNodeToSlug = (node) =>
    node.data.name
      ? `${slug(node.data.name.toLowerCase())}-${node.recordId}`
      : node.recordId

  switch (node.internal.type) {
    case 'AirtableAgency': {
      const url = `/agencies/${airtableNodeToSlug(node)}/`
      createNodeField({ node, name: 'url', value: url })
      break
    }

    case 'AirtableWinner': {
      const url = `/winners/${airtableNodeToSlug(node)}/`
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

    case 'AirtableCollegeWinner': {
      const url = `/college/${airtableNodeToSlug(node)}/`
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
