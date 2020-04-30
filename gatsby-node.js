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

const normalizeWinnerNode = node => ({
  url: node.fields.url,
  name: node.data.name,
  award: node.data.award.toLowerCase(),
  year: node.data.year,
  nationalWinner: Boolean(node.data.national_winner),
  category: dlv(node, ['data', 'category', 0, 'data']),
  imageFluid: dlv(node, ['fields', 'featured_image', 'fluid']),
  agencies: dlv(node, ['data', 'agency'], []).map(agency => ({
    name: dlv(agency, ['data', 'name']),
    url: dlv(agency, ['fields', 'url']),
    avatarFluid: dlv(agency, ['fields', 'avatar', 'fluid']),
  })),
})

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
                  featured_image {
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
                  show_with {
                    id
                  }
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
      const allWinnerNodes = queryResult.data.allAirtableWinner.nodes.filter(
        node => !node.data.show_with,
      )

      const winnerNodes = allWinnerNodes.filter(
        node => node.data.type === 'Professional',
      )
      const nationalWinnerNodes = winnerNodes.filter(
        node => node.data.national_winner,
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
        collection: nationalWinnerNodes.map(normalizeWinnerNode),
        name: `winners/${year}/National ADDY Winners`,
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
        const category = dlv(curr, ['data', 'category', 0])
        if (!category) return acc

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
            collectionName: `collegeWinners/${year}`,
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

      const professionalCollectionRegex = new RegExp(`^winners/${year}/`)
      const collegeCollectionRegex = new RegExp(`^collegeWinners/${year}/`)
      const highSchoolCollectionRegex = new RegExp(
        `^highSchoolWinners/${year}/`,
      )

      const collectionMap = {
        professional: {
          regex: professionalCollectionRegex,
          path: `/winners/${year}`,
        },
        college: {
          regex: collegeCollectionRegex,
          path: `/college/${year}`,
        },
        highSchool: {
          regex: highSchoolCollectionRegex,
          path: `/high-school/${year}`,
        },
      }
      const getCollectionInfo = node => {
        if (professionalCollectionRegex.test(node.name))
          return collectionMap.professional
        if (collegeCollectionRegex.test(node.name)) return collectionMap.college
        if (highSchoolCollectionRegex.test(node.name))
          return collectionMap.highSchool

        return null
      }

      const collections = getNodesByType('PaginatedCollection')
      collections.forEach(c => {
        const collectionInfo = getCollectionInfo(c)
        if (!collectionInfo) return

        const splitNames = c.name.split('/')
        const category = splitNames[splitNames.length - 1]
        const categorySlug = kebabCase(category.toLowerCase()).replace(
          'advertising',
          'ad',
        )
        const firstPageId = c.pages[0]
        if (!firstPageId) return

        createPage({
          path: `${collectionInfo.path}/${categorySlug}/`,
          component: path.resolve(__dirname, 'src/templates/winners.tsx'),
          context: {
            year,
            firstPageId,
            collectionRegex: collectionInfo.regex.toString(),
          },
        })
      })

      createPage({
        path: `/winners/${year}/`,
        component: path.resolve(__dirname, 'src/templates/allWinners.tsx'),
        context: {
          year,
          collectionName: `winners/${year}`,
          collectionRegex: professionalCollectionRegex.toString(),
        },
      })
      createPage({
        path: `/college/${year}/`,
        component: path.resolve(__dirname, 'src/templates/allWinners.tsx'),
        context: {
          year,
          collectionName: `collegeWinners/${year}`,
          collectionRegex: collegeCollectionRegex.toString(),
          hideSpecialAwards: false,
        },
      })
      createPage({
        path: `/high-school/${year}/`,
        component: path.resolve(__dirname, 'src/templates/allWinners.tsx'),
        context: {
          year,
          collectionName: `highSchoolWinners/${year}`,
          collectionRegex: highSchoolCollectionRegex.toString(),
          hideSpecialAwards: false,
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
      collectionRegex: new RegExp(`^winners/${years[0]}/`).toString(),
      year: years[0],
    },
  })

  /**
   * Create root college winners.
   */
  createPage({
    path: '/college/',
    component: path.resolve(__dirname, 'src/templates/allWinners.tsx'),
    context: {
      collectionName: `collegeWinners/${years[0]}`,
      collectionRegex: new RegExp(`^collegeWinners/${years[0]}/`).toString(),
      year: years[0],
      hideSpecialAwards: true,
    },
  })

  /**
   * Create root high school winners.
   */
  createPage({
    path: '/high-school/',
    component: path.resolve(__dirname, 'src/templates/allWinners.tsx'),
    context: {
      collectionName: `highSchoolWinners/${years[0]}`,
      collectionRegex: new RegExp(`^highSchool/${years[0]}/`).toString(),
      year: years[0],
      hideSpecialAwards: true,
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

const showWithQueues = new Map()

exports.onCreateNode = gatsbyContext => {
  const { node, actions, getNode } = gatsbyContext
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

      if (showWithQueues.has(node.id)) {
        createNodeField({
          node,
          name: 'children___NODE',
          value: showWithQueues.get(node.id),
        })
        showWithQueues.delete(node.id)
      }

      const showWithNodeId = dlv(node, ['data', 'show_with___NODE'], [])[0]
      if (showWithNodeId && showWithNodeId !== node.id) {
        const showWithNode = getNode(showWithNodeId)

        if (showWithNode) {
          createNodeField({
            node: showWithNode,
            name: 'children___NODE',
            value: [...(showWithNode.fields.children || []), node.id],
          })

          showWithQueues.delete(showWithNodeId)
        } else {
          showWithQueues.set(showWithNodeId, [
            ...(showWithQueues.get(showWithNodeId) || []),
            node.id,
          ])
        }
      }

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

exports.onPostBootstrap = gatsbyContext => {
  const { reporter } = gatsbyContext

  if (showWithQueues.size > 0) {
    reporter.warn(
      `The show_with queue is not empty. This means one or more winners with a show_with value was not assigned to a winner.`,
    )
    console.log(showWithQueues.entries())
  }
}
