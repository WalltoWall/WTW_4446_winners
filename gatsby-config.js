const dlv = require('dlv')
const slug = require('slug')

require('dotenv').config()
module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-svgr',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-paginated-collection',
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
            mapping: { images: 'fileNode', credits: 'text/markdown' },
            separateMapType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Agencies',
            queryName: 'Agency',
            separateNodeType: true,
            mapping: { avatar: 'fileNode' },
            separateMapType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Ad People',
            tableLinks: ['agency'],
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
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Text Fields',
            queryName: 'TextField',
            mapping: { rich_text: 'text/markdown' },
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Image Fields',
            queryName: 'ImageField',
            mapping: { image: 'fileNode' },
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Links',
            queryName: 'Link',
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
                        localFiles {
                          childCloudinaryAsset {
                            fluid(maxWidth: 80) {
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
                  images {
                    localFiles {
                      childCloudinaryAsset {
                        fluid(maxWidth: 800) {
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
            }
          }
        `,
        index: ['name', 'tags'],
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
              'localFiles',
              0,
              'childCloudinaryAsset',
              'fluid',
            ]),
            imageFluid: dlv(node, [
              'data',
              'images',
              'localFiles',
              0,
              'childCloudinaryAsset',
              'fluid',
            ]),
          })),
      },
    },
  ],
}
