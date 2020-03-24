require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
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
  ],
}
