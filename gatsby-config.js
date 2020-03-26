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
        concurrency: 10,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Entries',
            tableLinks: ['entrant'],
            queryName: 'Entry',
            separateNodeType: true,
            mapping: { images: 'fileNode' },
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
        name: 'entries',
        pageSize: 8,
        query: `
          query {
            allAirtableEntry {
              nodes {
                id
                data {
                  name
                  award
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
        `,
        normalizer: ({ data }) =>
          data.allAirtableEntry.nodes.map((node) => ({
            url: `/entries/${slug(
              (dlv(node, 'data.name') || node.id).toLowerCase(),
            )}/`,
            name: node.data.name,
            award: node.data.award.toLowerCase(),
            image: dlv(node, [
              'data',
              'images',
              'localFiles',
              0,
              'childCloudinaryAsset',
              'fluid',
            ]),
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
    {
      resolve: 'gatsby-plugin-paginated-collection',
      options: {
        name: 'entrants',
        pageSize: 12,
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
          data.allAirtableEntrant.nodes.map((node) => ({
            url: `/entrants/${slug(
              (dlv(node, 'data.name') || node.id).toLowerCase(),
            )}/`,
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
