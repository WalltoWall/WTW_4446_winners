const dlv = require('dlv')
const slug = require('slug')

require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-svgr',
    'gatsby-plugin-react-helmet-async',
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
            tableName: 'Entries',
            tableLinks: ['entrant', 'category'],
            queryName: 'Entry',
            separateNodeType: true,
            mapping: { images: 'fileNode', credits: 'text/markdown' },
            separateMapType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Entrants',
            queryName: 'Entrant',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Ad People',
            queryName: 'AdPerson',
            separateNodeType: true,
            mapping: { photo: 'fileNode', description: 'text/markdown' },
            separateMapType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Categories',
            queryName: 'Category',
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
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: 'gatsby-cloudinary',
      },
    },
    {
      resolve: 'gatsby-plugin-paginated-collection',
      options: {
        name: 'entrants',
        pageSize: 12,
        query: `
          query {
            allAirtableEntrant {
              nodes {
                fields {
                  url
                }
                data {
                  name
                }
              }
            }
          }
        `,
        normalizer: ({ data }) =>
          data.allAirtableEntrant.nodes.map((node) => ({
            url: node.fields.url,
            name: node.data.name,
          })),
        plugins: [
          {
            resolve: 'gatsby-paginated-collection-json-files',
            options: {
              expand: ['collection', 'nextPage'],
            },
          },
        ],
      },
    },
  ],
}
