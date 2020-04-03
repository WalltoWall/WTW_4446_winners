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
  ],
}
