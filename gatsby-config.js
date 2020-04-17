const dlv = require('dlv')
const slug = require('slug')

require('dotenv').config()
module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-svgr',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-paginated-collection',
    'gatsby-plugin-imgix',
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
        concurrency: 10,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Winners',
            tableLinks: ['agency', 'category'],
            queryName: 'Winner',
            separateNodeType: true,
            mapping: { credits: 'text/markdown' },
            separateMapType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Agencies',
            queryName: 'Agency',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Ad People',
            tableLinks: ['agency'],
            queryName: 'AdPerson',
            separateNodeType: true,
            mapping: { description: 'text/markdown' },
            separateMapType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Categories',
            queryName: 'Category',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Text Fields',
            queryName: 'TextField',
            mapping: { rich_text: 'text/markdown' },
            separateNodeType: true,
            separateMapType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Image Fields',
            queryName: 'ImageField',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Links',
            queryName: 'Link',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Archive',
            queryName: 'Archive',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Sponsors',
            queryName: 'Sponsors',
            separateNodeType: true,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-breaks'],
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'winners',
        engine: 'lunr',
        query: `
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
                  category {
                    data {
                      line_1
                    }
                  }
                  agency {
                    fields {
                      url
                    }
                    data {
                      name
                      avatar {
                        fluid(maxWidth: 80) {
                          aspectRatio
                          sizes
                          src
                          srcSet
                        }
                      }
                    }
                  }
                  images {
                    fluid(maxWidth: 500) {
                      aspectRatio
                      sizes
                      src
                      srcSet
                    }
                  }
                }
              }
            }
          }
        `,
        index: ['name', 'tags', 'agencyName'],
        store: [
          'url',
          'name',
          'award',
          'categoryLine1',
          'agencyName',
          'agencyUrl',
          'agencyAvatarFluid',
          'imageFluid',
        ],
        normalizer: ({ data }) =>
          data.allAirtableWinner.nodes.map(node => ({
            id: node.recordId,
            url: dlv(node, ['fields', 'url']),
            name: dlv(node, ['data', 'name']),
            award: dlv(node, ['data', 'award']),
            tags: (dlv(node, ['data', 'tags']) || []).join(' '),
            categoryLine1: dlv(node, ['data', 'category', 0, 'data', 'line_1']),
            agencyName: dlv(node, ['data', 'agency', 0, 'data', 'name']),
            agencyUrl: dlv(node, ['data', 'agency', 0, 'fields', 'url']),
            agencyAvatarFluid: dlv(node, [
              'data',
              'agency',
              0,
              'data',
              'avatar',
              0,
              'fluid',
            ]),
            imageFluid: dlv(node, ['data', 'images', 0, 'fluid']),
          })),
      },
    },
  ],
}
