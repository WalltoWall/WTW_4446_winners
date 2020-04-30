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

const WINNERS_QUERY = `
  query {
    allAirtableWinner(
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
`

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

const createPaginatedCollection = ({
  collection,
  name,
  pageSize = 12,
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

  return node
}

const createCollectionsAndPagesForWinners = ({
  winners,
  name,
  year,
  type,
  pathPrefix,
  pageSize = 12,
  createNode,
  createNodeId,
  createContentDigest,
  createPage,
  getNode,
}) => {
  /**
   * Create all winners collection. Filter out judges awards since they are
   * shown statically.
   */
  createPaginatedCollection({
    collection: winners
      .filter(
        node =>
          !/^(Judge's Award|Best of Show) - /.test(node.data.special_award),
      )
      .map(normalizeWinnerNode),
    name: `${name}/${year}`,
    createNode,
    createNodeId,
    createContentDigest,
    getNode,
  })

  createPage({
    path: `/${pathPrefix}/${year}/`,
    component: path.resolve(__dirname, 'src/templates/allWinners.tsx'),
    context: {
      year,
      collectionName: `${name}/${year}`,
      collectionRegex: `/^${name}/${year}//`,
      pathPrefix,
      type,
    },
  })

  /**
   * Create pages for each winner.
   */
  for (let i = 0; i < winners.length; i++) {
    const node = winners[i]
    const previousNode = winners[i - 1]
    const nextNode = winners[i + 1]

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

  /**
   * Create national winners collection and page.
   */
  const nationalCollectionNode = createPaginatedCollection({
    collection: winners
      .filter(node => node.data.national_winner)
      .map(normalizeWinnerNode),
    name: `${name}/${year}/National ADDY Winners`,
    createNode,
    createNodeId,
    createContentDigest,
    getNode,
  })

  createPage({
    path: `${pathPrefix}/${year}/national-addy-winners/`,
    component: path.resolve(__dirname, 'src/templates/winners.tsx'),
    context: {
      year,
      firstPageId: nationalCollectionNode.pages[0],
      collectionRegex: `/^${name}/${year}//`,
      pathPrefix,
      type,
    },
  })

  /**
   * Create collections and pages for each category.
   */
  const winnersByCategory = winners.reduce((acc, curr) => {
    const category = dlv(curr, ['data', 'category', 0])
    if (!category) return acc

    const line1 = category.data.line_1
    acc[line1] = [...(acc[line1] || []), curr]

    return acc
  }, {})

  for (const category in winnersByCategory) {
    const collection = winnersByCategory[category].map(normalizeWinnerNode)
    if (collection.length < 1) continue

    const node = createPaginatedCollection({
      collection,
      name: `${name}/${year}/${category}`,
      createNode,
      createNodeId,
      createContentDigest,
      getNode,
    })

    const categorySlug = slug(category.toLowerCase()).replace(
      'advertising',
      'ad',
    )

    createPage({
      path: `${pathPrefix}/${year}/${categorySlug}/`,
      component: path.resolve(__dirname, 'src/templates/winners.tsx'),
      context: {
        year,
        firstPageId: node.pages[0],
        collectionRegex: `/^${name}/${year}//`,
        pathPrefix,
        type,
      },
    })
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

  const yearsResult = await graphql(`
    {
      allAirtableWinner(sort: { fields: data___year, order: DESC }) {
        distinct(field: data___year)
      }
    }
  `)
  const years = yearsResult.data.allAirtableWinner.distinct.sort(
    (a, b) => Number.parseInt(b) - Number.parseInt(a),
  )
  const queryResult = await graphql(WINNERS_QUERY)
  const winnersAllYears = queryResult.data.allAirtableWinner.nodes.filter(
    node => !node.data.show_with,
  )

  /***
   * Create paginated collections for each category and year.
   */
  for (const year of years) {
    // Remove winners that have been grouped with `show_with`.
    const winners = winnersAllYears.filter(winner => winner.data.year === year)

    const professionalWinners = winners.filter(
      node => node.data.type === 'Professional',
    )
    const collegeWinners = winners.filter(node => node.data.type === 'College')
    const highSchoolWinners = winners.filter(
      node => node.data.type === 'High School',
    )

    createCollectionsAndPagesForWinners({
      winners: professionalWinners,
      name: 'winners',
      pathPrefix: 'winners',
      type: 'professional',
      year,
      createNode,
      createNodeId,
      createContentDigest,
      createPage,
      getNode,
    })

    createCollectionsAndPagesForWinners({
      winners: collegeWinners,
      name: 'collegeWinners',
      pathPrefix: 'college',
      type: 'college',
      year,
      createNode,
      createNodeId,
      createContentDigest,
      createPage,
      getNode,
    })

    createCollectionsAndPagesForWinners({
      winners: highSchoolWinners,
      name: 'highSchoolWinners',
      pathPrefix: 'high-school',
      type: 'high school',
      year,
      createNode,
      createNodeId,
      createContentDigest,
      createPage,
      getNode,
    })
  }

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
      pathPrefix: 'winners',
      type: 'professional',
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
      pathPrefix: 'college',
      type: 'college',
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
      collectionRegex: new RegExp(`^highSchoolWinners/${years[0]}/`).toString(),
      year: years[0],
      hideSpecialAwards: true,
      pathPrefix: 'high-school',
      type: 'high school',
    },
  })

  /**
   * Create pages for each tag.
   */
  const winnerNodesByTag = winnersAllYears.reduce((acc, curr) => {
    for (const tag of curr.data.tags || [])
      acc[tag] = [...(acc[tag] || []), curr]

    return acc
  }, {})

  for (const tag in winnerNodesByTag) {
    const collection = winnerNodesByTag[tag].map(normalizeWinnerNode)
    if (collection.length < 1) continue

    createPaginatedCollection({
      collection,
      name: `tags/${tag}`,
      createNode,
      createNodeId,
      createContentDigest,
      getNode,
    })
  }

  const tags = winnersAllYears.reduce((acc, curr) => {
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

  /**
   * Create pages for each agency.
   */
  const winnerNodesByAgency = winnersAllYears.reduce((acc, curr) => {
    for (const agency of curr.data.agency || [])
      acc[agency.id] = [...(acc[agency.id] || []), curr]

    return acc
  }, {})

  for (const agency in winnerNodesByAgency) {
    const collection = winnerNodesByAgency[agency].map(normalizeWinnerNode)
    if (collection.length < 1) continue

    createPaginatedCollection({
      collection,
      name: `winners-agency/${agency}`,
      createNode,
      createNodeId,
      createContentDigest,
      getNode,
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
