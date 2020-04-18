const fs = require('fs')
const path = require('path')
const slug = require('slug')
const dlv = require('dlv')
const kebabCase = require('lodash.kebabcase')
const { buildFluidGatsbyImage2 } = require('gatsby-plugin-imgix')

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
    year: node.data.year,
    nationalWinner: Boolean(node.data.national_winner),
    category: dlv(node, ['data', 'category', 0, 'data']),
    imageFluid: dlv(node, ['fields', 'images', 0, 'fluid']),
    agency: {
      name: dlv(agency, ['data', 'name']),
      url: dlv(agency, ['fields', 'url']),
      avatarFluid: dlv(agency, ['fields', 'avatar', 'fluid']),
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

  const processPaginatedCollection = ({ collection, name, pageSize = 12 }) => {
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

  const yearsResult = await graphql(`
    {
      allAirtableWinner(sort: { fields: data___year, order: DESC }) {
        distinct(field: data___year)
      }
    }
  `)
  const years = yearsResult.data.allAirtableWinner.distinct.sort((a, b) => {
    const numA = Number.parseInt(a)
    const numB = Number.parseInt(b)

    if (numA === numB) return 0
    if (numA < numB) return 1

    return -1
  })

  /***
   * Create paginated collections for each category and year.
   */

  await Promise.all(
    years.map(async year => {
      const queryResult = await graphql(
        `
          query($year: String!) {
            allAirtableWinner(
              filter: { data: { year: { eq: $year } } }
              sort: { fields: [data___category___data___line_1, data___name] }
            ) {
              nodes {
                recordId
                fields {
                  url
                  images {
                    fluid(maxWidth: 500) {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                    }
                  }
                }
                data {
                  name
                  type
                  award
                  year
                  special_award
                  national_winner
                  tags
                  agency {
                    id
                    fields {
                      url
                      avatar {
                        fluid(maxWidth: 80) {
                          aspectRatio
                          base64
                          sizes
                          src
                          srcSet
                        }
                      }
                    }
                    data {
                      name
                    }
                  }
                  category {
                    id
                    data {
                      line_1
                      line_2
                    }
                  }
                }
              }
            }
          }
        `,
        { year },
      )
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
        name: `winners/${year}`,
        createNode,
        createNodeId,
        createContentDigest,
        getNode,
      })

      processPaginatedCollection({
        collection: collegeWinnerNodes.map(normalizeWinnerNode),
        name: `collegeWinners/${year}`,
        createNode,
        createNodeId,
        createContentDigest,
        getNode,
      })

      processPaginatedCollection({
        collection: highSchoolWinnerNodes.map(normalizeWinnerNode),
        name: `highSchoolWinners/${year}`,
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
        const collection = winnerNodesByCategory[category].map(
          normalizeWinnerNode,
        )
        if (collection.length < 1) continue

        processPaginatedCollection({
          collection,
          name: `winners/${year}/${category}`,
        })
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

        processPaginatedCollection({
          collection,
          name: `winners-agency/${agency}`,
        })
      }

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
      for (const node of agencyNodes) {
        createPage({
          path: node.fields.url,
          component: path.resolve(__dirname, 'src/templates/agency.tsx'),
          context: {
            recordId: node.recordId,
            paginatedCollectionName: `winners-agency/${node.id}`,
          },
        })
      }

      const tags = allWinnerNodes.reduce((acc, curr) => {
        for (const tag of curr.data.tags || []) acc.add(tag)

        return acc
      }, new Set())
      for (const tag of tags) {
        createPage({
          path: `/tags/${slug(tag.toLowerCase())}/`,
          component: path.resolve(__dirname, 'src/templates/tag.tsx'),
          context: { paginatedCollectionName: `tags/${tag}` },
        })
      }

      const collectionRegex = new RegExp(`^winners/${year}/`)
      const collections = getNodesByType('PaginatedCollection').filter(node =>
        collectionRegex.test(node.name),
      )

      collections.forEach(c => {
        const splitNames = c.name.split('/')
        const category = splitNames[splitNames.length - 1]
        const categorySlug = kebabCase(category.toLowerCase()).replace(
          'advertising',
          'ad',
        )
        const firstPageId = c.pages[0]

        createPage({
          path: `/winners/${year}/${categorySlug}/`,
          component: path.resolve(__dirname, 'src/templates/winners.tsx'),
          context: {
            year,
            firstPageId,
            collectionRegex: collectionRegex.toString(),
          },
        })
      })

      createPage({
        path: `/winners/${year}/`,
        component: path.resolve(__dirname, 'src/templates/allWinners.tsx'),
        context: {
          year,
          collectionName: `winners/${year}`,
          collectionRegex: collectionRegex.toString(),
        },
      })
    }),
  )

  /**
   * Create root winners page.
   */

  createPage({
    path: `/winners/`,
    component: path.resolve(__dirname, 'src/templates/allWinners.tsx'),
    context: {
      collectionName: `winners/${years[0]}`,
      collectionRegex: `/^winners\/${years[0]}\//`,
      year: years[0],
    },
  })

  /**
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

exports.createSchemaCustomization = gatsbyContext => {
  const { actions } = gatsbyContext
  const { createTypes } = actions

  const types = `
    type AirtableWinnerData {
      year: String
    }
  `

  createTypes(types)
}
