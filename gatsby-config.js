const dlv = require('dlv')
const slug = require('slug')

require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Entries',
            tableLinks: ['entrant'],
            queryName: 'Entry',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Entrants',
            queryName: 'Entrant',
            separateNodeType: true,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-paginated-collection',
      options: {
        name: 'entries',
        pageSize: 8,
        query: `
          query {
            allAirtableEntry {
              nodes {
                id
                data {
                  name
                }
              }
            }
          }
        `,
        normalizer: ({ data }) =>
          data.allAirtableEntry.nodes.map(node => ({
            id: node.id,
            url: `/entries/${slug(
              (dlv(node, 'data.name') || node.id).toLowerCase(),
            )}/`,
            name: node.data.name,
          })),
      },
    },
    {
      resolve: 'gatsby-plugin-paginated-collection',
      options: {
        name: 'entrants',
        pageSize: 8,
        query: `
          query {
            allAirtableEntrant {
              nodes {
                id
                data {
                  name
                }
              }
            }
          }
        `,
        normalizer: ({ data }) =>
          data.allAirtableEntrant.nodes.map(node => ({
            id: node.id,
            url: `/entrants/${slug(
              (dlv(node, 'data.name') || node.id).toLowerCase(),
            )}/`,
            name: node.data.name,
          })),
      },
    },
  ],
}
