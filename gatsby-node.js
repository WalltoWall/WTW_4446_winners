const fs = require('fs')
const path = require('path')
const slug = require('slug')
const dlv = require('dlv')
const kebabCase = require('lodash.kebabcase')

const {
  createPaginatedCollectionNodes,
} = require('gatsby-plugin-paginated-collection')
const {
  writePaginatedCollectionJSONFiles,
} = require('gatsby-paginated-collection-json-files')

const PAGINATED_COLLECTION_DIRECTORY = path.resolve(
  __dirname,
  'public',
  '___paginated-collections',
)

const SEARCH_DIRECTORY = path.resolve(__dirname, 'public', '___local-search')

const normalizeWinnerNode = node => {
  const agency = dlv(node, ['data', 'agency', 0])

  return {
    url: node.fields.url,
    name: node.data.name,
    award: node.data.award.toLowerCase(),
    category: dlv(node, ['data', 'category', 0, 'data']),
    imageFluid: dlv(node, [
      'data',
      'images',
      'localFiles',
      0,
      'childCloudinaryAsset',
      'fluid',
    ]),
    agency: {
      name: dlv(agency, ['data', 'name']),
      url: dlv(agency, ['fields', 'url']),
      avatarFluid: dlv(agency, [
        'data',
        'avatar',
        'localFiles',
        0,
        'childCloudinaryAsset',
        'fluid',
      ]),
    },
  }
}

exports.createPages = async gatsbyContext => {
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
      allAirtableWinner(
        sort: { fields: [data___category___data___line_1, data___name] }
      ) {
        nodes {
          recordId
          fields {
            url
          }
          data {
            name
            type
            award
            special_award
            tags
            agency {
              id
              fields {
                url
              }
              data {
                name
                avatar {
                  localFiles {
                    childCloudinaryAsset {
                      fluid(maxWidth: 80) {
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

  const allWinnerNodes = queryResult.data.allAirtableWinner.nodes

  const winnerNodes = allWinnerNodes.filter(
    node => node.data.type === 'Professional',
  )
  const collegeWinnerNodes = allWinnerNodes.filter(
    node => node.data.type === 'College',
  )
  const highSchoolWinnerNodes = allWinnerNodes.filter(
    node => node.data.type === 'High School',
  )

  // Remove Judge's and Best of Show awards since they are statically
  // displayed.
  processPaginatedCollection({
    collection: winnerNodes
      .filter(
        node =>
          !/^(Judge's Award|Best of Show) - /.test(node.data.special_award),
      )
      .map(normalizeWinnerNode),
    name: 'winners',
    createNode,
    createNodeId,
    createContentDigest,
    getNode,
  })

  processPaginatedCollection({
    collection: collegeWinnerNodes.map(normalizeWinnerNode),
    name: 'collegeWinners',
    createNode,
    createNodeId,
    createContentDigest,
    getNode,
  })

  processPaginatedCollection({
    collection: highSchoolWinnerNodes.map(normalizeWinnerNode),
    name: 'highSchoolWinners',
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

  const winnerNodesByTag = allWinnerNodes.reduce((acc, curr) => {
    for (const tag of curr.data.tags || [])
      acc[tag] = [...(acc[tag] || []), curr]
    return acc
  }, {})

  for (const tag in winnerNodesByTag) {
    const collection = winnerNodesByTag[tag].map(normalizeWinnerNode)
    if (collection.length < 1) continue
    processPaginatedCollection({ collection, name: `tags/${tag}` })
  }

  const winnerNodesByAgency = allWinnerNodes.reduce((acc, curr) => {
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

  const winnerPageResult = await graphql(`
    query {
      allPaginatedCollectionPage(
        filter: { collection: { name: { regex: "/^winners//" } } }
      ) {
        nodes {
          collection {
            name
            id
          }
        }
      }
      allAirtableWinner {
        distinct(field: data___year)
      }
    }
  `)
  const collections = winnerPageResult.data.allPaginatedCollectionPage.nodes
  const years = winnerPageResult.data.allAirtableWinner.distinct

  years.forEach(year => {
    collections.forEach(c => {
      const category = c.collection.name.split('/')[1]
      const categoryId = c.collection.id

      createPage({
        path: `/winners/${year}/${kebabCase(category.toLowerCase())}`,
        component: path.resolve(__dirname, 'src/templates/winners.tsx'),
        context: {
          category,
          categoryId,
          year,
        },
      })
    })
  })

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
      component: path.resolve(__dirname, 'src/templates/winner.tsx'),
      context: {
        recordId: node.recordId,
        previousRecordId: previousNode ? previousNode.recordId : undefined,
        nextRecordId: nextNode ? nextNode.recordId : undefined,
      },
    })
  }

  for (let i = 0; i < highSchoolWinnerNodes.length; i++) {
    const node = highSchoolWinnerNodes[i]
    const previousNode = highSchoolWinnerNodes[i - 1]
    const nextNode = highSchoolWinnerNodes[i + 1]
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

  const tags = allWinnerNodes.reduce((acc, curr) => {
    for (const tag of curr.data.tags || []) acc.add(tag)
    return acc
  }, new Set())
  for (const tag of tags)
    createPage({
      path: `/tags/${slug(tag.toLowerCase())}/`,
      component: path.resolve(__dirname, 'src/templates/tag.tsx'),
      context: { paginatedCollectionName: `tags/${tag}` },
    })

  /***
   * Write search indexes.
   */

  const searchQueryResult = await graphql(`
    query {
      localSearchWinners {
        index
        store
      }
    }
  `)

  const { localSearchWinners } = searchQueryResult.data

  fs.mkdirSync(SEARCH_DIRECTORY, { recursive: true })

  fs.writeFileSync(
    path.resolve(SEARCH_DIRECTORY, 'winners.index.json'),
    localSearchWinners.index,
  )
  fs.writeFileSync(
    path.resolve(SEARCH_DIRECTORY, 'winners.store.json'),
    localSearchWinners.store,
  )
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  const airtableNodeToSlug = (node, withRecordIdSuffix = true) =>
    node.data.name
      ? [
          slug(node.data.name.toLowerCase()),
          withRecordIdSuffix ? node.recordId : false,
        ]
          .filter(Boolean)
          .join('-')
      : node.recordId

  switch (node.internal.type) {
    case 'AirtableAgency': {
      const url = `/agencies/${airtableNodeToSlug(node, false)}/`
      createNodeField({ node, name: 'url', value: url })
      break
    }

    case 'AirtableWinner': {
      const url = `/winners/${airtableNodeToSlug(node)}/`
      createNodeField({ node, name: 'url', value: url })

      const tags = node.data.tags || []
      createNodeField({
        node,
        name: 'tags',
        value: tags.map(tag => ({
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
